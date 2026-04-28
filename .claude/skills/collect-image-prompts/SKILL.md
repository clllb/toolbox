---
name: collect-image-prompts
description: |
  收录 GPT Image 2 提示词到项目 prompt library。当用户提供 GitHub URL 要求收录、采集、收集
  提示词、prompt、案例时触发此 skill。也适用于用户说"帮我收录"、"从 XX 采集提示词"、
  "继续收录"、"看看有没有新的提示词"等场景。
---

# 收录 GPT Image 2 提示词

从用户提供的 GitHub Markdown URL 中批量采集 GPT Image 2 图片生成提示词，经过数据清洗、翻译补充、标签对齐后，生成可直接写入项目的 TypeScript 代码。

## 核心数据模型

每条收录的提示词对应 `docs/AI/prompts/image/data.ts` 中的 `PromptLibraryItem`：

```typescript
{
  id: string           // 描述性 slug，如 'gpt-image-2-xxx-yyy'
  model: 'gpt-image-2'
  title: string        // 中文短标题
  images: string[]     // 图片路径，如 ['/ai/prompts/33.webp']
  promptEn: string     // 英文提示词
  promptZh: string     // 中文提示词
  tags: string[]       // 2-3 个标签，从 PROMPT_TAGS 中选择
  sourceTitle: string  // 来源标题
  sourceUrl: string    // 来源链接
  sourceDate: string   // YYYY-MM-DD
}
```

## 标签体系

全量标签（用于顶部筛选和卡片展示）：`摄影` `人像` `海报` `漫画` `信息图` `品牌` `教育` `创意` `界面` `产品` `纪实` `角色` `版式` `广告` `多语言` `胶片` `超现实` `艺术` `复古`

每条案例保持 2-3 个标签，从上述标签中选择。遇到新分类可以建议新增标签，但要先向用户确认，并同步添加到 `data.ts` 的 `PROMPT_TAGS` 数组中。

## 收录流程

### Phase 1: 获取与解析

1. 用 webReader 工具抓取用户提供的 GitHub Markdown URL 内容
2. 解析出所有提示词案例，提取：图片 URL、提示词文本（中文/英文）、标题、描述性标签
3. 读取收录记录文件 `docs/AI/prompts/.collected.json`，跳过已收录的案例
4. 读取 `docs/AI/prompts/image/data.ts`，加载现有提示词用于去重

### Phase 2: 数据清洗

对每条候选案例执行以下检查，**不通过的直接跳过并记录原因**：

| 规则 | 说明 |
|------|------|
| 长度过滤 | 提示词少于 30 个中文字符（纯英文按词数 x2 折算）则不收录 |
| 相似度去重 | 与现有提示词（promptZh + promptEn）做文本比对，相似度 >90% 不收录 |
| 已收录跳过 | URL 或 prompt 文本已在 `.collected.json` 中记录的跳过 |
| 已拒绝跳过 | sourceUrl 在 `.collected.json` 的 `rejected` 数组中的直接跳过，不再展示给用户 |

相似度计算方法：将两条提示词都转小写、去除标点和空白后，用最长公共子序列比率来衡量。实现时用简单的字符级比对即可，不需要引入外部库。

### Phase 3: 翻译补充

- 如果只有中文提示词 → 补充英文翻译
- 如果只有英文提示词 → 补充中文翻译
- 翻译应保持提示词的风格和技术准确性，不是直译

### Phase 4: 标签审核

- 根据提示词内容和图片描述，分配 2-3 个合适的标签
- 至少 1 个必须是主标签
- 如果来源已有标签，检查是否需要映射到现有标签体系
- 如果内容明显不属于任何现有主标签，建议新增并说明理由，等用户确认

### Phase 5: 图片预下载到临时目录

1. 从来源（URL 或本地路径）下载图片到临时预览目录 `docs/public/ai/prompts/_preview/`
2. 文件名格式：`序号-中文案例名.jpg`（如 `01-穷奇东方美学海报.jpg`），方便用户直接在编辑器中点开查看
3. 先不转 webp，保留原图格式以加快预览速度
4. 如果图片下载失败，记录错误但仍然收录提示词（图片留空数组），后续可以补充

### Phase 6: 批量展示与确认

清洗和补充完成后，**每次展示 10 条候选案例**给用户。

关键：用户需要先看完预览图片再决定是否收录。展示时用中文案例名标注，让用户能对应 `_preview/` 目录中的图片文件。

展示格式：

```
## 第 N 批（共 M 条候选）

以下图片已放入 `docs/public/ai/prompts/_preview/` 目录，请查看后确认。

| # | 文件名 | 案例名 | 标签 | 来源 |
|---|--------|--------|------|------|
| 1 | 01-穷奇东方美学海报.jpg | 穷奇东方美学海报 | [海报, 艺术] | @liyue_ai |
| 2 | ... | ... | ... | ... |
```

同时列出被过滤掉的案例及原因：
```
## 过滤掉的案例
- "XXX" → 原因: 与现有提示词相似度 95%
- "YYY" → 原因: 提示词仅 18 个字符
```

**等待用户确认**。用户可以：
- 确认全部收录
- 指定不要的条目编号
- 修改标签、标题、翻译等
- 要求调整

**用户拒绝的条目**：将 rejected 条目的 sourceUrl 写入 `.collected.json` 的 `rejected` 数组。下次收录时自动跳过，不再展示给用户确认。

### Phase 7: 生成代码与写入（安全插入）

用户确认后：

#### 7.1 图片处理

1. 将预览目录中确认的图片用 `cwebp` 转为 webp，移入 `docs/public/ai/prompts/` 正式目录
   - 文件名使用自增编号：读取目录下现有最大编号，从 max+1 开始递增
   - 图片路径记录为 `/ai/prompts/<编号>.webp`
2. 清理 `_preview/` 临时目录（删除已处理和被拒绝的预览图）

#### 7.2 代码插入（必须使用 Python 脚本）

**禁止直接用 Edit 工具修改 data.ts 插入多条记录**。必须使用 Python 脚本进行安全插入，避免手动转义导致语法错误。

Python 脚本模板（通过 `python3 -c "..."` 内联执行）：

```python
import sys

DATA_TS = "/Users/clb/Desktop/project/toolbox-main/docs/AI/prompts/image/data.ts"

def escape_for_ts(s):
    """转义字符串用于 JS 单引号字符串字面量"""
    return (
        s.replace("\\", "\\\\")
         .replace("'", "\\'")
         .replace("\n", "\\n")
    )

def make_entry(e):
    lines = []
    lines.append("  {")
    lines.append(f"    id: '{escape_for_ts(e['id'])}',")
    lines.append(f"    model: 'gpt-image-2',")
    lines.append(f"    title: '{escape_for_ts(e['title'])}',")
    lines.append(f"    images: ['{e['image']}'],")
    lines.append(f"    promptEn: '{escape_for_ts(e['promptEn'])}',")
    lines.append(f"    promptZh: '{escape_for_ts(e['promptZh'])}',")
    lines.append(f"    tags: {e['tags']},")
    lines.append(f"    sourceTitle: '{escape_for_ts(e['sourceTitle'])}',")
    lines.append(f"    sourceUrl: '{e['sourceUrl']}',")
    lines.append(f"    sourceDate: '{e['sourceDate']}',")
    lines.append("  },")
    return "\n".join(lines)

# --- 在这里定义 entries 列表 ---
entries = [
    # {
    #     "id": "...",
    #     "title": "...",
    #     "image": "/ai/prompts/XX.webp",
    #     "tags": ["...", "..."],
    #     "sourceTitle": "@...",
    #     "sourceUrl": "https://x.com/...",
    #     "sourceDate": "2026-XX-XX",
    #     "promptEn": "...",
    #     "promptZh": "...",
    # },
]

with open(DATA_TS, "r", encoding="utf-8") as f:
    content = f.read()

marker = "export const PROMPT_LIBRARY_ITEMS: PromptLibraryItem[] = ["
idx = content.find(marker)
if idx == -1:
    print("ERROR: marker not found in data.ts")
    sys.exit(1)

insert_pos = idx + len(marker)
new_block = "\n" + "\n".join(make_entry(e) for e in entries)
new_content = content[:insert_pos] + new_block + content[insert_pos:]

with open(DATA_TS, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"OK: inserted {len(entries)} entries")
```

新条目插入到 `PROMPT_LIBRARY_ITEMS` 数组**开头**（而非末尾），使新收录的内容展示在前面。

#### 7.3 构建验证（每次插入后必须执行）

**每批次插入 data.ts 后，必须立即运行构建验证，确认代码无语法错误：**

```bash
npx vitepress build docs
```

- 如果构建失败 → 检查 Python 脚本输出的代码，修复问题后重新插入，**不要继续下一批**
- 如果构建成功 → 更新收录记录，清理预览目录，然后才可开始下一批

#### 7.4 更新收录记录

1. 更新 `.collected.json` 的 `collected` 数组，添加新收录条目
2. 更新 `.collected.json` 的 `rejected` 数组，添加用户拒绝的条目
3. 更新 `sources` 中的计数
4. 清理 `_preview/` 临时目录

### Phase 8: 继续收录

如果还有更多候选案例，询问用户是否继续下一批 10 条。如果用户中断，记录文件保存了进度，下次可以断点续录。

## 收录记录文件

路径：`docs/AI/prompts/.collected.json`

```json
{
  "lastUpdated": "2026-04-27",
  "sources": [
    {
      "url": "https://github.com/xxx/yyy",
      "fetchedAt": "2026-04-27",
      "totalFound": 50,
      "totalCollected": 30,
      "totalSkipped": 20,
      "remaining": 0
    }
  ],
  "collected": [
    {
      "id": "gpt-image-2-xxx",
      "promptZh": "中文提示词...",
      "sourceUrl": "https://github.com/xxx",
      "collectedAt": "2026-04-27"
    }
  ],
  "rejected": [
    {
      "sourceUrl": "https://x.com/xxx/status/123",
      "title": "被拒绝的案例名",
      "rejectedAt": "2026-04-27"
    }
  ]
}
```

这个文件用于：
- 去重：避免重复收录相同提示词
- 拒绝记录：用户明确不要的案例不再重复展示
- 断点续录：记录已处理到哪条
- 追溯：知道每条提示词的来源

## ID 生成规则

格式：`gpt-image-2-<关键词1>-<关键词2>`

从提示词内容中提取 2-3 个英文关键词，用短横线连接。确保与现有 ID 不重复。

示例：
- `gpt-image-2-watercolor-cat-portrait`
- `gpt-image-2-retro-movie-poster`
- `gpt-image-2-infographic-dashboard`

## 图片文件命名

读取 `docs/public/ai/prompts/` 目录下现有文件的最大编号，新图片从 max+1 开始递增。统一使用 webp 扩展名。

## 关键提醒

- 一定要等用户确认后才写入代码，不要自作主张
- 翻译质量要高，这是展示给用户看的内容
- 标签要准确，错误分类比没有标签更糟糕
- **每批插入后必须运行 `npx vitepress build docs` 验证，构建失败则立即修复，不继续下一批**
- **必须使用 Python 脚本插入数据，禁止手动编辑 data.ts 插入多条记录**
- 用户拒绝的案例要记录到 `rejected` 数组，下次自动跳过不展示
- 每批处理后都要更新 `.collected.json`，即使中途中断也能恢复
- 如果用户只说了"继续收录"，检查记录文件看是否有未完成的批次

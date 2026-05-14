# Codex AI 日报自动化提示词

用于在 `toolbox-main` 仓库里自动生成某天 AI 日报。默认按 Asia/Shanghai 日期工作；如果我明确给出日期，以我给的日期为准。

## 目标

生成 `docs/AI/daily/cn/YYYY-MM/YYYY-MM-DD.md`，并尽量完成配套缓存、媒体、sidebar、校验与构建。

## 必须遵守

1. 先读取并严格遵循 `~/.codex/skills/toolbox-ai-daily/SKILL.md`。
2. 工作目录固定为：`/Users/clb/Desktop/project/toolbox-main`。
3. 先执行 `git status --short`，不要覆盖或回滚任何与本次任务无关的脏改动。
4. 先执行：

```bash
python3 ~/.codex/skills/toolbox-ai-daily/scripts/generate_daily.py --date YYYY-MM-DD --print-paths
python3 ~/.codex/skills/toolbox-ai-daily/scripts/fetch_ai_sources.py --date YYYY-MM-DD
```

5. 把 `.cache/toolbox-ai-daily/YYYY-MM-DD/sources.json` 视为抓取状态唯一事实来源。
6. 只有当 `ready_to_generate` 为 `true` 时才继续；如果为 `false`，停止生成，不写日报，不更新 sidebar，不跑校验，不跑构建。
7. 若继续生成，必须读取：

```bash
python3 ~/.codex/skills/toolbox-ai-daily/scripts/assemble_daily_context.py --date YYYY-MM-DD
```

并把 `.cache/toolbox-ai-daily/YYYY-MM-DD/daily_context.json` 视为合并与写作唯一输入。

## 单源/双源规则

- 若 `generation_mode` 为 `dual_source`：
  - `HEX2077` 是正文骨架与图文锚点。
  - `AIHOT` 只能补充已有主题或补入缺失主题，不能覆盖 `HEX2077` 的图文配对。
- 若 `generation_mode` 为 `single_source_hex2077`：
  - 仅用 `HEX2077` 生成完整日报。
  - 保留类目、条目顺序、图文配对、具体指标。
- 若 `generation_mode` 为 `single_source_aihot`：
  - 仅用 `AIHOT` 生成完整日报。
  - 仍使用日报模板里的标准分类结构。
  - 不要伪造 `HEX2077` 图片、视频或图文映射。
  - 保留所有具体指标、产品名、模型名、来源链接。

## 写作要求

1. 使用模板：`~/.codex/skills/toolbox-ai-daily/AI日报模版.md`。
2. 文风保持中文 AI 日报风格：简洁、可读、信息密度高、适量 emoji/kaomoji。
3. 不要在正文里写出 `AIHOT`、`HEX2077` 这些源名称。
4. 具体数字必须逐字保留：分数、百分比、金额、星标数量都不能模糊化。
5. `开源与开发者工具` 中的星标统一转成 `🌟` + `k` 单位，数量级不能变。
6. 如果 `HEX2077` 可用，图片/视频必须严格放回原条目下。
7. 如果 `daily_context.json` 里 `added_aihot_entries` 非空，这些条目必须出现在最终日报对应分类下。

## 生成后动作

依次执行：

```bash
python3 ~/.codex/skills/toolbox-ai-daily/scripts/update_sidebar.py --type daily --date YYYY-MM-DD --file <target>
python3 ~/.codex/skills/toolbox-ai-daily/scripts/validate_ai_digest.py --type daily --date YYYY-MM-DD --file <target>
pnpm build
```

如果某一步失败，保留已生成文件，并准确报告失败命令和失败原因。

## 最终汇报格式

最终请只汇报这些内容：

1. 是否成功生成。
2. 生成模式：`dual_source` / `single_source_hex2077` / `single_source_aihot` / `blocked`。
3. 可用源与失败源，以及失败源的精确错误类型。
4. 改动了哪些文件。
5. `git add` 建议范围。
6. 是否通过校验与构建。

不要自动 commit，不要自动 push。

---
title: 更新日志
description: 陈老板的百宝箱更新日志，干就完了！
outline: [2, 3]
---

# 更新日志

这里记录陈老板的百宝箱比较重要的产品、内容、SEO/GEO 和模块级更新。每日 AI 日报、每日黄历文案刷新这类常规内容更新不单独记录。

## 2026-07-08

### SEO/GEO 系统优化

- 统一 AI 内容公开路径为小写 `/ai/`，减少搜索引擎对 `/AI/` 与 `/ai/` 的重复识别。
- 为页面补充 canonical、meta description、Open Graph、Twitter Card 和 JSON-LD 结构化数据。
- 为 AI 日报、AI 周报集合页增加 `CollectionPage` 与 `ItemList` 结构化数据，帮助搜索引擎理解栏目和文章列表关系。
- 新增 `robots.txt`、`llms.txt`、`content-index.json`，增强搜索引擎和 AI 检索系统的内容发现能力。
- 新增 AI 日报/周报索引自动生成流程，输出最新内容、月份归档和结构化数据内容清单。
- 新增构建后 SEO 检查脚本，用于校验 sitemap、canonical、meta description 和 JSON-LD 是否完整。

## 2026-05-25

### 今日顺了吗内容生产工作流升级

- 接入 DeepSeek 生成黄历展示文案，让每日黄历不只是数据，还能有更适合阅读和展示的解释文本。
- 拆分黄历数据与展示文案工作流，降低后续维护和自动化刷新成本。

相关提交：

- `ecde5c3` feat: 接入 DeepSeek 生成黄历展示文案
- `d757411` chore: 拆分黄历数据与展示文案工作流

## 2026-05-20

### 首页与导航突出今日顺了吗

- 将首页和导航里的 AI 周报卡片调整为「今日顺了吗」，让用户更容易看到每日运势与黄历模块。

相关提交：

- `3f85304` feat: replace AI weekly with luck card in nav and homepage

## 2026-05-19

### 今日顺了吗模块上线

- 新增「今日顺了吗」黄历看板。
- 接入黄历数据刷新流程，支持每日展示宜忌、运势和相关参考信息。

相关提交：

- `1593063` feat: add luck dashboard and huangli data refresh

## 2026-05-14

### 首页服务 Banner 上线

- 新增首页服务 Banner，强化站点第一屏对核心模块和服务入口的展示。

相关提交：

- `181e351` feat: add home service banner

## 2026-05-12

### AI 日报升级为 AI 大事件

- 将 AI 日报栏目命名升级为「AI 大事件」。
- 统一 AI 日报模板，让后续内容生成和栏目展示更稳定。

相关提交：

- `753be74` feat: rename AI daily to AI big events
- `5a23000` feat: unify ai daily template and update 2026-05-12 digest

## 2026-05-11

### AI 咨询内容与日报工作流简化

- 新增 AI 咨询类 digest 内容。
- 简化早期 GitHub Actions 工作流，减少日报同步、侧边栏更新和部署流程之间的耦合。
- 修复 2026-05-09 至 2026-05-11 多篇 AI 日报的图文配对和指标缺失问题。

相关提交：

- `a59aaf5` feat: add AI consult digests and simplify workflows
- `ce7cc4a` fix: correct text-image pairings and restore missing metrics in 5.09-5.11 AI dailies

## 2026-04-29

### 赞赏榜与首页行动入口更新

- 更新赞赏榜页面。
- 调整首页 CTA，让站点支持与赞赏入口更清晰。

相关提交：

- `eb58b88` feat: update donation leaderboard and homepage CTA

## 2026-04-27

### AI 提示词库扩展为图片/论文双栏目

- 将提示词库拆分为图片提示词和论文提示词两个子栏目。
- 新增多图轮播、复制按钮、弹窗查看等交互能力。
- 重构提示词库侧边栏和页面结构，为后续持续扩充提示词案例打基础。

相关提交：

- `7fae86f` feat: multi-image carousel, copy button, paper prompt library, and sidebar restructure
- `7d11265` feat: restructure prompts into image/paper subdirectories, add new prompts and fix dialog

## 2026-04-24

### AI 工具与提示词库模块上线

- 重组 AI 工具和 AI 周报相关内容结构。
- 新增 AI 提示词库设计方案、数据过滤逻辑、前端 UI 和站点入口。
- 为提示词库补充 Vitest 测试，开始把这个模块作为长期维护的产品功能来建设。

相关提交：

- `b5d25ec` feat: reorganize AI tools and weekly content structure
- `7afddc2` docs: add AI prompt library design spec
- `f67301f` chore: add vitest support for prompt library
- `07971fd` feat: add prompt library data and filtering
- `75ad194` feat: add prompt library UI
- `b61b0da` feat: wire prompt library into the site

## 2026-03-18

### AI 侧边栏自动化重构

- 重构 VitePress 侧边栏配置。
- 优化 AI 日报与周报的侧边栏更新工作流，让新增内容可以自动进入站点导航。

相关提交：

- `c21b46d` Refactor sidebar configuration for VitePress
- `865f9f5` Refactor sidebar update workflow for clarity and efficiency
- `0008996` Refactor sidebar update logic for AI sections
- `f4c3e27` Refactor AI sidebar update workflow

## 2026-03-15

### AI 内容同步流程成型

- 将中文 AI 日报、AI 周报按月份组织。
- 清理广告内容，统一标题和作者呈现。
- 接入 OSS 同步相关流程，开始形成内容抓取、清洗、发布的自动化链路。

相关提交：

- `b7a98aa` feat: sync CN AI content (cleaned, renamed to 陈老板, organized by month)
- `b01da4e` feat: sync content, add H1 title, clean ads, rename, update sidebar
- `2558545` feat: sync daily & weekly content, process ads and titles
- `2c0892c` 增加同步 oss

## 2026-03-12

### AI 日报自动生成能力上线

- 新增 AI 日报自动生成功能。
- 建立从上游同步中文 AI 日报、AI 周报的早期流程。
- 站点开始从工具导航扩展为「工具 + AI 内容」双主线。

相关提交：

- `2e54c93` feat: 新增 AI 日报自动生成功能
- `0c4a5e9` feat: auto-sync AI Daily & Weekly (CN/EN) from upstream
- `fb8f563` feat: sync CN AI Daily (by month) & Weekly from upstream

## 2026-02-03

### VitePress 站点框架搭建

- 完成 VitePress 配置、主题组件、导航组件、样式体系和部署工作流的主体搭建。
- 引入关于作者、赞赏页、工具导航等基础内容。
- 站点从静态资料集合进入可持续维护的网站形态。

相关提交：

- `8d07019` update files

## 2026-01-29

### Toolbox 初版内容导入

- 导入站点初版文件，包括工具导航、Bug/杂谈、Java 笔记、效率工具、个人介绍等内容。
- 配置 VitePress、Tailwind、部署平台和基础静态资源。

相关提交：

- `7d81577` Add files via upload
- `87594a0` Add files via upload

## 2026-01-16

### 项目创建

- 创建 Toolbox 项目仓库。
- 添加初始 README 和开源许可证。

相关提交：

- `86ddd58` Initial commit

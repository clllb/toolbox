import { describe, expect, it } from 'vitest'

import {
  buildIndexMarkdown,
  createContentEntry,
  getLatestEntries,
} from '../../scripts/seo/generate-indexes.mjs'

describe('AI content index generation', () => {
  it('extracts metadata and fallback summary from an AI daily markdown file', () => {
    const entry = createContentEntry({
      docsRoot: '/repo/docs',
      filePath: '/repo/docs/AI/daily/cn/2026-07/2026-07-08.md',
      source: `---
title: AI大事件 2026/7/8
description: ''
---

## 今日摘要

\`\`\`
OpenAI、Anthropic 和 Google 持续推进智能体工具链。
安全、算力和评测成为今天的核心主题。
\`\`\`
`,
    })

    expect(entry).toEqual({
      date: '2026-07-08',
      title: 'AI大事件 2026/7/8',
      description: 'OpenAI、Anthropic 和 Google 持续推进智能体工具链。安全、算力和评测成为今天的核心主题。',
      url: '/ai/daily/cn/2026-07/2026-07-08.html',
      sourcePath: 'AI/daily/cn/2026-07/2026-07-08.md',
    })
  })

  it('strips inline HTML before using headings as fallback summaries', () => {
    const entry = createContentEntry({
      docsRoot: '/repo/docs',
      filePath: '/repo/docs/AI/weekly/cn/2026-05/2026-05-03-weekly.md',
      source: `
<h1 align="center">2026-05-03 AI资讯</h1>

## 📠 陈老板 AI 深度信号周报

> 本周关键词：算力军备赛 / 智能体经济体 / 开源反攻
`,
    })

    expect(entry.description).toBe('本周关键词：算力军备赛 / 智能体经济体 / 开源反攻')
    expect(entry.description).not.toContain('<h1')
  })

  it('sorts entries newest first and limits latest entries', () => {
    const latest = getLatestEntries(
      [
        { date: '2026-07-06', title: '旧', description: 'old', url: '/old.html', sourcePath: 'old.md' },
        { date: '2026-07-08', title: '新', description: 'new', url: '/new.html', sourcePath: 'new.md' },
        { date: '2026-07-07', title: '中', description: 'mid', url: '/mid.html', sourcePath: 'mid.md' },
      ],
      2
    )

    expect(latest.map((entry) => entry.date)).toEqual(['2026-07-08', '2026-07-07'])
  })

  it('builds an index page with latest updates and archive links', () => {
    const markdown = buildIndexMarkdown({
      title: 'AI大事件',
      description: '每日追踪 AI 模型、产品、研究、开源工具、安全政策和产业动态。',
      intro: '每日获得最新 AI 资讯。',
      latestTitle: '最新 AI 大事件',
      entries: [
        {
          date: '2026-07-08',
          title: 'AI大事件 2026/7/8',
          description: 'OpenAI 与 Claude 更新。',
          url: '/ai/daily/cn/2026-07/2026-07-08.html',
          sourcePath: 'AI/daily/cn/2026-07/2026-07-08.md',
        },
      ],
    })

    expect(markdown).toContain('description: 每日追踪 AI 模型、产品、研究、开源工具、安全政策和产业动态。')
    expect(markdown).toContain('## 最新 AI 大事件')
    expect(markdown).toContain('[AI大事件 2026/7/8](/ai/daily/cn/2026-07/2026-07-08.html)')
    expect(markdown).toContain('## 月份归档')
  })
})

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '../..')
const DOCS_ROOT = resolve(REPO_ROOT, 'docs')

const DAILY_DIR = resolve(DOCS_ROOT, 'AI/daily/cn')
const WEEKLY_DIR = resolve(DOCS_ROOT, 'AI/weekly/cn')
const GENERATED_CONTENT_FILE = resolve(DOCS_ROOT, '.vitepress/configs/generated-content.ts')

function listMarkdownFiles(dir) {
  if (!existsSync(dir)) return []

  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(dir, entry.name)
    if (entry.isDirectory()) return listMarkdownFiles(path)
    return entry.isFile() && entry.name.endsWith('.md') ? [path] : []
  })
}

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}

  return match[1].split('\n').reduce((frontmatter, line) => {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) return frontmatter

    const key = line.slice(0, separatorIndex).trim()
    const rawValue = line.slice(separatorIndex + 1).trim()
    const value = rawValue.replace(/^['"]|['"]$/g, '').trim()
    frontmatter[key] = value
    return frontmatter
  }, {})
}

function stripFrontmatter(source) {
  return source.replace(/^---\n[\s\S]*?\n---/, '')
}

function compactText(value) {
  return value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[*_`>#-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function summarize(source, title) {
  const body = stripFrontmatter(source)
  const fencedBlock = body.match(/```([\s\S]*?)```/)
  if (fencedBlock) {
    const summary = fencedBlock[1]
      .split('\n')
      .map((line) => compactText(line))
      .filter(Boolean)
      .slice(0, 2)
      .join('')

    if (summary) return summary.slice(0, 180)
  }

  const paragraph = body
    .split('\n')
    .map((line) => compactText(line))
    .find((line) => line.length > 20)

  return (paragraph || `${title} - 陈老板的百宝箱 AI 内容更新。`).slice(0, 180)
}

function canonicalUrl(docsRoot, filePath) {
  const relativePath = relative(docsRoot, filePath).replace(/\\/g, '/')
  return `/${relativePath.toLowerCase().replace(/\.md$/, '.html').replace(/\/index\.html$/, '/')}`
}

export function createContentEntry({ docsRoot, filePath, source }) {
  const frontmatter = parseFrontmatter(source)
  const sourcePath = relative(docsRoot, filePath).replace(/\\/g, '/')
  const date = sourcePath.match(/(\d{4}-\d{2}-\d{2})/)?.[1] || ''
  const title = frontmatter.title || frontmatter.linkTitle || date
  const frontmatterDescription = frontmatter.description || ''

  return {
    date,
    title,
    description: frontmatterDescription || summarize(source, title),
    url: canonicalUrl(docsRoot, filePath),
    sourcePath,
  }
}

export function getLatestEntries(entries, limit = 12) {
  return [...entries].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit)
}

function groupByMonth(entries) {
  return [...entries]
    .sort((a, b) => b.date.localeCompare(a.date))
    .reduce((groups, entry) => {
      const month = entry.date.slice(0, 7) || '未归档'
      groups[month] ||= []
      groups[month].push(entry)
      return groups
    }, {})
}

function yamlValue(value) {
  return /[:#\n]/.test(value) ? `'${value.replace(/'/g, "''")}'` : value
}

export function buildIndexMarkdown({ title, description, intro, latestTitle, entries }) {
  const latest = getLatestEntries(entries, 12)
  const archive = groupByMonth(entries)
  const latestItems = latest
    .map(
      (entry) =>
        `- [${entry.title}](${entry.url})\n  ${entry.date} · ${entry.description}`
    )
    .join('\n')
  const archiveSections = Object.entries(archive)
    .map(([month, monthEntries]) => {
      const items = monthEntries
        .map((entry) => `- [${entry.title}](${entry.url})`)
        .join('\n')
      return `### ${month}\n\n${items}`
    })
    .join('\n\n')

  return `---
title: ${title}
description: ${yamlValue(description)}
outline: [2, 3]
---

# ${title}

${intro}

## ${latestTitle}

${latestItems}

## 月份归档

${archiveSections}
`
}

function readEntries(dir) {
  return listMarkdownFiles(dir).map((filePath) =>
    createContentEntry({
      docsRoot: DOCS_ROOT,
      filePath,
      source: readFileSync(filePath, 'utf8'),
    })
  )
}

function writeFileEnsuringDir(filePath, content) {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, content)
}

function writeGeneratedContent(dailyEntries, weeklyEntries) {
  const content = `export type GeneratedContentEntry = {
  date: string
  title: string
  description: string
  url: string
  sourcePath: string
}

export const GENERATED_CONTENT = {
  daily: ${JSON.stringify(getLatestEntries(dailyEntries, 24), null, 2)},
  weekly: ${JSON.stringify(getLatestEntries(weeklyEntries, 24), null, 2)}
} as const satisfies Record<'daily' | 'weekly', readonly GeneratedContentEntry[]>
`

  writeFileEnsuringDir(GENERATED_CONTENT_FILE, content)
}

export function generateIndexes() {
  const dailyEntries = readEntries(DAILY_DIR)
  const weeklyEntries = readEntries(WEEKLY_DIR)

  writeFileEnsuringDir(
    resolve(DOCS_ROOT, 'AI/daily/index.md'),
    buildIndexMarkdown({
      title: 'AI大事件',
      description: '每日追踪 AI 模型、产品、研究、开源工具、安全政策和产业动态。',
      intro: '每日获得最新 AI 资讯，按时间整理模型产品、前沿研究、开源工具、行业政策与安全事件。',
      latestTitle: '最新 AI 大事件',
      entries: dailyEntries,
    })
  )

  writeFileEnsuringDir(
    resolve(DOCS_ROOT, 'AI/weekly/index.md'),
    buildIndexMarkdown({
      title: 'AI周报',
      description: '每周梳理 AI 行业关键信号、模型进展、智能体生态、算力基础设施与安全治理趋势。',
      intro: '每周汇总 AI 行业深度信号，帮助你从每日新闻里抓住更长期的趋势。',
      latestTitle: '最新 AI 周报',
      entries: weeklyEntries,
    })
  )

  writeGeneratedContent(dailyEntries, weeklyEntries)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateIndexes()
}

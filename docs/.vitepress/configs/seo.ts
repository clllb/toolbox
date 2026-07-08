import type { HeadConfig } from 'vitepress'

import { GENERATED_CONTENT } from './generated-content'

const SITE_URL = 'https://toolguide.top'
const SITE_NAME = '陈老板的百宝箱'
const SITE_DESCRIPTION = '好玩、好用、好牛的工具尽在陈老板的百宝箱！'
const SITE_IMAGE = `${SITE_URL}/brown.jpg`

type SeoPageData = {
  title?: string
  relativePath: string
  frontmatter?: Record<string, unknown>
  description?: string
  lastUpdated?: number
}

type SitemapItem = {
  url: string
  [key: string]: unknown
}

type GeneratedCollectionKey = keyof typeof GENERATED_CONTENT

export function normalizeCanonicalPath(relativePath: string): string {
  const normalized = relativePath.replace(/^\/+/, '').replace(/\\/g, '/').toLowerCase()

  if (normalized === 'index.md') {
    return '/'
  }

  if (normalized.endsWith('/index.md')) {
    return `/${normalized.replace(/\/index\.md$/, '/')}`
  }

  return `/${normalized.replace(/\.md$/, '.html')}`
}

function absoluteUrl(relativePath: string): string {
  return `${SITE_URL}${normalizeCanonicalPath(relativePath)}`
}

function getString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function getPageType(relativePath: string): 'home' | 'article' | 'list' | 'tool' | 'page' {
  const path = relativePath.toLowerCase()

  if (path === 'index.md') return 'home'
  if (path.includes('/daily/') || path.includes('/weekly/') || path.includes('/bug/')) return 'article'
  if (path.endsWith('/index.md')) return path.includes('/tools/') || path.includes('/prompts/') ? 'tool' : 'list'

  return 'page'
}

function getCollectionKey(relativePath: string): GeneratedCollectionKey | undefined {
  const path = relativePath.toLowerCase()

  if (path === 'ai/daily/index.md') return 'daily'
  if (path === 'ai/weekly/index.md') return 'weekly'

  return undefined
}

function getPublishedDate(relativePath: string): string | undefined {
  return relativePath.match(/(\d{4}-\d{2}-\d{2})/)?.[1]
}

function getModifiedDate(pageData: SeoPageData): string | undefined {
  if (typeof pageData.lastUpdated !== 'number') return getPublishedDate(pageData.relativePath)

  return new Date(pageData.lastUpdated).toISOString()
}

function getSitemapHints(pathname: string): { changefreq: string; priority: number } {
  if (pathname === '/') {
    return { changefreq: 'weekly', priority: 1 }
  }

  if (pathname === '/ai/daily/') {
    return { changefreq: 'daily', priority: 0.9 }
  }

  if (pathname === '/ai/weekly/') {
    return { changefreq: 'weekly', priority: 0.9 }
  }

  if (
    pathname === '/ai/tools/' ||
    pathname === '/ai/prompts/image/' ||
    pathname === '/ai/prompts/paper/' ||
    pathname === '/nav/' ||
    pathname === '/luck/'
  ) {
    return { changefreq: 'weekly', priority: 0.8 }
  }

  if (pathname.includes('/ai/daily/') || pathname.includes('/ai/weekly/')) {
    return { changefreq: 'weekly', priority: 0.7 }
  }

  return { changefreq: 'monthly', priority: 0.5 }
}

export function getSeoDescription(pageData: SeoPageData): string {
  const frontmatterDescription = getString(pageData.frontmatter?.description)
  if (frontmatterDescription) return frontmatterDescription

  const pageDescription = getString(pageData.description)
  if (pageDescription && pageDescription !== SITE_DESCRIPTION) return pageDescription

  const title = getString(pageData.title) || SITE_NAME
  const path = pageData.relativePath.toLowerCase()

  if (path.includes('/daily/')) {
    return `${title} - 陈老板的百宝箱 AI 大事件日报，追踪模型发布、AI 产品、前沿研究、开源工具、安全政策与行业动态。`
  }

  if (path.includes('/weekly/')) {
    return `${title} - 每周梳理 AI 模型、智能体、算力、开源项目与产业趋势，帮你快速抓住关键信号。`
  }

  if (path.includes('/prompts/') || path.startsWith('ai/prompts/')) {
    return `${title} - 精选 AI 提示词库，收录图片、论文等高质量提示词案例，支持快速查找与复用。`
  }

  if (path.includes('/tools/') || path.startsWith('ai/tools/')) {
    return `${title} - AI 工具手册与每周工具速递，整理值得关注的 AI 产品、使用场景和实操经验。`
  }

  if (path.includes('/nav/') || path.startsWith('nav/')) {
    return `${title} - 精选全网实用工具、开发工具、效率网站与摸鱼资源，帮助你快速找到趁手工具。`
  }

  if (path.includes('/luck/') || path.startsWith('luck/')) {
    return `${title} - 基于传统黄历整理每日宜忌、幸运颜色、出行方向与今日运势参考。`
  }

  return `${title} - ${SITE_DESCRIPTION}`
}

export function createStructuredData(pageData: SeoPageData): Record<string, unknown> {
  const title = getString(pageData.title) || SITE_NAME
  const description = getSeoDescription(pageData)
  const url = absoluteUrl(pageData.relativePath)
  const type = getPageType(pageData.relativePath)
  const collectionKey = getCollectionKey(pageData.relativePath)

  if (type === 'home') {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url,
      description,
      inLanguage: 'zh-CN',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    }
  }

  if (collectionKey) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          name: title,
          description,
          url,
          inLanguage: 'zh-CN',
          isPartOf: {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: SITE_URL,
          },
        },
        {
          '@type': 'ItemList',
          name: `${title}最新内容`,
          itemListElement: GENERATED_CONTENT[collectionKey].slice(0, 12).map((entry, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: entry.title,
            description: entry.description,
            url: `${SITE_URL}${entry.url}`,
          })),
        },
      ],
    }
  }

  if (type === 'article') {
    const publishedDate = getPublishedDate(pageData.relativePath)
    const modifiedDate = getModifiedDate(pageData)

    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      url,
      datePublished: publishedDate,
      dateModified: modifiedDate,
      image: SITE_IMAGE,
      inLanguage: 'zh-CN',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      author: {
        '@type': 'Person',
        name: '陈老板',
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        logo: {
          '@type': 'ImageObject',
          url: SITE_IMAGE,
        },
      },
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': type === 'tool' ? 'CollectionPage' : 'WebPage',
    name: title,
    description,
    url,
    inLanguage: 'zh-CN',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function getSeoHead(context: { pageData: SeoPageData }): HeadConfig[] {
  const { pageData } = context
  const title = getString(pageData.title) || SITE_NAME
  const description = getSeoDescription(pageData)
  const url = absoluteUrl(pageData.relativePath)
  const pageType = getPageType(pageData.relativePath)

  return [
    ['link', { rel: 'canonical', href: url }],
    ['meta', { property: 'og:type', content: pageType === 'article' ? 'article' : 'website' }],
    ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ['meta', { property: 'og:title', content: `${title} | ${SITE_NAME}` }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { property: 'og:image', content: SITE_IMAGE }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: `${title} | ${SITE_NAME}` }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: SITE_IMAGE }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(createStructuredData(pageData))],
  ]
}

export function transformSeoPageData(pageData: SeoPageData): Partial<SeoPageData> {
  return {
    description: getSeoDescription(pageData),
  }
}

export function transformSitemapItems(items: SitemapItem[]): SitemapItem[] {
  const seen = new Set<string>()

  return items.reduce<SitemapItem[]>((result, item) => {
    const isAbsolute = /^https?:\/\//i.test(item.url)
    const url = new URL(item.url, SITE_URL)
    url.pathname = url.pathname.toLowerCase()

    if (
      url.pathname.includes('/superpowers/') ||
      url.pathname === '/public/huangli/data/source-check.html'
    ) {
      return result
    }

    const normalizedUrl = isAbsolute ? url.toString() : `${url.pathname}${url.search}${url.hash}`
    if (seen.has(normalizedUrl)) return result

    seen.add(normalizedUrl)
    result.push({
      ...item,
      url: normalizedUrl,
      ...getSitemapHints(url.pathname),
    })

    return result
  }, [])
}

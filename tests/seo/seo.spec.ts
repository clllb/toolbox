import { describe, expect, it } from 'vitest'

import {
  createStructuredData,
  getSeoDescription,
  getSeoHead,
  normalizeCanonicalPath,
  transformSitemapItems,
} from '../../docs/.vitepress/configs/seo'

describe('SEO helpers', () => {
  it('normalizes generated paths to canonical lowercase public URLs', () => {
    expect(normalizeCanonicalPath('AI/daily/cn/2026-06/2026-06-25.md')).toBe(
      '/ai/daily/cn/2026-06/2026-06-25.html'
    )
    expect(normalizeCanonicalPath('AI/tools/index.md')).toBe('/ai/tools/')
    expect(normalizeCanonicalPath('index.md')).toBe('/')
  })

  it('builds stable descriptions when frontmatter descriptions are empty', () => {
    expect(
      getSeoDescription({
        title: 'AI大事件 2026/6/25',
        relativePath: 'AI/daily/cn/2026-06/2026-06-25.md',
        frontmatter: { description: '' },
      })
    ).toContain('AI大事件 2026/6/25')

    expect(
      getSeoDescription({
        title: '工具导航',
        relativePath: 'nav/index.md',
        frontmatter: {},
      })
    ).toContain('精选')
  })

  it('generates canonical, Open Graph, Twitter, and JSON-LD head tags', () => {
    const head = getSeoHead({
      pageData: {
        title: 'AI大事件 2026/6/25',
        relativePath: 'AI/daily/cn/2026-06/2026-06-25.md',
        frontmatter: { description: '' },
      },
    })

    expect(head).toContainEqual([
      'link',
      {
        rel: 'canonical',
        href: 'https://toolguide.top/ai/daily/cn/2026-06/2026-06-25.html',
      },
    ])
    expect(head).toContainEqual(['meta', { property: 'og:type', content: 'article' }])
    expect(head).toContainEqual(['meta', { name: 'twitter:card', content: 'summary_large_image' }])

    const jsonLd = createStructuredData({
      title: 'AI大事件 2026/6/25',
      relativePath: 'AI/daily/cn/2026-06/2026-06-25.md',
      frontmatter: { description: '' },
    })

    expect(jsonLd['@type']).toBe('BlogPosting')
    expect(jsonLd.url).toBe('https://toolguide.top/ai/daily/cn/2026-06/2026-06-25.html')
  })

  it('adds publish and modified dates to article structured data', () => {
    const jsonLd = createStructuredData({
      title: 'AI周报 2026/5/11',
      relativePath: 'AI/weekly/cn/2026-05/2026-05-11-ai-signals-weekly-2026-w19.md',
      frontmatter: {},
      lastUpdated: new Date('2026-05-12T03:22:17.000Z').getTime(),
    })

    expect(jsonLd.datePublished).toBe('2026-05-11')
    expect(jsonLd.dateModified).toBe('2026-05-12T03:22:17.000Z')
    expect(jsonLd.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': 'https://toolguide.top/ai/weekly/cn/2026-05/2026-05-11-ai-signals-weekly-2026-w19.html',
    })
  })

  it('adds ItemList structured data for AI daily collection pages', () => {
    const jsonLd = createStructuredData({
      title: 'AI大事件',
      relativePath: 'AI/daily/index.md',
      frontmatter: {},
    })

    expect(jsonLd['@graph']).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          '@type': 'CollectionPage',
          name: 'AI大事件',
        }),
        expect.objectContaining({
          '@type': 'ItemList',
          itemListElement: expect.arrayContaining([
            expect.objectContaining({
              '@type': 'ListItem',
              position: 1,
              url: expect.stringContaining('https://toolguide.top/ai/daily/'),
            }),
          ]),
        }),
      ])
    )
  })

  it('lowercases sitemap URLs and filters internal project planning pages', () => {
    const items = transformSitemapItems([
      { url: 'https://toolguide.top/AI/daily/cn/2026-06/2026-06-25.html' },
      { url: 'https://toolguide.top/superpowers/plans/2026-07-03-seo-geo-optimization.html' },
      { url: 'https://toolguide.top/public/huangli/data/source-check.html' },
    ])

    expect(items).toEqual([
      {
        url: 'https://toolguide.top/ai/daily/cn/2026-06/2026-06-25.html',
        changefreq: 'weekly',
        priority: 0.7,
      },
    ])
  })

  it('accepts relative sitemap URLs from VitePress', () => {
    const items = transformSitemapItems([{ url: '/AI/tools/' }])

    expect(items).toEqual([{ url: '/ai/tools/', changefreq: 'weekly', priority: 0.8 }])
  })

  it('gives index pages stronger sitemap priority than deep articles', () => {
    const items = transformSitemapItems([{ url: '/' }, { url: '/ai/daily/' }])

    expect(items).toEqual([
      { url: '/', changefreq: 'weekly', priority: 1 },
      { url: '/ai/daily/', changefreq: 'daily', priority: 0.9 },
    ])
  })
})

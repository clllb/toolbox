import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

import { checkDist } from '../../scripts/seo/check-seo.mjs'

function makeDist(files: Record<string, string>): string {
  const root = mkdtempSync(join(tmpdir(), 'toolbox-seo-'))

  for (const [file, content] of Object.entries(files)) {
    const path = join(root, file)
    mkdirSync(path.slice(0, path.lastIndexOf('/')), { recursive: true })
    writeFileSync(path, content)
  }

  return root
}

describe('SEO dist checker', () => {
  it('passes a minimal valid VitePress dist', () => {
    const root = makeDist({
      'robots.txt': 'User-agent: *\nAllow: /\nSitemap: https://toolguide.top/sitemap.xml\n',
      'llms.txt': '# 陈老板的百宝箱\n',
      'content-index.json': '{"site":"陈老板的百宝箱"}',
      'sitemap.xml': '<urlset><url><loc>https://toolguide.top/ai/daily/</loc></url></urlset>',
      'ai/daily/index.html':
        '<html><head><title>AI大事件</title><meta name="description" content="每日 AI 资讯"><link rel="canonical" href="https://toolguide.top/ai/daily/"><script type="application/ld+json">{"@type":"CollectionPage"}</script></head></html>',
    })

    expect(checkDist(root)).toEqual([])
  })

  it('reports uppercase sitemap URLs and missing page metadata', () => {
    const root = makeDist({
      'robots.txt': 'User-agent: *\n',
      'llms.txt': '# 陈老板的百宝箱\n',
      'content-index.json': '{"site":"陈老板的百宝箱"}',
      'sitemap.xml': '<urlset><url><loc>https://toolguide.top/AI/daily/</loc></url></urlset>',
      'ai/daily/index.html': '<html><head><title></title></head></html>',
    })

    expect(checkDist(root)).toEqual(
      expect.arrayContaining([
        'sitemap.xml contains uppercase /AI/ URL variants.',
        'ai/daily/index.html is missing a meta description.',
        'ai/daily/index.html is missing a canonical link.',
        'ai/daily/index.html is missing JSON-LD structured data.',
      ])
    )
  })
})

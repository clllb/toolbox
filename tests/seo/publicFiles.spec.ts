import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { describe, expect, it } from 'vitest'

const publicDir = join(process.cwd(), 'docs/public')

function readPublicFile(fileName: string): string {
  return readFileSync(join(publicDir, fileName), 'utf8')
}

describe('public crawler files', () => {
  it('exposes robots.txt with sitemap discovery', () => {
    const robots = readPublicFile('robots.txt')

    expect(robots).toContain('User-agent: *')
    expect(robots).toContain('Allow: /')
    expect(robots).toContain('Sitemap: https://toolguide.top/sitemap.xml')
  })

  it('exposes llms.txt with core AI-search entry points', () => {
    const llms = readPublicFile('llms.txt')

    expect(llms).toContain('# 陈老板的百宝箱')
    expect(llms).toContain('https://toolguide.top/ai/daily/')
    expect(llms).toContain('https://toolguide.top/content-index.json')
    expect(llms).toContain('Canonical URL pattern')
    expect(llms).toContain('Use lowercase /ai/ paths')
  })

  it('exposes a machine-readable content index', () => {
    const index = JSON.parse(readPublicFile('content-index.json')) as {
      site: string
      canonicalUrlPattern: string
      updateFrequency: Record<string, string>
      sections: Array<{ title: string; url: string }>
    }

    expect(index.site).toBe('陈老板的百宝箱')
    expect(index.canonicalUrlPattern).toBe('Use lowercase paths, especially /ai/ instead of /AI/.')
    expect(index.updateFrequency.daily).toBe('AI大事件通常每日更新。')
    expect(index.sections).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'AI大事件',
          url: 'https://toolguide.top/ai/daily/',
        }),
      ])
    )
  })
})

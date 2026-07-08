import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { describe, expect, it } from 'vitest'

const configSource = readFileSync(resolve(__dirname, '../../docs/.vitepress/config.ts'), 'utf8')

describe('VitePress SEO build config', () => {
  it('treats QuickTime files as static assets for AI daily videos', () => {
    expect(configSource).toContain('assetsInclude')
    expect(configSource).toContain('**/*.qt')
  })

  it('rewrites AI source pages to lowercase public URLs', () => {
    expect(configSource).toContain('rewrites')
    expect(configSource).toContain("id.startsWith('AI/')")
    expect(configSource).toContain("id.replace(/^AI\\//, 'ai/')")
  })
})

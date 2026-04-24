import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { describe, expect, it } from 'vitest'

import { nav } from '../../docs/.vitepress/configs/nav'
import { sidebar } from '../../docs/.vitepress/configs/sidebar'

const homeSource = readFileSync(resolve(__dirname, '../../docs/index.md'), 'utf-8')

describe('prompt library site integration', () => {
  it('adds a homepage card that links to /AI/prompts/', () => {
    expect(homeSource).toContain('AI 图片提示词库')
    expect(homeSource).toContain('link: /AI/prompts/')
  })

  it('adds the prompt library to the AI nav menu', () => {
    const aiNav = nav.find((item) => item.text === 'AI相关')

    expect(
      aiNav?.items?.some(
        (item) =>
          item.text === 'AI图片提示词库' && item.link === '/AI/prompts/',
      ),
    ).toBe(true)
  })

  it('adds a sidebar section for /AI/prompts/', () => {
    expect(sidebar['/AI/prompts/'][0].items).toEqual([
      { text: 'AI 图片提示词库', link: '/AI/prompts/' },
    ])
  })
})

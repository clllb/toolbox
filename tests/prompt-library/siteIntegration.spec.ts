import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { describe, expect, it } from 'vitest'

import { nav } from '../../docs/.vitepress/configs/nav'
import { sidebar } from '../../docs/.vitepress/configs/sidebar'
import { isHomePagePath } from '../../docs/.vitepress/theme/utils/isHomePagePath'

const homeSource = readFileSync(resolve(__dirname, '../../docs/index.md'), 'utf-8')

describe('prompt library site integration', () => {
  it('adds a homepage card that links to /AI/prompts/image/', () => {
    expect(homeSource).toContain('AI 提示词库')
    expect(homeSource).toContain('link: /AI/prompts/image/')
  })

  it('adds the prompt library to the AI nav menu', () => {
    const aiNav = nav.find((item) => item.text === 'AI相关')

    expect(
      aiNav?.items?.some(
        (item) =>
          item.text === 'AI提示词库' && item.link === '/AI/prompts/image/',
      ),
    ).toBe(true)
  })

  it('uses the root path for the homepage nav entry', () => {
    const homeNav = nav.find((item) => item.text === '百宝箱主页')

    expect(homeNav?.link).toBe('/')
  })

  it('adds a sidebar section for /AI/prompts/', () => {
    expect(sidebar['/AI/prompts/'][0].items).toEqual([
      { text: '图片提示词库', link: '/AI/prompts/image/' },
      { text: '论文提示词库', link: '/AI/prompts/paper/' },
    ])
  })

  it('treats index.html variants as the homepage for rainbow theme activation', () => {
    expect(isHomePagePath('/')).toBe(true)
    expect(isHomePagePath('/index.html')).toBe(true)
    expect(isHomePagePath('/toolbox/')).toBe(true)
    expect(isHomePagePath('/toolbox/index.html')).toBe(true)
    expect(isHomePagePath('/AI/daily/index.html')).toBe(false)
  })
})

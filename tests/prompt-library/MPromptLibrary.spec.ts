import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import MPromptLibrary from '../../docs/.vitepress/theme/components/MPromptLibrary.vue'
import { PROMPT_LIBRARY_ITEMS, PROMPT_LIBRARY_MODELS } from '../../docs/AI/prompts/data'

const TAG_DRIVEN_ITEMS = [
  {
    id: 'brand-poster',
    model: 'gpt-image-2',
    category: 'portrait',
    title: '品牌海报',
    images: ['/brand-poster.webp'],
    promptEn: 'brand poster',
    promptZh: '品牌海报',
    tags: ['海报', '品牌'],
    sourceTitle: 'source',
    sourceUrl: 'https://example.com/brand-poster',
    sourceDate: '2026-04-21',
  },
  {
    id: 'edu-info',
    model: 'gpt-image-2',
    category: 'landscape',
    title: '教育信息图',
    images: ['/edu-info.webp'],
    promptEn: 'education infographic',
    promptZh: '教育信息图',
    tags: ['教育', '信息图'],
    sourceTitle: 'source',
    sourceUrl: 'https://example.com/edu-info',
    sourceDate: '2026-04-21',
  },
] as any

describe('MPromptLibrary', () => {
  it('defaults to GPT image 2 and renders collected prompt cards', () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    expect(wrapper.text()).toContain('GPT image 2')
    expect(wrapper.findAll('[data-test="prompt-card"]')).toHaveLength(PROMPT_LIBRARY_ITEMS.length)
    expect(wrapper.text()).toContain('使用者界面截图')
  })

  it('filters prompt cards when a tag tab is clicked', async () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    const posterItems = PROMPT_LIBRARY_ITEMS.filter((item) => item.tags.includes('海报'))

    await wrapper.get('[data-test="tag-tab-海报"]').trigger('click')

    expect(wrapper.findAll('[data-test="prompt-card"]')).toHaveLength(posterItems.length)
    expect(wrapper.text()).toContain('抹茶店广告')
  })

  it('shows the coming-soon empty state for nano banana 2', async () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    await wrapper.get('[data-test="model-tab-nano-banana-2"]').trigger('click')

    expect(wrapper.text()).toContain('该模型内容整理中，敬请期待')
  })

  it('opens a detail dialog from a prompt card', async () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    await wrapper.get('[data-test="prompt-card"]').trigger('click')

    expect(wrapper.get('[data-test="prompt-dialog-title"]').text()).toContain('使用者界面截图')
    expect(wrapper.text()).toContain('English Prompt')
  })

  it('shows the base Chinese labels and active tag labels', () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    expect(wrapper.text()).toContain('全部')
    expect(wrapper.text()).toContain('摄影')
    expect(wrapper.text()).toContain('创意')
  })

  it('renders top filter tabs from tags and filters cards by selected tag', async () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: TAG_DRIVEN_ITEMS },
    })

    expect(wrapper.text()).toContain('海报')
    expect(wrapper.text()).toContain('品牌')
    expect(wrapper.text()).toContain('教育')

    await wrapper.get('[data-test="tag-tab-品牌"]').trigger('click')

    expect(wrapper.findAll('[data-test="prompt-card"]')).toHaveLength(1)
    expect(wrapper.text()).toContain('品牌海报')
  })
})

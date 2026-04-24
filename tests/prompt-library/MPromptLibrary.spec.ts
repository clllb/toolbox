import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import MPromptLibrary from '../../docs/.vitepress/theme/components/MPromptLibrary.vue'
import {
  PROMPT_LIBRARY_ITEMS,
  PROMPT_LIBRARY_MODELS,
} from '../../docs/AI/prompts/data'

describe('MPromptLibrary', () => {
  it('defaults to GPT image 2 and renders its cards', () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    expect(wrapper.text()).toContain('GPT image 2')
    expect(wrapper.findAll('[data-test="prompt-card"]').length).toBeGreaterThan(0)
  })

  it('filters cards when a category tab is clicked', async () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    await wrapper.get('[data-test="category-tab-poster"]').trigger('click')

    const titles = wrapper
      .findAll('[data-test="prompt-card-title"]')
      .map((node) => node.text())

    expect(titles).toEqual(['抹茶新品开业海报', '法式拼贴编辑海报'])
  })

  it('shows the coming-soon empty state for nano banana 2', async () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    await wrapper.get('[data-test="model-tab-nano-banana-2"]').trigger('click')

    expect(wrapper.text()).toContain('该模型内容整理中，敬请期待')
  })

  it('opens a detail dialog when a card is clicked', async () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    await wrapper.get('[data-test="prompt-card"]').trigger('click')

    expect(wrapper.get('[data-test="prompt-dialog-title"]').text()).toContain(
      '海边抓拍人像',
    )
    expect(wrapper.text()).toContain('English Prompt')
    expect(wrapper.text()).toContain('中文提示词')
  })

  it('closes the dialog when the close button is clicked', async () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    await wrapper.get('[data-test="prompt-card"]').trigger('click')
    await wrapper.get('[data-test="prompt-dialog-close"]').trigger('click')

    expect(wrapper.find('[data-test="prompt-dialog"]').exists()).toBe(false)
  })
})

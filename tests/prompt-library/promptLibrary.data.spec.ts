import { describe, expect, it } from 'vitest'

import {
  PROMPT_LIBRARY_ITEMS,
  PROMPT_LIBRARY_MODELS,
} from '../../docs/AI/prompts/data'
import {
  filterPromptItems,
  getPromptCategories,
  isModelAvailable,
} from '../../docs/.vitepress/theme/composables/usePromptLibrary'

describe('prompt library data', () => {
  it('keeps GPT image 2 available and nano banana 2 as coming soon', () => {
    expect(isModelAvailable('gpt-image-2', PROMPT_LIBRARY_MODELS)).toBe(true)
    expect(isModelAvailable('nano-banana-2', PROMPT_LIBRARY_MODELS)).toBe(false)
  })

  it('builds the default category list for GPT image 2', () => {
    expect(getPromptCategories('gpt-image-2', PROMPT_LIBRARY_ITEMS)).toEqual([
      'all',
      'portrait',
      'landscape',
      'poster',
      'manga',
      'infographic',
      'brand-visual',
      'education',
      'layout-experiment',
    ])
  })

  it('filters only poster examples for GPT image 2', () => {
    const result = filterPromptItems('gpt-image-2', 'poster', PROMPT_LIBRARY_ITEMS)
    expect(result.map((item) => item.id)).toEqual([
      'gpt-image-2-kizuna-matcha-poster',
      'gpt-image-2-editorial-poster',
    ])
  })
})

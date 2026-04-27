import { describe, expect, it } from 'vitest'

import {
  PROMPT_LIBRARY_ITEMS,
  PROMPT_LIBRARY_MODELS,
  PROMPT_PRIMARY_TAGS,
} from '../../docs/AI/prompts/image/data'
import {
  filterPromptItems,
  getPromptPrimaryTags,
  isModelAvailable,
} from '../../docs/.vitepress/theme/composables/usePromptLibrary'

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

describe('prompt library data', () => {
  it('keeps GPT image 2 available and nano banana 2 as coming soon', () => {
    expect(isModelAvailable('gpt-image-2', PROMPT_LIBRARY_MODELS)).toBe(true)
    expect(isModelAvailable('nano-banana-2', PROMPT_LIBRARY_MODELS)).toBe(false)
  })

  it('includes the collected OpenAI GPT image 2 examples', () => {
    expect(PROMPT_LIBRARY_ITEMS.length).toBeGreaterThan(30)
    expect(PROMPT_LIBRARY_ITEMS.map((item) => item.id)).toContain(
      'gpt-image-2-chatgpt-interface-screenshot',
    )
    expect(PROMPT_LIBRARY_ITEMS.every((item) => item.model === 'gpt-image-2')).toBe(true)
    expect(PROMPT_LIBRARY_ITEMS.every((item) => item.images.length > 0)).toBe(true)
    expect(PROMPT_LIBRARY_ITEMS.some((item) => item.promptEn.startsWith('Generated with'))).toBe(
      false,
    )
  })

  it('returns active GPT image 2 primary tags in display order', () => {
    expect(getPromptPrimaryTags('gpt-image-2', PROMPT_LIBRARY_ITEMS)).toEqual([
      'all',
      ...PROMPT_PRIMARY_TAGS,
    ])
  })

  it('filters prompt items by model and tag', () => {
    expect(filterPromptItems('gpt-image-2', 'all', PROMPT_LIBRARY_ITEMS)).toHaveLength(
      PROMPT_LIBRARY_ITEMS.length,
    )
    expect(
      filterPromptItems('gpt-image-2', '海报' as any, PROMPT_LIBRARY_ITEMS).every((item) =>
        item.tags.includes('海报'),
      ),
    ).toBe(true)
    expect(filterPromptItems('nano-banana-2', 'all', PROMPT_LIBRARY_ITEMS)).toEqual([])
  })

  it('derives top filters from tags instead of legacy category fields', () => {
    expect(getPromptPrimaryTags('gpt-image-2', TAG_DRIVEN_ITEMS)).toEqual([
      'all',
      '海报',
      '信息图',
      '品牌',
      '教育',
    ])
  })

  it('filters prompt items by selected tag', () => {
    expect(
      filterPromptItems('gpt-image-2', '品牌' as any, TAG_DRIVEN_ITEMS).map((item) => item.id),
    ).toEqual(['brand-poster'])
  })
})

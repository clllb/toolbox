import type {
  PromptCategoryId,
  PromptLibraryItem,
  PromptLibraryModel,
  PromptModelId,
} from '../../../AI/prompts/data'

const CATEGORY_ORDER: Array<'all' | PromptCategoryId> = [
  'all',
  'portrait',
  'landscape',
  'poster',
  'manga',
  'infographic',
  'brand-visual',
  'education',
  'layout-experiment',
]

export function isModelAvailable(modelId: PromptModelId, models: PromptLibraryModel[]) {
  return models.some((model) => model.id === modelId && model.available)
}

export function getPromptCategories(modelId: PromptModelId, items: PromptLibraryItem[]) {
  const activeCategories = new Set(
    items.filter((item) => item.model === modelId).map((item) => item.category),
  )

  return CATEGORY_ORDER.filter(
    (category) => category === 'all' || activeCategories.has(category),
  )
}

export function filterPromptItems(
  modelId: PromptModelId,
  categoryId: 'all' | PromptCategoryId,
  items: PromptLibraryItem[],
) {
  return items.filter((item) => {
    if (item.model !== modelId) {
      return false
    }

    return categoryId === 'all' ? true : item.category === categoryId
  })
}

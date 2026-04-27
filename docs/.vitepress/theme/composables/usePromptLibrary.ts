import type {
  PromptLibraryItem,
  PromptLibraryModel,
  PromptModelId,
  PromptPrimaryTagId,
} from '../../../AI/prompts/data'
import { PROMPT_PRIMARY_TAGS } from '../../../AI/prompts/data'

export type PromptFilterTagId = 'all' | PromptPrimaryTagId

export function isModelAvailable(modelId: PromptModelId, models: PromptLibraryModel[]) {
  return models.some((model) => model.id === modelId && model.available)
}

export function getPromptPrimaryTags(modelId: PromptModelId, items: PromptLibraryItem[]) {
  const activeTags = new Set(
    items
      .filter((item) => item.model === modelId)
      .flatMap((item) => item.tags)
      .filter((tag): tag is PromptPrimaryTagId =>
        PROMPT_PRIMARY_TAGS.includes(tag as PromptPrimaryTagId),
      ),
  )

  return ['all', ...PROMPT_PRIMARY_TAGS.filter((tag) => activeTags.has(tag))]
}

export function filterPromptItems(
  modelId: PromptModelId,
  tagId: PromptFilterTagId,
  items: PromptLibraryItem[],
) {
  return items.filter((item) => {
    if (item.model !== modelId) {
      return false
    }

    return tagId === 'all' ? true : item.tags.includes(tagId)
  })
}

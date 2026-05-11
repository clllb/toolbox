import type {
  PromptLibraryItem,
  PromptLibraryModel,
  PromptModelId,
  PromptTagId,
} from '../../../AI/prompts/image/data'
import { PROMPT_TAGS } from '../../../AI/prompts/image/data'

export type PromptFilterTagId = 'all' | PromptTagId

export function isModelAvailable(modelId: PromptModelId, models: PromptLibraryModel[]) {
  return models.some((model) => model.id === modelId && model.available)
}

export function getPromptTags(modelId: PromptModelId, items: PromptLibraryItem[]) {
  const activeTags = new Set(
    items
      .filter((item) => item.model === modelId)
      .flatMap((item) => item.tags)
      .filter((tag): tag is PromptTagId =>
        PROMPT_TAGS.includes(tag as PromptTagId),
      ),
  )

  return ['all', ...PROMPT_TAGS.filter((tag) => activeTags.has(tag))]
}

export const getPromptPrimaryTags = getPromptTags

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

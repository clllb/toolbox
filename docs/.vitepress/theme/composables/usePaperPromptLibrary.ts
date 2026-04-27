import type {
  PaperPromptLibraryItem,
  PaperPromptLibraryModel,
  PaperPromptModelId,
  PaperPromptPrimaryTagId,
} from '../../../AI/prompts/paper/data'
import { PAPER_PROMPT_PRIMARY_TAGS } from '../../../AI/prompts/paper/data'

export type PaperPromptFilterTagId = 'all' | PaperPromptPrimaryTagId

export function isPaperModelAvailable(modelId: PaperPromptModelId, models: PaperPromptLibraryModel[]) {
  return models.some((model) => model.id === modelId && model.available)
}

export function getPaperPromptPrimaryTags(modelId: PaperPromptModelId, items: PaperPromptLibraryItem[]) {
  const activeTags = new Set(
    items
      .filter((item) => item.model === modelId)
      .flatMap((item) => item.tags)
      .filter((tag): tag is PaperPromptPrimaryTagId =>
        PAPER_PROMPT_PRIMARY_TAGS.includes(tag as PaperPromptPrimaryTagId),
      ),
  )

  return ['all', ...PAPER_PROMPT_PRIMARY_TAGS.filter((tag) => activeTags.has(tag))]
}

export function filterPaperPromptItems(
  modelId: PaperPromptModelId,
  tagId: PaperPromptFilterTagId,
  items: PaperPromptLibraryItem[],
) {
  return items.filter((item) => {
    if (item.model !== modelId) {
      return false
    }

    return tagId === 'all' ? true : item.tags.includes(tagId)
  })
}

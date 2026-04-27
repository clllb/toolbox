<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import type {
  PaperPromptLibraryItem,
  PaperPromptLibraryModel,
  PaperPromptModelId,
} from '../../../AI/paper-prompts/data'
import {
  filterPaperPromptItems,
  getPaperPromptPrimaryTags,
  isPaperModelAvailable,
  type PaperPromptFilterTagId,
} from '../composables/usePaperPromptLibrary'
import MPromptCard from './MPromptCard.vue'
import MPromptDialog from './MPromptDialog.vue'
import MPromptFilterTabs from './MPromptFilterTabs.vue'

const props = defineProps<{
  models: PaperPromptLibraryModel[]
  items: PaperPromptLibraryItem[]
}>()

const activeModel = ref<PaperPromptModelId>(props.models[0]?.id ?? 'gpt-5-5')
const activeTag = ref<PaperPromptFilterTagId>('all')
const activeItem = ref<PaperPromptLibraryItem | null>(null)

watch(activeModel, () => {
  activeTag.value = 'all'
  activeItem.value = null
})

const modelTabs = computed(() =>
  props.models.map((model) => ({
    id: model.id,
    label: model.label,
    count: props.items.filter((item) => item.model === model.id).length,
    disabled: false,
  })),
)

const tagTabs = computed(() =>
  getPaperPromptPrimaryTags(activeModel.value, props.items).map((tag) => ({
    id: tag,
    label: tag === 'all' ? '全部' : tag,
  })),
)

const visibleItems = computed(() =>
  filterPaperPromptItems(activeModel.value, activeTag.value, props.items),
)

const activeModelAvailable = computed(() =>
  isPaperModelAvailable(activeModel.value, props.models),
)
</script>

<template>
  <section class="m-prompt-library">
    <MPromptFilterTabs
      v-model="activeModel"
      :items="modelTabs"
      test-prefix="model-tab"
    />

    <MPromptFilterTabs
      v-if="activeModelAvailable"
      v-model="activeTag"
      :items="tagTabs"
      test-prefix="tag-tab"
    />

    <p v-if="!activeModelAvailable" class="empty-state">
      该模型内容整理中，敬请期待
    </p>

    <p
      v-else-if="visibleItems.length === 0"
      class="empty-state"
    >
      该分类下暂未收录案例
    </p>

    <div v-else class="grid">
      <MPromptCard
        v-for="item in visibleItems"
        :key="item.id"
        :item="item"
        @select="activeItem = item"
      />
    </div>

    <MPromptDialog :item="activeItem" @close="activeItem = null" />
  </section>
</template>

<style scoped lang="scss">
.m-prompt-library {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

.empty-state {
  padding: 32px 20px;
  border: 1px dashed var(--vp-c-border);
  border-radius: 18px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}
</style>

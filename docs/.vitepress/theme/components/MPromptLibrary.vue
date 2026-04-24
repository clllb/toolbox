<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import type {
  PromptCategoryId,
  PromptLibraryItem,
  PromptLibraryModel,
  PromptModelId,
} from '../../../AI/prompts/data'
import {
  filterPromptItems,
  getPromptCategories,
  isModelAvailable,
} from '../composables/usePromptLibrary'
import MPromptCard from './MPromptCard.vue'
import MPromptDialog from './MPromptDialog.vue'
import MPromptFilterTabs from './MPromptFilterTabs.vue'

const CATEGORY_LABELS: Record<'all' | PromptCategoryId, string> = {
  all: '全部',
  portrait: '人像',
  landscape: '风景',
  poster: '海报',
  manga: '漫画',
  infographic: '信息图',
  'brand-visual': '品牌视觉',
  education: '教育内容',
  'layout-experiment': '版式实验',
}

const props = defineProps<{
  models: PromptLibraryModel[]
  items: PromptLibraryItem[]
}>()

const activeModel = ref<PromptModelId>(props.models[0]?.id ?? 'gpt-image-2')
const activeCategory = ref<'all' | PromptCategoryId>('all')
const activeItem = ref<PromptLibraryItem | null>(null)

watch(activeModel, () => {
  activeCategory.value = 'all'
  activeItem.value = null
})

const modelTabs = computed(() =>
  props.models.map((model) => ({
    id: model.id,
    label: model.label,
    disabled: false,
  })),
)

const categoryTabs = computed(() =>
  getPromptCategories(activeModel.value, props.items).map((category) => ({
    id: category,
    label: CATEGORY_LABELS[category],
  })),
)

const visibleItems = computed(() =>
  filterPromptItems(activeModel.value, activeCategory.value, props.items),
)

const activeModelAvailable = computed(() =>
  isModelAvailable(activeModel.value, props.models),
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
      v-model="activeCategory"
      :items="categoryTabs"
      test-prefix="category-tab"
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

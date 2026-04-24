<script setup lang="ts">
import type { PromptLibraryItem } from '../../../AI/prompts/data'

defineProps<{
  item: PromptLibraryItem
}>()

const emit = defineEmits<{
  select: [item: PromptLibraryItem]
}>()
</script>

<template>
  <article
    class="m-prompt-card"
    data-test="prompt-card"
    @click="emit('select', item)"
  >
    <img class="cover" :src="item.image" :alt="item.title" />
    <div class="body">
      <h3 data-test="prompt-card-title">{{ item.title }}</h3>
      <div class="tags">
        <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PromptLibraryItem } from '../../../AI/prompts/image/data'

defineProps<{
  item: PromptLibraryItem & { images?: string[] }
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
    <img v-if="item.images?.length" class="cover no-zoom" :src="item.images[0]" :alt="item.title" />
    <div class="body">
      <h3 data-test="prompt-card-title">{{ item.title }}</h3>
      <div class="tags">
        <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.m-prompt-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--vp-c-border);
  border-radius: 18px;
  background: var(--vp-c-bg-alt);
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--vp-c-brand);
    box-shadow: var(--vp-shadow-2);
  }
}

.cover {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: var(--vp-c-bg-soft);
}

.body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  padding: 14px;
}

.body h3 {
  margin: 0;
  font-size: 15px;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tags span {
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
}
</style>

<script setup lang="ts">
import type { PromptLibraryItem } from '../../../AI/prompts/data'

defineProps<{
  item: PromptLibraryItem | null
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <div
    v-if="item"
    class="m-prompt-dialog"
    data-test="prompt-dialog"
  >
    <div class="overlay" @click="emit('close')" />
    <div class="panel">
      <button
        type="button"
        data-test="prompt-dialog-close"
        @click="emit('close')"
      >
        关闭
      </button>
      <h3 data-test="prompt-dialog-title">{{ item.title }}</h3>
      <div class="content">
        <img :src="item.image" :alt="item.title" />
        <div class="prompts">
          <section>
            <h4>English Prompt</h4>
            <p>{{ item.promptEn }}</p>
          </section>
          <section>
            <h4>中文提示词</h4>
            <p>{{ item.promptZh }}</p>
          </section>
        </div>
      </div>
      <footer>{{ item.sourceTitle }} · {{ item.sourceDate }}</footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.m-prompt-dialog {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.52);
}

.panel {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 18px;
  width: min(1100px, calc(100vw - 32px));
  max-height: calc(100vh - 32px);
  padding: 20px;
  overflow: auto;
  border: 1px solid var(--vp-c-border);
  border-radius: 24px;
  background: var(--vp-c-bg);
  box-shadow: var(--vp-shadow-5);
}

.panel button {
  justify-self: end;
  padding: 8px 14px;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
}

.panel h3,
.panel h4,
.panel p,
.panel footer {
  margin: 0;
}

.content {
  display: grid;
  gap: 18px;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
}

.content img {
  width: 100%;
  border-radius: 18px;
  background: var(--vp-c-bg-soft);
}

.prompts {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.prompts section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 18px;
  background: var(--vp-c-bg-soft);
}

.prompts p {
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.panel footer {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

@media (max-width: 960px) {
  .content,
  .prompts {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import type { PromptLibraryItem } from '../../../AI/prompts/data'

const props = defineProps<{
  item: (PromptLibraryItem & { images?: string[] }) | null
}>()

const emit = defineEmits<{
  close: []
}>()

const activeIndex = ref(0)
const zoomedSrc = ref<string | null>(null)
const hasMultiple = computed(() => (props.item?.images?.length ?? 0) > 1)

watch(
  () => props.item,
  () => {
    activeIndex.value = 0
  },
)

function prev() {
  if (!props.item) return
  activeIndex.value = (activeIndex.value - 1 + props.item.images.length) % props.item.images.length
}

function next() {
  if (!props.item) return
  activeIndex.value = (activeIndex.value + 1) % props.item.images.length
}

function zoom() {
  if (!props.item) return
  zoomedSrc.value = props.item.images[activeIndex.value]
}

function closeZoom() {
  zoomedSrc.value = null
}

const copiedEn = ref(false)
const copiedZh = ref(false)

function copy(text: string, flag: 'en' | 'zh') {
  navigator.clipboard.writeText(text).then(() => {
    const ref = flag === 'en' ? copiedEn : copiedZh
    ref.value = true
    setTimeout(() => {
      ref.value = false
    }, 2000)
  })
}
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
        <div v-if="item.images?.length" class="carousel">
          <img :src="item.images[activeIndex]" :alt="item.title" @click="zoom" />
          <button
            v-if="hasMultiple"
            type="button"
            class="nav-btn nav-prev"
            data-test="carousel-prev"
            @click="prev"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            v-if="hasMultiple"
            type="button"
            class="nav-btn nav-next"
            data-test="carousel-next"
            @click="next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
          <div v-if="hasMultiple" class="carousel-indicator">
            {{ activeIndex + 1 }} / {{ item.images.length }}
          </div>
        </div>
        <section class="prompt-block">
          <div class="prompt-header">
            <h4>English Prompt</h4>
            <button type="button" class="copy-btn" @click="copy(item.promptEn, 'en')">
              {{ copiedEn ? '已复制' : '复制' }}
            </button>
          </div>
          <p>{{ item.promptEn }}</p>
        </section>
        <section class="prompt-block">
          <div class="prompt-header">
            <h4>中文提示词</h4>
            <button type="button" class="copy-btn" @click="copy(item.promptZh, 'zh')">
              {{ copiedZh ? '已复制' : '复制' }}
            </button>
          </div>
          <p>{{ item.promptZh }}</p>
        </section>
      </div>
      <footer>
        <a :href="item.sourceUrl" target="_blank" rel="noreferrer">
          {{ item.sourceTitle }}
        </a>
        <span> · {{ item.sourceDate }}</span>
      </footer>
    </div>

    <div v-if="zoomedSrc" class="zoom-overlay" @click="closeZoom">
      <img :src="zoomedSrc" alt="放大查看" @click.stop />
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

.panel > button {
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
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 55vh;
  overflow: hidden;
}

.carousel img {
  width: 100%;
  max-height: 55vh;
  object-fit: contain;
  border-radius: 18px;
  background: var(--vp-c-bg-soft);
  cursor: zoom-in;
}

.nav-btn {
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  transform: translateY(-50%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease, background 0.2s ease;
}

.carousel:hover .nav-btn {
  opacity: 1;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.7);
}

.nav-prev {
  left: 12px;
}

.nav-next {
  right: 12px;
}

.carousel-indicator {
  position: absolute;
  bottom: 12px;
  left: 50%;
  padding: 4px 12px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 12px;
  pointer-events: none;
  user-select: none;
}

.prompt-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 18px;
  background: var(--vp-c-bg-soft);
}

.prompt-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.copy-btn {
  padding: 4px 12px;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--vp-c-brand);
    color: var(--vp-c-brand-1);
  }
}

.prompt-block p {
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.panel footer {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.panel footer a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.zoom-overlay {
  position: fixed;
  inset: 0;
  z-index: 70;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  cursor: zoom-out;
}

.zoom-overlay img {
  max-width: 95vw;
  max-height: 95vh;
  object-fit: contain;
  border-radius: 12px;
}
</style>

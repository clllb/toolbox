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

<script setup lang="ts">
import { ref, computed } from 'vue'

type ViewMode = 'category' | 'weekly'

const emit = defineEmits<{
  change: [mode: ViewMode]
}>()

const currentMode = ref<ViewMode>('category')

const modes = [
  { value: 'category' as const, label: '按功能分类' },
  { value: 'weekly' as const, label: '按期数查看' },
]

function handleModeChange(mode: ViewMode) {
  currentMode.value = mode
  emit('change', mode)
}
</script>

<template>
  <div class="m-nav-filter">
    <div class="filter-tabs">
      <button
        v-for="mode in modes"
        :key="mode.value"
        :class="['tab-button', { active: currentMode === mode.value }]"
        @click="handleModeChange(mode.value)"
      >
        {{ mode.label }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.m-nav-filter {
  margin-bottom: 24px;
  padding: 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
}

.filter-tabs {
  display: flex;
  gap: 12px;
  align-items: center;
}

.tab-button {
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--vp-c-text-1);
    border-color: var(--vp-c-brand);
    background: var(--vp-c-bg-soft);
  }

  &.active {
    color: var(--vp-c-brand);
    background: var(--vp-c-brand-dark);
    border-color: var(--vp-c-brand);
  }
}
</style>

<script setup lang="ts">
defineProps<{
  items: Array<{ id: string; label: string; disabled?: boolean }>
  modelValue: string
  testPrefix: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="m-prompt-filter-tabs">
    <button
      v-for="item in items"
      :key="item.id"
      :data-test="`${testPrefix}-${item.id}`"
      :class="['tab', { active: modelValue === item.id }]"
      :disabled="item.disabled"
      type="button"
      @click="emit('update:modelValue', item.id)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.m-prompt-filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tab {
  padding: 8px 14px;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--vp-c-brand);
    color: var(--vp-c-text-1);
    background: var(--vp-c-bg-soft);
  }

  &.active {
    border-color: var(--vp-c-brand);
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>

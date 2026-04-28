<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    items: Array<{ id: string; label: string; count?: number; disabled?: boolean }>
    modelValue: string
    testPrefix: string
    maxVisible?: number
  }>(),
  { maxVisible: 0 },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const expanded = ref(false)

const needsExpand = computed(() => {
  if (!props.maxVisible) return false
  return props.items.length > props.maxVisible
})

const visibleItems = computed(() => {
  if (!props.maxVisible || expanded.value || !needsExpand.value) return props.items
  return props.items.slice(0, props.maxVisible)
})

const hiddenCount = computed(() => {
  if (!needsExpand.value) return 0
  return props.items.length - props.maxVisible
})

function toggleExpand() {
  expanded.value = !expanded.value
}
</script>

<template>
  <div class="m-prompt-filter-tabs">
    <button
      v-for="item in visibleItems"
      :key="item.id"
      :data-test="`${testPrefix}-${item.id}`"
      :class="['tab', { active: modelValue === item.id }]"
      :disabled="item.disabled"
      type="button"
      @click="emit('update:modelValue', item.id)"
    >
      {{ item.label }}<span v-if="item.count != null" class="count">{{ item.count }}</span>
    </button>
    <button
      v-if="needsExpand"
      class="tab toggle-btn"
      type="button"
      @click="toggleExpand"
    >
      {{ expanded ? '收起 ▴' : `+${hiddenCount} 更多 ▾` }}
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

.count {
  margin-left: 4px;
  font-size: 12px;
  opacity: 0.7;
}

.toggle-btn {
  border-style: dashed;
  font-size: 13px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
}
</style>

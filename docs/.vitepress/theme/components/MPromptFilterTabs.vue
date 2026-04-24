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

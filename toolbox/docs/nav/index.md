---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import { NAV_DATA, WEEKLY_INDEX } from './data';
import MNavFilter from '../.vitepress/theme/components/MNavFilter.vue';

type ViewMode = 'category' | 'weekly';

const viewMode = ref<ViewMode>('category');

// 按期数分组的数据
const weeklyData = computed(() => {
  const result: Array<{ title: string; items: any[] }> = [];

  WEEKLY_INDEX.forEach(week => {
    const items: any[] = [];

    NAV_DATA.forEach(category => {
      category.items.forEach(item => {
        if (item.weekNumber === week.weekNumber) {
          items.push(item);
        }
      });
    });

    if (items.length > 0) {
      result.push({
        title: `${week.title} (${week.dateRange})`,
        items,
      });
    }
  });

  return result;
});

// 根据当前模式显示的数据
const displayData = computed(() => {
  return viewMode.value === 'category' ? NAV_DATA : weeklyData.value;
});

function handleModeChange(mode: 'category' | 'weekly') {
  viewMode.value = mode;
}
</script>
<style src="./index.scss"></style>

# 前端导航

<MNavFilter @change="handleModeChange" />

<MNavLinks v-for="{title, items} in displayData" :key="title" :title="title" :items="items"/>

<br />

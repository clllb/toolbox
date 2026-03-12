---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { NAV_DATA, WEEKLY_INDEX } from './data';
import MNavFilter from '../.vitepress/theme/components/MNavFilter.vue';
import type { NavLink } from '../.vitepress/theme/types';

type ViewMode = 'category' | 'weekly';

const STORAGE_KEY = 'recentlyUsedTools';

const viewMode = ref<ViewMode>('category');

// 从 localStorage 获取最近使用的工具列表
const getRecentlyUsedLinks = (): string[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// 记录工具访问
function recordAccess(link: string) {
  const current = getRecentlyUsedLinks();
  
  // 移除已存在的相同链接（放到最新位置）
  const filtered = current.filter(l => l !== link);
  
  // 添加到开头
  filtered.unshift(link);
  
  // 只保留最近 10 个
  const toStore = filtered.slice(0, 5);
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
}

// 获取最近使用的工具完整信息
const recentlyUsed = computed(() => {
  const links = getRecentlyUsedLinks();
  const result: NavLink[] = [];
  
  // 扁平化所有工具数据
  const allTools: NavLink[] = [];
  NAV_DATA.forEach(category => {
    category.items.forEach(item => {
      allTools.push(item);
    });
  });
  
  // 根据 localStorage 中的链接顺序获取工具信息
  links.forEach(link => {
    const item = allTools.find(tool => tool.link === link);
    if (item) {
      result.push(item);
    }
  });
  
  return result;
});

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

function handleToolClick(link: string) {
  recordAccess(link);
}
</script>
<style src="./index.scss"></style>

# 工具导航

::: tip 项目动态
已连续更新 10 天 · 本项目纯属 **用爱发电** ❤️ · 所有内容均由 **陈老板** 亲自筛选、测试、整理
:::

<MNavFilter @change="handleModeChange" />

<MNavLinks
v-if="recentlyUsed.length > 0"
title="最近使用"
:items="recentlyUsed"
@item-click="handleToolClick"
/>

<MNavLinks v-for="{title, items} in displayData" :key="title" :title="title" :items="items" @item-click="handleToolClick" />

<br />

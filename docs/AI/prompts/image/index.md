---
layoutClass: 'm-prompts-layout'
outline: [2, 3]
---

<script setup lang="ts">
import MPromptLibrary from '../../../.vitepress/theme/components/MPromptLibrary.vue'
import { PROMPT_LIBRARY_ITEMS, PROMPT_LIBRARY_MODELS } from './data'
</script>

<style src="./index.scss"></style>

# AI 图片提示词库

::: tip 项目动态
已连续更新 3 天 · 本项目纯属用爱发电 ❤️ · 所有内容均由AI进行数据清洗、去重。由陈老板亲自筛选、审核，已过滤无意义、无价值、过短提示词，只收录精品！
:::

<MPromptLibrary :models="PROMPT_LIBRARY_MODELS" :items="PROMPT_LIBRARY_ITEMS" />

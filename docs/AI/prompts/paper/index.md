---
layoutClass: 'm-prompts-layout'
outline: [2, 3]
---

<script setup lang="ts">
import MPaperPromptLibrary from '../../../.vitepress/theme/components/MPaperPromptLibrary.vue'
import { PAPER_PROMPT_LIBRARY_ITEMS, PAPER_PROMPT_LIBRARY_MODELS } from './data'
</script>

<style src="../image/index.scss"></style>

# AI 论文提示词库

::: tip 项目动态
持续更新中
:::

<MPaperPromptLibrary :models="PAPER_PROMPT_LIBRARY_MODELS" :items="PAPER_PROMPT_LIBRARY_ITEMS" />

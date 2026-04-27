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
已上线 GPT image 2 首批案例，内容根据 OpenAI《Introducing ChatGPT Images 2.0》（2026-04-21）示例图与说明整理 · 持续更新中
:::

<MPromptLibrary :models="PROMPT_LIBRARY_MODELS" :items="PROMPT_LIBRARY_ITEMS" />

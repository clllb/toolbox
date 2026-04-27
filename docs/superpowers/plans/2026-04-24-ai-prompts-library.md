# AI 图片提示词库 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为站点新增一个可扩展的 `AI 图片提示词库`，首页提供入口卡片，`/AI/prompts/` 页面支持模型切换、横向分类过滤、图片卡片浏览和中英双语提示词弹窗。

**Architecture:** 复用现有 VitePress 文档页 + Vue 组件模式，把数据整理在 `docs/AI/prompts/data.ts`，把交互状态抽到 `usePromptLibrary.ts`，再由 `MPromptLibrary.vue` 组合筛选栏、图片卡片和详情弹窗。为了让筛选与弹窗逻辑可测试，先补最小 Vitest 基建，并优先测试 composable 与 Vue 组件，再把页面入口接到首页、导航和侧边栏。

**Tech Stack:** VitePress 1.6, Vue 3.5, TypeScript, Sass, Vitest, Vue Test Utils, jsdom

---

## File Structure

- Create: `vitest.config.ts`
- Create: `tests/prompt-library/promptLibrary.data.spec.ts`
- Create: `tests/prompt-library/MPromptLibrary.spec.ts`
- Create: `tests/prompt-library/siteIntegration.spec.ts`
- Create: `docs/AI/prompts/data.ts`
- Create: `docs/AI/prompts/index.md`
- Create: `docs/AI/prompts/index.scss`
- Create: `docs/public/ai-prompts/gpt-image-2/`
- Create: `docs/.vitepress/theme/composables/usePromptLibrary.ts`
- Create: `docs/.vitepress/theme/components/MPromptLibrary.vue`
- Create: `docs/.vitepress/theme/components/MPromptFilterTabs.vue`
- Create: `docs/.vitepress/theme/components/MPromptCard.vue`
- Create: `docs/.vitepress/theme/components/MPromptDialog.vue`
- Modify: `package.json`
- Modify: `docs/index.md`
- Modify: `docs/.vitepress/configs/nav.ts`
- Modify: `docs/.vitepress/configs/sidebar.ts`

### Responsibility Notes

- `docs/AI/prompts/data.ts`: 提示词库的模型元数据、分类元数据、案例数据。
- `docs/.vitepress/theme/composables/usePromptLibrary.ts`: 模型可用性、分类生成、案例过滤等纯逻辑。
- `docs/.vitepress/theme/components/MPromptFilterTabs.vue`: 通用横向标签切换组件，给模型层和分类层共用。
- `docs/.vitepress/theme/components/MPromptCard.vue`: 单张图片卡片，负责缩略图、标题和标签展示。
- `docs/.vitepress/theme/components/MPromptDialog.vue`: 详情弹窗，负责大图、中英双语提示词与来源说明。
- `docs/.vitepress/theme/components/MPromptLibrary.vue`: 页面主组件，负责串联筛选状态、卡片列表、空状态和弹窗。
- `docs/AI/prompts/index.md` + `docs/AI/prompts/index.scss`: 页面壳和局部样式。
- `tests/prompt-library/*.spec.ts`: 纯逻辑、交互组件和站点接线的回归测试。

### Task 1: 补齐最小测试基建

**Files:**
- Create: `vitest.config.ts`
- Modify: `package.json`
- Test: `tests/prompt-library/promptLibrary.data.spec.ts`

- [ ] **Step 1: 先写一个会失败的 smoke test，逼着仓库接入 Vitest**

```ts
// tests/prompt-library/promptLibrary.data.spec.ts
import { describe, expect, it } from 'vitest'

describe('prompt library test harness', () => {
  it('runs Vitest in jsdom mode', () => {
    expect(document.createElement('div').tagName).toBe('DIV')
  })
})
```

- [ ] **Step 2: 运行测试，确认当前仓库还没有测试命令**

Run: `pnpm test`

Expected:

```text
ERR_PNPM_RECURSIVE_EXEC_FIRST_FAIL Command "test" not found
```

- [ ] **Step 3: 添加 Vitest、jsdom、Vue Test Utils 与测试脚本**

```json
// package.json
{
  "scripts": {
    "dev": "vitepress dev docs --port=8732",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs --port 8730 --host",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "devDependencies": {
    "@vue/test-utils": "^2.4.6",
    "jsdom": "^26.1.0",
    "vitest": "^2.1.8"
  }
}
```

```ts
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.spec.ts'],
  },
})
```

- [ ] **Step 4: 重新运行测试，确认测试基建生效**

Run: `pnpm test tests/prompt-library/promptLibrary.data.spec.ts`

Expected:

```text
✓ tests/prompt-library/promptLibrary.data.spec.ts (1 test)
```

- [ ] **Step 5: 提交这一小段基础设施**

```bash
git add package.json pnpm-lock.yaml vitest.config.ts tests/prompt-library/promptLibrary.data.spec.ts
git commit -m "chore: add vitest support for prompt library"
```

### Task 2: 搭好数据契约与筛选纯逻辑

**Files:**
- Create: `docs/AI/prompts/data.ts`
- Create: `docs/.vitepress/theme/composables/usePromptLibrary.ts`
- Modify: `tests/prompt-library/promptLibrary.data.spec.ts`
- Test: `tests/prompt-library/promptLibrary.data.spec.ts`

- [ ] **Step 1: 先写会失败的数据与过滤测试**

```ts
// tests/prompt-library/promptLibrary.data.spec.ts
import { describe, expect, it } from 'vitest'

import {
  PROMPT_LIBRARY_ITEMS,
  PROMPT_LIBRARY_MODELS,
} from '../../docs/AI/prompts/data'
import {
  filterPromptItems,
  getPromptCategories,
  isModelAvailable,
} from '../../docs/.vitepress/theme/composables/usePromptLibrary'

describe('prompt library data', () => {
  it('keeps GPT image 2 available and nano banana 2 as coming soon', () => {
    expect(isModelAvailable('gpt-image-2', PROMPT_LIBRARY_MODELS)).toBe(true)
    expect(isModelAvailable('nano-banana-2', PROMPT_LIBRARY_MODELS)).toBe(false)
  })

  it('builds the default category list for GPT image 2', () => {
    expect(getPromptCategories('gpt-image-2', PROMPT_LIBRARY_ITEMS)).toEqual([
      'all',
      'portrait',
      'landscape',
      'poster',
      'manga',
      'infographic',
      'brand-visual',
      'education',
      'layout-experiment',
    ])
  })

  it('filters only poster examples for GPT image 2', () => {
    const result = filterPromptItems('gpt-image-2', 'poster', PROMPT_LIBRARY_ITEMS)
    expect(result.map((item) => item.id)).toEqual([
      'gpt-image-2-kizuna-matcha-poster',
      'gpt-image-2-editorial-poster',
    ])
  })
})
```

- [ ] **Step 2: 运行测试，确认缺少数据模块与 composable**

Run: `pnpm test tests/prompt-library/promptLibrary.data.spec.ts`

Expected:

```text
FAIL  Cannot find module '../../docs/AI/prompts/data'
```

- [ ] **Step 3: 写最小可用的数据结构和过滤逻辑**

```ts
// docs/AI/prompts/data.ts
export type PromptModelId = 'gpt-image-2' | 'nano-banana-2'
export type PromptCategoryId =
  | 'portrait'
  | 'landscape'
  | 'poster'
  | 'manga'
  | 'infographic'
  | 'brand-visual'
  | 'education'
  | 'layout-experiment'

export interface PromptLibraryModel {
  id: PromptModelId
  label: string
  available: boolean
  description: string
}

export interface PromptLibraryItem {
  id: string
  model: PromptModelId
  category: PromptCategoryId
  title: string
  image: string
  promptEn: string
  promptZh: string
  tags: string[]
  sourceTitle: string
  sourceUrl: string
  sourceDate: string
}

export const PROMPT_LIBRARY_MODELS: PromptLibraryModel[] = [
  {
    id: 'gpt-image-2',
    label: 'GPT image 2',
    available: true,
    description: 'OpenAI 官方文章精选案例',
  },
  {
    id: 'nano-banana-2',
    label: 'nano banana 2',
    available: false,
    description: '内容整理中',
  },
]

export const PROMPT_LIBRARY_ITEMS: PromptLibraryItem[] = [
  {
    id: 'gpt-image-2-coastal-portrait',
    model: 'gpt-image-2',
    category: 'portrait',
    title: '海边抓拍人像',
    image: '/ai-prompts/gpt-image-2/coastal-portrait.png',
    promptEn: 'A candid medium-format portrait on a windy beach...',
    promptZh: '一张在多风海边拍摄的中画幅抓拍人像照片……',
    tags: ['人像', '摄影'],
    sourceTitle: 'Introducing ChatGPT Images 2.0',
    sourceUrl: 'https://openai.com/index/introducing-chatgpt-images-2-0/',
    sourceDate: '2026-04-21',
  },
  {
    id: 'gpt-image-2-kizuna-matcha-poster',
    model: 'gpt-image-2',
    category: 'poster',
    title: '抹茶品牌活动海报',
    image: '/ai-prompts/gpt-image-2/kizuna-matcha-poster.png',
    promptEn: 'Design a launch poster for Kizuna Matcha with elegant type...',
    promptZh: '为 Kizuna Matcha 设计一张新品发布海报，使用克制而精致的字体……',
    tags: ['海报', '品牌'],
    sourceTitle: 'Introducing ChatGPT Images 2.0',
    sourceUrl: 'https://openai.com/index/introducing-chatgpt-images-2-0/',
    sourceDate: '2026-04-21',
  },
  {
    id: 'gpt-image-2-editorial-poster',
    model: 'gpt-image-2',
    category: 'poster',
    title: '编辑感字体海报',
    image: '/ai-prompts/gpt-image-2/editorial-poster.png',
    promptEn: 'Create an editorial fashion poster with strong grid typography...',
    promptZh: '生成一张带有强网格排版和大片留白的编辑感时尚海报……',
    tags: ['海报', '版式'],
    sourceTitle: 'Introducing ChatGPT Images 2.0',
    sourceUrl: 'https://openai.com/index/introducing-chatgpt-images-2-0/',
    sourceDate: '2026-04-21',
  },
]
```

```ts
// docs/.vitepress/theme/composables/usePromptLibrary.ts
import type { PromptCategoryId, PromptLibraryItem, PromptLibraryModel, PromptModelId } from '../../../AI/prompts/data'

const CATEGORY_ORDER: Array<'all' | PromptCategoryId> = [
  'all',
  'portrait',
  'landscape',
  'poster',
  'manga',
  'infographic',
  'brand-visual',
  'education',
  'layout-experiment',
]

export function isModelAvailable(modelId: PromptModelId, models: PromptLibraryModel[]) {
  return models.some((model) => model.id === modelId && model.available)
}

export function getPromptCategories(modelId: PromptModelId, items: PromptLibraryItem[]) {
  const active = new Set(
    items.filter((item) => item.model === modelId).map((item) => item.category),
  )

  return CATEGORY_ORDER.filter((category) => category === 'all' || active.has(category))
}

export function filterPromptItems(
  modelId: PromptModelId,
  categoryId: 'all' | PromptCategoryId,
  items: PromptLibraryItem[],
) {
  return items.filter((item) => {
    if (item.model !== modelId) return false
    return categoryId === 'all' ? true : item.category === categoryId
  })
}
```

- [ ] **Step 4: 补齐首版剩余案例数据并让测试通过**

在 `PROMPT_LIBRARY_ITEMS` 中补齐首版案例，并把 OpenAI 官方文章里的对应图片保存到 `docs/public/ai-prompts/gpt-image-2/`，文件名固定为：

- `coastal-portrait.png`
- `cinematic-cliffscape.png`
- `kizuna-matcha-poster.png`
- `editorial-poster.png`
- `japanese-fantasy-manga.png`
- `wolves-infographic.png`
- `product-campaign-board.png`
- `cantor-diagonal-diagram.png`
- `2025-trends-layout.png`

同时让每个默认分类至少有 1 条案例，其中：

- `portrait`: `gpt-image-2-coastal-portrait`
- `landscape`: `gpt-image-2-cinematic-cliffscape`
- `poster`: `gpt-image-2-kizuna-matcha-poster`, `gpt-image-2-editorial-poster`
- `manga`: `gpt-image-2-japanese-fantasy-manga`
- `infographic`: `gpt-image-2-wolves-infographic`
- `brand-visual`: `gpt-image-2-product-campaign-board`
- `education`: `gpt-image-2-cantor-diagonal-diagram`
- `layout-experiment`: `gpt-image-2-2025-trends-layout`

Run: `pnpm test tests/prompt-library/promptLibrary.data.spec.ts`

Expected:

```text
✓ tests/prompt-library/promptLibrary.data.spec.ts (3 tests)
```

- [ ] **Step 5: 提交数据与纯逻辑**

```bash
git add docs/AI/prompts/data.ts docs/.vitepress/theme/composables/usePromptLibrary.ts tests/prompt-library/promptLibrary.data.spec.ts
git commit -m "feat: add prompt library data and filtering"
```

### Task 3: 实现筛选栏与主列表组件

**Files:**
- Create: `docs/.vitepress/theme/components/MPromptFilterTabs.vue`
- Create: `docs/.vitepress/theme/components/MPromptLibrary.vue`
- Create: `tests/prompt-library/MPromptLibrary.spec.ts`
- Test: `tests/prompt-library/MPromptLibrary.spec.ts`

- [ ] **Step 1: 先写失败的交互测试，覆盖模型切换、分类过滤和空状态**

```ts
// tests/prompt-library/MPromptLibrary.spec.ts
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import MPromptLibrary from '../../docs/.vitepress/theme/components/MPromptLibrary.vue'
import {
  PROMPT_LIBRARY_ITEMS,
  PROMPT_LIBRARY_MODELS,
} from '../../docs/AI/prompts/data'

describe('MPromptLibrary', () => {
  it('defaults to GPT image 2 and renders its cards', () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    expect(wrapper.text()).toContain('GPT image 2')
    expect(wrapper.findAll('[data-test="prompt-card"]').length).toBeGreaterThan(0)
  })

  it('filters cards when a category tab is clicked', async () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    await wrapper.get('[data-test="category-tab-poster"]').trigger('click')

    const titles = wrapper.findAll('[data-test="prompt-card-title"]').map((node) => node.text())
    expect(titles).toEqual(['抹茶品牌活动海报', '编辑感字体海报'])
  })

  it('shows the coming-soon empty state for nano banana 2', async () => {
    const wrapper = mount(MPromptLibrary, {
      props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
    })

    await wrapper.get('[data-test="model-tab-nano-banana-2"]').trigger('click')

    expect(wrapper.text()).toContain('该模型内容整理中，敬请期待')
  })
})
```

- [ ] **Step 2: 运行测试，确认主列表组件尚不存在**

Run: `pnpm test tests/prompt-library/MPromptLibrary.spec.ts`

Expected:

```text
FAIL  Cannot find module '../../docs/.vitepress/theme/components/MPromptLibrary.vue'
```

- [ ] **Step 3: 先实现通用标签组件，再实现主列表组件的最小交互**

```vue
<!-- docs/.vitepress/theme/components/MPromptFilterTabs.vue -->
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
      @click="emit('update:modelValue', item.id)"
    >
      {{ item.label }}
    </button>
  </div>
</template>
```

```vue
<!-- docs/.vitepress/theme/components/MPromptLibrary.vue -->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import type {
  PromptCategoryId,
  PromptLibraryItem,
  PromptLibraryModel,
  PromptModelId,
} from '../../../AI/prompts/data'
import { filterPromptItems, getPromptCategories, isModelAvailable } from '../composables/usePromptLibrary'
import MPromptFilterTabs from './MPromptFilterTabs.vue'

const props = defineProps<{
  models: PromptLibraryModel[]
  items: PromptLibraryItem[]
}>()

const activeModel = ref<PromptModelId>(props.models[0]?.id ?? 'gpt-image-2')
const activeCategory = ref<'all' | PromptCategoryId>('all')

watch(activeModel, () => {
  activeCategory.value = 'all'
})

const modelTabs = computed(() =>
  props.models.map((model) => ({
    id: model.id,
    label: model.label,
    disabled: false,
  })),
)

const categoryTabs = computed(() =>
  getPromptCategories(activeModel.value, props.items).map((category) => ({
    id: category,
    label: category,
  })),
)

const visibleItems = computed(() =>
  filterPromptItems(activeModel.value, activeCategory.value, props.items),
)

const activeModelAvailable = computed(() =>
  isModelAvailable(activeModel.value, props.models),
)
</script>

<template>
  <section class="m-prompt-library">
    <MPromptFilterTabs
      v-model="activeModel"
      :items="modelTabs"
      test-prefix="model-tab"
    />

    <MPromptFilterTabs
      v-if="activeModelAvailable"
      v-model="activeCategory"
      :items="categoryTabs"
      test-prefix="category-tab"
    />

    <p v-if="!activeModelAvailable" class="empty-state">该模型内容整理中，敬请期待</p>

    <div v-else class="grid">
      <article
        v-for="item in visibleItems"
        :key="item.id"
        data-test="prompt-card"
      >
        <h3 data-test="prompt-card-title">{{ item.title }}</h3>
      </article>
    </div>
  </section>
</template>
```

- [ ] **Step 4: 跑通交互测试，再把标签文案从 slug 映射成中文**

在 `MPromptLibrary.vue` 中补一层 `CATEGORY_LABELS`：

```ts
const CATEGORY_LABELS: Record<string, string> = {
  all: '全部',
  portrait: '人像',
  landscape: '风景',
  poster: '海报',
  manga: '漫画',
  infographic: '信息图',
  'brand-visual': '品牌视觉',
  education: '教育内容',
  'layout-experiment': '版式实验',
}
```

并把 `categoryTabs` 改为：

```ts
const categoryTabs = computed(() =>
  getPromptCategories(activeModel.value, props.items).map((category) => ({
    id: category,
    label: CATEGORY_LABELS[category],
  })),
)
```

Run: `pnpm test tests/prompt-library/MPromptLibrary.spec.ts`

Expected:

```text
✓ tests/prompt-library/MPromptLibrary.spec.ts (3 tests)
```

- [ ] **Step 5: 提交筛选层**

```bash
git add docs/.vitepress/theme/components/MPromptFilterTabs.vue docs/.vitepress/theme/components/MPromptLibrary.vue tests/prompt-library/MPromptLibrary.spec.ts
git commit -m "feat: add prompt library filtering UI"
```

### Task 4: 把卡片与弹窗详情补完整

**Files:**
- Create: `docs/.vitepress/theme/components/MPromptCard.vue`
- Create: `docs/.vitepress/theme/components/MPromptDialog.vue`
- Modify: `docs/.vitepress/theme/components/MPromptLibrary.vue`
- Modify: `tests/prompt-library/MPromptLibrary.spec.ts`
- Test: `tests/prompt-library/MPromptLibrary.spec.ts`

- [ ] **Step 1: 先写失败测试，覆盖卡片点击打开弹窗与双语提示词并列**

```ts
// tests/prompt-library/MPromptLibrary.spec.ts
it('opens a detail dialog when a card is clicked', async () => {
  const wrapper = mount(MPromptLibrary, {
    props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
  })

  await wrapper.get('[data-test="prompt-card"]').trigger('click')

  expect(wrapper.get('[data-test="prompt-dialog-title"]').text()).toContain('海边抓拍人像')
  expect(wrapper.text()).toContain('English Prompt')
  expect(wrapper.text()).toContain('中文提示词')
})

it('closes the dialog when the close button is clicked', async () => {
  const wrapper = mount(MPromptLibrary, {
    props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
  })

  await wrapper.get('[data-test="prompt-card"]').trigger('click')
  await wrapper.get('[data-test="prompt-dialog-close"]').trigger('click')

  expect(wrapper.find('[data-test="prompt-dialog"]').exists()).toBe(false)
})
```

- [ ] **Step 2: 运行测试，确认弹窗交互还未实现**

Run: `pnpm test tests/prompt-library/MPromptLibrary.spec.ts`

Expected:

```text
FAIL  Unable to find [data-test="prompt-dialog-title"]
```

- [ ] **Step 3: 增加卡片组件、弹窗组件，并把主列表改成组合式实现**

```vue
<!-- docs/.vitepress/theme/components/MPromptCard.vue -->
<script setup lang="ts">
import type { PromptLibraryItem } from '../../../AI/prompts/data'

defineProps<{ item: PromptLibraryItem }>()
const emit = defineEmits<{ select: [item: PromptLibraryItem] }>()
</script>

<template>
  <article class="m-prompt-card" data-test="prompt-card" @click="emit('select', item)">
    <img class="cover" :src="item.image" :alt="item.title" />
    <div class="body">
      <h3 data-test="prompt-card-title">{{ item.title }}</h3>
      <div class="tags">
        <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </article>
</template>
```

```vue
<!-- docs/.vitepress/theme/components/MPromptDialog.vue -->
<script setup lang="ts">
import type { PromptLibraryItem } from '../../../AI/prompts/data'

defineProps<{ item: PromptLibraryItem | null }>()
const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <div v-if="item" class="m-prompt-dialog" data-test="prompt-dialog">
    <div class="overlay" @click="emit('close')" />
    <div class="panel">
      <button data-test="prompt-dialog-close" @click="emit('close')">关闭</button>
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
```

```vue
<!-- docs/.vitepress/theme/components/MPromptLibrary.vue -->
<script setup lang="ts">
// 在现有逻辑上新增
import MPromptCard from './MPromptCard.vue'
import MPromptDialog from './MPromptDialog.vue'

const activeItem = ref<PromptLibraryItem | null>(null)
</script>

<template>
  <section class="m-prompt-library">
    <!-- 现有 tab 保持不动 -->

    <div v-else class="grid">
      <MPromptCard
        v-for="item in visibleItems"
        :key="item.id"
        :item="item"
        @select="activeItem = item"
      />
    </div>

    <MPromptDialog :item="activeItem" @close="activeItem = null" />
  </section>
</template>
```

- [ ] **Step 4: 跑通测试，并补上无结果空状态**

在 `MPromptLibrary.vue` 中加入：

```vue
<p v-if="activeModelAvailable && visibleItems.length === 0" class="empty-state">
  该分类下暂未收录案例
</p>
```

同时把卡片栅格改成：

```vue
<div v-else-if="visibleItems.length > 0" class="grid">
  <!-- cards -->
</div>
```

Run: `pnpm test tests/prompt-library/MPromptLibrary.spec.ts`

Expected:

```text
✓ tests/prompt-library/MPromptLibrary.spec.ts (5 tests)
```

- [ ] **Step 5: 提交卡片与弹窗**

```bash
git add docs/.vitepress/theme/components/MPromptCard.vue docs/.vitepress/theme/components/MPromptDialog.vue docs/.vitepress/theme/components/MPromptLibrary.vue tests/prompt-library/MPromptLibrary.spec.ts
git commit -m "feat: add prompt library cards and dialog"
```

### Task 5: 接上页面、首页入口和站点导航

**Files:**
- Create: `docs/AI/prompts/index.md`
- Create: `docs/AI/prompts/index.scss`
- Modify: `docs/index.md`
- Modify: `docs/.vitepress/configs/nav.ts`
- Modify: `docs/.vitepress/configs/sidebar.ts`
- Create: `tests/prompt-library/siteIntegration.spec.ts`
- Test: `tests/prompt-library/siteIntegration.spec.ts`

- [ ] **Step 1: 先写失败测试，锁定首页入口、导航和侧边栏接线**

```ts
// tests/prompt-library/siteIntegration.spec.ts
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { describe, expect, it } from 'vitest'

import { nav } from '../../docs/.vitepress/configs/nav'
import { sidebar } from '../../docs/.vitepress/configs/sidebar'

const homeSource = readFileSync(resolve(__dirname, '../../docs/index.md'), 'utf-8')

describe('prompt library site integration', () => {
  it('adds a homepage card that links to /AI/prompts/', () => {
    expect(homeSource).toContain('AI 图片提示词库')
    expect(homeSource).toContain('link: /AI/prompts/')
  })

  it('adds the prompt library to the AI nav menu', () => {
    const aiNav = nav.find((item) => item.text === 'AI相关')
    expect(aiNav?.items?.some((item) => item.text === 'AI图片提示词库' && item.link === '/AI/prompts/')).toBe(true)
  })

  it('adds a sidebar section for /AI/prompts/', () => {
    expect(sidebar['/AI/prompts/'][0].items).toEqual([
      { text: 'AI 图片提示词库', link: '/AI/prompts/' },
    ])
  })
})
```

- [ ] **Step 2: 运行测试，确认站点接线还没完成**

Run: `pnpm test tests/prompt-library/siteIntegration.spec.ts`

Expected:

```text
FAIL  expected false to be true
```

- [ ] **Step 3: 新建页面并接入首页、导航和侧边栏**

```md
<!-- docs/AI/prompts/index.md -->
---
layoutClass: m-prompts-layout
outline: [2, 3]
---

<script setup lang="ts">
import MPromptLibrary from '../../.vitepress/theme/components/MPromptLibrary.vue'
import { PROMPT_LIBRARY_ITEMS, PROMPT_LIBRARY_MODELS } from './data'
</script>

<style src="./index.scss"></style>

# AI 图片提示词库

::: tip 项目动态
已上线 GPT image 2 首批案例，来源于 OpenAI《Introducing ChatGPT Images 2.0》（2026-04-21） · nano banana 2 整理中
:::

<MPromptLibrary :models="PROMPT_LIBRARY_MODELS" :items="PROMPT_LIBRARY_ITEMS" />
```

```scss
/* docs/AI/prompts/index.scss */
.m-prompts-layout {
  --vp-layout-max-width: 1660px;

  .container,
  .content-container,
  .content {
    max-width: 100% !important;
  }

  .vp-doc h1 {
    margin-bottom: 8px;
  }

  .custom-block {
    margin-bottom: 20px;
  }
}
```

```ts
// docs/.vitepress/configs/nav.ts
{
  text: 'AI相关',
  items: [
    { text: 'AI日报', link: '/AI/daily/index' },
    { text: 'AI周报', link: '/AI/weekly/index' },
    { text: 'AI工具手册', link: '/AI/tools/' },
    { text: 'AI图片提示词库', link: '/AI/prompts/' },
  ],
}
```

```ts
// docs/.vitepress/configs/sidebar.ts
'/AI/prompts/': [
  {
    text: 'AI 图片提示词库',
    collapsed: false,
    items: [{ text: 'AI 图片提示词库', link: '/AI/prompts/' }],
  },
],
```

```md
<!-- docs/index.md -->
- icon: 🖼️
  title: AI 图片提示词库
  details: 按模型与分类整理图片提示词案例<br />支持查看样式图、中英双语提示词与来源说明
  link: /AI/prompts/
  linkText: 进入图库
```

- [ ] **Step 4: 运行站点接线测试并做一次全量单测**

Run: `pnpm test`

Expected:

```text
✓ tests/prompt-library/promptLibrary.data.spec.ts
✓ tests/prompt-library/MPromptLibrary.spec.ts
✓ tests/prompt-library/siteIntegration.spec.ts
```

- [ ] **Step 5: 提交站点接入**

```bash
git add docs/AI/prompts/index.md docs/AI/prompts/index.scss docs/index.md docs/.vitepress/configs/nav.ts docs/.vitepress/configs/sidebar.ts tests/prompt-library/siteIntegration.spec.ts
git commit -m "feat: wire prompt library into the site"
```

### Task 6: 打磨样式、跑构建并做手工验收

**Files:**
- Modify: `docs/.vitepress/theme/components/MPromptFilterTabs.vue`
- Modify: `docs/.vitepress/theme/components/MPromptCard.vue`
- Modify: `docs/.vitepress/theme/components/MPromptDialog.vue`
- Modify: `docs/.vitepress/theme/components/MPromptLibrary.vue`
- Modify: `docs/AI/prompts/index.scss`
- Test: `pnpm test`

- [ ] **Step 1: 先补一条针对弹窗文案和标签文案的回归测试**

```ts
// tests/prompt-library/MPromptLibrary.spec.ts
it('shows Chinese labels for categories and source metadata inside the dialog', async () => {
  const wrapper = mount(MPromptLibrary, {
    props: { models: PROMPT_LIBRARY_MODELS, items: PROMPT_LIBRARY_ITEMS },
  })

  expect(wrapper.text()).toContain('全部')
  expect(wrapper.text()).toContain('海报')

  await wrapper.get('[data-test="prompt-card"]').trigger('click')
  expect(wrapper.text()).toContain('Introducing ChatGPT Images 2.0')
  expect(wrapper.text()).toContain('2026-04-21')
})
```

- [ ] **Step 2: 运行测试，确认样式打磨前行为仍然稳定**

Run: `pnpm test tests/prompt-library/MPromptLibrary.spec.ts`

Expected:

```text
✓ tests/prompt-library/MPromptLibrary.spec.ts
```

- [ ] **Step 3: 按简约风格补足最终样式**

```vue
<!-- docs/.vitepress/theme/components/MPromptCard.vue -->
<style scoped lang="scss">
.m-prompt-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  background: var(--vp-c-bg-alt);
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--vp-c-brand);
    box-shadow: var(--vp-shadow-2);
  }
}

.cover {
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
</style>
```

```vue
<!-- docs/.vitepress/theme/components/MPromptDialog.vue -->
<style scoped lang="scss">
.panel {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  width: min(1100px, calc(100vw - 32px));
  max-height: calc(100vh - 32px);
  padding: 24px;
  overflow: auto;
  border-radius: 20px;
  background: var(--vp-c-bg);
}

.prompts {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 960px) {
  .panel,
  .prompts {
    grid-template-columns: 1fr;
  }
}
</style>
```

```vue
<!-- docs/.vitepress/theme/components/MPromptLibrary.vue -->
<style scoped lang="scss">
.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

.empty-state {
  padding: 32px 20px;
  border: 1px dashed var(--vp-c-border);
  border-radius: 16px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
}
</style>
```

- [ ] **Step 4: 跑单测、构建和本地手工验收**

Run:

```bash
pnpm test
pnpm build
pnpm dev
```

Expected:

```text
✓ all prompt-library tests pass
✓ vitepress build completes without errors
✓ http://localhost:8732/AI/prompts/ loads with model tabs, category tabs, cards, dialog, and nano banana 2 empty state
```

Manual smoke checklist:

- 首页能看到 `AI 图片提示词库` 入口卡片
- `/AI/prompts/` 顶部出现 `项目动态`
- 默认进入 `GPT image 2`
- 点击 `海报` 只剩海报卡片
- 点击卡片后弹出大图 + `English Prompt` + `中文提示词`
- 点击 `nano banana 2` 出现整理中说明
- 375px 宽度下弹窗改为单列布局

- [ ] **Step 5: 提交最终样式与验收结果**

```bash
git add docs/.vitepress/theme/components/MPromptFilterTabs.vue docs/.vitepress/theme/components/MPromptCard.vue docs/.vitepress/theme/components/MPromptDialog.vue docs/.vitepress/theme/components/MPromptLibrary.vue docs/AI/prompts/index.scss tests/prompt-library/MPromptLibrary.spec.ts
git commit -m "feat: polish prompt library experience"
```

---

## Self-Review

### Spec Coverage

- 首页新增入口卡片: Task 5
- 独立页面 `/AI/prompts/`: Task 5
- 项目动态说明块: Task 5
- 模型标签与横向分类: Task 3
- 图片卡片网格: Task 4
- 中英双语详情弹窗: Task 4
- `nano banana 2` 占位态: Task 2, Task 3
- 简约样式与移动端适配: Task 6
- 基础验证与构建回归: Task 6

### Placeholder Scan

- 没有 `TODO`、`TBD`、`implement later`
- 所有任务都给出了实际文件路径、命令和代码骨架
- 数据补齐任务列出了首版要落地的 8 个案例 id，避免执行时临时起名

### Type Consistency

- 模型 id 统一为 `gpt-image-2`、`nano-banana-2`
- 分类 id 统一为 `portrait`、`landscape`、`poster`、`manga`、`infographic`、`brand-visual`、`education`、`layout-experiment`
- `MPromptLibrary.vue`、测试文件和 `usePromptLibrary.ts` 均使用同一组模型与分类命名

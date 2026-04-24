import { defineComponent, ref, mergeProps, useSSRContext, computed, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const WEEKLY_INDEX = [
  { weekNumber: 1, dateRange: "2026.02.09 - 2026.02.15", title: "第一期" }
];
const NAV_DATA = [
  {
    title: "常用工具",
    items: [
      {
        icon: "https://tinypng.com/images/apple-touch-icon.png",
        title: "TinyPNG",
        desc: "在线图片压缩工具",
        link: "https://tinypng.com",
        weekNumber: 1
      },
      {
        icon: "https://devtool.tech/logo.svg",
        title: "开发者武器库",
        desc: "开发者武器库，做开发者最专业最好用的专业工具箱",
        link: "https://devtool.tech",
        weekNumber: 1
      },
      {
        icon: "https://tool.lu/favicon.ico",
        title: "在线工具",
        desc: "开发人员的工具箱",
        link: "https://tool.lu",
        weekNumber: 1
      },
      {
        icon: "/icons/json-cn.ico",
        title: "Json 中文网",
        desc: "JSON 在线解析及格式化验证",
        link: "https://www.json.cn",
        weekNumber: 1
      }
    ]
  },
  {
    title: "摸鱼专用",
    items: [
      {
        icon: "https://momoyu.cc/assets/logo-1-DXR4uO3F.png",
        title: "摸摸鱼热榜",
        desc: "聚合每日热门、搞笑、有趣、适合摸鱼的资讯",
        link: "https://momoyu.cc",
        weekNumber: 1
      }
    ]
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MNavFilter",
  __ssrInlineRender: true,
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const currentMode = ref("category");
    const modes = [
      { value: "category", label: "按功能分类" },
      { value: "weekly", label: "按期数查看" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-nav-filter" }, _attrs))} data-v-7768acba><div class="filter-tabs" data-v-7768acba><!--[-->`);
      ssrRenderList(modes, (mode) => {
        _push(`<button class="${ssrRenderClass(["tab-button", { active: currentMode.value === mode.value }])}" data-v-7768acba>${ssrInterpolate(mode.label)}</button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/MNavFilter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MNavFilter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7768acba"]]);
const __pageData = JSON.parse('{"title":"工具导航","description":"","frontmatter":{"layoutClass":"m-nav-layout","outline":[2,3,4]},"headers":[],"relativePath":"nav/index.md","filePath":"nav/index.md","lastUpdated":1773330734000}');
const __default__ = { name: "nav/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const STORAGE_KEY = "recentlyUsedTools";
    const viewMode = ref("category");
    const getRecentlyUsedLinks = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    };
    function recordAccess(link) {
      const current = getRecentlyUsedLinks();
      const filtered = current.filter((l) => l !== link);
      filtered.unshift(link);
      const toStore = filtered.slice(0, 5);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
    }
    const recentlyUsed = computed(() => {
      const links = getRecentlyUsedLinks();
      const result = [];
      const allTools = [];
      NAV_DATA.forEach((category) => {
        category.items.forEach((item) => {
          allTools.push(item);
        });
      });
      links.forEach((link) => {
        const item = allTools.find((tool) => tool.link === link);
        if (item) {
          result.push(item);
        }
      });
      return result;
    });
    const weeklyData = computed(() => {
      const result = [];
      WEEKLY_INDEX.forEach((week) => {
        const items = [];
        NAV_DATA.forEach((category) => {
          category.items.forEach((item) => {
            if (item.weekNumber === week.weekNumber) {
              items.push(item);
            }
          });
        });
        if (items.length > 0) {
          result.push({
            title: `${week.title} (${week.dateRange})`,
            items
          });
        }
      });
      return result;
    });
    const displayData = computed(() => {
      return viewMode.value === "category" ? NAV_DATA : weeklyData.value;
    });
    function handleModeChange(mode) {
      viewMode.value = mode;
    }
    function handleToolClick(link) {
      recordAccess(link);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MNavLinks = resolveComponent("MNavLinks");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="工具导航" tabindex="-1">工具导航 <a class="header-anchor" href="#工具导航" aria-label="Permalink to &quot;工具导航&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">项目动态</p><p>已连续更新 10 天 · 本项目纯属 <strong>用爱发电</strong> ❤️ · 所有内容均由 <strong>陈老板</strong> 亲自筛选、测试、整理</p></div>`);
      _push(ssrRenderComponent(MNavFilter, { onChange: handleModeChange }, null, _parent));
      if (recentlyUsed.value.length > 0) {
        _push(ssrRenderComponent(_component_MNavLinks, {
          title: "最近使用",
          items: recentlyUsed.value,
          onItemClick: handleToolClick
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(displayData.value, ({ title, items }) => {
        _push(ssrRenderComponent(_component_MNavLinks, {
          key: title,
          title,
          items,
          onItemClick: handleToolClick
        }, null, _parent));
      });
      _push(`<!--]--><br></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("nav/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};

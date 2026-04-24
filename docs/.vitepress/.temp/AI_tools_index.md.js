import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"AI工具手册","description":"","frontmatter":{},"headers":[],"relativePath":"AI/tools/index.md","filePath":"AI/tools/index.md","lastUpdated":1774446389000}');
const _sfc_main = { name: "AI/tools/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ai工具手册" tabindex="-1">AI工具手册 <a class="header-anchor" href="#ai工具手册" aria-label="Permalink to &quot;AI工具手册&quot;">​</a></h1><p>这里是 AI 工具内容的统一入口，之后统一收纳两类内容：</p><ul><li><code>每周工具速递</code>：每周发现、筛选、总结值得关注的新工具</li><li><code>AI工具使用手册</code>：围绕具体工具整理使用方法、场景打法与避坑经验</li></ul><p>如果你想先看每周更新，可以直接从左侧进入 <code>每周工具速递</code>。<br> 如果你更关心怎么把工具真正用起来，就看 <code>AI工具使用手册</code>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("AI/tools/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

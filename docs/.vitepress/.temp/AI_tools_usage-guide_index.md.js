import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"AI工具使用手册","description":"","frontmatter":{},"headers":[],"relativePath":"AI/tools/usage-guide/index.md","filePath":"AI/tools/usage-guide/index.md","lastUpdated":null}');
const _sfc_main = { name: "AI/tools/usage-guide/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ai工具使用手册" tabindex="-1">AI工具使用手册 <a class="header-anchor" href="#ai工具使用手册" aria-label="Permalink to &quot;AI工具使用手册&quot;">​</a></h1><p>这里专门整理 AI 工具的使用方法与实战经验。</p><p>后续会重点覆盖：</p><ul><li>常见 AI 工具的上手指南</li><li>真实工作流中的使用方式</li><li>提效技巧、避坑建议和配置经验</li></ul><p>如果说 <code>每周工具速递</code> 负责“发现工具”，那这里负责“把工具用明白”。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("AI/tools/usage-guide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

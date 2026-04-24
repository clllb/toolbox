import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"每周工具速递","description":"","frontmatter":{},"headers":[],"relativePath":"AI/tools/weekly-tools/index.md","filePath":"AI/tools/weekly-tools/index.md","lastUpdated":null}');
const _sfc_main = { name: "AI/tools/weekly-tools/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="每周工具速递" tabindex="-1">每周工具速递 <a class="header-anchor" href="#每周工具速递" aria-label="Permalink to &quot;每周工具速递&quot;">​</a></h1><p>这里收录每周值得关注的 AI 工具速递内容。</p><p>你可以在这里看到：</p><ul><li>新工具发现与简评</li><li>使用场景与适合人群</li><li>值不值得收藏与继续跟进</li></ul><p>目标不是“工具越多越好”，而是帮你更快找到真正有用的工具。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("AI/tools/weekly-tools/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

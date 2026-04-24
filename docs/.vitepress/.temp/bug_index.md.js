import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"公众号杂谈","description":"","frontmatter":{},"headers":[],"relativePath":"bug/index.md","filePath":"bug/index.md","lastUpdated":1773330734000}');
const _sfc_main = { name: "bug/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="公众号杂谈" tabindex="-1">公众号杂谈 <a class="header-anchor" href="#公众号杂谈" aria-label="Permalink to &quot;公众号杂谈&quot;">​</a></h1><p>这里记录技术实践、工具体验和一些值得展开聊聊的内容。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("bug/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

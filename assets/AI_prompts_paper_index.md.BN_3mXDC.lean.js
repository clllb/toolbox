import{M as y,a as x,b as R}from"./chunks/index.scss_vue_type_style_index_0_src_true_lang.DZTrV2ka.js";import{d as I,p as g,q as A,h,c as m,o as c,G as f,b as w,e as M,F as U,B as C,_ as D,j as d,a as S,k as _}from"./chunks/framework.BU14wsQo.js";const T=["写作","润色","翻译","综述","代码","分析"],V=[{id:"gpt-5-5",label:"GPT-5.5",available:!0,description:"论文辅助提示词"}],l="社区整理",i="https://github.com",p="2026-04-27",B=[{id:"paper-academic-polish",model:"gpt-5-5",title:"学术论文润色",promptEn:`Please polish the following academic text for clarity, coherence, and formal tone. Fix grammar and awkward phrasing but preserve my original meaning. Do not change the technical terms. Output the revised version only:

[ Paste your text here ]`,promptZh:`请对以下学术文本进行润色，提升表达的清晰度、连贯性和正式感。修正语法和生硬表达，但保留原始含义。不要修改专业术语。只输出修改后的版本：

[ 在此粘贴文本 ]`,tags:["润色","写作"],sourceTitle:l,sourceUrl:i,sourceDate:p},{id:"paper-literature-review",model:"gpt-5-5",title:"文献综述生成",promptEn:`I am writing a literature review on the topic of "[ Your Topic ]". Based on the following list of papers (titles and abstracts), help me:
1. Group them into 3-5 thematic categories
2. Write a 2-3 paragraph synthesis for each category comparing methods, findings, and limitations
3. Identify research gaps

Papers:
[ Paste paper list here ]`,promptZh:`我正在撰写关于「[ 你的主题 ]」的文献综述。根据以下论文列表（标题和摘要），请帮我：
1. 将它们分为 3-5 个主题类别
2. 为每个类别写 2-3 段综合分析，比较方法、发现和局限性
3. 指出研究空白

论文列表：
[ 在此粘贴论文列表 ]`,tags:["综述","写作"],sourceTitle:l,sourceUrl:i,sourceDate:p},{id:"paper-abstract-writing",model:"gpt-5-5",title:"论文摘要撰写",promptEn:`Write a structured abstract (250-300 words) for the following research paper draft. The abstract should include: Background, Methods, Key Results, and Conclusion. Use clear and concise academic language:

[ Paste your paper or outline here ]`,promptZh:`为以下研究论文草稿撰写结构化摘要（250-300 字）。摘要应包含：背景、方法、主要结果和结论。使用清晰简洁的学术语言：

[ 在此粘贴论文或大纲 ]`,tags:["写作","分析"],sourceTitle:l,sourceUrl:i,sourceDate:p},{id:"paper-translation-en-zh",model:"gpt-5-5",title:"论文英译中",promptEn:`Translate the following academic abstract from English to Chinese. Use standard Chinese academic terminology. Keep the translation accurate and formal. Preserve any citations as-is:

[ Paste English text here ]`,promptZh:`将以下学术摘要从英文翻译为中文。使用标准的中文术语。保持翻译准确、正式。引用保持原样：

[ 在此粘贴英文文本 ]`,tags:["翻译","写作"],sourceTitle:l,sourceUrl:i,sourceDate:p},{id:"paper-data-analysis-python",model:"gpt-5-5",title:"数据分析代码",promptEn:`I have a dataset in CSV format with the following columns: [ describe columns ]. I want to:
1. Clean missing values
2. Compute descriptive statistics
3. Generate a correlation heatmap
4. Run a simple linear regression of [ Y ] on [ X ]

Write Python code using pandas, matplotlib, and scikit-learn. Add inline comments explaining each step.`,promptZh:`我有一个 CSV 格式的数据集，包含以下列：[ 描述列名 ]。我想：
1. 清洗缺失值
2. 计算描述性统计
3. 生成相关性热力图
4. 对 [ Y ] 关于 [ X ] 做简单线性回归

请用 pandas、matplotlib 和 scikit-learn 编写 Python 代码，并添加行内注释解释每一步。`,tags:["代码","分析"],sourceTitle:l,sourceUrl:i,sourceDate:p},{id:"paper-experiment-design",model:"gpt-5-5",title:"实验设计建议",promptEn:`I want to design an experiment to test the hypothesis: "[ Your Hypothesis ]". Please suggest:
1. Independent and dependent variables
2. Control variables
3. Sample size estimation method
4. A step-by-step experimental procedure
5. Potential confounds and how to mitigate them`,promptZh:`我想设计一个实验来验证假设：「[ 你的假设 ]」。请给出以下建议：
1. 自变量和因变量
2. 控制变量
3. 样本量估算方法
4. 逐步的实验流程
5. 可能的混淆因素及应对方法`,tags:["写作","分析"],sourceTitle:l,sourceUrl:i,sourceDate:p},{id:"paper-related-work-section",model:"gpt-5-5",title:"相关工作章节",promptEn:`Help me write a "Related Work" section for my paper on "[ Your Topic ]". I have the following key references:

[ List 5-8 paper titles with brief notes on each ]

Write 3-4 paragraphs that: compare and contrast existing approaches, highlight how they differ from my work, and position my contribution.`,promptZh:`帮我写一篇关于「[ 你的主题 ]」的论文的"相关工作"章节。我有以下关键参考文献：

[ 列出 5-8 篇论文标题及简要笔记 ]

请写 3-4 段，对比现有方法、突出它们与我工作的区别，并定位我的贡献。`,tags:["综述","写作"],sourceTitle:l,sourceUrl:i,sourceDate:p},{id:"paper-response-to-reviewers",model:"gpt-5-5",title:"审稿意见回复",promptEn:`I received the following reviewer comments on my paper. Help me draft a professional point-by-point response. For each comment:
1. Acknowledge the concern
2. Explain what we changed (or politely defend our choice)
3. Indicate where in the revised manuscript the change was made

Reviewer comments:
[ Paste comments here ]`,promptZh:`我收到了以下审稿意见。帮我起草一份专业的逐条回复。对于每条意见：
1. 确认问题
2. 说明我们做了什么修改（或委婉地解释我们的选择）
3. 指出修改稿中改动所在的位置

审稿意见：
[ 在此粘贴意见 ]`,tags:["写作","润色"],sourceTitle:l,sourceUrl:i,sourceDate:p}];function L(n,a){return a.some(e=>e.id===n&&e.available)}function O(n,a){const e=new Set(a.filter(t=>t.model===n).flatMap(t=>t.tags).filter(t=>T.includes(t)));return["all",...T.filter(t=>e.has(t))]}function Y(n,a,e){return e.filter(t=>t.model!==n?!1:a==="all"?!0:t.tags.includes(a))}const Z={class:"m-prompt-library"},F={key:1,class:"empty-state"},G={key:2,class:"empty-state"},N={key:3,class:"grid"},W=I({__name:"MPaperPromptLibrary",props:{models:{},items:{}},setup(n){var b;const a=n,e=g(((b=a.models[0])==null?void 0:b.id)??"gpt-5-5"),t=g("all"),u=g(null);A(e,()=>{t.value="all",u.value=null});const E=h(()=>a.models.map(o=>({id:o.id,label:o.label,count:a.items.filter(r=>r.model===o.id).length,disabled:!1}))),k=h(()=>O(e.value,a.items).map(o=>({id:o,label:o==="all"?"全部":o}))),v=h(()=>Y(e.value,t.value,a.items)),P=h(()=>L(e.value,a.models));return(o,r)=>(c(),m("section",Z,[f(y,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=s=>e.value=s),items:E.value,"test-prefix":"model-tab"},null,8,["modelValue","items"]),P.value?(c(),w(y,{key:0,modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=s=>t.value=s),items:k.value,"test-prefix":"tag-tab"},null,8,["modelValue","items"])):M("",!0),P.value?v.value.length===0?(c(),m("p",G," 该分类下暂未收录案例 ")):(c(),m("div",N,[(c(!0),m(U,null,C(v.value,s=>(c(),w(x,{key:s.id,item:s,onSelect:z=>u.value=s},null,8,["item","onSelect"]))),128))])):(c(),m("p",F," 该模型内容整理中，敬请期待 ")),f(R,{item:u.value,onClose:r[2]||(r[2]=s=>u.value=null)},null,8,["item"])]))}}),H=D(W,[["__scopeId","data-v-05ab93d2"]]),j=JSON.parse('{"title":"AI 论文提示词库","description":"","frontmatter":{"layoutClass":"m-prompts-layout","outline":[2,3]},"headers":[],"relativePath":"AI/prompts/paper/index.md","filePath":"AI/prompts/paper/index.md","lastUpdated":1777279890000}'),$={name:"AI/prompts/paper/index.md"},q=I({...$,setup(n){return(a,e)=>(c(),m("div",null,[e[0]||(e[0]=d("h1",{id:"ai-论文提示词库",tabindex:"-1"},[S("AI 论文提示词库 "),d("a",{class:"header-anchor",href:"#ai-论文提示词库","aria-label":'Permalink to "AI 论文提示词库"'},"​")],-1)),e[1]||(e[1]=d("div",{class:"tip custom-block"},[d("p",{class:"custom-block-title"},"项目动态"),d("p",null,"持续更新中")],-1)),f(H,{models:_(V),items:_(B)},null,8,["models","items"])]))}});export{j as __pageData,q as default};

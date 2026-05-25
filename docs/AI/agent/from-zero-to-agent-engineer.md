# 从 0 到 Agent 工程师

> 一个普通开发者的 AI 工程补课笔记。  
> 从第一行 API 调用，到能写进简历的 AI 项目。

## 这份文档是干什么的

这不是第一篇正式文章。

它是《从 0 到 Agent 工程师》这个长期专栏的母文档，用来先把系列定位、课程地图、工具路线、项目主线和面试导向想清楚。

后面正式写文章时，这份文档就是路线图。

它要解决几个问题：

- 这个系列到底写给谁看。
- 每一阶段要补什么技术。
- 每篇文章应该拆到多细。
- 哪些工具和框架必须覆盖。
- 最后怎么沉淀成求职项目和面试表达。

我不想把它写成「12 篇速通 Agent」。

Agent 这个方向太大了。

如果只是写 10 来篇文章，很容易变成概念科普，读者看完知道一些词，但真到写项目、准备面试、解释架构的时候，还是会懵。

所以这个系列更适合做成长线专栏。

大概 50 到 80 篇。

每篇短一点，细一点，只解决一个小问题。

慢慢铺。

从最基础的大模型 API 调用，一直写到 Codex、Claude Code、OpenClaw、Hermes Agent、Skill、MCP、LangChain、LangGraph、DeepAgents、RAG、Memory、项目工程化，最后再写简历和面试。

## 系列定位

这个系列暂定叫《从 0 到 Agent 工程师》。

它不是单纯的 Agent 教程，也不是纯面试八股，而是一条面向求职和转型的完整学习路线。

核心目标有三个：

- 自己补齐 Agent 开发相关的技术基础。
- 把学习过程整理成读者能跟着走的教程。
- 最后沉淀成可以写进简历、可以在面试里讲清楚的项目能力。

这个系列的姿态不是「我已经全会了，来教你」。

更准确的姿态是：

> 我自己也在补这块技术。  
> 我把这条路上的知识点、坑、工具、项目和面试题整理出来。  
> 你可以跟着我一起从 0 走到能做、能讲、能找工作。

这样写的好处是，基础内容不会显得低级，反而会变成系列的主线。

因为真实的学习就是这样。

不是一上来就 LangGraph、MCP、多 Agent 协作、企业级 RAG。

而是先搞明白：

- 模型 API 到底怎么调。
- Prompt 为什么不是玄学。
- 结构化输出为什么重要。
- Function Calling 和 Tool Use 是什么关系。
- Agent 为什么不是一个更会聊天的机器人。

这些基础问题如果没想明白，后面的框架和工具都会变成玄学。

这版路线会比最初设想更长。

因为我后来意识到，Agent 工程不是一条单线。

它至少有几块能力要同时补：

```text
基础认知，知道 Agent 是什么
经典范式，知道 ReAct、Plan-and-Solve、Reflection 这些方法为什么出现
工具平台，知道 Codex、OpenClaw、Dify、n8n 这些东西怎么帮你做事
能力封装，知道 Skill、Tool、Workflow 怎么沉淀
框架工程，知道 LangChain、LangGraph、DeepAgents、LlamaIndex 各自解决什么问题
知识和记忆，知道 RAG、Memory、Context Engineering 怎么进入系统
调试评估，知道 LangSmith、Langfuse、Trace 怎么让 Agent 可观察
项目落地，最后把这些汇入 AI 日报 Agent
求职表达，把项目讲成工程能力
```

所以它应该是长期路线，而不是短期速通。

## 参考资料怎么用

这个系列会重点参考三个项目的组织方式，但不会照搬它们的内容。

### Easy-Vibe

参考项目：

```text
https://github.com/datawhalechina/easy-vibe
```

它给我的启发主要是：

- 用阶段来组织学习，而不是只堆文章。
- 每个阶段都应该有任务和产物。
- 不只是讲概念，还要让读者真的做出东西。
- 可以把「学习路线」和「项目练习」放在一起。

所以《从 0 到 Agent 工程师》也应该有阶段地图。

每一章都要回答：

- 学完这一章，读者会什么。
- 能做出什么小东西。
- 对最终的 AI 日报 Agent 项目有什么帮助。
- 面试时能讲出什么。

### AI Guide

参考项目：

```text
https://github.com/liyupi/ai-guide
```

它给我的启发主要是：

- AI 内容可以做成长期资源库。
- 工具教程、项目教程、行业资料可以并行组织。
- 不必每篇文章都追求宏大，有些文章就是解决一个具体问题。
- 工具类文章很适合吸引读者，但要有主线，不然容易散。

所以这个系列会保留大量工具教程。

但工具教程不是独立散装的。

Codex、Claude Code、OpenClaw、Hermes Agent、Cursor、Dify、n8n、MCP，都要服务一个共同目标：

> 让读者理解 Agent 工程师到底怎么工作，并最终做出一个能写进简历的 AI 日报 Agent。

### Hello Agents

参考项目：

```text
https://github.com/datawhalechina/hello-agents
```

这是和本系列最接近的参考资料。

它的价值不只是「内容里讲了 Agent」，更重要的是它把 Agent 学习路线拆成了：

- 基础概念。
- Agent 构建方法。
- 高级知识。
- 综合案例。
- 毕业设计。
- 面试题。

它也覆盖了很多我们必须补进去的主题：

- ReAct。
- Plan-and-Solve。
- Reflection。
- Dify / Coze / n8n。
- AutoGen / AgentScope / LangGraph。
- 记忆与检索。
- 上下文工程。
- MCP / A2A / ANP。
- Agent 评估。
- 多智能体案例。

所以我们要吸收它的结构。

但不能写成另一个 `hello-agents`。

差异化应该是：

```text
hello-agents 更像系统教材，偏理论、实践和框架全景
从 0 到 Agent 工程师更像求职型学习路线，偏短文章、工具教程、真实项目和面试包装
```

也就是说，`hello-agents` 可以做我们的知识地图参考。

但我们的主线必须始终回到：

```text
我怎么一点点补技术
我怎么做出 AI 日报 Agent
我怎么把这个项目讲成求职能力
```

## 目标读者

主线读者是想转向 AI / Agent 方向的开发者。

包括：

- 有一定编程基础，但没系统做过 Agent 的后端、前端、全栈开发者。
- 想从传统业务开发转到 AI 应用开发的人。
- 想用 Agent 项目包装简历、准备面试的人。
- 应届生也可以看，但文章不会只做成八股文合集。

这个系列可以默认读者有基础开发能力，但不假设读者懂 Agent。

也就是说，读者可以知道变量、函数、接口、HTTP、数据库这些基本概念，但不需要一开始就懂：

- RAG。
- MCP。
- Tool Calling。
- LangGraph。
- Multi-Agent。
- Skill。
- Context Engineering。

这些都可以慢慢讲。

文章从最基础的概念讲起，但每一篇都要带一个求职钩子：

- 这个知识点为什么会被面试问到。
- 真实项目里它解决什么问题。
- 初学者最容易误会什么。
- 怎么把它变成简历上的项目能力。

## 系列总原则

这个系列要保持几个原则。

### 每篇只讲一个小问题

不要一篇文章写成大而全百科。

比如不要写：

```text
一文讲透 Agent
```

而是拆成：

```text
Agent 和 Chatbot 有什么区别
Agent 为什么需要工具
Agent 为什么需要状态
Agent 为什么会失败
Agent 什么时候不该用
```

一篇解决一个问题。

读者更容易看完，我自己也更容易持续写。

### 知识、工具、项目三线并行

这个系列不是纯理论，也不是纯工具教程。

它应该有三条线：

```text
知识线，讲概念和原理
工具线，讲 Codex、Claude Code、OpenClaw、Hermes Agent 等工具怎么用
项目线，把所有知识汇入 AI 日报 Agent
```

后面再加一条：

```text
求职线，把项目和知识转成简历、面试表达
```

后续再补两条线：

```text
范式线，讲 ReAct、Plan-and-Solve、Reflection 这些经典方法
可观测线，讲 Trace、LangSmith、Langfuse、评估和线上排障
```

这两条线很重要。

范式线决定你是不是知道 Agent 背后的思路。

可观测线决定你是不是能把 Agent 当工程系统来维护。

### 先讲人话，再讲术语

每篇文章都应该先让读者听懂。

术语可以有，但不要一上来就用术语压人。

比如讲 Skill，不要一上来就讲「可组合能力抽象」。

可以先讲：

> Prompt 像临时嘱咐一句话。  
> Tool 像给模型一个可以调用的按钮。  
> Workflow 像一条固定流水线。  
> Skill 更像一本小手册，加上一套可复用做事方法。  
> Agent 则是那个拿着手册、会调用工具、会按目标推进任务的执行者。

读者听懂了，再进入术语。

### 每篇都要连接求职

哪怕是工具教程，也要问一句：

```text
这东西在面试里怎么讲？
```

比如讲 Codex，不只是讲怎么用。

还要讲：

- 它体现了什么 Agent 能力。
- 它和普通 AI 编程助手有什么区别。
- 它怎么帮助你理解代码库上下文。
- 如果面试官问 AI 编程工作流，你怎么答。

## 技术栈选择

主技术栈先定为：

```text
Python 优先
```

原因很简单：

- Agent、RAG、LangChain、LangGraph、LlamaIndex 生态更完整。
- 求职市场里 AI 应用开发、算法工程、Agent 工程都更容易接受 Python。
- 示例代码更短，适合教学。
- 后面接入向量库、爬虫、数据处理、调度任务都比较顺。

但这个系列不排斥 TypeScript。

TypeScript 可以放在这些地方：

- Web 展示页。
- 简单后台管理界面。
- 前端调用 Agent API。
- 和现有 VitePress / 网站项目结合。

但主线项目和核心示例，先用 Python。

## 最终项目，AI 日报 Agent

整个系列需要一个贯穿项目。

暂定：

```text
AI 日报 Agent
```

这个项目非常适合当前网站。

因为网站本来就有 AI 日报、AI 周报、工具手册、提示词库和数据获取相关内容。

这个项目不是凭空捏出来的 Demo。

它可以真的服务当前站点。

AI 日报 Agent 的最终目标是：

```text
从多个信息源获取 AI 新闻
筛选有效信息
去重和打分
生成摘要
按模板生成 Markdown
进入人工审核
发布到网站
沉淀为可复用 Skill / Workflow
```

它可以逐步扩展：

```text
第 1 版，只会调用模型总结一段文本
第 2 版，支持读取本地新闻素材
第 3 版，支持结构化输出新闻卡片
第 4 版，支持调用抓取工具
第 5 版，支持去重和评分
第 6 版，支持 RAG 查询背景资料
第 7 版，支持人工审核
第 8 版，支持生成每日 Markdown
第 9 版，支持封装成 Skill
第 10 版，支持接入自动化流程
```

这个项目能覆盖很多面试点：

- 大模型 API。
- Prompt 设计。
- 结构化输出。
- Tool Calling。
- RAG。
- Memory。
- 工作流。
- 错误处理。
- 日志。
- 评估。
- 人机协同。
- 权限控制。
- 成本控制。
- 项目部署。
- 简历表达。

## 课程总地图

这个系列先按 10 个章节设计。

总篇幅目标：

```text
50 到 80 篇
```

不是一口气写完。

先写第一轮核心路线，再根据工具更新和项目推进不断补。

### 第 0 章，路线导读

目标是让读者知道这个系列怎么学，最终能做什么。

预计 3 到 5 篇。

候选文章：

```text
00｜为什么我要写《从 0 到 Agent 工程师》
01｜Agent 工程师到底在做什么
02｜这个系列的最终项目，AI 日报 Agent
03｜Python 优先，为什么 Agent 入门我不先选 Java / TS
04｜怎么跟着这个系列学，不要收藏吃灰
```

阶段产物：

```text
读者知道自己为什么学 Agent
知道最终项目长什么样
知道学习路线怎么走
```

### 第 1 章，大模型应用基础

目标是把 Agent 开发最基础的模型调用能力补上。

预计 8 到 10 篇。

候选文章：

```text
05｜大模型 API 调用，Agent 开发第一块砖
06｜模型参数怎么理解，temperature、top_p、max_tokens 到底控制什么
07｜Prompt 不是玄学，它是 Agent 的行为边界
08｜上下文窗口是什么，为什么 Agent 总会忘事
09｜结构化输出，为什么 Agent 不能只返回自然语言
10｜JSON 输出为什么经常翻车，怎么让模型更稳定
11｜流式输出是什么，为什么产品体验会差很多
12｜多模态输入怎么理解，图片、语音和文本怎么进入 Agent
13｜Token 成本怎么算，为什么工程里不能无限上下文
14｜第一个小练习，让模型把新闻整理成结构化卡片
```

阶段产物：

```text
一个最小的 Python 脚本
输入新闻文本
输出结构化新闻卡片
```

### 第 2 章，Agent 基础与经典范式

目标是从普通模型调用进入 Agent 思维，并补上 Hello Agents 这类系统教程里会重点讲的经典范式。

预计 10 到 12 篇。

候选文章：

```text
15｜Agent 到底是什么，为什么它不是一个更会聊天的机器人
16｜Agent 为什么需要目标，不然它只是在闲聊
17｜任务拆解是什么，Agent 怎么把大任务拆成小步骤
18｜Planning 是什么，为什么计划不是越复杂越好
19｜ReAct 是什么，为什么它把推理和行动绑在一起
20｜Plan-and-Solve 是什么，为什么复杂任务要先拆计划
21｜Reflection 是什么，Agent 怎么从错误里反思
22｜Function Calling 是 Agent 调工具的起点
23｜Tool Use 怎么设计，面试官最爱问的工程细节来了
24｜Tool Schema 怎么设计，别让模型猜你的参数
25｜工具调用失败怎么办，重试、降级和人工兜底
26｜什么时候不应该用 Agent，别为了 Agent 而 Agent
27｜小练习，给 AI 日报 Agent 加一个本地文件读取工具
```

阶段产物：

```text
AI 日报 Agent 可以读取本地素材
可以调用一个简单工具
可以返回结构化结果
```

### 第 3 章，工具平台实战

目标是讲清楚当前主流 Agent / AI 编程工具怎么用，以及它们背后的 Agent 思维。

预计 15 到 20 篇。

第一版覆盖：

```text
Codex
Claude Code
Cursor
Dify
Coze
n8n
MCP
OpenClaw
Hermes Agent
```

候选文章：

```text
28｜Codex 是什么，为什么适合开发者学习 Agent
29｜Codex 怎么读懂一个项目
30｜Codex 的 Plan Mode 适合做什么
31｜Codex 怎么帮你改代码，但不应该让它乱改
32｜Codex 里的上下文管理，为什么不是文件越多越好
33｜Claude Code 和 Codex 有什么区别
34｜Claude Code 适合什么任务，不适合什么任务
35｜Cursor 怎么辅助写 Agent 项目
36｜Cursor、Codex、Claude Code 怎么分工
37｜Dify 是什么，为什么适合快速搭 Agent 原型
38｜Dify 的工作流和 Agent 有什么区别
39｜Coze 是什么，它适合做哪些轻量 Agent
40｜n8n 是什么，它和 Agent 工作流有什么关系
41｜MCP 是什么，为什么像 AI 生态里的 USB 接口
42｜MCP Server 和 Tool Calling 有什么关系
43｜A2A / ANP 是什么，Agent 之间为什么需要协议
44｜OpenClaw 是什么，它和普通聊天机器人有什么区别
45｜OpenClaw 怎么安装和初始化
46｜OpenClaw 怎么接入模型和工具
47｜OpenClaw 怎么做定时任务和自动化
48｜Hermes Agent 是什么，为什么说它会自我成长
49｜Hermes Agent 和 OpenClaw 有什么区别
```

阶段产物：

```text
读者知道不同工具适合做什么
知道工具不是目的，而是理解 Agent 工程的入口
能用 Codex / Claude Code / Cursor 辅助推进 AI 日报 Agent
```

### 第 4 章，Skills 能力封装

目标是单独讲清楚 Skill 这个概念。

Skill 不只是某个工具里的小功能。

它可以成为 Agent 工程里非常重要的能力封装方式。

核心解释框架：

```text
Prompt 是一次性的指令
Tool 是可调用的能力
Workflow 是固定流程
Skill 是可复用的专家能力包
Agent 是把这些能力组织起来完成任务的系统
```

预计 8 到 12 篇。

候选文章：

```text
50｜Skill 是什么，为什么它比 Prompt 更适合沉淀能力
51｜Skill、Prompt、Tool、Workflow、Agent 到底有什么区别
52｜一个好 Skill 应该长什么样
53｜Skill 里应该放知识、流程，还是工具调用
54｜怎么给 Codex 写一个可复用 Skill
55｜怎么给 OpenClaw 配一个 Skill
56｜Hermes Agent 的 Skill 机制怎么理解
57｜Skill 怎么测试，不然它只是一个漂亮文档
58｜怎么把 AI 日报流程封装成 Skill
59｜面试怎么讲 Skill，把它说成工程能力而不是提示词技巧
```

阶段产物：

```text
AI 日报 Agent 拆出 2 到 3 个可复用 Skill
比如新闻筛选 Skill、日报生成 Skill、Markdown 发布 Skill
```

### 第 5 章，框架路线

目标是讲主流 Agent / RAG 框架，不追求一次讲完，而是拆成小颗粒。

预计 12 到 16 篇。

第一版覆盖：

```text
LangChain
LangGraph
DeepAgents
LlamaIndex
AutoGen
AgentScope
```

必要时补充对比：

```text
AutoGen
CrewAI
Semantic Kernel
```

候选文章：

```text
60｜LangChain 到底解决什么问题
61｜LangChain 的 PromptTemplate、Tool、Chain 怎么理解
62｜LangChain Agent 为什么容易让新手困惑
63｜LangGraph 是什么，为什么它更像 Agent 状态机
64｜LangGraph 的 State 是什么
65｜LangGraph 的 Node 和 Edge 怎么理解
66｜LangGraph 里的条件分支怎么做
67｜用 LangGraph 改造 AI 日报 Agent 的处理流程
68｜DeepAgents 是什么，它适合什么场景
69｜DeepAgents 和 LangGraph 的关系怎么理解
70｜LlamaIndex 为什么常和 RAG 绑在一起
71｜LlamaIndex 的 Index、Retriever、Query Engine 怎么理解
72｜AutoGen 和 AgentScope 这类多 Agent 框架适合什么场景
73｜框架选型怎么做，新手先别纠结全都学
```

阶段产物：

```text
读者能用 LangGraph 或同类框架表达 AI 日报 Agent 的流程
知道框架解决什么问题，也知道什么时候不需要框架
```

### 第 6 章，RAG / Memory / Context Engineering

目标是讲 Agent 如何使用外部知识、记忆和上下文。

预计 8 到 10 篇。

候选文章：

```text
74｜RAG 是什么，Agent 为什么需要外部知识
75｜Embedding 是什么，为什么 RAG 离不开它
76｜向量数据库怎么选，新手先别纠结
77｜检索为什么会不准，召回、重排和过滤怎么理解
78｜把历史 AI 日报接入 RAG，让 Agent 查自己的资料库
79｜Memory 到底有没有必要，短期记忆和长期记忆怎么区分
80｜Context Engineering 是什么，为什么它比 Prompt 更接近工程
81｜上下文压缩怎么做，不然成本会爆炸
82｜RAG 项目怎么从 Demo 变成能用的系统
```

阶段产物：

```text
AI 日报 Agent 可以查询历史日报和背景资料
生成摘要时能引用已有上下文
```

### 第 7 章，AI 日报 Agent 项目实战

目标是把前面所有知识汇入一个真实项目。

预计 10 到 12 篇。

候选文章：

```text
83｜做一个最小 AI 日报 Agent
84｜让 AI 日报 Agent 学会抓取信息
85｜让 AI 日报 Agent 学会筛选新闻
86｜让 AI 日报 Agent 学会新闻去重
87｜让 AI 日报 Agent 给新闻打分
88｜让 AI 日报 Agent 生成 Markdown
89｜让 AI 日报 Agent 接入人工审核
90｜让 AI 日报 Agent 生成发布前检查清单
91｜让 AI 日报 Agent 记录日志和失败原因
92｜把 AI 日报 Agent 接进当前网站工作流
93｜把 AI 日报 Agent 封装成可复用 Skill / Workflow
```

阶段产物：

```text
一个完整的 AI 日报 Agent 项目
可以作为求职项目写进简历
也能服务当前站点内容生产
```

### 第 8 章，Agent 调试、可观测性与评估

目标是让读者知道 Agent 为什么会失败、怎么排查、怎么评估，而不是只靠肉眼觉得「好像还行」。

预计 8 到 10 篇。

第一版覆盖：

```text
Trace
LangSmith
Langfuse
Prompt 版本管理
LLM 评估
线上排障
```

候选文章：

```text
94｜为什么 Agent 项目必须做可观测性
95｜Trace 是什么，怎么还原一次 Agent 执行过程
96｜LangSmith 是什么，为什么 LangChain 生态都在用它调试
97｜LangSmith 怎么看 Prompt、Tool Call、Token 和错误
98｜Langfuse 是什么，为什么它更像 LLM 应用的监控后台
99｜Langfuse 怎么记录一次 AI 日报 Agent 的完整调用链
100｜Prompt 版本管理怎么做，不然你不知道哪版变差了
101｜Agent 评估怎么做，不能只靠肉眼觉得还行
102｜线上 Agent 出错了怎么排查，从日志、Trace 到人工兜底
```

阶段产物：

```text
AI 日报 Agent 有基础 Trace
能看到 Prompt、工具调用、Token、错误节点和输出质量变化
能用这些信息解释一次失败
```

### 第 9 章，工程化和求职

目标是把项目变成能面试、能讲、能展示的能力。

预计 8 到 10 篇。

候选文章：

```text
103｜Agent 项目怎么分层，别把所有逻辑塞进一个函数
104｜Agent 项目怎么测试，不能只靠肉眼看输出
105｜Agent 的权限和安全怎么做，别让它什么都能干
106｜Agent 成本怎么控制，Token 不是免费的
107｜Agent 项目怎么部署上线
108｜简历上的 Agent 项目应该怎么写，别只写调用了大模型
109｜面试怎么讲 AI 日报 Agent 架构，才能听起来像真的做过
110｜传统开发者转 Agent 岗位，应该怎么讲自己的优势
111｜从 0 到 Agent 工程师，这条路还差什么
```

阶段产物：

```text
一份可以放到简历里的 Agent 项目描述
一套面试讲解话术
一组常见追问和回答思路
```

## 单篇文章模板

每篇文章固定保持短颗粒度。

建议模板：

```text
1. 这篇只解决一个问题
2. 为什么找工作会问这个
3. 用人话讲清楚概念
4. 放到 AI 日报 Agent 项目里怎么用
5. 初学者最容易踩的坑
6. 面试官可能会这样问，3 道题
7. 回答思路
8. 这一篇的小作业
9. 下一篇预告
```

如果是工具教程，可以稍微改成：

```text
1. 这个工具解决什么问题
2. 它在 Agent 工程里处在什么位置
3. 最小可用操作
4. 用它推进 AI 日报 Agent 的一个小任务
5. 最容易踩的坑
6. 面试里怎么讲这个工具
7. 小作业
```

如果是框架教程，可以改成：

```text
1. 这个框架概念解决什么问题
2. 不用框架会怎么写
3. 用框架之后改变了什么
4. 最小代码例子
5. 放进 AI 日报 Agent 的位置
6. 面试追问
7. 小作业
```

## 面试题设计规则

每篇文章最后放 3 道题。

不要只问定义。

建议分三层：

```text
基础题，确认你懂概念
工程题，确认你知道怎么落地
追问题，确认你真的思考过边界
```

例子：

```text
基础题，Agent 和普通 Chatbot 有什么区别？
工程题，如果 Agent 调用工具失败，你会怎么处理？
追问题，什么时候不应该使用 Agent？
```

回答不要写成死背标准答案。

要写成「回答思路」。

因为真实面试不是背诵，而是解释你的判断过程。

## Skill 模块的核心讲法

Skill 这块要单独写。

它不是 Prompt。

也不是 Tool。

它更像是一种「可复用能力包」。

可以这么讲：

```text
Prompt 是临时告诉模型怎么做
Tool 是给模型一个可以调用的外部能力
Workflow 是把步骤固定下来
Skill 是把某类任务的知识、步骤、注意事项和调用方式封装起来
Agent 是根据目标选择 Prompt、Tool、Workflow、Skill 来完成任务
```

这个讲法很重要。

因为面试里如果只说「我会写 Prompt」，听起来很薄。

但如果能说：

> 我把新闻筛选、日报生成、Markdown 发布这几个能力沉淀成 Skill，让 Agent 在不同任务里复用。

这就像工程能力了。

## OpenClaw 路线

OpenClaw 可以作为「自托管 Agent」方向的工具案例。

它适合讲：

- 消息入口。
- 模型接入。
- 工具管理。
- Skills。
- 记忆。
- 定时任务。
- 多 Agent 协作。
- 自动化。

OpenClaw 相关内容不要只写安装教程。

更重要的是讲：

```text
为什么一个 Agent 需要入口
为什么一个 Agent 需要长期运行
为什么 Skill 比临时 Prompt 更适合自动化任务
为什么自动化任务需要权限、安全和日志
```

这样它就不是工具广告，而是 Agent 工程课。

## Hermes Agent 路线

Hermes Agent 默认指 NousResearch 的 `hermes-agent`。

参考：

```text
https://github.com/NousResearch/hermes-agent
```

它适合放在「自改进 Agent」和「Skill 生成 / 沉淀」这条线上。

可以重点讲：

- 什么叫自改进 Agent。
- Agent 怎么从任务经验中沉淀能力。
- Skill 生成和 Skill 使用有什么区别。
- Hermes Agent 和 OpenClaw 的定位差异。
- 它更适合研究、实验还是生产。

OpenClaw 更像一个可运行、可接入消息入口、可自动化的 Agent 平台。

Hermes Agent 更适合讲 Agent 如何学习、沉淀和复用能力。

这两个放在一起讲，会很有层次。

## 框架路线

框架不要一上来就堆。

先明确一句话：

```text
框架是为了解决复杂度，不是为了让 Hello World 看起来更高级。
```

LangChain 适合讲：

- PromptTemplate。
- Tool。
- Chain。
- Agent。
- 为什么新手会觉得它绕。

LangGraph 适合讲：

- State。
- Node。
- Edge。
- 条件分支。
- 可控工作流。
- Agent 状态机。

DeepAgents 适合讲：

- 更高阶的 Agent 抽象。
- 长任务。
- 规划。
- 子任务。
- 复杂执行。

LlamaIndex 适合讲：

- Index。
- Retriever。
- Query Engine。
- RAG。
- 企业知识库。

这些框架不要全都写成工具教程。

要写成：

```text
这个框架为什么存在
它解决了什么痛点
不用它会怎样
什么时候不该用它
它在 AI 日报 Agent 里能放在哪里
```

## AI 日报 Agent 项目拆解

项目可以拆成这些模块：

```text
source，信息源管理
fetcher，抓取和读取
cleaner，清洗正文
deduper，去重
ranker，评分
summarizer，摘要
rewriter，改写
fact_checker，事实检查
renderer，生成 Markdown
reviewer，人工审核
publisher，发布或生成提交
logger，日志
evaluator，效果评估
skills，可复用能力包
```

每个模块都可以成为文章。

比如：

```text
source 模块怎么设计
fetcher 失败怎么办
deduper 怎么判断两条新闻是不是同一件事
ranker 的评分标准怎么做
renderer 怎么保证 Markdown 稳定
reviewer 为什么不能省
publisher 为什么要谨慎
```

这比单纯写「做一个 AI 日报 Agent」更细。

也更适合长期专栏。

## 简历和面试包装

最终项目可以这样包装：

```text
AI 日报自动化 Agent
```

简历描述方向：

```text
基于 Python 和大模型 API 实现 AI 日报自动化 Agent，支持多源信息读取、新闻去重、重要性评分、结构化摘要、Markdown 渲染和人工审核流程。项目中封装新闻筛选、日报生成等可复用 Skill，并通过日志、重试、人工兜底和成本控制提升系统稳定性。
```

面试讲解时重点讲：

- 为什么这个项目需要 Agent，而不是普通脚本。
- 工具调用怎么设计。
- RAG 用在什么地方。
- 如何保证输出稳定。
- 怎么处理失败。
- 怎么做人工审核。
- 怎么评估效果。
- 怎么控制成本。
- Skill 是怎么沉淀的。

不要只说：

```text
我调用了大模型生成日报
```

这太薄了。

要说：

```text
我把内容生产流程拆成多个可观测、可回滚、可人工审核的 Agent 子任务，并沉淀成可复用 Skill。
```

这才像工程项目。

## 写作语气

这个系列可以保持比较真诚的学习感。

不要装成培训班老师。

可以用这种姿态：

```text
我也在补这块。
我先把自己想明白的部分讲出来。
如果后面我发现前面有理解不对的地方，我会回来修。
这本身也是工程师学习新技术的真实过程。
```

这种语气适合长期写。

也适合后续你自己真的转向 Agent 开发，因为读者看到的是一条真实成长线。

## 暂定系列标题

当前最推荐：

```text
从 0 到 Agent 工程师
```

副标题：

```text
从第一行 API 调用，到能写进简历的 AI 项目
```

也可以保留几个备用：

```text
Agent 开发之路
Agent 开发求职之路
一个普通开发者的 Agent 补课笔记
从第一行 API 调用，到 AI 日报 Agent
```

## 下一步

后续扩充可以按这个顺序来：

```text
1. 先写第 0 章路线导读
2. 再写第 1 章大模型 API 和 Prompt 基础
3. 同时搭一个最小 AI 日报 Agent 项目目录
4. 每写 5 篇，回头整理一次路线图
5. 等前 10 篇稳定后，再考虑接入导航和侧边栏
```

第一篇建议还是：

```text
为什么我要写《从 0 到 Agent 工程师》
```

它不需要一上来讲技术。

它要讲清楚：

- 为什么 Agent 值得学。
- 为什么要从基础开始。
- 为什么这个系列会长期写。
- 最终要做出什么项目。
- 读者跟着学能得到什么。

第二篇再进入：

```text
Agent 工程师到底在做什么
```

这样开头会更稳。

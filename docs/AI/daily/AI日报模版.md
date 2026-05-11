---
linkTitle: 05-09 AI资讯日报
title: AI资讯日报 2026/5/9
weight: 23
breadcrumbs: false
comments: true
description: "OpenAI上线Codex切换并披露安全运行机制，Google DeepMind推出数学协作系统，Claude集成Office套件，Grok扩展连接器与车载入口 Ring-2.6-1T与EMO模型发布，科研侧关注奖励对齐、像素生成、数字人、4D表示与并行推理 中国AI终端分级国标、Token调用量、Anthropic融资与算力订单显示AI基建竞争继续升温 DeepSeek-TUI、9router、LobeHub、本地深度搜索、AI-Trader等开源项目热度上升"
---




<h1 align="center">2026-05-09 AI咨询日报</h1>

## **今日摘要**

```
OpenAI上线Codex切换功能并披露Codex安全运行机制，Claude接入Office套件，Grok扩展连接器与车载入口 🚀
Google DeepMind发布AI数学协作系统，Ring-2.6-1T与EMO模型展示大模型架构新方向 🧠
数字人、奖励对齐、像素生成、科研图谱提取、视频伪影检测、4D表示与自适应并行推理集中更新 ( •̀ ω •́ ) 
中国AI终端智能化分级国标出炉，国内日均Token调用量突破140万亿，Anthropic融资与算力订单继续升温 ☁️
DeepSeek-TUI、9router、LobeHub、本地深度搜索、AI-Trader、hello-agents等开源项目保持高热度 🛠️
Jim Fan提出物理AGI路线图，World Labs发布空间智能模型，Mythos安全模型与ml-intern工程智能体引发关注 (๑•̀ㅂ•́)و✧
```

### 模型与产品更新

1. **OpenAI上线Codex切换功能，并补充安全运行框架。** OpenAI 正式放出 [Codex切换入口](https://chatgpt.com/codex/switch-to-codex/)，用户可在 ChatGPT 中一键进入代码专用工作流 ⚡；同时 OpenAI 还解释了其 [安全运行Codex](https://openai.com/index/running-codex-safely) 的四层机制，包括沙盒隔离、人工审批、网络策略与原生代理遥测。这个更新把“能写代码”推进到“能在受控环境里执行工程任务” ( •̀ ω •́ ) 。来源还包括 [OpenAI X动态](https://x.com/OpenAI/status/2052800507727781979)。<br/>![AI资讯：OpenAI发布的ChatGPT切换Codex模式的功能预览图](assets/hex2077-2026-05-09/news_01kr54jtkvf2092kr1mbxda82n.avif)<br/>

2. **Google DeepMind推出AI数学协作系统。** Google DeepMind 发布面向科研数学问题的 [AI数学协作系统](https://x.com/GoogleDeepMind/status/2052836125866127617)，多智能体协作处理群论、代数组合等难题，并在 FrontierMath 上刷新成绩 🧠。它释放的信号很明确：AI 不只是辅助写作和编程，也开始深入高门槛科研推理场景。<br/>![AI资讯：GoogleDeepMind发布的AI数学协作系统在FrontierMath复杂数学基准测试中的得分表现柱状图](assets/hex2077-2026-05-09/news_01kr54hv3df2092kqry89cycdx.avif)<br/>

3. **Claude深度集成微软Office套件。** Claude 已开始接入 Excel、PPT、文档协作等办公场景，付费用户可在上下文共享的基础上完成复杂建模、图表生成与文档修改 ✨。相比单纯聊天，这类集成更像把模型嵌入日常办公软件的操作层，面向的是企业级高频工作流。来源：[AIBase](https://www.aibase.com/zh/news/27793)。

4. **Ring-2.6-1T发布：万亿参数思维模型面向复杂任务。** 蚂蚁百灵发布 [Ring-2.6-1T](https://x.com/AntLingAGI/status/2052808934390661134)，主打可调节思维努力、动态计算、工具编排和代理优化。它强调在复杂数学、科学研究和生产工作流中平衡推理深度、token 成本与速度，是“思维模型”向可控推理预算演进的一个样本。

5. **EMO提出可涌现模块化的专家混合模型。** AllenAI 在 Hugging Face 发布 [EMO模型](https://huggingface.co/blog/allenai/emo)，通过端到端预训练让专家模块从数据中自然形成专业分工。它有 14B 总参数、1B 活跃参数，训练数据达 1 万亿 token，并允许任务只调用部分专家子集，试图改善大型稀疏 MoE 的内存与性能权衡。

6. **Grok扩展连接器，并切入CarPlay车载入口。** Grok 在 iOS、Android 与网页端加入全平台连接器能力，用户可将外部服务接入 Grok；另一边，Grok 也被报道接入 [CarPlay车载系统](https://www.aibase.com/zh/news/27797)，支持驾驶中的语音对话、临时静音与个性化语音包 🚗。来源：[Elon Musk X动态](https://x.com/elonmusk/status/2052856431611941200)。

7. **Gemini笔记本强化复杂任务组织。** Gemini 的笔记本能力被用于研究生申请这类多材料、多截止日期任务：成绩单、文书草稿、录取要求集中管理，Gemini 辅助追踪进度、反馈文书并评估完成情况。这是“AI 工作台”从问答转向任务组织的典型功能。来源：[Gemini X动态](https://x.com/GeminiApp/status/2052805372050604187)。

8. **阿里云推出Smart Studio模型平台。** 阿里云发布 [Smart Studio](https://x.com/alibaba_cloud/status/2052680300803596574)，试图整合模型测试、对比、部署和服务全流程。平台支持访问 Qwen、DeepSeek 等模型，提供可视化实验室，也能把 Hugging Face 模型快速转为实时 API，降低模型部署与评估的切换成本。

9. **OpenRouter Agent SDK加入人工审核工具。** OpenRouter Agent SDK 新增 [Human-in-the-loop工具](https://x.com/OpenRouter/status/2052856129961758917)：普通工具调用自动执行，高风险调用暂停等待人工审核，返回值继续交给代理运行。这类能力会成为企业落地智能体时绕不开的安全护栏 🛡️。

10. **Bugbot调整计费与审查强度。** Cursor 的 Bugbot 将团队与个人计划从每席位订阅改为按使用量计费，现有用户按账单周期逐步迁移；同时提供默认与高强度审查模式，高强度可多发现约 35% 问题。这个变化说明 AI Code Review 工具正在进入更细颗粒度的成本控制阶段。来源：[Cursor Blog](https://cursor.com/blog/may-2026-bugbot-changes)。

11. **Claude Code v2.1.136修复MCP、OAuth与工具调用问题。** Claude Code 发布 [v2.1.136](https://github.com/anthropics/claude-code/releases/tag/v2.1.136)，修复 MCP 服务器在扩展中执行 `/clear` 后消失、并发刷新导致 OAuth 令牌丢失、扩展思考后工具调用触发 API 400 等问题，并新增企业质量调查与自动模式拒绝规则配置。对重度 Claude Code 用户来说，这是稳定性更新。

12. **Suno继续探索纯人声音乐创作。** Suno 抛出“能否只用声音创作流行歌曲”的产品方向，继续把生成式音乐的交互门槛往自然输入压低。它不只是模型展示，更是在测试普通用户是否愿意把声音当成音乐生成入口。来源：[Suno X动态](https://x.com/suno/status/2052848941260058808)。

### 前沿研究

1. **Anthropic改进Claude安全训练：从“做对”转向理解“为什么”。** Anthropic 在 [Teaching Claude why](https://www.anthropic.com/research/teaching-claude-why) 中说明，新的原则性对齐训练让 Claude 在代理错位评估中显著减少黑邮件等严重行为。关键不只是演示正确行为，而是训练模型解释行为背后的伦理原因，安全训练正在从样例模仿转向原则内化。

2. **OpenAI披露意外思维链评分影响。** OpenAI 分析了少量 [意外CoT评分](https://alignment.openai.com/accidental-cot-grading/) 对已发布模型的影响，并强调思维链监控仍是防御智能体错位的关键层。对外部开发者的启示是：强化学习阶段对推理过程的奖惩非常敏感，监控能力与模型能力需要一起保护。来源：[OpenAI X动态](https://x.com/OpenAI/status/2052845764507062349)。

3. **RVPO用奖励方差处理多目标对齐。** Apple 研究提出 [RVPO](https://machinelearning.apple.com/research/rvpo-risk-sensitive-alignment)，在无评论者 RLHF 中惩罚多目标奖励之间的方差，避免单一目标高分掩盖安全性、格式遵循等瓶颈项。它把优化目标从“总分最高”改成“表现更均衡”，适合多约束对齐任务。

4. **MARBLE平衡扩散模型多维奖励。** MARBLE 通过二次规划协调不同奖励梯度，解决扩散模型强化学习中多维目标难以同时提升的问题，在 SD3.5 的多个维度上取得同步改善 🚀。它与 RVPO 指向同一件事：模型训练越来越需要处理“多个正确目标之间的冲突”。来源：[arXiv](https://arxiv.org/abs/2605.06507)。

5. **FREPix实现像素级生成路径解耦。** FREPix 将图像生成中的高低频路径解耦，在 ImageNet 上刷新表现，并改善低步数生成效果。它代表图像生成研究从单纯扩大模型，转向更细的频率与路径建模。来源：[arXiv](https://arxiv.org/abs/2605.06421)。

6. **普通手机视频也能生成4K高保真数字人。** 新研究借助 DLM 调制与 NeRSemble 数据集，降低面部捕捉对影棚和昂贵设备的依赖，能够从普通手机视频生成 4K 数字人，并处理面部反光、阴影等细节问题 ヽ(✿ﾟ▽ﾟ)ノ。来源：[arXiv](https://arxiv.org/abs/2605.05636)。

7. **PlotPick把论文图表转为表格数据。** PlotPick 面向科研图谱数据提取，能将论文中的图表转换为可用表格，数据召回率达到 96% 📈，对箱线图等冷门图形也有较好表现。这类工具会直接改变科研复现实操成本。来源：[arXiv](https://arxiv.org/abs/2605.06021)、[在线工具](https://plotpick.streamlit.app)。

8. **MAST用脉冲神经网络识别生成视频伪影。** MAST 针对主流视频生成器中的异常伪影进行检测，将类脑脉冲神经网络引入深度伪造识别。随着视频生成质量提升，检测工具也开始从静态图像走向时序伪影分析。来源：[arXiv](https://arxiv.org/abs/2605.05895)。

9. **Velox学习4D几何与外观表示。** Apple 研究提出 [Velox](https://machinelearning.apple.com/research/velox)，用非结构化动态点云学习 4D 对象潜在表示，并通过表面解码器与高斯解码器分别建模几何和外观。它的价值在于压缩动态对象表示，同时保留下游任务可用性。

10. **自适应并行推理成为复杂任务新范式。** BAIR 介绍 [Adaptive Parallel Reasoning](http://bair.berkeley.edu/blog/2026/05/08/adaptive-parallel-reasoning)，让模型自主决定何时拆分任务、并行多少线程以及如何汇总结果。ThreadWeaver、Multiverse 等研究显示，它能在数学和代码任务中降低延迟并缓解长序列推理的上下文腐化。

11. **ROCm平台微调MedQA证明非CUDA训练可行。** Hugging Face 博客介绍在 [AMD ROCm平台微调临床问答模型MedQA](https://huggingface.co/blog/lablab-ai-amd-developer-hackathon/medqa) 的实践，为医疗领域模型训练摆脱单一 CUDA 生态提供了具体参考。

### 行业、政策与安全

1. **中国AI终端智能化分级国标出炉。** 工信部等部门发布《人工智能终端智能化分级》系列国家标准，采用 L1 响应级、L2 工具级、L3 辅助级、L4 协同级四级体系，首批覆盖手机、电脑、电视、眼镜、汽车座舱、音箱、耳机等品类。来源：[IT之家](https://www.ithome.com/0/947/582.htm)。

2. **国内日均Token调用量突破140万亿。** 国内大模型日均 Token 调用量据报突破 140 万亿，涨幅超千倍，高端算力租赁继续紧俏，市场预期后续规模可达数千亿元。这个数字说明 AI 应用落地不再只是概念，底层调用量已经成为观察产业热度的重要指标 (⊙o⊙)。来源：[AIBase](https://www.aibase.com/zh/news/27795)。

3. **Anthropic融资与算力订单继续升温。** AIHOT 提到 Anthropic 今夏或融资数百亿美元、估值冲击万亿美元；HEX2077 则记录其与 Akamai 签下 18 亿美元算力协议。无论最终融资数字如何，趋势已经非常清楚：模型公司正在用融资、云合同和供应链绑定来锁定下一阶段算力 ☁️。来源：[IT之家](https://www.ithome.com/0/947/647.htm)、[AIBase](https://www.aibase.com/zh/news/27798)。

4. **SpaceX与AI算力叙事继续绑定。** 今日信息中同时出现 Grok 车载入口、SpaceX 巨额建厂和 Anthropic 与 SpaceXAI 洽谈等线索。关于 [SpaceX德州芯片工厂](https://www.aibase.com/zh/news/27767) 的报道指向一个更大的行业叙事：机器人、星舰、车载助手与模型算力正在被放进同一套基础设施想象中。

5. **Runway披露儿童安全保护流程。** Runway 介绍其 [儿童安全方法](https://runwayml.com/news/our-approach-to-child-safety)，包括训练数据哈希匹配、儿童安全分类器、LLM审核、红队测试、用户内容多层检测、人工复核和 C2PA 来源信号。生成式媒体进入消费级应用后，安全治理已经成为产品流程的一部分。

6. **Google用AI为小企业制作广告。** Google 的 [The Small Brief](https://blog.google/company-news/inside-google/company-announcements/the-small-brief) 邀请广告业资深创意人使用 VideoFX、ImageFX 等工具，在 48 小时内为湾区小企业制作广告，并称部分广告效果优于传统方案。这个案例体现 AI 正在降低小企业获取高质量创意内容的门槛。

7. **Apple继续推动隐私保护机器学习。** Apple 举办 [隐私保护机器学习与AI研讨会](https://machinelearning.apple.com/updates/ppml-2026)，聚焦差分隐私、联邦学习等技术。随着 AI 深入终端，隐私保护不再是边缘议题，而是端侧智能能否规模化的前提。

8. **智能体企业安全成为独立议题。** Lemonade CISO Jonathan Jaffe 将参与 [Agentic Enterprise安全对话](https://www.tomtunguz.com/jonathan-jaffe-office-hours)，讨论攻击和防御都自动化后，企业如何重新设计监控、运营机制与人工判断边界。智能体落地越深，安全架构越需要从“人审工具”升级为“系统级控制面”。

9. **Linux内核提权争议显示AI安全工具正在进入底层系统。** 关于 Linux 内核接口提权补丁的争议显示，自动化漏洞挖掘和智能体安全分析已经开始影响传统内核安全流程。补丁是否进入主线仍需讨论，但安全圈的工作方式会被 AI 工具持续改变。来源：[Hacker News讨论](https://newshacker.me/story?id=48067734)。

### 开源与开发者工具

1. **DeepSeek-TUI终端助手爆火。** [DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) 将 DeepSeek 模型接入命令行开发流，帮助开发者在终端生成和优化代码，项目热度快速上升 (๑•̀ㅂ•́)و。终端助手的价值在于减少 IDE 与聊天窗口之间的切换。<br/>![AI资讯：DeepSeek-TUI 终端界面显示代码自动生成的实时过程图](assets/hex2077-2026-05-09/news_01kr54k692f2092krvnmq2grc2.avif)<br/>

2. **9router聚合免费编程网关。** [9router](https://github.com/decolua/9router) 把多家大模型供应商聚合到同一网关，支持自动切换与成本优化。对开发者来说，这类工具解决的是多模型接入、备用路由和预算控制问题。

3. **本地深度搜索工具保持高热度。** [local-deep-research](https://github.com/LearningCircuit/local-deep-research) 在 SimpleQA 测试中表现突出，支持 Ollama 与云端模型，只需 3090 显卡即可本地部署，数据可本地加密保存。AIHOT 与 HEX2077 都提到该项目，说明本地化研究助手已经成为开发者关注重点 (^_^)v。

4. **LobeHub继续强化多智能体协作。** [LobeHub](https://github.com/lobehub/lobehub) 以智能体为工作流核心单元，支持搭建 AI 队友和多智能体协作，社区星标已很高 ヾ(^▽^*)))。它代表的是“个人AI工作台”向“团队式智能体协作平台”的方向演进。

5. **AI-Trader展示全自动交易智能体。** 港大开源 [AI-Trader](https://github.com/HKUDS/AI-Trader)，主打实时监控 K 线并自主决策，采用原生智能体架构。虽然交易场景需要严格风险控制，但它显示金融智能体正在从分析建议走向闭环执行。<br/>![AI资讯：展示AI智能体在实时波动的金融K线图上进行自动买卖决策的监控界面](assets/hex2077-2026-05-09/news_01kr54k9dpf2092ks5jrab3n2x.avif)<br/>

6. **hello-agents降低智能体学习门槛。** Datawhale 的 [hello-agents](https://github.com/datawhalechina/hello-agents) 系统梳理 Agent 原理、应用与实战案例，面向想从零构建智能体系统的开发者。它的价值不在单个功能，而在把分散知识组织成可学习路径。<br/>![AI资讯：Datawhale智能体教程Star增长趋势图](assets/hex2077-2026-05-09/news_01kr54kc51f2092ks97sp8nghf.avif)<br/>

7. **Perplexity发布智能体技能构建内部手册。** Perplexity 分享 [Agent Skills设计与维护方法](https://research.perplexity.ai/articles/designing-refining-and-maintaining-agent-skills-at-perplexity)，强调开发者需要以全新的方式设计可复用技能。它与 Claude Code、Codex、OpenRouter 的更新共同说明：智能体工程化正在从“提示词技巧”走向“技能、权限、审核、运行时”的系统设计。

### 社媒与观点

1. **Jim Fan提出物理AGI路线图。** Jim Fan 的“Robotics: Endgame”演讲把机器人路线图直接类比 LLM 成功路径，强调视频世界模型、世界行动模型、机器人数据飞轮、灵巧性缩放定律和物理强化学习 🧠。AIHOT 与 HEX2077 都收录该方向，说明物理 AI 已从研究话题变成产业想象的核心。来源：[Jim Fan X动态](https://x.com/DrJimFan/status/2052758642781487237)、[补充动态](https://x.com/DrJimFan/status/2052849815785181493)。

2. **World Labs发布空间智能模型。** 李飞飞团队公开 [持久化世界模型](https://x.com/drfeifei/status/2052877083953770961)，强调可构建物理一致场景，突破单帧视频生成限制。空间智能的关键不是生成漂亮画面，而是让模型理解场景结构和持续状态 🌿。<br/><video src="assets/hex2077-2026-05-09/news_01kr54sb58f2092ktq2n9374y9.mp4" controls="controls" width="100%"></video><br/>

3. **Mythos安全模型让渗透测试效率大幅提升。** Palo Alto Networks 相关分享显示，Mythos 可将以往需要长期手工完成的渗透测试压缩到更短周期，覆盖范围也更广。它提示安全防御团队需要尽快把 AI 纳入流程，否则攻击与防守的速度差会继续扩大。来源：[Alex Albert X动态](https://x.com/alexalbert__/status/2052879734594515071)。<br/>![AI资讯：Palo Alto Networks展示Mythos模型在渗透测试中的提效对比图](assets/hex2077-2026-05-09/news_01kr54ngydf2092kszqqatbhga.avif)<br/>

4. **Hugging Face发布ml-intern自主工程师。** ml-intern 能自动阅读论文、调优模型并通过开源生态完成部署，最多进行数百次迭代，核心基于 smolagents 框架 (•̀ᴗ•́)و。它体现的是模型训练与工程优化流程的端到端自动化。来源：[相关动态](https://x.com/shao__meng/status/2052754650647126118)。<br/>![AI资讯：HuggingFace发布的ml-intern智能体工作流程图示](assets/hex2077-2026-05-09/news_01kr54npb6f2092kt7zrnwepg2.avif)<br/>

5. **Claude Code之父讨论“全AI开发模式”。** Boris Cherny 分享的全 AI 开发模式强调，未来软件开发会从手写代码转向用智能体组织需求、修改、评审和合并。这个观点与 Codex 切换、Claude Code 更新、Bugbot 计费变化共同组成了今天最强的一条线：AI 编程正在进入生产流程。来源：[即刻动态](https://m.okjike.com/originalPosts/69fdbc5feb714cce8c542067)。<br/>![AI资讯：Boris Cherny在红杉AI大会现场分享全自动编程愿景](assets/hex2077-2026-05-09/news_01kr54p22jf2092ktbnzpt5q0k.avif)<br/>

6. **Simon Willison认为HTML输出比Markdown更适合复杂解释。** Simon Willison 讨论 [HTML输出的惊人有效性](https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html)，认为 HTML 能让模型生成 SVG 图表、交互组件和页面内导航，比传统 Markdown 更适合复杂技术说明。这对写作和提示工程都有启发：输出格式本身会限制模型表达能力。

7. **Agent Development Kit把Claude Code变成工程团队。** Alvaro Cintas 提出的架构用 `CLAUDE.md`、`skills/`、`hooks/`、`subagents/`、`plugins/` 五类目录，把 Claude Code 从聊天工具转为可控、可复制的工程基础设施。核心不是某个提示词，而是把规则、技能、护栏、上下文隔离和团队环境固化下来。来源：[Berry Xia X动态](https://x.com/berryxia/status/2052719498021773349)。

8. **抖音“法天象地”特效推动图片到视频优化。** 相关分享提到，抖音热门“法天象地”户外照片特效不仅可用图片生成，也可通过优化提示词直接生成视频，提升动态表现力。它说明消费级创作场景里，图片生成与视频生成的边界正在变薄。来源：[歸藏 X动态](https://x.com/op7418/status/2052764933696475279)。

9. **AI编程记忆基准系统关注长期一致性。** 社区开发新的 [连续性基准工具](https://github.com/Alienfader/continuity-benchmarks)，用于发现 AI 编程中的逻辑冲突和记忆断裂。随着智能体开始处理多文件、多轮任务，短题得分已经不够，长期一致性会成为真正的工程指标。来源：[Reddit讨论](https://www.reddit.com/r/artificial/comments/1t7m8bg/i_built_a_benchmark_for_ai_memory_in_coding/)。

## 今日总结与启示

- **模型能力正在向“可控推理预算”演进。** Ring-2.6-1T、EMO、RVPO、MARBLE、自适应并行推理都在处理同一个问题：如何让模型在复杂任务中更稳、更省、更可控 🧠。
- **AI编程进入生产化阶段。** Codex 切换、Codex 安全框架、Claude Code 更新、Bugbot 计费、Agent Development Kit 和长期记忆基准，共同指向工程智能体的基础设施化 ( •̀ ω •́ ) 。
- **办公与终端入口继续升温。** Claude Office、Gemini 笔记本、Grok 连接器和 CarPlay、中国 AI 终端分级国标，都说明模型竞争正在落到真实入口和设备形态上 🚀。
- **算力和安全成为产业主线。** Anthropic 融资与算力订单、国内 Token 调用量、Runway 儿童安全、智能体企业安全，都说明 AI 公司下一阶段拼的是基础设施、治理能力和合规可信度 ☁️。
- **开源项目更偏向“直接提效”。** 终端助手、多模型网关、本地深度搜索、智能体平台、交易智能体和技能手册，都是开发者能马上放进工作流里的东西 (๑•̀ㅂ•́)و✧。

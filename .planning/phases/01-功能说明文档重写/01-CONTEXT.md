# Phase 1: 功能说明文档重写 - Context

**Gathered:** 2026-04-16
**Status:** Ready for planning

<domain>
## Phase Boundary

将 `prototype/docs/` 下的 21 个功能说明文档全部按新模板重写，格式统一、内容完整、职责清晰。

**每个文档须包含的核心章节：**
1. 页面入口与出口
2. 可见功能逻辑（场景化描述）
3. 不可见功能逻辑（API 数据流）
4. 边界规则
5. 异常处理
6. 字段数据映射
7. AI Prompt 引用（仅涉及 AI 调用的文档）
8. 版本元数据（增强格式）

**与 PRD 的职责分离：** 功能说明文档面向研发实现，PRD 面向产品评审，内容不重复。

</domain>

<decisions>
## Implementation Decisions

### AI Prompt 引用章节
- **D-01：** 涉及 AI 调用的文档（AI业务分析中、搜客策略预览、搜客结果列表）需增加独立 AI Prompt 引用章节
- **D-02：** AI Prompt 章节内容包含：Prompt 模板内容、模型选择（gpt-4o-mini / Claude 3.5 Sonnet / GPT-4o 等）、JSON Schema 要求、零捏造原则、边界处理说明

### 模板章节完整性
- **D-03：** 模板章节按需灵活适配，不强制所有文档包含全部 8 个章节
- **D-04：** 无 AI 调用的文档（18个）不强制增加 AI Prompt 引用章节，保持文档精简
- **D-05：** 各模块文档根据实际内容复杂度调整：简单页面可合并场景，复杂页面（如 AI业务分析中）可拆分更多子场景

### 版本元数据格式
- **D-06：** 每个文档顶部元数据块包含：版本号、状态（C=已确认 / N=初稿 / R=修订中）、对应 PRD 节点、对应原型页面、最后更新时间
- **D-07：** 增强元数据块新增：最后审核人、审核日期、变更原因、关联 issue/pr（可选）

### 处理顺序
- **D-08：** 分批按模块顺序执行，从 P1.1（账号与资源管理 7 个）开始，积累模板经验后继续其他批次
- **D-09：** 四批顺序：P1.1（7个）→ P1.2（9个）→ P1.3（5个）→ P1.4（1个）

### 模板示例
- **D-10：** `租户资源充值-说明.md` 和 `搜客需求输入-说明.md` 作为本阶段模板参考基准，保持已有内容不变，仅按需补充 AI Prompt 引用和增强元数据

### Claude's Discretion
- 各文档内场景的拆分粒度（粗场景 vs 细场景）
- 异常处理表格中 Toast 文案的具体措辞
- 字段映射表格中后端字段名的精确命名（以现有文档为准）

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### 文档模板参考
- `prototype/docs/租户资源充值-说明.md` — 账号与资源管理模块模板基准
- `prototype/docs/搜客需求输入-说明.md` — 静态数据获客模块模板基准
- `prototype/docs/AI业务分析中-说明.md` — 含 AI Prompt 内容，参考其 AI 章节格式

### PRD 文档
- `prd-md/产品核心业务流设计.md` — P01-P80 完整 PRD 节点定义
- `prd-md/产品核心规则和实现思路.md` — P01-P46 详细逻辑实现白皮书

### 现有结构分析
- `prototype/README.md` — PRD 节点与原型页面映射表

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- **现有 Markdown 模板（`租户资源充值-说明.md`）**：可直接作为其他文档重写的格式基准，内容结构已较完整
- **AI Prompt 格式（`AI业务分析中-说明.md`）**：包含具体 Prompt 模板、模型名称、JSON Schema 要求，是 AI 章节的参考样本
- **22 个 HTML 原型页面**：`prototype/pages/` 下所有页面，供对照功能说明文档内容准确性

### Established Patterns
- **元数据块格式**：`> **版本**：v1.0.0 / > **状态**：N（初稿）/ > **对应 PRD 节点**：P01 / > **对应原型页面**：xxx.html / > **最后更新**：2026-04-10`
- **场景编号格式**：`场景一 / 场景二 / 场景三` 层级结构
- **边界规则表格**：规则 / 条件 / 系统行为 三列
- **异常处理表格**：异常场景 / 检测方式 / 前端表现 / Toast 文案 四列

### Integration Points
- 重写后的文档通过 prototype/README.md 中的映射表与 PRD 节点关联
- Phase 2 将完善双向索引映射表，本阶段完成后 Phase 2 可启动
- Phase 3 的修订日志将记录本阶段所有文档变更

</code_context>

<specifics>
## Specific Ideas

- "AI业务分析中、搜客策略预览、搜客结果列表 这3个文档包含AI调用，需要AI Prompt引用章节" — 其他18个文档无需此章节
- "版本元数据块中增加审核人、审核日期、变更原因" — 便于长期维护追溯
- "先从 P1.1 账号与资源管理模块7个开始，积累模板经验后处理其他批次" — 渐进式质量保障

</specifics>

<deferred>
## Deferred Ideas

- AI Prompt 内容的精确模板格式（Prompt Engineering 最佳实践）— 可在 P1.2/P1.3 阶段根据实践补充
- 各文档中边界规则与 PRD 节点内容的精确对齐检查 — Phase 2 双向索引完成后统一审查

---

*Phase: 01-功能说明文档重写*
*Context gathered: 2026-04-16*

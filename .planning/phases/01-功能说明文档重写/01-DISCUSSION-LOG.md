# Phase 1: 功能说明文档重写 - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-16
**Phase:** 1-功能说明文档重写
**Areas discussed:** AI Prompt 引用章节, 模板章节完整性, 版本元数据格式, 处理顺序

---

## AI Prompt 引用章节

| Option | Description | Selected |
|--------|-------------|----------|
| 需要（推荐） | 在涉及 AI 调用的文档（AI业务分析中、搜客策略预览、搜客结果列表）中增加独立章节记录 Prompt 模板、模型选择、JSON Schema 要求等 | ✓ |
| 不需要 | 不在功能说明文档中记录 AI Prompt，保持文档聚焦业务流程 | |

**User's choice:** 需要（推荐）
**Notes:** AI业务分析中-说明.md 已包含具体 Prompt 模板内容（ETL Prompt、ICP 建模 Prompt 等），可作为参考样本

---

## 模板章节完整性

| Option | Description | Selected |
|--------|-------------|----------|
| 按需灵活适配（推荐） | AI调用文档增加AI Prompt引用章节；其他18个文档无需此章节，保持精简 | ✓ |
| 所有文档8章节统一 | 所有21个文档统一强制包含全部8个章节，即使内容为空也保留结构 | |

**User's choice:** 按需灵活适配（推荐）
**Notes:** 各模块文档内容和复杂度差异较大，强制8章节统一会导致大量空章节，反而降低可读性

---

## 版本元数据格式

| Option | Description | Selected |
|--------|-------------|----------|
| 增强元数据块（推荐） | 在元数据块中增加：最后审核人、审核日期、变更原因、关联issue/pr等字段 | ✓ |
| 当前格式已足够 | 仅记录版本号、状态、对应PRD节点、原型页面、最后更新时间5项 | |

**User's choice:** 增强元数据块（推荐）
**Notes:** 便于长期维护追溯，每次变更可关联具体原因和审核人

---

## 处理顺序

| Option | Description | Selected |
|--------|-------------|----------|
| 分批按模块顺序执行 | 先完整处理 P1.1（账号与资源管理7个），积累模板经验后处理其他批次 | ✓ |
| 从简单模块开始积累模板 | 先从1个文档的提示词语言管理开始，快速跑通模板再批量处理复杂模块 | |

**User's choice:** 分批按模块顺序执行
**Notes:** P1.1模块共7个文档，内容较完整，先从P1.1开始可保证质量基线

---

## Deferred Ideas

- AI Prompt 内容的精确模板格式（Prompt Engineering 最佳实践）— 可在 P1.2/P1.3 阶段根据实践补充
- 各文档中边界规则与 PRD 节点内容的精确对齐检查 — Phase 2 双向索引完成后统一审查

# Phase 9: 内容修正和文档清理 - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-17
**Phase:** 09-内容修正和文档清理
**Areas discussed:** 元数据清理范围, 空目录 + 旧目录清理, 01-concept 结构完整性, 问题修正边界

---

## 元数据清理范围

| Option | Description | Selected |
|--------|-------------|----------|
| 仅 spec 文件 | 只移除 04-specs/ 下的 spec 文件中的审核人/审核日期字段 | |
| spec + PRD 文档 | 04-specs/ spec 文件 + 02-modules/ 下所有 PRD 文档一起清理 | |
| 全部 Markdown 文档 | 04-specs/ spec 文件 + 02-modules/ PRD + 01-concept/ 下所有 .md 文件全部清理 | ✓ |
| 其他（手动指定） | 用户指定哪些目录/文件需要清理 | |

**User's choice:** 全部 Markdown 文档
**Notes:** 用户选择全面清理，覆盖 01-concept/、02-modules/、04-specs/、05-shared/ 下所有 .md 文件。

---

## 空目录 + 旧目录清理

| Option | Description | Selected |
|--------|-------------|----------|
| 仅本次新增的空目录 | 04-specs/ 8 个空子目录全部删除，03-prototypes/components/ 删除 | |
| 本次 + 旧目录一起清理 | Phase 7/8 跳过的旧 docs/、prd-md/、prototype/ 目录也一并删除 | |
| 旧目录暂缓 | 04-specs/ 空子目录删除，旧目录保留到 Phase 10 单独处理 | ✓ |

**User's choice:** 旧目录暂缓
**Notes:** 用户决定旧 docs/、prd-md/、prototype/ 目录清理移至 Phase 10 单独规划，Phase 9 聚焦于本次迁移新增的空目录清理。

---

## 01-concept 结构完整性

| Option | Description | Selected |
|--------|-------------|----------|
| 补充 README + glossary | 创建 README.md（全局索引），glossary.md（术语表）。api-specs/ 暂不创建 | ✓ |
| 完整补充三项 | README + glossary + api-specs/ 全部补充完整 | |

**User's choice:** 补充 README + glossary
**Notes:** api-specs/ 功能已在 02-modules/api-specs/ 覆盖，不需要重复创建。

---

## 问题修正边界

| Option | Description | Selected |
|--------|-------------|----------|
| 发现即修正 | 扫描过程中发现的其他问题在 Phase 9 中一并修正 | |
| 记录待后续处理 | 其他问题记录到 backlog，待 Phase 9 完成后在 roadmap 中单独规划修复 | ✓ |

**User's choice:** 记录待后续处理
**Notes:** 扫描中发现的其他问题（如索引链接错误、内容不一致等）不直接在 Phase 9 修复，移交 backlog 后续处理。

---

## Deferred Ideas

- `docs/`、`prd-md/`、`prototype/` 旧目录清理 → 移至 Phase 10 单独规划
- 01-concept/design/ 下 2 个空子目录（核心业务流/、实体关系说明/）是否删除 → 待评估后决定

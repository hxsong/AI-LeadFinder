# Phase 2: 双向索引映射表 - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-16
**Phase:** 02-双向索引映射表
**Areas discussed:** PRD头部格式, 多节点文档处理, PRD更新范围, prd-md README增强, prototype/README增强

---

## PRD头部格式

| Option | Description | Selected |
|--------|-------------|----------|
| 标准块格式（推荐） | 复用Phase 1 SPEC文档元数据块格式，4行：版本/状态/关联原型页面/最后更新。结构一致、便于工具解析 | ✓ |
| 轻量行格式 | 只加一行 `> **关联原型页面**：xxx.html`，更轻量但不统一 | |
| 仅靠README映射 | 不改PRD头部，prd-md/README.md已有映射表 | |

**User's choice:** 标准块格式（推荐）
**Notes:** PRD头部使用与SPEC文档一致的元数据块格式，保持全文档体系视觉统一

---

## 多节点文档处理

| Option | Description | Selected |
|--------|-------------|----------|
| 列出全部节点（推荐） | PRD对应多个原型页面时全部列出（如 P06-P07），全面但较长 | ✓ |
| 标注主要节点 | 主要节点P01，次要节点P01/P06/P07，视觉清晰但引入主次判断成本 | |

**User's choice:** 列出全部节点（推荐）
**Notes:** 不区分主次，全部列出避免歧义

---

## PRD文档更新范围

| Option | Description | Selected |
|--------|-------------|----------|
| 仅核心PRD主文档（推荐） | 与原型21页精确对应的主文档，约10个文件。不改评分标准、AI概念设计等支撑文档 | ✓ |
| 全部.md文件 | prd-md/下所有.md，含支撑性文档，范围更广但很多无原型对应 | |

**User's choice:** 仅核心PRD主文档（推荐）
**Notes:** 支撑性文档（如潜在客户评分标准设计.md）不在本阶段处理

---

## prd-md阶段README增强

| Option | Description | Selected |
|--------|-------------|----------|
| 增加功能说明文档列（推荐） | 现有"文档|节点|原型页面"三列扩展为四列，增加"功能说明文档"，便于从PRD README直接定位spec | ✓ |
| 保持现状 | prd-md README不改动，双向索引靠"各文档头部+prototype README"两条路径实现 | |

**User's choice:** 增加功能说明文档列（推荐）
**Notes:** 扩展现有表格，参照 prd-md/01-账号与资源管理/README.md 格式

---

## prototype/README增强

| Option | Description | Selected |
|--------|-------------|----------|
| 核验准确性即可（推荐） | 当前README已包含原型页面/功能说明文档/PRD节点/产品阶段四列，Phase 2只做准确性核验，不大改 | ✓ |
| 增加跳转关系和入口链接 | 补充缺失映射、完善跳转关系图、快速跳转链接等增强 | |

**User's choice:** 核验准确性即可（推荐）
**Notes:** prototype/README 已相对完整，重点是映射准确性

---

## Deferred Ideas

- prd-md支撑性文档是否加原型引用 → 超出核心PRD范围，下一phase按需处理
- 双向索引自动化工具（脚本检测断裂索引）→ 属于工具建设，当前纯人工完成

---

*Phase: 02-双向索引映射表*
*Discussion completed: 2026-04-16*

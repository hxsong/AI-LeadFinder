# Phase 8: 索引同步与验收 - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-17
**Phase:** 08-索引同步与验收
**Areas discussed:** 三向映射表 P47-P80 处理方式, 04-specs 目录结构, 验收方式, 旧目录清理, 映射表格式

---

## 三向映射表 P47-P80 处理方式

| Option | Description | Selected |
|--------|-------------|----------|
| 保留占位行 | 在映射表中显示 P47-P80 行，标注「规划中」并注明无原型/无功能说明（不新建占位文件） | ✓ |
| 仅已实现节点 | 映射表仅覆盖已有原型的节点（P01-P46），P47-P80 不出现在映射表中 | |

**User's choice:** 保留占位行
**Notes:** 保持映射表完整性，让查阅者知道产品全貌，即使某些节点尚未实现

---

## 04-specs 目录结构

| Option | Description | Selected |
|--------|-------------|----------|
| 扁平结构（推荐） | spec 文件已迁移至 04-specs/ 根目录，各模块 README 直接引用根目录文件（如 ../04-specs/租户资源充值-说明.md） | ✓ |
| 按模块分目录 | 按 01-账号/、02-静态数据/ 等子目录重组 04-specs/，各模块 README 引用子目录内文件 | |

**User's choice:** 扁平结构（推荐）
**Notes:** Phase 7 迁移已完成，spec 文件已在根目录，保持现状避免二次迁移

---

## 验收方式

| Option | Description | Selected |
|--------|-------------|----------|
| 自动化扫描 | 使用 grep/curl 自动化扫描所有 Markdown 文件中的相对链接，验证目标文件存在 | |
| 人工抽查 | 人工逐个验证关键索引入口（三层入口 + 抽样 5-10 个深层链接） | |
| 两者结合（推荐） | 自动扫描 + 人工确认关键路径（扫描作为前置，人工作为最终验收） | ✓ |

**User's choice:** 两者结合
**Notes:** 自动化负责全面扫描，人工确认关键链路，双重保障

---

## 旧目录清理

| Option | Description | Selected |
|--------|-------------|----------|
| 不清理，保留原位 | Phase 8 包含：更新索引 + 修复引用 + 验收验证（成功标准已覆盖） | ✓ |
| Phase 8 统一清理 | 验证通过后，将 docs/、prd-md/、prototype/ 三个旧目录从工作区删除（成功标准未明确列出，需新增验收项） | |

**User's choice:** 不清理，保留原位
**Notes:** 安全优先，保留备份，原目录可随时手动删除

---

## 映射表格式

| Option | Description | Selected |
|--------|-------------|----------|
| 改为标准三列表格（推荐） | 从现有 4 列（文档\|涵盖节点\|原型页面\|功能说明）→ 改为 3 列（PRD 节点\|原型页面\|功能说明），用节点范围填充 PRD 节点列 | ✓ |
| 仅修复路径，保持 4 列 | 保持现有 4 列格式，仅修复路径引用（../prototype/docs/ → ../04-specs/） | |

**User's choice:** 改为标准三列表格（推荐）
**Notes:** 与 Phase 6 规范对齐，统一跨模块查阅体验

---

## Claude's Discretion

- 04-specs/ 下的空模块子目录（00-概述与定义 through 07-全局规范）是否删除或填充内容——按 D-03 保留原状，不新建内容
- 顶层 README.md 是否包含 P01-P80 全量三向映射总表——按 deferred 项，作为后续迭代

## Deferred Ideas

- **旧目录清理**：`docs/`、`prd-md/`、`prototype/` 原始目录的清理删除——用户决定保留原位
- **顶层 README 全量映射表**：P01-P80 全量三向映射总表作为后续迭代项

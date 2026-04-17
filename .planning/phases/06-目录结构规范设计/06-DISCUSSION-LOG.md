# Phase 6: 目录结构规范设计 - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-17
**Phase:** 06-目录结构规范设计
**Areas discussed:** 目录职责边界, 三向映射表格式, 各层 README 结构, 迁移路径映射

---

## 目录职责边界

| Option | Description | Selected |
|--------|-------------|----------|
| 只放核心概念图 | 01-concept 只收纳 ER 图、业务流图，不含具体模块文档 | |
| 包含全局规范 | 01-concept 同时收纳核心概念图和全局规范文档（API 规范、术语表等） | ✓ |
| 分散到多个目录 | 概念图在 01-concept，API 规范放 05-shared/api/，全局规范放 07-全局规范 | |

**User's choice:** 包含全局规范
**Notes:** 01-concept 包含设计图和全局性知识资产

---

| Option | Description | Selected |
|--------|-------------|----------|
| 放原型目录下 | 设计资产放在 03-prototypes/styles/ 和 03-prototypes/components/ 下 | ✓ |
| 顶层 resources/ | 设计资源统一放在顶层 resources/ 下 | |
| 混合方式 | styles/ 和 components/ 保持原位，resources/ 用于其他共享资源 | |

**User's choice:** 放原型目录下
**Notes:** styles/ 和 components/ 不移动，保持与原型页面紧邻

---

| Option | Description | Selected |
|--------|-------------|----------|
| 05-shared/changelog/ | changelog/ 是产品变更历史，是共享知识资产，放 05-shared/changelog/ | ✓ |
| docs/changelog/（独立） | changelog/ 是版本记录，单独拎出放 docs/changelog/ | |
| 顶层 README 内联 | 顶层 README.md 直接记录变更，不单独维护 changelog 文件 | |

**User's choice:** 05-shared/changelog/
**Notes:** changelog 作为共享知识资产统一管理

---

## 三向映射表格式

| Option | Description | Selected |
|--------|-------------|----------|
| 三列表格（推荐） | 每个 README 包含三列表格：PRD 节点 | 原型页面 | 功能说明文档，支持双向追溯 | ✓ |
| 两两链接列表 | 每个目录包含指向其他两者的链接列表，而非表格（更灵活但可读性稍差） | |
| 混合模式 | 表格 + 链接列表混用：表格用于索引，列表用于导航 | |

**User's choice:** 三列表格（推荐）
**Notes:** 三列表格可读性最强，双向追溯最清晰

---

| Option | Description | Selected |
|--------|-------------|----------|
| Markdown 链接 | 使用相对路径 + Markdown 链接（标准 Markdown，可被 Git 管理） | ✓ |
| 节点编号引用 | 使用节点编号 P01-P80 引用（不直接链接，便于批量更新） | |
| 双向嵌入链接 | 双向链接：源文件内记录它指向的其他文件（需要维护多份） | |

**User's choice:** Markdown 链接
**Notes:** 相对路径链接标准、Git 可管理

---

| Option | Description | Selected |
|--------|-------------|----------|
| 每个子模块有 README | 02-modules/ 下每个子目录（01-账号、02-静态数据等）都有 README，含本模块三向映射 | ✓ |
| 只在顶层有 README | 只在顶层目录（02-modules/、03-prototypes/、04-specs/）有 README，子目录通过上级索引 | |
| 按需创建 | 子目录可选有 README — 有多文件时才创建，避免单文件目录有 README | |

**User's choice:** 每个子模块有 README
**Notes:** 粒度更细，导航更直接

---

## 各层 README 结构

| Option | Description | Selected |
|--------|-------------|----------|
| 职责说明 + 索引 | 每个目录的 README 说明：本层职责、包含内容、与其他层的关系 | |
| 职责 + 映射 + 变更 | 职责说明 + 三向映射表 + 变更历史（changelog 摘要） | |
| 完整版（含维护指南） | 职责说明 + 三向映射表 + 变更历史 + 维护指南（如何更新索引） | ✓ |

**User's choice:** 完整版（含维护指南）
**Notes:** 维护指南对长期维护至关重要

---

## 迁移路径映射

| Option | Description | Selected |
|--------|-------------|----------|
| 按类型拆分迁移 | changelog/ → 05-shared/changelog/；design/ → 01-concept/design/；其余文件 → 05-shared/misc/ | ✓ |
| 统一放入 05-shared/docs/ | docs/ 下所有内容统一放到 05-shared/docs/ 下，保持扁平结构 | |
| 不复用 docs 目录名 | 先清空 docs/，内容按类型分散到 01-concept/ 和 05-shared/，不复用 docs/ 目录名 | |

**User's choice:** 按类型拆分迁移
**Notes:** 按类型拆分最清晰，changelog 和 design 天然属于不同类别

---

| Option | Description | Selected |
|--------|-------------|----------|
| 整体迁移 | prd-md/ 整体迁移到 02-modules/（00-概述与定义 → 02-modules/00-概述） | |
| 去掉 -md 后缀 | prd-md/ 迁移后去掉 -md 后缀（prd-md/ → 02-modules/） | ✓ |
| 保持子目录名不变 | prd-md/ 的子目录名称不变，但外层换成 02-modules/（prd-md/01-账号/ → 02-modules/01-账号/） | |

**User's choice:** 保持子目录名不变
**Notes:** 子目录名称已反映内容，去掉 -md 是最小改动

---

| Option | Description | Selected |
|--------|-------------|----------|
| 按类型拆分迁移 | prototype/pages/ → 03-prototypes/pages/；prototype/docs/ → 04-specs/；其余（styles/, components/）不动 | ✓ |
| 全部迁移到 03-prototypes/ | pages/ → pages/；docs/ → 04-specs/；styles/ → 03-prototypes/styles/；components/ → 03-prototypes/components/ | |
| 只迁移页面和文档 | 仅迁移 pages/ 和 docs/，styles/ 和 components/ 作为独立资产不移动 | |

**User's choice:** 按类型拆分迁移
**Notes:** styles/ 和 components/ 与原型页面紧邻，不移动便于原型独立运行

---

## Claude's Discretion

无 — 所有决策均由用户明确指定。

## Deferred Ideas

无 — 讨论保持在 phase 范围内。

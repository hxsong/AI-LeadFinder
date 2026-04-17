# Phase 6: 目录结构规范设计 - Context

**Gathered:** 2026-04-17
**Status:** Ready for planning

<domain>
## Phase Boundary

**Domain:** 设计并记录新目录结构规范和 README 索引格式，为 Phase 7 内容迁移提供执行标准。

This phase defines:
1. 新目录结构中每个目录的职责边界
2. 各层 README.md 的三向映射表格式和内容规范
3. Phase 7 执行的源路径→目标路径映射规则

**Out of scope:** 实际执行文件迁移（Phase 7）、更新索引引用（Phase 8）
</domain>

<decisions>
## Implementation Decisions

### 目录职责边界

- **D-01:** `01-concept/` — 核心概念设计资产（ER 图、业务流图）+ 全局规范文档（API 规范、术语表等）。包含设计图和全局性知识资产。
- **D-02:** `02-modules/` — 产品模块 PRD 文档，迁移自 `prd-md/`，按产品阶段（01-账号、02-静态数据等）组织，每个子模块有独立 README。
- **D-03:** `03-prototypes/` — 原型页面（pages/）、样式（styles/）、组件（components/）。styles/ 和 components/ 保持在原型目录下，不迁移到顶层 resources/。
- **D-04:** `04-specs/` — 功能说明文档，迁移自 `prototype/docs/`。
- **D-05:** `05-shared/` — 共享知识资产：`changelog/`（变更历史）、`misc/`（杂项文档）。changelog 放此处，不单独拎出。
- **D-06:** `resources/` — 顶层资源目录，用于非设计类共享资源（图片、字体等）。

### 三向映射表格式

- **D-07:** 映射表采用三列表格格式：PRD 节点 | 原型页面 | 功能说明文档，支持双向追溯。
- **D-08:** 链接格式使用 Markdown 相对路径链接（如 `[页面名](../03-prototypes/pages/xxx.html)`），不使用节点编号引用。
- **D-09:** 链接方向：表格内从任一列可点击跳转到对应文件（相对路径）。

### 各层 README 结构

- **D-10:** 每个子模块目录（01-账号、02-静态数据等）都创建 README.md，不只在顶层。
- **D-11:** 每个子模块 README 包含四个部分：
  1. **职责说明** — 本层职责、包含内容、与其他层的关系
  2. **三向映射表** — 本模块的 PRD 节点 ↔ 原型页面 ↔ 功能说明文档
  3. **变更历史** — changelog 摘要（来自 05-shared/changelog/）
  4. **维护指南** — 如何更新索引（新增文件时如何同步更新 README）

### 迁移路径映射规则

- **D-12:** `docs/changelog/` → `05-shared/changelog/`
- **D-13:** `docs/design/` → `01-concept/design/`
- **D-14:** `docs/` 下其余文件（除 changelog/、design/ 外）→ `05-shared/misc/`
- **D-15:** `prd-md/` 整体迁移到 `02-modules/`，子目录名称不变（prd-md/01-账号/ → 02-modules/01-账号/），去掉 -md 后缀。
- **D-16:** `prototype/pages/` → `03-prototypes/pages/`（保持模块子目录结构）
- **D-17:** `prototype/docs/` → `04-specs/`（保持模块子目录结构）
- **D-18:** `prototype/styles/` 和 `prototype/components/` 保持原位（不移动），留在 `03-prototypes/styles/` 和 `03-prototypes/components/`

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase definition
- `.planning/ROADMAP.md` §Phase 6 — 目录结构规范设计目标、2 个 plans 的描述
- `.planning/REQUIREMENTS.md` §STRUCT-01, STRUCT-02 — 本 phase 覆盖的两个需求

### Project context
- `.planning/PROJECT.md` §Current Milestone — v1.1 目标：重建文档目录结构
- `.planning/PROJECT.md` §文档体系（v1.0.0 已交付）— 现有目录结构现状（docs/, prd-md/, prototype/）
- `.planning/PROJECT.md` §Key Decisions — 文档用 Markdown，原型用 HTML，两种职责分离

### Existing structure (source for migration)
- `docs/` — changelog/, design/, README.md, 产品原型结构分析报告.md
- `prd-md/` — 00-概述与定义 through 07-全局规范, api-specs/, README.md
- `prototype/` — pages/, docs/, styles/, components/, README.md

[No external specs — requirements fully captured in decisions above]
</canonical_refs>

<code_context>
## Existing Code Insights

### Phase Character
This is a pure documentation design task — no code changes, no existing components to reuse. Phase 6 produces:
1. 新目录结构规范文档（.planning/phases/06-目录结构规范设计/06-目录结构规范.md）
2. README 索引格式规范文档
3. 迁移规则文档

### Integration Points
- Phase 7 reads this spec as the execution standard for content migration
- Phase 8 reads this spec to validate migration completeness
- Top-level README.md references must be updated post-Phase 7

### Creative Options
- 目录结构规范文档可采用图表（ASCII tree）展示最终结构
- README 模板可用 Markdown 代码块形式提供，便于直接复制使用
</code_context>

<specifics>
## Specific Ideas

- 01-concept 包含全局规范（API 规范、术语表）— 与产品模块分离，全局共享
- styles/ 和 components/ 不移动 — 保持与原型页面紧邻，便于原型独立运行
- 每个子模块 README 含维护指南 — 新增文件时须同步更新索引，降低后续维护成本
</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 06-目录结构规范设计*
*Context gathered: 2026-04-17*

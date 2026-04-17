# Phase 10: 目录规范完善与原型规范建设 - Context

**Gathered:** 2026-04-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 10 完成两件事：
1. 清理 Phase 7/9 遗留的旧目录（`docs/`、`prototype/`）
2. 基于当前项目目录结构和文档格式，编写通用产品原型制作规范

</domain>

<decisions>
## Implementation Decisions

### 旧目录清理

- **D-01:** 先清内容，再删目录。先将旧目录中有价值的文件迁移到新目录，然后清空旧目录，最后删除整个目录。
- **D-02:** `docs/` 内容处理：
  - `docs/changelog/` — 与 `05-shared/changelog/` 内容重复，直接清空整个 `docs/changelog/` 目录
  - `docs/design/*.html` — HTML 已迁移到 `01-concept/design/`，旧副本直接删除
  - `docs/产品原型结构分析报告.md` — 迁移到 `05-shared/misc/`，再清空 `docs/`
  - `docs/README.md` — 旧目录说明，直接删除
- **D-03:** `prototype/` 内容处理：
  - `prototype/docs/` — 21 个 .md 文件已在 `04-specs/` 存在，直接清空整个 `prototype/docs/` 目录
  - `prototype/components/` — Phase 9 已确认空目录，直接删除
  - `prototype/catalog-panel.js`、`prototype/entry-nav.js`、`prototype/nav-config.json` — 未迁移，确认是否需要迁移或删除
  - `prototype/styles/`、`prototype/pages/` — 迁移状态待确认
  - `prototype/CHANGELOG.md`、`prototype/README.md` — 旧目录说明，直接删除
  - 清空 `prototype/` 后删除整个目录
- **D-04:** `prd-md/` 目录 — Phase 7/8 迁移时已确认全部迁移完成，Phase 9 未动。Phase 10 确认是否为空后删除。

### 原型规范建设

- **D-05:** 文档位置：`05-shared/原型规范.md`（通用原型制作规范，供后续项目参考）
- **D-06:** 规范内容结构：
  - 通用最佳实践（基于行业标准的原型制作方法论）
  - 项目示例（结合当前 AI-LeadFinder 的实际 HTML 原型和文档格式）
- **D-07:** 规范涵盖方面：
  - 原型目录结构规范（参考当前 `03-prototypes/` 结构）
  - HTML 原型文件命名规范
  - CSS 样式规范（参考 `03-prototypes/styles/global.css`）
  - 页面间导航规范
  - 原型与功能说明文档的对应关系（三向映射）
  - 原型评审和发布流程

### BACKLOG 问题处理

- **D-08:** BACKLOG B-01（ROADMAP.md Phase 9 Success Criteria 不符）— 直接在 Phase 10 执行中修正 ROADMAP.md，不需要单独 plan
- **D-09:** BACKLOG B-02（评分标准文档可优化）— 优先级低，不在 Phase 10 范围

### Claude's Discretion

- `prototype/catalog-panel.js`、`prototype/entry-nav.js`、`prototype/nav-config.json` 未在 Phase 7 迁移中处理，决策：迁移到 `03-prototypes/` 对应位置（如有用）或直接删除
- `03-prototypes/` 下现有 `styles/` 和 `pages/` 内容是否完整需要验证

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### 目录结构规范
- `.planning/phases/06-目录结构规范设计/06-目录结构规范.md` — 目录规范定义（参考）
- `03-prototypes/README.md` — 现有原型目录结构
- `01-concept/README.md` — 概念层目录结构（参考）

### 现有原型资产
- `03-prototypes/styles/global.css` — 原型样式规范参考
- `03-prototypes/styles/` — 现有样式文件
- `03-prototypes/pages/` — 现有原型页面
- `docs/design/LeadFinder业务流设计.html` — 旧副本（未迁移）
- `docs/design/LeadFinder实体关系图.html` — 旧副本（未迁移）

### 迁移状态参考
- `.planning/phases/07-内容迁移/07-CONTEXT.md` — Phase 7 迁移决策（D-04 旧目录暂缓）
- `.planning/phases/08-索引同步与验收/08-CONTEXT.md` — Phase 8 确认 docs/prototype/prd-md 状态
- `.planning/BACKLOG.md` — Phase 9 遗留问题

### 文档规范参考
- `01-concept/glossary.md` — 术语表（规范文档可引用）
- `05-shared/changelog/v1.1.0.md` — 当前 changelog 格式参考

</canonical_refs>

<codebase_context>
## Existing Code Insights

### Reusable Assets
- `03-prototypes/styles/global.css` — 所有原型页面引用的统一样式文件
- `03-prototypes/styles/` 下可能还有其他辅助样式文件

### Established Patterns
- HTML 原型文件命名：`{功能名}.html`（中文命名）
- CSS 引用方式：`<link rel="stylesheet" href="../styles/global.css">`（相对路径）
- 原型与 spec 对应：`04-specs/{功能名}-说明.md`

### Integration Points
- 原型页面 → 功能说明文档（04-specs/）
- 原型页面 → 模块索引（03-prototypes/README.md）
- 原型样式 → 全局样式（03-prototypes/styles/global.css）

</codebase_context>

<specifics>
## Specific Ideas

[No specific examples yet — open to standard approaches based on existing patterns]
</specifics>

<deferred>
## Deferred Ideas

- BACKLOG B-02（潜在客户评分标准设计.md 章节可优化）— 优先级低，后续 phase 或产品经理自行处理

</deferred>

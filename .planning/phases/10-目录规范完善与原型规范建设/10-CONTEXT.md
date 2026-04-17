# Phase 10: 目录规范完善与原型规范建设 - Context

**Gathered:** 2026-04-17
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 10 完成四件事：
1. 清理 Phase 7/9 遗留的旧目录（`docs/`、`prototype/`、`prd-md/`）
2. 基于当前项目目录结构和文档格式，编写通用产品原型制作规范
3. 迁移并保留原型导航辅助工具（修正路径引用）
4. 重组 `01-concept/` 为平铺结构，梳理内容归属

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
  - `prototype/styles/global.css` — 已在 `03-prototypes/styles/global.css` 存在，旧副本删除
  - `prototype/pages/` — 已在 `03-prototypes/pages/` 存在，旧副本清空整个 pages/ 目录
  - `prototype/CHANGELOG.md`、`prototype/README.md` — 旧目录说明，直接删除
  - 清空 `prototype/` 后删除整个目录
- **D-04:** `prd-md/` 目录 — Phase 7/8 迁移时已确认全部迁移完成，确认是否为空后删除。

### 原型导航辅助工具

- **D-05:** `prototype/catalog-panel.js`、`prototype/entry-nav.js`、`prototype/nav-config.json` — **迁移保留**，修正路径引用后放入 `03-prototypes/`
  - 路径修正：`prototype/pages/` → `03-prototypes/pages/`，`prototype/docs/` → `04-specs/`
  - 用途：在原型页面内提供交互式目录面板和侧边导航
  - `catalog-panel.js` → `03-prototypes/catalog-panel.js`
  - `entry-nav.js` → `03-prototypes/entry-nav.js`
  - `nav-config.json` → `03-prototypes/nav-config.json`
- **D-06:** 确认 `03-prototypes/README.md` 已提供完整的三向映射表，交互导航作为补充而非替代

### 原型规范建设

- **D-07:** 文档位置：`05-shared/原型规范.md`（通用原型制作规范，供后续项目参考）
- **D-08:** 规范深度：**实用轻量** — 聚焦当前项目实际用到的规范（HTML/CSS/目录/导航），行业通用最佳实践作为参考链接，不做过度展开
- **D-09:** 规范涵盖方面：
  - 原型目录结构规范（参考当前 `03-prototypes/` 结构）
  - HTML 原型文件命名规范
  - CSS 样式规范（参考 `03-prototypes/styles/global.css`）
  - 页面间导航规范
  - 原型与功能说明文档的对应关系（三向映射）
  - 原型评审和发布流程

### 01-concept 目录重组

- **D-10:** 目标结构：平铺（直接在 `01-concept/` 下，不建子目录）
- **D-11:** 新分类文件（按内容从现有文件拆分合并）：
  - `01-concept/概念设计.md` — 基于 `AI-LeadFinder｜概念设计.md` + `产品非功能性需求清单.md` 相关内容
  - `01-concept/商业化说明.md` — 基于 `潜在客户评分标准设计.md` 内容
  - `01-concept/角色组件设计.md` — 新建，整合角色定义和组件设计相关内容
  - `01-concept/业务流设计.md` + `业务流设计.html` — 基于 `产品核心业务流设计.md` 和 `LeadFinder业务流设计.html`
  - `01-concept/实体关系设计.md` + `实体关系图.html` — 基于 `LeadFinder实体关系图.html`
- **D-12:** 执行顺序：先阅读现有 6 个文件，理解内容，再拆分合并到新文件；旧 6 个文件**暂保留**在 `01-concept/design/` 下，待新文件稳定后再删除
- **D-13:** HTML 原型文件（业务流设计.html、实体关系图.html）保持 HTML 格式，放在 `01-concept/` 下与同名 .md 并存

### BACKLOG 问题处理

- **D-14:** BACKLOG B-01（ROADMAP.md Phase 9 Success Criteria 不符）— 直接在 Phase 10 执行中修正 ROADMAP.md，不需要单独 plan
- **D-15:** BACKLOG B-02（评分标准文档可优化）— 优先级低，不在 Phase 10 范围

### Claude's Discretion

- `docs/` 的 `design/` 目录下可能还有其他文件需确认（除 2 个 HTML 外是否有其他内容）
- `01-concept/design/` 下 6 个旧文件的详细阅读和内容拆分需要执行阶段仔细处理

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### 目录结构规范
- `.planning/phases/06-目录结构规范设计/06-目录结构规范.md` — 目录规范定义（参考）
- `03-prototypes/README.md` — 现有原型目录结构（包含三向映射表）
- `01-concept/README.md` — 概念层目录结构

### 现有原型资产
- `03-prototypes/styles/global.css` — 原型样式规范参考
- `03-prototypes/styles/` — 现有样式文件
- `03-prototypes/pages/` — 现有原型页面（20个HTML）
- `prototype/catalog-panel.js` — 目录面板工具（待迁移）
- `prototype/entry-nav.js` — 侧边导航工具（待迁移）
- `prototype/nav-config.json` — 导航配置（待迁移）

### 01-concept 现有文件
- `01-concept/design/AI-LeadFinder｜概念设计.md` — 待拆分到新文件
- `01-concept/design/产品核心业务流设计.md` — 待拆分到新文件
- `01-concept/design/LeadFinder业务流设计.html` — 待迁移到 01-concept/
- `01-concept/design/LeadFinder实体关系图.html` — 待迁移到 01-concept/
- `01-concept/design/潜在客户评分标准设计.md` — 待拆分到新文件
- `01-concept/design/产品非功能性需求清单.md` — 待拆分到新文件

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
- `03-prototypes/styles/global.css` — 所有原型页面引用的统一样式文件，包含设计 Token
- `prototype/catalog-panel.js` — 浮动目录面板，引用旧路径，待迁移修正
- `prototype/entry-nav.js` — 侧边导航，含 SVG 图标库和备档配置，待迁移修正

### Established Patterns
- HTML 原型文件命名：`{功能名}.html`（中文命名）
- CSS 引用方式：`<link rel="stylesheet" href="../styles/global.css">`（相对路径）
- 原型与 spec 对应：`04-specs/{功能名}-说明.md`
- `01-concept/design/` 下 HTML 使用 CDN 的 Tailwind CSS，不依赖本地样式文件

### Integration Points
- 原型页面 → 功能说明文档（04-specs/）
- 原型页面 → 模块索引（03-prototypes/README.md）
- 原型样式 → 全局样式（03-prototypes/styles/global.css）
- 交互导航工具（catalog-panel/entry-nav）→ 原型页面内部集成

</codebase_context>

<specifics>
## Specific Ideas

- 交互导航工具迁移后，路径修正是关键：旧 `prototype/pages/` → `03-prototypes/pages/`，旧 `prototype/docs/` → `04-specs/`
- 01-concept 重组是内容驱动的工作：需要先完整阅读 6 个旧文件，理解内容归属，再拆分合并
</specifics>

<deferred>
## Deferred Ideas

- BACKLOG B-02（潜在客户评分标准设计.md 章节可优化）— 优先级低，由新创建的 `商业化说明.md` 逐步覆盖
- Phase 10 执行后期：删除 `01-concept/design/` 下的 6 个旧文件（在 `01-concept/` 下新文件稳定后）

</deferred>

---

*Phase: 10-目录规范完善与原型规范建设*
*Context gathered: 2026-04-17*
*Updated: 2026-04-17 (新增 D-05~D-06 导航工具决策, D-10~D-13 01-concept 重组决策, 更新 D-02~D-04 清理细节)*

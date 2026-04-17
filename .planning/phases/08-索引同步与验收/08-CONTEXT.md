# Phase 8: 索引同步与验收 - Context

**Gathered:** 2026-04-17
**Status:** Ready for planning

<domain>
## Phase Boundary

**Domain:** 更新所有 README.md 索引映射，修复迁移后的引用断裂，完成整体验收。

本次 phase 完成以下工作：

1. 更新 `02-modules/` 各子目录 README.md 的三向映射表（改为标准 3 列表格，修复路径）
2. 更新 `04-specs/README.md` 目录结构部分
3. 创建 `03-prototypes/README.md`
4. 验证所有内部文件引用路径（自动化扫描 + 人工抽查）

**Out of scope:**
- 修改任何文档内容本身（仅更新索引和引用路径）
- 删除原始 `docs/`、`prd-md/`、`prototype/` 目录（保留原位）
- 新建 P47-P80 的原型或功能说明文档
</domain>

<decisions>
## Implementation Decisions

### 索引更新方向

- **D-01:** `02-modules/*/` README 映射表格式：改为标准三列表格（PRD 节点 | 原型页面 | 功能说明文档），不再保留"文档名"列。用 PRD 节点范围（P01-P03 等）填充节点列。
- **D-02:** `02-modules/*/` README 路径修复：`../prototype/docs/*.md` → `../04-specs/*.md`；`../../prototype/README.md` → `../03-prototypes/README.md`。
- **D-03:** `04-specs/` 结构采用扁平结构（根目录）：spec 文件在 `04-specs/` 根目录（21 个），各模块 README 直接引用根目录文件（如 `../04-specs/租户资源充值-说明.md`）。`04-specs/` 下的空模块子目录保留原状，不新建内容。
- **D-04:** P47-P80 在映射表中保留占位行，标注"规划中"，注明无原型/无功能说明，不新建占位文件。
- **D-05:** `03-prototypes/README.md` 按 Phase 6 P6.2 规范模板创建，包含：职责说明 + 三向映射表入口（各模块 README 链接）+ 页面目录列表。

### 验收方式

- **D-06:** 验收采用两者结合：自动化扫描（grep 扫描所有 Markdown 文件中的相对链接，验证目标文件存在）+ 人工抽查（验证顶层入口、三层 README 导航链路完整）。

### 旧目录处理

- **D-07:** `docs/`、`prd-md/`、`prototype/` 保留原位，不在 Phase 8 中清理删除。

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase definition
- `.planning/ROADMAP.md` §Phase 8 — 索引同步与验收目标、2 个 plans 的描述
- `.planning/REQUIREMENTS.md` §INDEX-01, INDEX-02 — 本 phase 覆盖的两个需求

### Phase 6 context (format standard and directory spec)
- `.planning/phases/06-目录结构规范设计/06-CONTEXT.md` — D-07（三向映射表格式）、D-08（链接格式规则）、D-10（各层 README 结构）、D-11（README 四个部分）
- `.planning/phases/06-目录结构规范设计/06-目录结构规范.md` — §7.1 三向映射表格式规范、§7.2 各层 README 模板

### Phase 7 context (migration state)
- `.planning/phases/07-内容迁移/07-CONTEXT.md` — D-04（原始目录 Phase 8 清理决策）
- `04-specs/` 根目录：21 个 spec 文件已迁移至此（扁平结构，无子目录内容）
- `02-modules/*/` README：当前引用 `../prototype/docs/` 旧路径，需要修复

### Project context
- `.planning/PROJECT.md` §文档体系（v1.1 已迁移）— 新目录结构映射图
- `.planning/PROJECT.md` §Key Decisions — 文档用 Markdown，原型用 HTML，两种职责分离

[No external specs — requirements fully captured in decisions above]
</canonical_refs>

<code_context>
## Existing Code Insights

### Phase Character
This is a pure documentation update task — path fixes and index table rewrites, no content changes. The main technical challenge is transforming the existing 4-column tables into 3-column Phase 6 standard format and fixing all `../prototype/` references to `../04-specs/`.

### Broken References Found (from codebase scan)
- `02-modules/00-概述与定义/README.md` → `../../prototype/README.md` (应改为 `../03-prototypes/README.md`)
- `02-modules/01-账号/README.md` → `../prototype/docs/*.md` (应改为 `../04-specs/*.md`)
- `02-modules/02-静态数据/README.md` → `../prototype/docs/*.md` (应改为 `../04-specs/*.md`)
- `02-modules/03-企业管理/README.md` → `../prototype/docs/*.md` (应改为 `../04-specs/*.md`)
- `02-modules/api-specs/README.md` → `../prototype/docs/*.md` (应改为 `../04-specs/*.md`)
- `04-specs/README.md` → 目录结构 section 引用旧 `prd-md/` 路径

### Missing Files
- `03-prototypes/README.md` — 不存在，需要新建（Phase 6 规范要求）
- 顶层 `README.md` — 不存在，Phase 8 应创建（Phase 6 规范要求）

### 04-specs Structure
- 21 个 spec 文件在 `04-specs/` 根目录（扁平）
- 8 个模块子目录（00-概述与定义 through 07-全局规范）全部为空
- 按 D-03 决策：采用扁平结构，各 README 直接引用根目录文件

### Integration Points
- 三向映射表链接目标：
  - 原型页面 → `../03-prototypes/pages/*.html`
  - 功能说明文档 → `../04-specs/*.md`
  - 02-modules 内部 PRD 文档 → `../[模块目录名]/xxx.md`

</code_context>

<specifics>
## Specific Ideas

- 04-AILead管理/README.md 已有 P47-P70 规划内容，映射表只需改为三列格式 + 添加"规划中"占位行（P47-P70）
- 04-全局规范/README.md 的映射表需要检查是否有对应的 spec 文件和原型
- 验收扫描命令示例：`grep -rho '\.\./[^")\s]*\.\(md\|html\)' *.md | sort -u | while read f; do [ -e "$f" ] || echo "MISSING: $f"; done`
</specifics>

<deferred>
## Deferred Ideas

### 旧目录清理
- `docs/`、`prd-md/`、`prototype/` 原始目录的清理删除——用户决定保留原位，不在 Phase 8 处理。如需清理，单独规划。

### 顶层 README.md 细化
- 顶层 README.md 创建后是否需要完整三向映射总表（P01-P80 全量）——可作为后续迭代项，本次仅创建基本导航入口。
</deferred>

---

*Phase: 08-索引同步与验收*
*Context gathered: 2026-04-17*

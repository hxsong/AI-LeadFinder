# Phase 5: 冗余文件清理 - Context

**Gathered:** 2026-04-17
**Status:** Ready for planning

<domain>
## Phase Boundary

去除文档体系中的冗余重复文件，精简结构：
1. 删除已被 Markdown 替代的 HTML 说明文档
2. 删除已被 changelog Markdown 替代的 HTML 修订日志
3. 删除内容已被 prd-md/ 覆盖的旧版 docx 文档

**保留的设计资产：** `docs/design/LeadFinder实体关系图.html` 和 `LeadFinder业务流设计.html` 保留（Phase 4 已确认）。

**不清理：** 原型页面 `prototype/pages/*.html`（22 个，职责为 HTML 原型展示）。

</domain>

<decisions>
## Implementation Decisions

### 功能说明 HTML 文件（D-01）
- **D-01：** 删除 `prototype/docs/` 下全部 22 个 `*-说明.html` 文件
- Phase 1 已将全部 21 个功能说明文档转为 Markdown，HTML 原文件冗余
- 确认对应 Markdown 文件存在（`*-说明.md`），且索引引用无误

### 修订日志 HTML 文件（D-02）
- **D-02：** 删除 `docs/design/LeadFinder修订日志.html`
- Phase 3 已将其内容转为 `docs/changelog/v1.0.0.md` 和 `v1.1.0.md`，HTML 版本完全冗余

### 旧版 docx 文档（D-03）
- **D-03：** 删除 `docs/智能获客-需求文档V1.0.2.docx`
- 内容已被 prd-md/ 目录下的 Markdown PRD 文档覆盖，无保留价值

### 设计图 HTML 文件（D-04）
- **D-04：** 保留 `docs/design/LeadFinder实体关系图.html` 和 `docs/design/LeadFinder业务流设计.html`
- Phase 4 已明确决策"docs/design/ 下文件保持原样"，不重复清理

### 删除前验证（D-05）
- **D-05：** 删除操作前，逐一核验每个文件确认：Markdown 版本存在、索引引用无误
- 删除操作按批次执行：先删 prototype/docs/ HTML → 再删 docs/design/ 修订日志 → 最后删 docx

### 删除后文档索引更新（D-06）
- **D-06：** 检查 `prototype/README.md` 和各阶段 README 是否有对已删文件的引用，如有则清理引用行
- `docs/README.md` 中如有对 docx 文件的引用，一并更新

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### 索引映射（确认引用关系）
- `prototype/README.md` — PRD 节点 ↔ 原型页面 ↔ 功能说明文档 映射表（需检查引用）
- `prd-md/01-账号与资源管理/README.md` — 阶段索引（含功能说明文档引用）
- `prd-md/02-静态数据获客/README.md` — 同上
- `prd-md/03-动态流量获客/README.md` — 同上

### 文档结构
- `docs/README.md` — 设计文档总索引（可能引用 docx 文件）
- `docs/changelog/v1.0.0.md` — 修订日志 Markdown（替代了 HTML 版）
- `docs/changelog/v1.1.0.md` — 本次重构修订日志

### Phase 1-4 决策
- `.planning/PROJECT.md` — 项目目标（职责分明、双向索引、自我更新）
- `.planning/phases/01-功能说明文档重写/01-CONTEXT.md` — Phase 1 决策（HTML→Markdown 转换）
- `.planning/phases/04-最终清理与验收/04-CONTEXT.md` — Phase 4 决策（docs/design/ 文件保持原样）

</canonical_refs>

<code_context>
## Existing Code Insights

### 待删除文件清单
- **22 个 HTML 说明文件**：`prototype/docs/` 下 `*-说明.html`（对应 `*-说明.md` 仍保留）
- **1 个 HTML 修订日志**：`docs/design/LeadFinder修订日志.html`（changelog Markdown 已存在）
- **1 个 docx 文件**：`docs/智能获客-需求文档V1.0.2.docx`（PRD 内容已迁移）

### 保留文件清单（不清理）
- `prototype/pages/*.html` — 22 个原型页面（HTML 职责分离）
- `docs/design/LeadFinder实体关系图.html` — 设计资产
- `docs/design/LeadFinder业务流设计.html` — 设计资产

### 删除操作风险
- 索引引用断裂风险：需检查 prototype/README.md 和各阶段 README 引用
- 无内容丢失风险：所有被删内容均有 Markdown 版本完整覆盖

</code_context>

<specifics>
## Specific Ideas

- "Phase 1 明确转换了 21 个文档，HTML 原文件现在纯粹是冗余" — 不需要备份
- "docs/design/ 下实体关系图和业务流图保留 — Phase 4 已决策" — 不重复质疑

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

---

*Phase: 05-冗余文件清理*
*Context gathered: 2026-04-17*

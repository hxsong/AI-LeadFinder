# Phase 7: 内容迁移 - Context

**Gathered:** 2026-04-17
**Status:** Ready for planning

<domain>
## Phase Boundary

**Domain:** 将 `docs/`、`prd-md/`、`prototype/` 全部内容迁移到新目录结构，内容不变，仅改变路径。

迁移范围：
1. `docs/changelog/` → `05-shared/changelog/`
2. `docs/design/` → `01-concept/design/`
3. `docs/` 其余文件 → `05-shared/misc/`
4. `prd-md/` → `02-modules/`（子目录去掉 -md 后缀）
5. `prototype/pages/` → `03-prototypes/pages/`
6. `prototype/docs/` → `04-specs/`

**Out of scope:** 更新 README 索引引用（Phase 8）、清理原始目录（Phase 8）、修改任何文件内容
</domain>

<decisions>
## Implementation Decisions

### 执行方式

- **D-01:** 直接使用 Phase 6 执行标准文档（`.planning/phases/06-目录结构规范设计/06-执行标准.md`），按其中步骤逐条执行迁移，不另写迁移脚本。

### 验证深度

- **D-02:** 完整内容校验（不仅文件数量和 MD5）：
  - 文件数量完全匹配（迁移前后文件数一致）
  - 抽样 MD5 校验（关键文件如 changelog/v1.0.0.md 等）
  - grep 抽样检查关键词（确保内容未损坏）
  - 验证 Markdown 文件结构完整性（头部元数据未被截断）
  - 验证 HTML 原型页面结构完整性（`<html>` / `</html>` 标签闭合）

### 提交策略

- **D-03:** 全部迁移完成并验证通过后，一次性提交全部变更（P7.1–P7.4 合并为一个 commit）。

### 原始目录处理（延续 Phase 6 决策）

- **D-04:** `docs/`、`prd-md/`、`prototype/` 迁移后保留原位，Phase 8 再清理删除（Phase 6 已决策，执行标准 Step 5 确认）。

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase definition
- `.planning/ROADMAP.md` §Phase 7 — 内容迁移目标、4 个 plans 的描述
- `.planning/REQUIREMENTS.md` §MIGRATE-01, MIGRATE-02, MIGRATE-03, MIGRATE-04 — 本 phase 覆盖的 4 个需求

### Phase 6 context (migration paths locked here)
- `.planning/phases/06-目录结构规范设计/06-CONTEXT.md` — 迁移路径映射规则 D-12 至 D-18
- `.planning/phases/06-目录结构规范设计/06-目录结构规范.md` — 新目录结构规范（最终目标结构）
- `.planning/phases/06-目录结构规范设计/06-执行标准.md` — **Phase 7 执行主文档**，包含所有迁移命令和验证步骤

### Project context
- `.planning/PROJECT.md` §文档体系（v1.0.0 已交付）— 现有目录结构现状（docs/, prd-md/, prototype/）
- `.planning/PROJECT.md` §Key Decisions — 文档用 Markdown，原型用 HTML，两种职责分离

[No external specs — migration is a file operation, no external standards apply]
</canonical_refs>

<codebase_context>
## Existing Code Insights

### Phase Character
This is a pure file-move operation — no code changes, no existing components to reuse. The execution standard from Phase 6 is the primary reference document. Phase 7 plans should reference it directly and implement each step.

### Reusable Assets
- None — this is a file system operation, not a coding task.

### Integration Points
- Phase 8 reads the migrated directory structure as input
- All README files in 02-modules/ subdirectories must be created during migration (Phase 6 P6.2 defines their format)

### Creative Options
- 执行标准已包含所有 cp 命令，Plans 仅需将执行标准的命令分配到 P7.1–P7.4
- 验证步骤（D-02）可作为 P7.5（验收 plan）单独列出，或合并到各 plan 的末尾
</codebase_context>

<specifics>
## Specific Ideas

- prd-md/ 子目录迁移时要去掉 -md 后缀（已在 Phase 6 执行标准中明确）
- 抽样 MD5 优先选择：changelog/v1.0.0.md、prd-md/ 下的根 README.md、prototype/pages/ 中的代表性 HTML
- grep 抽样检查关键词：内容完整性（中文段落结构）、Markdown 元数据字段（title、date 等）
</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 07-内容迁移*
*Context gathered: 2026-04-17*

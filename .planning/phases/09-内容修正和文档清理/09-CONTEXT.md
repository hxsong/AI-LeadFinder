# Phase 9: 内容修正和文档清理 - Context

**Gathered:** 2026-04-17
**Status:** Ready for planning

<domain>
## Phase Boundary

**Domain:** 修正文档内容细节问题，清理 Phase 7/8 遗留的空目录，完善 01-concept/ 结构。

本次 phase 完成以下工作：

1. 清理 04-specs/ 下 8 个空模块子目录
2. 清理 03-prototypes/components/（迁移后为空）
3. 移除所有 Markdown 文档中的「最后审核人」和「审核日期」元数据字段
4. 创建 01-concept/README.md（全局索引）
5. 创建 01-concept/glossary.md（术语表）
6. 扫描并记录其他发现的问题（不修复，移交 backlog）

**Out of scope:**
- 删除旧 `docs/`、`prd-md/`、`prototype/` 目录（暂缓，后续单独规划 Phase 10）
- 修改文档正文内容（仅修改元数据字段）
- 创建 01-concept/api-specs/（02-modules/api-specs/ 已覆盖）
- 修复扫描中发现的除元数据外的其他问题
</domain>

<decisions>
## Implementation Decisions

### 空目录清理

- **D-01:** 清理 Phase 7/8 新增的空目录：
  - `04-specs/00-概述与定义/`
  - `04-specs/01-账号/`
  - `04-specs/02-静态数据/`
  - `04-specs/03-企业管理/`
  - `04-specs/04-AILead管理/`
  - `04-specs/05-销售线索/`
  - `04-specs/06-任务协作/`
  - `04-specs/07-全局规范/`
  - `03-prototypes/components/`
- **D-02:** `docs/`、`prd-md/`、`prototype/` 旧目录暂缓清理，记录为待后续 Phase 10 处理。

### 元数据清理

- **D-03:** 移除所有 Markdown 文档中的 `> **最后审核人**：XXX` 和 `> **审核日期**：YYYY-MM-DD` 字段。
- **D-04:** 清理范围覆盖：`01-concept/`、`02-modules/`、`04-specs/`、`05-shared/` 下的所有 .md 文件（包含各层 README.md）。
- **D-05:** 其他元数据字段（版本、状态、对应 PRD 节点、对应原型页面、最后更新时间、变更原因、关联 Issue/PR、模块归属）保留不变。

### 01-concept 结构完善

- **D-06:** 创建 `01-concept/README.md`：职责说明 + 全局索引（包含 API 规范入口、术语表链接、设计文档列表）
- **D-07:** 创建 `01-concept/glossary.md`：术语表（从现有文档中提取术语定义）
- **D-08:** 不创建 `01-concept/api-specs/`（API 规范已在 `02-modules/api-specs/` 覆盖）

### 问题记录

- **D-09:** 扫描过程中发现的其他问题（如索引链接错误、内容不一致等）记录到 backlog，不在 Phase 9 中修复。
- **D-10:** 01-concept/design/ 下 2 个空子目录（核心业务流/、实体关系说明/）是否清理：待评估后决定（可能为 Phase 6 规范遗留的占位结构）。

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase definition
- `.planning/ROADMAP.md` §Phase 9 — 内容修正和文档清理目标、Success Criteria
- `.planning/REQUIREMENTS.md` §INDEX-01, INDEX-02 — Phase 8 的需求，Phase 9 清理遗留问题

### Phase 6 context (directory structure spec)
- `.planning/phases/06-目录结构规范设计/06-CONTEXT.md` — 目录规范定义（D-01~D-18）
- `.planning/phases/06-目录结构规范设计/06-目录结构规范.md` — 01-concept/ 目录结构（包含 design/核心业务流/、design/实体关系说明/ 子目录说明）

### Phase 7 context (migration state)
- `.planning/phases/07-内容迁移/07-CONTEXT.md` — D-04（旧目录暂缓清理决策）、迁移路径

### Phase 8 context (index sync decisions)
- `.planning/phases/08-索引同步与验收/08-CONTEXT.md` — D-03（04-specs 扁平结构）、D-07（旧目录保留）
- `08-P8.2-验收验证.md` — 验收方法和已知问题

### Project context
- `.planning/PROJECT.md` §文档体系（v1.1 已迁移）— 新目录结构映射图
- `.planning/PROJECT.md` §Key Decisions — 文档用 Markdown，原型用 HTML，两种职责分离

[No external specs — cleanup is a file operation, no external standards apply]
</canonical_refs>

<codebase_context>
## Existing Code Insights

### Phase Character
This is a documentation cleanup and polish phase — directory cleanup, metadata field removal, and structure completion. Most work items are clear-cut and can be executed directly.

### Reusable Assets
- 04-specs/*.md — 22 个 spec 文件（包含审核人/审核日期字段，需要清理）
- 02-modules/*/*.md — PRD 文档（包含审核人/审核日期字段，需要清理）
- 01-concept/design/*.md — 4 个概念设计文档（包含审核人/审核日期字段，需要清理）

### Empty Directories to Delete (confirmed)
| Directory | Files inside |
|-----------|-------------|
| `04-specs/00-概述与定义/` | 空 |
| `04-specs/01-账号/` | 空 |
| `04-specs/02-静态数据/` | 空 |
| `04-specs/03-企业管理/` | 空 |
| `04-specs/04-AILead管理/` | 空 |
| `04-specs/05-销售线索/` | 空 |
| `04-specs/06-任务协作/` | 空 |
| `04-specs/07-全局规范/` | 空 |
| `03-prototypes/components/` | 空 |

### 01-concept Current State
- `design/` — 6 个文件: LeadFinder实体关系图.html, LeadFinder业务流设计.html, AI-LeadFinder｜概念设计.md, 产品核心业务流设计.md, 潜在客户评分标准设计.md, 产品非功能性需求清单.md
- `design/核心业务流/` — 空目录（Phase 6 规范有定义但迁移后为空）
- `design/实体关系说明/` — 空目录（同上）
- `README.md` — 不存在（需要新建）
- `glossary.md` — 不存在（需要新建）
- `api-specs/` — 不存在（不创建）

### Metadata Pattern to Remove
```markdown
> **最后审核人**：张伟
> **审核日期**：2026-04-16
```
Found in: 04-specs/*.md, 02-modules/*/*.md, 01-concept/*.md, 05-shared/changelog/*.md

### Integration Points
- 01-concept/README.md 链接目标：design/ 下各文件、glossary.md、02-modules/api-specs/
- 清理完成后需验证所有 README.md 索引仍然有效

</codebase_context>

<specifics>
## Specific Ideas

- 空子目录 `01-concept/design/核心业务流/` 和 `01-concept/design/实体关系说明/` 可能是 Phase 6 规范遗留的占位结构（源目录 docs/design/核心业务流/ 和 docs/design/实体关系说明/ 实际不存在），需评估是否一并删除
- glossary.md 内容来源：可从 01-concept/design/ 下 4 个 .md 文件中提取术语定义
- 验收：清理空目录后运行 `find 04-specs -type d -empty` 应无结果

</specifics>

<deferred>
## Deferred Ideas

### 旧目录清理
- `docs/`、`prd-md/`、`prototype/` 原始目录的清理删除 — Phase 7/8 暂缓，Phase 9 再次暂缓，移至 Phase 10 单独规划。

### 其他问题记录
- 扫描过程中发现的除元数据外的其他问题（如索引链接错误、内容不一致）均记录待后续处理，不在 Phase 9 中修复。

### 01-concept/design/ 空子目录
- `核心业务流/` 和 `实体关系说明/` 空目录是否删除 — 待评估后决定。
</deferred>

---

*Phase: 09-内容修正和文档清理*
*Context gathered: 2026-04-17*

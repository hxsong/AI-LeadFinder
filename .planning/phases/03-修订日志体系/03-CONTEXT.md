# Phase 3: 修订日志体系 - Context

**Gathered:** 2026-04-16
**Status:** Ready for planning

<domain>
## Phase Boundary

建立完整的 `docs/changelog/` 修订日志体系：
1. 将 `docs/design/LeadFinder修订日志.html` 中的历史变更（v1.0.0→v1.1.16）完整回填到 Markdown
2. 创建 `docs/changelog/v1.1.0.md` 记录本次文档体系重构的所有变更
3. 更新 `docs/README.md` 索引

**本阶段不做：** 修改 HTML 设计文档本身内容；不新增产品功能文档。

</domain>

<decisions>
## Implementation Decisions

### v1.1.0 变更粒度（D-01）
- **D-01：** v1.1.0 变更按**文档级**记录，分 4 个变更分类：
  1. 功能说明文档重写（21份）
  2. 双向索引映射表建立
  3. 修订日志体系建立（Markdown changelog 从无到有）
  4. 文档索引更新（docs/README.md）
- AI Prompt 引用章节作为独立子分类列示（Phase 1 重要新增）
- 每个分类下附完整 affected files 清单（参考 HTML changelog 格式）

### 历史变更完整性（D-02）
- **D-02：** 将 `docs/design/LeadFinder修订日志.html` 中的 v1.0.0 到 v1.1.16 共 16 轮变更**全部回填**到 `docs/changelog/v1.0.0.md`
- 回填格式与 HTML 保持一致：版本号、变更类型、日期、变更概述、变更详情、受影响文件
- 组织顺序：**按版本顺序**（v1.0.0 → v1.0.1 → ... → v1.1.16），与 HTML 一致
- 不改变现有 v1.0.0.md 的顶部元数据块格式（版本/状态/日期/变更类型）

### Markdown vs HTML 关系（D-03）
- **D-03：** docs/README.md 第 36 行"HTML 版本与 Markdown 版本内容同步更新"作为本次执行的目标
- Phase 3 执行完成后，两份文档内容完全对齐
- 后续变更维护时同步更新两份（本次不改变 HTML 文件本身）

### 已有内容保留（D-04）
- **D-04：** 回填操作仅追加历史变更记录，不修改现有 v1.0.0.md 顶部元数据
- docs/README.md 索引更新追加 changelog/v1.1.0.md 条目

### Claude's Discretion
- 回填时 HTML 中的 details 数组如何映射到 Markdown 表格（原文保留 vs 精简）
- v1.1.0 中各分类下的 affected files 清单格式（列表 vs 表格）

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### 历史变更数据来源（必须读取）
- `docs/design/LeadFinder修订日志.html` — 完整的 v1.0.0-v1.1.16 变更记录，含 version/date/type/summary/details/affectedFiles 字段（见 script.revisionData JSON）
- `docs/changelog/v1.0.0.md` — 现有 Markdown changelog 顶部元数据块格式（需保留）

### 项目规范
- `.planning/PROJECT.md` — 项目目标（职责分明、双向索引、自我更新）
- `.planning/phases/01-功能说明文档重写/01-CONTEXT.md` — Phase 1 决策（SPEC 文档模板、元数据格式）
- `.planning/phases/02-双向索引映射表/02-CONTEXT.md` — Phase 2 决策（PRD 头部元数据格式）
- `.planning/ROADMAP.md` — Phase 3 目标与计划（P3.1-P3.3）
- `docs/README.md` — 设计文档总索引（需更新）

</canonical_refs>

<codebase_context>
## Existing Code Insights

### Reusable Assets
- **现有 v1.0.0.md 元数据块**：可直接复用格式（`> **版本**：v1.0.0 / > **状态**：C / > **日期**：2026-04-03 / > **变更类型**：初始版本`）作为每条变更记录的格式基准
- **HTML revisionData JSON**：`LeadFinder修订日志.html` 第 104-471 行的 JS 数组含所有历史变更数据，可直接解析转换

### Established Patterns
- **Markdown changelog 顶部元数据块**：4 行元数据（版本/状态/日期/变更类型）
- **HTML changelog 变更条目结构**：version + date + type + summary + details[] + affectedFiles[]

### Integration Points
- 回填后的 v1.0.0.md → 通过 docs/README.md 索引引用
- v1.1.0.md → 新建后追加到 docs/README.md 索引
- HTML changelog → 后续维护时同步更新（本次不修改 HTML 文件本身）

</codebase_context>

<specifics>
## Specific Ideas

- "HTML revisionData 中 v1.1.1 到 v1.1.16 的 details 数组较详细，回填时需判断是否完整保留" — 可按原文保留.details 数组内容
- "docs/README.md 第 36 行写明'HTML与Markdown同步'，本次需实际执行该声明"

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

---

*Phase: 03-修订日志体系*
*Context gathered: 2026-04-16*

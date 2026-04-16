# Phase 4: 最终清理与验收 - Context

**Gathered:** 2026-04-16
**Status:** Ready for planning

<domain>
## Phase Boundary

完成最终清理与验收，包含三项核心工作：

1. **DOC-04 统一原型样式**：全部 20 个原型页面（prototype/pages/*.html）重写引用 global.css，实现样式完全统一
2. **DOC-06 完善 API 规范总览**：完善 prd-md/api-specs/README.md，新增 API 依赖关系说明、错误码规范、限流说明
3. **全面验收**：全文档完整性审查 + 3 步定位路径测试

**本阶段不做**：修改功能说明文档内容本身；不新增产品功能文档。

</domain>

<decisions>
## Implementation Decisions

### 原型页面样式统一（D-01）
- **D-01：** 全部 20 个原型页面（prototype/pages/*.html）均重写，在 `<head>` 中引入 global.css，替换内联 Tailwind 样式配置
- **引用方式**：`<link rel="stylesheet" href="styles/global.css">`（相对路径）
- **Tailwind 处理**：保留 Tailwind CDN 供工具类使用（`class="..."`），但移除 `<style>` 块中的自定义颜色/圆角/阴影等设计 Token，改用 global.css 中定义的 CSS 变量
- **保留范围**：页面 HTML 结构和内容不变，仅样式引用和对齐

### global.css 完整性（D-02）
- **D-02：** global.css 当前已包含设计 Token（CSS 变量）、全局重置、通用组件样式（按钮/卡片/徽章/进度条/Toast/加载动画）
- 如页面中有 global.css 未覆盖的样式组件，在 refactor 过程中补充到 global.css（不新增内联样式）

### API 规范总览完善（D-03）
- **D-03：** 扩展 prd-md/api-specs/README.md，在现有结构基础上新增三节：
  1. API 依赖关系说明（各 API 间的调用顺序和依赖图）
  2. 统一错误码规范（基于现有各子文档的错误码格式制定统一标准）
  3. API 限流说明（各 API 的 Rate Limit 规则）
- 不新增子文档，现有 7 个 API 子文档保持独立
- 状态从 N（初稿）更新为 C（已确认）

### 文档完整性全面审查（D-04）
- **D-04：** 逐项审查以下维度，生成审查报告：
  1. 双向索引断裂检查：21 个功能说明文档 × 3 个入口（原型页面/PRD节点/changelog）是否全部可追溯
  2. 内容重复检查：功能说明文档与对应 PRD 文档内容是否重叠
  3. 引用路径正确性：所有文档间引用路径是否可正常打开
- 审查范围覆盖所有 21 个功能说明文档 + 6 个 PRD 主文档 + changelog/v1.1.0.md

### 最终验收测试（D-05）
- **D-05：** 按以下方式执行最终验收：
  1. **人工路径测试**：从 3 个不同入口（原型页面 / PRD 文档 / changelog）出发，选 3 个代表性功能点（账号管理/搜客/访客各一），验证 3 步内可定位完整信息
  2. **全局一致性检查**：确认 global.css 在所有 20 个页面生效、API README 流程图准确、索引路径全部可打开
  3. **验收报告**：生成 `验收报告.md`，记录每条路径的验证过程和结论

### Phase 4 不在范围内（D-06）
- **D-06：** 本阶段不修改功能说明文档正文内容（Phase 1 已完成）
- 本阶段不新增 HTML 设计文档（docs/design/ 下文件保持原样）

### Claude's Discretion
- 页面 refactor 过程中的细微样式差异处理（global.css 未覆盖的部分如何补足）
- 审查过程中发现的小问题（typo、路径错误等）直接修复，不上报

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### 样式规范（DOC-04）
- `prototype/styles/global.css` — 全局样式规范（设计 Token、组件样式），所有页面 refactor 需参照此文件
- `prototype/pages/` — 20 个原型页面（全部需要 refactor）

### API 规范（DOC-06）
- `prd-md/api-specs/README.md` — API 规范总览（当前草稿状态，需完善）
- `prd-md/api-specs/出海派API接口站.md` — 出海派 API 子文档（错误码参考）
- `prd-md/api-specs/apollo-api.md` — Apollo API 子文档
- `prd-md/api-specs/10times-expo-api.md` — 10Times 展会 API 子文档
- `prd-md/api-specs/import-genius-api.md` — Import Genius API 子文档
- `prd-md/api-specs/google-maps-api.md` — Google Maps API 子文档
- `prd-md/api-specs/jina-reader-api.md` — Jina Reader API 子文档
- `prd-md/api-specs/ipinfo-api.md` — IPInfo API 子文档

### 双向索引映射（DOC-03）
- `prototype/README.md` — PRD 节点 ↔ 原型页面 ↔ 功能说明文档 完整映射表
- `prd-md/01-账号与资源管理/README.md` — 账号管理阶段索引（四列表格）
- `prd-md/02-静态数据获客/README.md` — 静态获客阶段索引
- `prd-md/03-动态流量获客/README.md` — 动态获客阶段索引

### 功能说明文档（DOC-02）
- `prototype/docs/租户资源充值-说明.md` — 模板参考（Phase 1）
- `prototype/docs/AI业务分析中-说明.md` — 含 AI Prompt 章节参考

### 项目规范
- `.planning/PROJECT.md` — 项目目标（职责分明、双向索引、自我更新）
- `.planning/REQUIREMENTS.md` — DOC-04、DOC-06 需求定义
- `.planning/ROADMAP.md` — Phase 4 目标与计划（P4.1-P4.4）

</canonical_refs>

<codebase_context>
## Existing Code Insights

### Reusable Assets
- **global.css**：已定义完整设计 Token 和组件样式，可直接被所有页面引用
- **20 个原型页面**：均使用 Tailwind CDN + 内联 `<style>` 块，结构完整，仅样式引用需要对齐

### Established Patterns
- **页面样式现状**：所有页面使用 `<script src="https://cdn.tailwindcss.com">` + 内联 `<style>` 块定义自定义样式（sidebar-item、slider-track 等）
- **页面结构**：包含侧边栏（sidebar）、主内容区、卡片组件、按钮等，与 global.css 组件对应

### Integration Points
- refactor 后页面通过 `<link rel="stylesheet" href="styles/global.css">` 引用全局样式
- global.css 中的 CSS 变量（`--color-primary` 等）可被页面内联样式直接使用

</codebase_context>

<specifics>
## Specific Ideas

- "全部 20 页都要 refactor，不只是抽样的 3 页" — 用户明确要求全面重写
- "global.css 已有按钮/卡片/徽章/进度条/Toast/加载动画等组件，直接复用即可" — 不需要重复造轮子
- "API README 从 N 状态更新为 C" — 用户选择完善结构后，状态同步更新为已确认

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

---

*Phase: 04-最终清理与验收*
*Context gathered: 2026-04-16*

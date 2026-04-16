# Phase 2: 双向索引映射表 - Context

**Gathered:** 2026-04-16
**Status:** Ready for planning

<domain>
## Phase Boundary

在 `prototype/README.md` 和 `prd-md/` 各核心文档头部建立完整的双向索引，实现 PRD 节点 ↔ 原型页面 ↔ 功能说明文档的三向可追溯。

**双向索引的含义：**
- 正向：从 PRD 节点出发，能找到对应原型页面和功能说明文档
- 逆向：从原型页面出发，能找到对应 PRD 节点

**本阶段不做：** 修改文档内容本身；仅更新元数据、映射表、文档头部引用。

</domain>

<decisions>
## Implementation Decisions

### PRD 文档头部格式（D-01）
- **D-01：** prd-md/ 核心 PRD 文档头部使用标准元数据块，格式与 Phase 1 功能说明文档一致：
  ```
  > **版本**：v1.0.0
  > **状态**：C（已确认）/ N（初稿）
  > **关联原型页面**：xxx.html、yyy.html
  > **最后更新**：YYYY-MM-DD
  ```
- 不使用轻量行格式（`> **关联原型页面**：xxx.html`），保持与 spec 文档元数据块的一致性

### 多节点 PRD 的原型引用（D-02）
- **D-02：** 一个 PRD 文档对应多个原型页面时，全部列出（如 `独立站授权.html、AI业务分析中.html`）
- 不区分"主要/次要"节点，全部平等列出，避免歧义

### PRD 文档更新范围（D-03）
- **D-03：** 仅更新与原型 21 页精确对应的核心 PRD 主文档（约 10 个）
- 不更新支撑性文档（如 `潜在客户评分标准设计.md`、`AI-LeadFinder｜概念设计.md`）
- 以下为核心 PRD 文档清单（需逐一加头部元数据）：
  | PRD 文件 | 对应原型页面 |
  |---------|------------|
  | `prd-md/01-账号与资源管理/01-账号开通与多BOT逻辑.md` | 租户资源充值.html、资源下发确认.html、多BOT工作台.html |
  | `prd-md/01-账号与资源管理/02-业务初始化与分析流.md` | 业务初始化.html、上传业务材料.html、独立站授权.html、AI业务分析中.html、业务分析报告.html |
  | `prd-md/02-静态数据获客/01-搜客需求与策略生成.md` | 搜客需求输入.html、搜客策略预览.html、搜客执行中.html、搜客记录.html、搜客结果列表.html |
  | `prd-md/02-静态数据获客/02-静态线索深度挖掘.md` | 静态线索池.html、线索详情.html |
  | `prd-md/03-动态流量获客/01-动态流量捕捉与意图挖掘.md` | 探针部署.html、访客雷达.html、访客行为详情.html、动态线索池.html、动态线索详情.html |
  | `prd-md/04-全景画像与触达/` 下主文档（TBD，需确认文件名） | 提示词语言管理.html |
  | `prd-md/` 其他阶段（TBD） | 对应页面 |

### prd-md 阶段 README 增强（D-04）
- **D-04：** 所有 prd-md 子目录 README.md 的文档索引表，从三列（文档 | 节点 | 原型页面）扩展为四列，增加"功能说明文档"列
  ```
  | 文档 | 涵盖节点 | 对应原型页面 | 功能说明文档 |
  ```
- 示例参考：`prd-md/01-账号与资源管理/README.md` 现有格式

### prototype/README.md 增强（D-05）
- **D-05：** 不大改，仅核验映射准确性
- 确认 21 行映射与实际文件一一对应；PRD 节点编号与 `产品核心业务流设计.md` 一致

### SPEC 文档头部（D-06）
- **D-06：** Phase 1 已完成，功能说明文档头部均有"对应 PRD 节点"元数据
- P2.4（更新功能说明文档头部）在 Phase 1 已实现，本阶段无需重复处理

### 已有内容保留（D-07）
- **D-07：** PRD 文档头部仅追加元数据块，不删除或修改正文内容
- 如文档已有元数据块（版本/状态），在其后追加"关联原型页面"行

### Claude's Discretion
- 阶段 README 中功能说明文档列的路径写法（相对路径 vs 绝对路径）
- PRD 文档头部状态字段取值（C/N/R）的判断依据（无历史记录时默认 N）

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### 项目基础
- `.planning/PROJECT.md` — 项目目标、核心价值、职责分离原则
- `.planning/REQUIREMENTS.md` — DOC-03 需求定义（双向索引映射表）
- `.planning/ROADMAP.md` — Phase 2 目标与计划（P2.1-P2.4）
- `.planning/phases/01-功能说明文档重写/01-CONTEXT.md` — Phase 1 决策（SPEC 文档模板、元数据格式）

### 现有结构（需核验和更新的文件）
- `prototype/README.md` — PRD 节点 ↔ 原型页面 ↔ 功能说明文档 现有映射表（需核验）
- `prototype/docs/` — 21 个功能说明文档（头部已有 PRD 节点元数据，来自 Phase 1）
- `prd-md/01-账号与资源管理/README.md` — 阶段 README 示例（三列表格）
- `prd-md/01-账号与资源管理/01-账号开通与多BOT逻辑.md` — PRD 主文档示例（需加头部元数据）
- `prd-md/02-静态数据获客/README.md` — 静态获客阶段 README
- `prd-md/03-动态流量获客/README.md` — 动态获客阶段 README
- `prd-md/产品核心业务流设计.md` — P01-P80 完整 PRD 节点定义（对照原型页面映射准确性）

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- **Phase 1 元数据块模板**（`租户资源充值-说明.md`）：可直接复用格式到 PRD 头部，内容仅四行（版本/状态/关联原型页面/最后更新）
- **prd-md 阶段 README 三列表格**：扩展为四列即可，功能说明文档列的路径写法参照现有路径格式（`../prototype/docs/xxx-说明.md`）

### Established Patterns
- **PRD 头部已有元数据块**（如 `prd-md/01-账号与资源管理/` 下文档）：已有版本/状态/关联原型页面 格式，加在正文标题与第一个 ## 章节之间
- **阶段 README 索引表**：Markdown 表格格式，带四列（文档 | 节点 | 原型页面 | 功能说明文档）

### Integration Points
- PRD 头部元数据 → 放在文档 H1 标题后、第一个 ## 章节前
- 阶段 README 增强 → 直接在现有表格加列，不新增文件
- prototype/README 核验 → 对照 `产品核心业务流设计.md` 的 P01-P80 定义

</code_context>

<specifics>
## Specific Ideas

- "独立站授权对应两个 PRD 节点 P06-P07，两个原型页面列在一起" — 多节点文档原型引用全部列出
- "prd-md/04-全景画像与触达/ 下是否有对应 PRD 主文档，需确认后再更新" — 先确认文件名再操作
- "功能说明文档列的路径格式参照 `../prototype/docs/` 相对路径写法" — 便于各阶段 README 互相引用

</specifics>

<deferred>
## Deferred Ideas

- prd-md 支撑性文档（如评分标准、AI概念设计）是否加原型引用 — 超出核心 PRD 范围，下一 phase 按需处理
- 双向索引自动化工具（脚本检测断裂索引）— 属于工具建设，当前纯人工完成

---

*Phase: 02-双向索引映射表*
*Context gathered: 2026-04-16*

# Roadmap: AI-LeadFinder 文档体系重构

## Milestones

- ✅ **v1.0.0 MVP** — Phases 1–5 (shipped 2026-04-17) · [Full details](./milestones/v1.0.0-ROADMAP.md)
- ✅ **v1.1 文档体系重构** — Phases 6–10 (14 plans, shipped 2026-04-17) · [Full details](./milestones/v1.1-ROADMAP.md)

---

## Progress

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|---------------|--------|-----------|
| 1. 功能说明文档重写 | v1.0.0 | 4/4 | Complete | 2026-04-16 |
| 2. 双向索引映射表 | v1.0.0 | 4/4 | Complete | 2026-04-16 |
| 3. 修订日志体系 | v1.0.0 | 3/3 | Complete | 2026-04-16 |
| 4. 最终清理与验收 | v1.0.0 | 4/4 | Complete | 2026-04-16 |
| 5. 冗余文件清理 | v1.0.0 | 1/1 | Complete | 2026-04-17 |
| 6. 目录结构规范设计 | v1.1 | 2/2 | Complete | 2026-04-17 |
| 7. 内容迁移 | v1.1 | 1/1 | Complete | 2026-04-17 |
| 8. 索引同步与验收 | v1.1 | 3/3 | Complete | 2026-04-17 |
| 9. 内容修正和文档清理 | v1.1 | 3/3 | Complete | 2026-04-17 |
| 10. 目录规范完善与原型规范建设 | v1.1 | 5/5 | Complete | 2026-04-17 |

---

<details>
<summary>✅ v1.1 文档体系重构 — Phase 6–10 详情（已归档）</summary>

## Phase 6: 目录结构规范设计

**Goal:** 定义新目录结构规范和各层 README 索引格式，为迁移提供执行标准。

**Requirements covered:** STRUCT-01, STRUCT-02

**Plans:**

| Plan | Description |
|------|-------------|
| P6.1 | 设计新目录结构规范：定义 01-concept/02-modules/03-prototypes/04-specs/05-shared/resources 各目录职责边界 |
| P6.2 | 确定各层 README.md 索引格式：设计三向映射表结构（模块需求 ↔ 原型页面 ↔ 功能说明文档） |

**Outcome:** 06-目录结构规范.md + 06-执行标准.md + 顶层索引初稿

---

## Phase 7: 内容迁移

**Goal:** 将 docs/、prd-md/、prototype/ 全部内容迁移到新目录结构，内容不变，仅移动位置。

**Requirements covered:** MIGRATE-01, MIGRATE-02, MIGRATE-03, MIGRATE-04

**Plans:**

| Plan | Description |
|------|-------------|
| 07 | 将 docs/、prd-md/、prototype/ 全部内容迁移到新目录结构 |

**Outcome:** 80 files migrated across 5 directory trees — 文件数量 100% 匹配，MD5 抽样通过

---

## Phase 8: 索引同步与验收

**Goal:** 更新所有 README.md 索引映射，修复迁移后的引用断裂，完成整体验收。

**Requirements covered:** INDEX-01, INDEX-02

**Plans:**

| Plan | Description |
|------|-------------|
| P8.1 | 更新各层 README.md 三向映射表（02-modules/、03-prototypes/、04-specs/） |
| P8.2 | 验收：验证所有内部引用路径有效，三向映射表完整可追溯 |
| P8.3 | 验收修复：修复 README 链接可点击化（4 个 UAT Gap） |

**Outcome:** UAT 9/9 通过，引用路径 25/25 有效（100%）

---

## Phase 9: 内容修正和文档清理

**Goal:** 修正文档内容细节问题，清理冗余文件，优化文档体系结构。

**Depends on:** Phase 8

**Success Criteria:**
1. 04-specs/ 下空目录全部删除 ✅
2. 功能说明文档中审核人/审核日期元数据全部移除 ✅
3. 01-concept/README.md 和 glossary.md 创建完成 ✅
4. 发现的问题记录到 BACKLOG.md（待后续 phase 处理）✅

> 注：Phase 9 原计划包含"01-concept/ 拆分重组"和"03-prototypes/components/ JS 组件补回"，
> 经确认这两项工作已分别在 Phase 6/7 和 Phase 9 执行阶段处理完毕，不再重复执行。
> 来源：BACKLOG.md B-01

**Plans:**

| Plan | Description | Status |
|------|-------------|--------|
| P01 | 清理 9 个空目录（04-specs/ 8 个、03-prototypes/components/ 1 个），评估 01-concept/design/ 2 个占位目录 | ✅ Complete |
| P02 | 清理 04-specs/ 下 21 个 .md 文件的审核人/审核日期元数据 | ✅ Complete |
| P03 | 创建 01-concept/README.md 和 glossary.md，完善目录入口；扫描并记录遗留问题 | ✅ Complete |

---

## Phase 10: 目录规范完善与原型规范建设

**Goal:** 继续优化文档目录问题，建设通用的产品原型目录规范说明，完善文档体系的长期可维护性。

**Depends on:** Phase 9

**Plans:**

| Plan | Description |
|------|-------------|
| P01 | 清理旧目录 docs/、prototype/、prd-md/（86 files, 26119 bytes） |
| P02 | 迁移原型导航辅助工具（catalog-panel.js, entry-nav.js, nav-config.json）到 03-prototypes/ |
| P03 | 创建 05-shared/原型规范.md（8 章节原型规范文档） |
| P04 | 01-concept 目录重组（平铺结构，5 个新 .md + 2 个 .html 迁移） |
| P05 | 修正 ROADMAP.md Phase 9 Success Criteria（B-01） |

**Outcome:** 旧目录全部清理，导航工具迁移完成，原型规范文档建立，01-concept 重组完成

</details>

---

*Roadmap created: 2026-04-16*
*Last updated: 2026-04-17 after v1.1 milestone completion (Phase 10 shipped)*


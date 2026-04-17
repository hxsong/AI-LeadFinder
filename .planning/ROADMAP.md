# Roadmap: AI-LeadFinder 文档体系重构

## Milestones

- ✅ **v1.0.0 MVP** — Phases 1-5 (shipped 2026-04-17)
- 🚧 **v1.1 文档体系重构** — Phases 6-8 (in progress)

## Phases

<details>
<summary>✅ v1.0.0 MVP (Phases 1-5) — SHIPPED 2026-04-17</summary>

- [x] Phase 1: 功能说明文档重写 (4/4 plans) — completed 2026-04-16
- [x] Phase 2: 双向索引映射表 (4/4 plans) — completed 2026-04-16
- [x] Phase 3: 修订日志体系 (3/3 plans) — completed 2026-04-16
- [x] Phase 4: 最终清理与验收 (4/4 plans) — completed 2026-04-16
- [x] Phase 5: 冗余文件清理 (1/1 plan) — completed 2026-04-17

Full details: [.planning/milestones/v1.0.0-ROADMAP.md](./milestones/v1.0.0-ROADMAP.md)

</details>

### 🚧 v1.1 文档体系重构 (In Progress)

- [ ] Phase 6: 目录结构规范设计 (2 plans)
- [ ] Phase 7: 内容迁移 (4 plans)
- [ ] Phase 8: 索引同步与验收 (2 plans)

---

## Progress

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|---------------|--------|-----------|
| 1. 功能说明文档重写 | v1.0.0 | 4/4 | Complete | 2026-04-16 |
| 2. 双向索引映射表 | v1.0.0 | 4/4 | Complete | 2026-04-16 |
| 3. 修订日志体系 | v1.0.0 | 3/3 | Complete | 2026-04-16 |
| 4. 最终清理与验收 | v1.0.0 | 4/4 | Complete | 2026-04-16 |
| 5. 冗余文件清理 | v1.0.0 | 1/1 | Complete | 2026-04-17 |
| 6. 目录结构规范设计 | v1.1 | 0/2 | Not started | — |
| 7. 内容迁移 | v1.1 | 0/4 | Not started | — |
| 8. 索引同步与验收 | v1.1 | 0/2 | Not started | — |

---

## Phase 6: 目录结构规范设计

**Goal:** 定义新目录结构规范和各层 README 索引格式，为迁移提供执行标准。

**Requirements covered:** STRUCT-01, STRUCT-02

**Success Criteria:**
1. 新目录结构图完整（含所有目录及其职责说明）
2. 各层 README.md 索引格式定义完成（三向映射表结构）
3. 迁移规则文档明确（源路径 → 目标路径映射）
4. 顶层 README.md 初稿完成

**Plans:**

| Plan | Description |
|------|-------------|
| P6.1 | 设计新目录结构规范：定义 01-concept/02-modules/03-prototypes/04-specs/05-shared/resources 各目录职责边界 |
| P6.2 | 确定各层 README.md 索引格式：设计三向映射表结构（模块需求 ↔ 原型页面 ↔ 功能说明文档） |

---

## Phase 7: 内容迁移

**Goal:** 将 docs/、prd-md/、prototype/ 全部内容迁移到新目录结构，内容不变，仅移动位置。

**Requirements covered:** MIGRATE-01, MIGRATE-02, MIGRATE-03, MIGRATE-04

**Success Criteria:**
1. docs/ 全部内容拆分迁移到 01-concept 和 05-shared（changelog 迁移到 05-shared/changelog/）
2. prd-md/ 迁移到 02-modules/
3. prototype/pages/ 迁移到 03-prototypes/pages/
4. prototype/docs/ 迁移到 04-specs/
5. 迁移后所有文件内容不变，路径正确

**Plans:**

| Plan | Description |
|------|-------------|
| P7.1 | 将 docs/ 内容拆分迁移：changelog → 05-shared/changelog/，核心业务流/ → 01-concept/核心业务流/，实体关系说明 → 01-concept/实体关系说明/ |
| P7.2 | 将 prd-md/ 迁移到 02-modules/（保持现有子目录结构） |
| P7.3 | 将 prototype/pages/ 迁移到 03-prototypes/pages/（保持模块子目录） |
| P7.4 | 将 prototype/docs/ 迁移到 04-specs/（保持模块子目录） |

---

## Phase 8: 索引同步与验收

**Goal:** 更新所有 README.md 索引映射，修复迁移后的引用断裂，完成整体验收。

**Requirements covered:** INDEX-01, INDEX-02

**Success Criteria:**
1. 02-modules/ 各子目录 README.md 更新三向映射表
2. 03-prototypes/README.md 更新三向映射表
3. 04-specs/README.md 更新三向映射表
4. 顶层 README.md 完整（各入口清晰可导航）
5. 所有内部文件引用路径验证通过（无 404）

**Plans:**

| Plan | Description |
|------|-------------|
| P8.1 | 更新各层 README.md 三向映射表（02-modules/、03-prototypes/、04-specs/） |
| P8.2 | 验收：验证所有内部引用路径有效，三向映射表完整可追溯 |

---

*Roadmap created: 2026-04-16*
*Last updated: 2026-04-17 after v1.1 roadmap created*


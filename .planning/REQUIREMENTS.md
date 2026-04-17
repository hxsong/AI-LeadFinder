# Requirements: AI-LeadFinder 文档体系重构

**Milestone:** v1.1
**Defined:** 2026-04-17
**Core Value:** 建立一套职责分明、双向索引、自我更新的产品文档结构

## v1.1 Requirements

### 目录结构 (STRUCT)

- [ ] **STRUCT-01**: 设计并记录新目录结构规范（01-concept/02-modules/03-prototypes/04-specs/05-shared/resources），包含各目录职责边界
- [ ] **STRUCT-02**: 确定各层 README.md 的索引格式，定义三向映射表结构（模块需求 ↔ 原型页面 ↔ 功能说明文档）

### 内容迁移 (MIGRATE)

- [ ] **MIGRATE-01**: 将 docs/ 内容拆分迁移到 01-concept 和 05-shared
- [ ] **MIGRATE-02**: 将 prd-md/ 迁移到 02-modules
- [ ] **MIGRATE-03**: 将 prototype/pages/ 迁移到 03-prototypes/pages/
- [ ] **MIGRATE-04**: 将 prototype/docs/ 迁移到 04-specs/

### 索引同步 (INDEX)

- [ ] **INDEX-01**: 更新各层 README.md 索引映射（三向映射表）
- [ ] **INDEX-02**: 修复迁移后断裂的内部文件引用

### Out of Scope

| Feature | Reason |
|---------|--------|
| 新增产品功能内容 | 本次仅涉及目录重组，不改动任何文档内容 |
| 修改现有文件内容 | 只迁移位置，文件内容保持不变 |
| 修改 .planning/ 目录 | 规划目录保持现状 |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| STRUCT-01 | Phase 6 | Pending |
| STRUCT-02 | Phase 6 | Pending |
| MIGRATE-01 | Phase 7 | Pending |
| MIGRATE-02 | Phase 7 | Pending |
| MIGRATE-03 | Phase 7 | Pending |
| MIGRATE-04 | Phase 7 | Pending |
| INDEX-01 | Phase 8 | Pending |
| INDEX-02 | Phase 8 | Pending |

**Coverage:**
- v1.1 requirements: 8 total
- Mapped to phases: 8
- Unmapped: 0

---
*Requirements defined: 2026-04-17*

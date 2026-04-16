# Roadmap: AI-LeadFinder 文档体系重构

**Phases:** 4 | **Requirements:** 6 | **Last updated:** 2026-04-16

## Phase Overview

| # | Phase | Goal | Requirements | Success Criteria |
|---|-------|------|--------------|-----------------|
| 1 | 功能说明文档重写 | 将 21 个 prototype/docs/ 文件按新模板统一格式，增加字段映射、版本元数据、AI Prompt 引用等章节 | DOC-02 | 21 个文件全部重写完毕，格式审查通过 |
| 2 | 双向索引映射表 | 4/4 | Complete    | 2026-04-16 |
| 3 | 修订日志体系 | 建立完整的 changelog/v1.x.md 体系，补充 v1.0.0 完整变更记录 | DOC-05 | changelog/v1.1.0.md 生成，变更可追溯 |
| 4 | 最终清理与验收 | 完善 API 规范总览、样式审查、文档完整性检查 | DOC-04, DOC-06 | 所有待处理项完成，文档可交付 |

---

## Phase 1: 功能说明文档重写

**Goal:** 将 `prototype/docs/` 下的 21 个功能说明文档全部按新模板重写，格式统一、内容完整、职责清晰。

**Requirements covered:** DOC-02

**Success Criteria:**

1. 21 个功能说明文档全部重写完毕
2. 每个文档包含：页面入口/出口、可见功能逻辑、不可见功能逻辑（API）、边界规则、异常处理、字段数据映射、AI Prompt 引用、版本元数据
3. 与对应 PRD 文档内容不重复，职责边界清晰
4. 所有文档格式一致（Markdown）

**Plans:**

| Plan | Description |
|------|-------------|
| P1.1 | 重写账号与资源管理模块（8个文件）：租户资源充值、资源下发确认、多BOT工作台、业务初始化、上传业务材料、独立站授权、AI业务分析中、业务分析报告 | ✅ 完成（2026-04-16） |
| P1.2 | 重写静态数据获客模块（7个文件）：搜客需求输入、搜客策略预览（含AI章节）、搜客执行中、搜客记录、搜客结果列表（含AI章节）、静态线索池、线索详情 | ✅ 完成（2026-04-16） |
| P1.3 | 重写动态流量获客模块（5个文件）：探针部署、访客雷达、访客行为详情、动态线索池、动态线索详情 | ✅ 完成（2026-04-16） |
| P1.4 | 重写全局设置模块（1个文件）：提示词语言管理 | ✅ 完成（2026-04-16） |

---

## Phase 2: 双向索引映射表

**Goal:** 在 `prototype/README.md` 和 `prd-md/` 各文件头部建立完整的双向索引，实现 PRD 节点与原型页面、说明文档的双向可追溯。

**Requirements covered:** DOC-03

**Success Criteria:**

1. `prototype/README.md` 包含完整的映射表（原型页面 ↔ PRD 节点 ↔ 说明文档）
2. `prd-md/` 各阶段目录的 README.md 包含该阶段所有文档的原型页面对应关系
3. 每个 PRD 文档头部标注"关联原型页面"
4. 每个功能说明文档头部标注"对应 PRD 节点"

**Plans:**

4/4 plans complete
|------|-------------|
| P2.1 | 完善 prototype/README.md：补充缺失的映射关系，建立与 PRD 节点的精确索引 |
| P2.2 | 更新 prd-md/ 各子目录 README.md：建立阶段级索引表 |
| P2.3 | 更新所有 PRD 文档头部：增加"关联原型页面"元数据 |
| P2.4 | 更新所有功能说明文档头部：增加"对应 PRD 节点"元数据 |

---

## Phase 3: 修订日志体系

**Goal:** 建立完整的 changelog 体系，包含 v1.0.0 完整变更记录和 v1.1.0 规划。

**Requirements covered:** DOC-05

**Success Criteria:**

1. `docs/changelog/v1.0.0.md` 包含完整的初始版本变更记录
2. `docs/changelog/v1.1.0.md` 规划本次重构的内容
3. 修订日志格式统一，包含：变更类型、变更内容、影响文件、变更日期
4. 修订日志与 PRD 节点、原型页面建立关联引用

**Plans:**

| Plan | Description |
|------|-------------|
| P3.1 | 整理 v1.0.0 变更记录：从现有 docs/design/修订日志.html 提取并转为 Markdown |
| P3.2 | 创建 v1.1.0.md：记录本次文档体系重构的所有变更 |
| P3.3 | 审查并更新 docs/README.md：更新设计文档索引 |

---

## Phase 4: 最终清理与验收

**Goal:** 完成剩余优化项（API 规范总览完善、样式审查），进行整体验收。

**Requirements covered:** DOC-04, DOC-06

**Success Criteria:**

1. `prd-md/api-specs/README.md` 完善，包含完整的 API 调用流程图
2. 22 个原型页面样式审查通过（引用 global.css）
3. 所有文档无内容重复、无断裂索引
4. 最终验收：产品经理、研发、测试各选一个功能点，从任意入口 3 步内可定位到完整信息

**Plans:**

| Plan | Description |
|------|-------------|
| P4.1 | 完善 API 规范总览：补充 API 调用流程图、各 API 依赖关系说明 |
| P4.2 | 原型页面样式审查：检查所有 HTML 页面引用 global.css，样式一致 |
| P4.3 | 文档完整性检查：确认所有索引无断裂、内容无重复 |
| P4.4 | 交付验收：抽样验证各角色获取信息的效率 |

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DOC-01: 完成文档结构重构 | All | Pending |
| DOC-02: 重写 21 个功能说明文档 | Phase 1 | ✅ Completed |
| DOC-03: 建立双向索引映射表 | Phase 2 | Pending |
| DOC-04: 统一原型页面样式 | Phase 4 | Pending |
| DOC-05: 整理修订日志体系 | Phase 3 | Pending |
| DOC-06: 建立 API 规范总览 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 6 total
- Mapped to phases: 6
- Unmapped: 0 ✓

---
*Roadmap created: 2026-04-16*
*Last updated: 2026-04-16 after initial creation*

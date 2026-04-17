# AI-LeadFinder 文档体系重构

## What This Is

将 AI-LeadFinder 现有的产品文档（HTML 原型 + PRD Markdown + 设计文档）从松散结构重构为层次清晰、交叉索引完备、便于长期维护的文档体系。

## Core Value

建立一套**职责分明、双向索引、自我更新**的产品文档结构，让产品经理、研发、测试在任何时候都能快速定位所需信息，且任何一处变更都能追溯影响范围。

## Current State

**Milestone:** v1.1 文档体系重构 — ✅ SHIPPED 2026-04-17

### 已完成里程碑

| Milestone | Date | Phases | Plans | Key Deliverables |
|-----------|------|--------|-------|-----------------|
| v1.0.0 MVP | 2026-04-17 | 1–5 | 13 | 21 个功能说明文档重写、双向索引映射表、changelog 体系、API 规范总览 |
| v1.1 文档体系重构 | 2026-04-17 | 6–10 | 14 | 新目录结构（01~05 分层）、80 文件迁移、引用路径修复、空目录/元数据清理、原型规范文档 |

### 当前文档结构（v1.1 已落地）

```
AI-leadfinder/
├── 01-concept/          概念设计（5 个 .md + 2 个 .html）
├── 02-modules/          PRD 文档（8 个产品模块 + api-specs/）
├── 03-prototypes/       HTML 原型（20 个页面 + 导航工具）
├── 04-specs/            功能说明文档（21 个 .md）
├── 05-shared/           共享内容（changelog/、原型规范.md、misc/）
└── resources/           资源文件（待定义）
```

**文档体系三向索引已建立：**
- 链路 A（原型页 → 功能说明 → PRD 节点）：3 条子链路完整追溯
- 链路 B（PRD 节点 → 原型页 → 功能说明）：双向索引正确建立
- 链路 C（Changelog → 功能说明 → 原型页）：引用链路完整
- 引用路径有效性：25/25 条 100% 存在

## Requirements

### Validated

- ✅ **DOC-01**: 完成目录结构重组（prd-md/ 按产品阶段分目录，docs/design/ 收纳扁平设计文档） — v1.0.0
- ✅ **DOC-02**: 重写 21 个功能说明文档，按新模板统一格式（元数据 5→10 字段，新增 AI Prompt 引用章节） — v1.0.0
- ✅ **DOC-03**: 建立 prototype/ 与 prd-md/ 完整双向索引映射表，PRD 节点与原型页面双向可追溯 — v1.0.0
- ✅ **DOC-04**: 统一 20 个原型页面样式规范，全部引用 global.css — v1.0.0
- ✅ **DOC-05**: 建立 changelog 体系（v1.0.0 历史变更 + v1.1.0 规划），共 17 条记录 — v1.0.0
- ✅ **DOC-06**: 完善 API 规范总览（10 章节，含调用流程图、依赖关系、错误码、限流说明） — v1.0.0
- ✅ **DOC-07**: 文档体系三向索引（原型 ↔ 功能说明 ↔ PRD）完整建立，引用路径 100% 有效 — v1.1
- ✅ **DOC-08**: 目录结构规范文档和原型规范文档建立，长期可维护性保障 — v1.1

### Active

- [ ] **DOC-09**: 01-concept/design/ 旧文件清理（6 个文件待确认无引用后删除）
- [ ] **DOC-10**: PRD 文档内容深化（按产品阶段逐阶段完善字段映射和使用说明）

### Out of Scope

| Feature | Reason |
|---------|--------|
| 代码开发 | 本项目仅涉及文档结构和内容梳理 |
| 新功能设计 | 不新增产品功能，只整理和重构现有内容 |
| 设计稿输出 | 不输出高保真设计稿，只维护现有 HTML 原型 |
| 移动端原型 | 当前只维护 Web 端原型 |
| 多语言支持 | 文档统一使用中文 |

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| 文档用 Markdown，原型用 HTML | Markdown 便于 Git diff 和多人协作；HTML 原型独立展示 | ✅ 验证有效 |
| prd-md/ 面向产品评审，04-specs/ 面向研发实现 | 职责分离避免重复，减少同步遗漏风险 | ✅ UAT 验证 3 步内可定位 |
| 通过节点编号（P01-P80）建立双向索引 | PRD 节点是现有唯一标识符，复用无需新建体系 | ✅ 索引命中率 100% |
| 功能说明文档转为 Markdown 格式 | 与 PRD 文档格式统一，便于 Git 管理和内容检索 | ✅ 21 个文档均已转换 |
| Phase 5 冗余文件清理作为独立 phase | 去除已替代文件避免混淆，是验收的必要条件 | ✅ 清理 23 个冗余文件 |
| 新目录结构采用 01~05 分层体系 | 按产品工作流阶段组织（概念设计→产品模块→原型规格） | ✅ 验证有效 |
| styles/ 和 components/ 保持在原型目录下 | 原型样式 ≠ 文档图片，职责分离清晰 | ✅ 验证有效 |
| 原型导航工具迁移到 03-prototypes/ | 工具跟随原型资产，便于维护 | ✅ 验证有效 |
| 01-concept/ 采用平铺文件结构 | 与其他顶层目录结构一致，减少嵌套层级 | ✅ 验证有效 |

## Deferred Items

- 01-concept/design/ 旧文件待清理（B-02 待后续处理）
- DOC-10 PRD 内容深化（待后续 milestone）

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. 完成的任务 → 标记为 Validated
2. 新发现的需求 → 添加到 Active
3. 重大决策 → 记录到 Key Decisions
4. "What This Is" 检查是否需要更新

**After milestone** (via `/gsd-complete-milestone`):
1. 全面检查所有章节
2. Core Value 检查 — 方向是否正确
3. 更新 Current State 和 Requirements

---
*Last updated: 2026-04-17 after v1.1 milestone completion*
*Next: `/gsd-new-milestone` to start v1.2 planning*

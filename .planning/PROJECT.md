# AI-LeadFinder 文档体系重构

## What This Is

将 AI-LeadFinder 现有的产品文档（HTML 原型 + PRD Markdown + 设计文档）从松散结构重构为层次清晰、交叉索引完备、便于长期维护的文档体系。

## Core Value

建立一套**职责分明、双向索引、自我更新**的产品文档结构，让产品经理、研发、测试在任何时候都能快速定位所需信息，且任何一处变更都能追溯影响范围。

## Current Milestone: v1.1 文档体系重构

**Goal:** 重建文档目录结构，按工作流阶段（概念设计→产品模块→原型规格）组织，统一阅读体验。

**Progress:** Phase 6 (目录结构规范设计) ✅ + Phase 7 (内容迁移) ✅ + Phase 8 (索引同步与验收) ✅ + Phase 9 (内容修正和文档清理) ✅ → v1.1 完成

**Target features:**
- [x] 设计并落地新目录结构规范 (Phase 6)
- [x] 将现有 docs/、prd-md/、prototype/ 全部内容迁移到新结构（内容不变，仅移动位置）(Phase 7)
- [x] 同步更新所有索引引用（各层 README.md、三向映射表）(Phase 8)
- [x] 更新顶层 README.md (Phase 8)
- [x] 清理空目录和审核人元数据 (Phase 9)
- [x] 创建 01-concept/README.md 和 glossary.md，完善入口导航 (Phase 9)

## Requirements

### Validated

- ✅ **DOC-01**: 完成目录结构重组（prd-md/ 按产品阶段分目录，docs/design/ 收纳扁平设计文档） — v1.0.0
- ✅ **DOC-02**: 重写 21 个功能说明文档，按新模板统一格式（元数据 5→10 字段，新增 AI Prompt 引用章节） — v1.0.0
- ✅ **DOC-03**: 建立 prototype/ 与 prd-md/ 完整双向索引映射表，PRD 节点与原型页面双向可追溯 — v1.0.0
- ✅ **DOC-04**: 统一 20 个原型页面样式规范，全部引用 global.css — v1.0.0
- ✅ **DOC-05**: 建立 changelog 体系（v1.0.0 历史变更 + v1.1.0 规划），共 17 条记录 — v1.0.0
- ✅ **DOC-06**: 完善 API 规范总览（10 章节，含调用流程图、依赖关系、错误码、限流说明） — v1.0.0

### Active

- [ ] **DOC-07**: 文档质量持续监控机制（定期检查索引完整性）
- [ ] **DOC-08**: PRD 文档内容深化（按产品阶段逐阶段完善字段映射和使用说明）

### Out of Scope

| Feature | Reason |
|---------|--------|
| 代码开发 | 本项目仅涉及文档结构和内容梳理 |
| 新功能设计 | 不新增产品功能，只整理和重构现有内容 |
| 设计稿输出 | 不输出高保真设计稿，只维护现有 HTML 原型 |
| 移动端原型 | 当前只维护 Web 端原型 |
| 多语言支持 | 文档统一使用中文 |

## Context

### 文档体系（v1.1 已迁移）

```
AI-leadfinder/
├── 01-concept/          (原 docs/design/ 概念设计)
│   └── design/          (LeadFinder实体关系图.html, LeadFinder业务流设计.html)
├── 02-modules/          (原 prd-md/ — 子目录重命名为模块名)
│   ├── 00-概述与定义/  (原 00-概述与定义)
│   ├── 01-账号/        (原 01-账号与资源管理)
│   ├── 02-静态数据/    (原 02-静态数据获客)
│   ├── 03-企业管理/    (原 03-动态流量获客)
│   ├── 04-AILead管理/  (原 04-全景画像与触达)
│   ├── 05-销售线索/    (原 05-运营与合规)
│   ├── 06-任务协作/    (原 06-非功能需求)
│   ├── 07-全局规范/    (原 07-全局规范)
│   ├── api-specs/      (API 规范总览)
│   └── README.md + 产品核心规则和实现思路.md
├── 03-prototypes/       (原 prototype/pages/ + styles/)
│   ├── pages/          (20 个 HTML 原型页面)
│   └── styles/         (global.css)
├── 04-specs/           (原 prototype/docs/ — 21 个功能说明文档)
├── 05-shared/          (共享内容)
│   ├── changelog/      (原 docs/changelog/ — v1.0.0, v1.1.0)
│   └── misc/           (原 docs/ 根目录文件)
└── docs/               (原位置，Phase 8 清理)
    prd-md/             (原位置，Phase 8 清理)
    prototype/          (原位置，Phase 8 清理)
```

> 注：docs/、prd-md/、prototype/ 迁移后保留原位，Phase 8 清理删除。


### 已验证成果（来源：UAT 9/9 通过）

- 链路 A（原型页 → 功能说明 → PRD 节点）：3 条子链路完整追溯
- 链路 B（PRD 节点 → 原型页 → 功能说明）：双向索引正确建立
- 链路 C（Changelog → 功能说明 → 原型页）：引用链路完整
- 引用路径有效性：25/25 条 100% 存在
- 冗余清理：删除 23 个 HTML/docx 文件（16.7KB）

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| 文档用 Markdown，原型用 HTML | Markdown 便于 Git diff 和多人协作；HTML 原型独立展示 | ✅ 验证有效，职责分离清晰 |
| prd-md/ 面向产品评审，prototype/docs/ 面向研发实现 | 职责分离避免重复，减少同步遗漏风险 | ✅ UAT 验证 3 步内可定位 |
| 通过节点编号（P01-P80）建立双向索引 | PRD 节点是现有唯一标识符，复用无需新建体系 | ✅ 索引命中率 100% |
| 功能说明文档转为 Markdown 格式 | 与 PRD 文档格式统一，便于 Git 管理和内容检索 | ✅ 21 个文档均已转换 |
| Phase 5 冗余文件清理作为独立 phase | 去除已替代文件避免混淆，是验收的必要条件 | ✅ 清理 23 个冗余文件 |

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
3. 更新 Context 中的当前状态

---
*Last updated: 2026-04-17 after Phase 7 migration complete*
*Milestone: v1.1 文档体系重构 — Phase 8 in progress*

# AI-LeadFinder 文档体系重构

## What This Is

将 AI-LeadFinder 现有的产品文档（HTML 原型 + PRD Markdown + 设计文档）从松散结构重构为层次清晰、交叉索引完备、便于长期维护的文档体系。

## Core Value

建立一套**职责分明、双向索引、自我更新**的产品文档结构，让产品经理、研发、测试在任何时候都能快速定位所需信息，且任何一处变更都能追溯影响范围。

## Requirements

### Validated

(None yet — 需完成重构验证)

### Active

- [ ] **DOC-01**: 完成文档结构重构（建立目录层级、清理重复文件）
- [ ] **DOC-02**: 重写 21 个功能说明文档（prototype/docs/），按新模板统一格式
- [ ] **DOC-03**: 建立 prototype/ 与 prd-md/ 的完整双向索引映射表
- [ ] **DOC-04**: 统一 22 个原型页面样式（已部分完成 global.css）
- [ ] **DOC-05**: 整理修订日志体系（changelog/v1.x.md）
- [ ] **DOC-06**: 建立 API 规范总览（api-specs/README.md，已部分完成）

### Out of Scope

- **代码开发** — 本项目仅涉及文档结构和内容梳理，不包含任何代码编写
- **新功能设计** — 不新增产品功能，只整理和重构现有内容
- **设计稿输出** — 不输出高保真设计稿，只维护现有 HTML 原型

## Context

### 现有文档体系

```
AI-leadfinder/          (109 files, 已 commit)
├── docs/               # 设计文档（修订日志、ER图、业务流图）
├── prd-md/             # PRD 需求文档（按产品阶段组织）
├── prototype/          # 产品原型（22个HTML页面 + 22个说明文档）
│   ├── pages/          # 原型页面
│   ├── docs/           # 功能说明文档（面向研发）
│   └── styles/         # 全局样式（global.css）
```

### 已完成的优化（来源：产品原型结构分析报告.md 第六章）

| 优化项 | 状态 |
|--------|------|
| prototype/README.md（PRD节点映射表） | ✅ 完成 |
| prd-md/ 目录重组（按产品阶段分目录） | ✅ 完成 |
| prd-md/07-全局规范/（4个规范文件） | ✅ 完成 |
| prototype/styles/global.css（设计Token） | ✅ 完成 |
| prototype/nav-config.json（导航配置化） | ✅ 完成 |
| docs/design/（概念设计HTML统一收纳） | ✅ 完成 |
| docs/changelog/v1.0.0.md（Markdown修订日志） | ✅ 完成 |
| 功能说明文档 HTML→Markdown 转换 | ✅ 完成 |
| 功能说明文档按新模板重写（21个文件） | ⏳ 待处理 |
| prototype/ 与 prd-md/ 双向索引映射表 | ⏳ 待处理 |
| 修订日志体系 v1.1.0 | ⏳ 待处理 |

### 核心问题（来源：产品原型结构分析报告.md）

1. **🔴 高优先级**: PRD 单文件过大（P01-P80 挤在一个文件）→ 已拆分
2. **🔴 高优先级**: 原型页面与 PRD 节点没有映射 → 已建映射表
3. **🔴 高优先级**: 功能说明文档与 PRD 内容重复、职责不清 → 待重写
4. **🟡 中优先级**: 功能说明文档缺少字段数据映射 → 待补全
5. **🟡 中优先级**: 功能说明文档缺少版本元数据 → 待补全
6. **🟢 低优先级**: 修订日志体系不完整 → 待整理

## Constraints

- **文件格式**: 文档使用 Markdown（.md），原型使用 HTML，两者职责分离
- **不破坏已有内容**: 重写时保留所有原始功能描述、API 示例、边界规则
- **无 Git 历史要求**: 当前 commit 为初始状态，重构后的新结构直接提交
- **维护便利性**: 任何变更只需更新一处，通过交叉索引传递到其他引用位置

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| 文档用 Markdown，原型用 HTML | Markdown 便于 Git diff 和多人协作；HTML 原型独立展示 | — Pending |
| prd-md/ 面向产品评审，prototype/docs/ 面向研发实现 | 职责分离避免重复，减少同步遗漏风险 | — Pending |
| 通过节点编号（P01-P80）建立双向索引 | PRD 节点是现有唯一标识符，直接复用无需新建体系 | — Pending |
| 功能说明文档转为 Markdown 格式 | 与 PRD 文档格式统一，便于 Git 管理和内容检索 | — Pending |

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
*Last updated: 2026-04-16 after project initialization*

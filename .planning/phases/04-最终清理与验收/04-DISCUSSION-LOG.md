# Phase 4: 最终清理与验收 - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-16
**Phase:** 04-最终清理与验收
**Areas discussed:** 原型样式统一, API 规范总览完善, 文档完整性检查, 最终验收方式

---

## 原型样式统一（DOC-04）

| Option | Description | Selected |
|--------|-------------|----------|
| 全部 20 页重写 | refactor 全部 20 个页面使用 global.css + CSS 变量，全面统一 | ✓ |
| 选择性子集重写 | 选 3 个代表性页面共 3 页进行样式对齐 refactor，其余 17 页以审查记录替代 | |
| 仅更新 global.css 文档 | 不修改页面内容，仅在 global.css 中标注各设计 Token 的值 | |

**User's choice:** 全部 20 页重写
**Notes:** 用户明确要求全部 20 个原型页面均 refactor，不只是抽样审查。

---

## API 规范总览完善（DOC-06）

| Option | Description | Selected |
|--------|-------------|----------|
| 完善现有结构（推荐） | 当前 README 已是 v1.0.0 草稿，有概述和服务总览表、两个场景的调用流程图。需新增：完整的 API 依赖关系说明 + 错误码规范 + API 限流说明。 | ✓ |
| 大而全的规范手册 | 扩展 README 为完整的 API 规范手册：增加认证鉴权、错误处理规范、SDK 使用说明、完整调用流程图、各 API 详细参数表。 | |

**User's choice:** 完善现有结构
**Notes:** 不重写，仅在现有草稿基础上新增 API 依赖关系、错误码规范、限流说明三节，状态从 N 更新为 C。

---

## 文档完整性检查

| Option | Description | Selected |
|--------|-------------|----------|
| 全面审查 | 全面审查所有文档的索引引用：21 个功能说明文档 × 3 个入口（原型页面/PRD节点/changelog）是否全部可追溯。需要制定检查清单，工作量较大。 | ✓ |
| 重点抽查（有记录） | 逐个模块（账号管理/静态获客/动态获客/全局设置）抽查，检查双向索引是否断裂、功能说明文档与 PRD 内容是否重复、文档间的引用路径是否正确。 | |

**User's choice:** 全面审查
**Notes:** 覆盖所有 21 个功能说明文档 + 6 个 PRD 主文档 + changelog/v1.1.0.md，生成审查报告。

---

## 最终验收方式

| Option | Description | Selected |
|--------|-------------|----------|
| 人工路径测试（推荐） | 选择 3 个功能点（账号管理/搜客/访客各一），设计 3 个入口路径（原型入口/PRD入口/changelog入口），验证 3 步内能否定位到完整信息。生成验收报告记录路径和结果。 | |
| 人工路径 + 全局一致性 | 通过人工路径测试 + 额外检查：global.css 是否在所有页面生效、API README 流程图是否准确、索引路径是否全部可打开。 | ✓ |

**User's choice:** 人工路径 + 全局一致性
**Notes:** 同时验证样式生效、流程图准确、索引可打开，并生成 `验收报告.md`。

---

## Claude's Discretion

- 页面 refactor 过程中遇到 global.css 未覆盖的样式组件，直接补充到 global.css，不新增内联样式
- 审查过程中发现的小问题（typo、路径错误等）直接修复，不上报

---

*Phase: 04-最终清理与验收*
*Discussion completed: 2026-04-16*

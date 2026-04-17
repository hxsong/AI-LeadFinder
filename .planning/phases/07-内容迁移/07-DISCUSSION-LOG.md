# Phase 7: 内容迁移 - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-17
**Phase:** 07-内容迁移
**Areas discussed:** 执行方式, 验证深度, 提交策略

---

## 执行方式

| Option | Description | Selected |
|--------|-------------|----------|
| 直接使用执行标准文档 | Phase 6 执行标准已含详细 cp 命令，Phase 7 直接按步骤执行，无需新脚本 | ✓ |
| 编写专用迁移脚本 | 将执行标准中的命令写成独立迁移脚本（.sh），运行脚本完成迁移 | |

**User's choice:** 直接使用执行标准文档
**Notes:** 简单、已有文档支撑

---

## 验证深度

| Option | Description | Selected |
|--------|-------------|----------|
| 文件数量 + 抽样 MD5（标准） | 文件数量完全匹配 + 抽样 MD5 校验（Phase 6 执行标准已定义） | |
| 完整内容校验 | 不仅文件数量和 MD5，还做 grep 抽样检查关键词、验证 Markdown 链接格式 | ✓ |

**User's choice:** 完整内容校验
**Notes:** grep 抽样检查关键词、验证 Markdown 元数据字段完整性、HTML 标签闭合检查

---

## 提交策略

| Option | Description | Selected |
|--------|-------------|----------|
| 全部完成后一次性提交（推荐） | 四个 P7 plan 全部完成并验证后，一次性提交全部迁移结果 | ✓ |
| 分步提交（每个 plan 一次） | 每个 P7 plan 完成就提交一次（docs/ 迁移后、prd-md/ 迁移后……） | |

**User's choice:** 全部完成后一次性提交
**Notes:** 简洁，符合 Phase 5 清理的惯例

---

## Claude's Discretion

无 — 所有决策均由用户明确指定。

## Deferred Ideas

无 — 讨论保持在 phase 范围内。

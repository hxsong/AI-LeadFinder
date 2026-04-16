# Phase 3: 修订日志体系 - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-16
**Phase:** 03-修订日志体系
**Areas discussed:** v1.1.0 变更范围, 历史变更完整性

---

## v1.1.0 变更范围

| Option | Description | Selected |
|--------|-------------|----------|
| 文档级变更（推荐） | 将功能说明重写、双向索引、修订日志建立、README更新作为4个变更分类记录 | ✓ |
| 文件级变更 | 按 affected file 一条条列举，每份文档变更作为独立条目 | |
| 按大类合并 | 合并为2大类：文档结构重构 + 文档内容更新 | |

**User's choice:** 文档级变更（推荐）

---

| Option | Description | Selected |
|--------|-------------|----------|
| 单独列示（推荐） | AI Prompt 引用章节在功能说明文档中是 Phase 1 的重要新增，v1.1.0 中单独列示 | ✓ |
| 合并到内容更新 | AI 章节变更合并到'文档内容更新'大类，不单独列出 | |

**User's choice:** 单独列示（推荐）

---

| Option | Description | Selected |
|--------|-------------|----------|
| 列出受影响文件（推荐） | 每个变更分类下附完整 affected files 清单（参考 HTML changelog 格式），便于追溯 | ✓ |
| 不列举具体文件 | 变更分类下仅描述变更内容，不列举具体文件 | |

**User's choice:** 列出受影响文件（推荐）

---

## 历史变更完整性

| Option | Description | Selected |
|--------|-------------|----------|
| 回填历史（选项 A） | 将 HTML 中 v1.0.0 到 v1.1.16 的 16 轮变更全部转为 Markdown 格式放在 v1.0.0.md | ✓ |
| 分版本文件（选项 B） | v1.0.0.md 保持文件清单，历史变更以 v1.0.1, v1.0.2 ... v1.1.16 单独 Markdown 文件记录 | |
| 混合回填（选项 C） | v1.0.0.md 回填主要变更（按分类合并），不追求 1:1 还原 HTML 的每条详情 | |

**User's choice:** 回填历史（选项 A）

---

| Option | Description | Selected |
|--------|-------------|----------|
| 按版本顺序（推荐） | 按版本顺序（v1.0.0, v1.0.1, v1.1.1...v1.1.16）逐一记录，保持与 HTML 一致 | ✓ |
| 按变更类型分组 | 合并同类变更（如所有'优化调整'放一起），忽略版本边界 | |

**User's choice:** 按版本顺序（推荐）

---

## Deferred Ideas

None — discussion stayed within phase scope.

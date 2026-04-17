# Phase 10: 目录规范完善与原型规范建设 - Discussion Log

> **Audit trail only.** Decisions are captured in CONTEXT.md.

**Date:** 2026-04-17
**Phase:** 10-目录规范完善与原型规范建设

---

## Q: Phase 10 的工作重点是什么？
| Option | Description | Selected |
|--------|-------------|----------|
| 清理为主 | 删除 docs/ 和 prototype/ | |
| 清理 + 原型规范建设 | 清理旧目录 + 写原型规范 | ✓ |
| 仅原型规范 | 只写规范，不清理 | |

## Q: docs/ 和 prototype/ 这两个旧目录怎么处理？
| Option | Description | Selected |
|--------|-------------|----------|
| 整目录删除 | 删除整个目录，最干净 | |
| 先清内容再删 | 先迁移有价值文件，再清空，最后删 | ✓ |

## Q: docs/产品原型结构分析报告.md 怎么处理？
| Option | Description | Selected |
|--------|-------------|----------|
| 迁移到 05-shared/misc/ | 保留但不作为主导航入口 | ✓ |
| 先读内容再决定 | | |
| 暂不处理 | | |

## Q: 原型目录规范说明文档放在哪里？
| Option | Description | Selected |
|--------|-------------|----------|
| 新建 docs/原型规范.md | 独立规范文档 | |
| 放在 03-prototypes/ 下 | 作为该目录使用说明 | |
| 放在 05-shared/ 下 | 作为共享规范文档 | ✓ |

---

## Q: 原型规范的核心内容包括哪些方面？
| Option | Description | Selected |
|--------|-------------|----------|
| 基于现有 HTML 原型提炼 | 从当前项目总结 | |
| 通用最佳实践 + 项目示例 | 最佳实践 + AI-LeadFinder 实例 | ✓ |

---

## Q: Phase 10 上下文已存在，你怎么做？
| Option | Description | Selected |
|--------|-------------|----------|
| Update it | 重新审视现有上下文，补充或修正决策 | ✓ |
| View it | 查看完整内容后再决定 | |
| Skip | 使用现有上下文，跳过讨论 | |

---

## Q: Phase 10 哪些 area 需要讨论？
| Option | Description | Selected |
|--------|-------------|----------|
| 原型导航辅助工具 | catalog-panel.js、entry-nav.js、nav-config.json 三个文件的去留 | ✓ |
| 旧目录清理状态 | docs/、prd-md/、prototype/ 三个旧目录是否已清空删除 | ✓ |
| 原型规范文档内容 | 05-shared/原型规范.md 的内容细节 | ✓ |
| 01-concept 文件夹的结构问题 | 01-concept/design/ 下文件归属和结构问题 | ✓ |

---

## 原型导航辅助工具

| Option | Description | Selected |
|--------|-------------|----------|
| 直接删除 | 03-prototypes/README.md 已提供完整索引，保留入口即可 | |
| 迁移保留 | 迁移到 03-prototypes/ 并修正路径引用后保留，作为页面内导航 | ✓ |
| 先看 README | 需要确认 03-prototypes/README.md 是否已足够覆盖导航需求 | |

**User's choice:** 迁移保留
**Notes:** 修正路径引用：旧 `prototype/pages/` → `03-prototypes/pages/`，旧 `prototype/docs/` → `04-specs/`

---

## 旧目录清理状态

| Option | Description | Selected |
|--------|-------------|----------|
| 在 Phase 10 执行中一并清理 | Phase 10 执行一次完整的旧目录清理，逐一确认迁移状态后删除 | ✓ |
| 拆分为独立 phase | 当前 phase 先专注原型规范，清理作为独立的后续步骤 | |

**User's choice:** 在 Phase 10 执行中一并清理
**Notes:** 确认三个旧目录现状：
- `docs/` 仍有：产品原型结构分析报告.md、design/（2个HTML旧副本）、changelog/（2个MD）、README.md
- `prd-md/` 仍有完整内容（Phase 7 迁移后未删除）
- `prototype/` 仍有：docs/（21个MD旧副本）、pages/（20个HTML旧副本）、styles/、components/、3个导航工具

---

## 原型规范文档内容

| Option | Description | Selected |
|--------|-------------|----------|
| 全面规范 | 从 HTML 原型制作工具选择、文件组织、命名、样式、到评审流程的完整指南 | |
| 实用轻量（推荐） | 聚焦当前项目实际用到的规范（HTML/CSS/目录/导航），行业通用最佳实践作为参考链接 | ✓ |

**User's choice:** 实用轻量

---

## 01-concept 文件夹的结构问题

**User's note:** 需要基于 design 文档下的文档内容，在 01-concept 文件夹下重新添加文件：概念设计，商业化说明，角色组件设计, 业务流设计，实体关系设计。

### 新结构组织方式

| Option | Description | Selected |
|--------|-------------|----------|
| 5个子目录 | 在 01-concept/ 下建立设计/子目录，对应5个分类 | |
| 平铺结构（推荐） | 直接在 01-concept/ 下平铺所有文件，不建立子目录 | ✓ |
| 先看现有文件再定 | 基于现有 01-concept/design/ 现有内容，先整理一个合适的目录结构方案 | |

**User's choice:** 平铺结构

### 现有文件映射

**User's note:** 现有的六个文件里的内容比较杂乱，需要阅读后把现有文件的内容拆分合并到新的文件里，现有的六个文件先保留在 design 文件夹下，后续再删除。

**User's choice:** 需要先阅读现有 6 个文件内容，理解内容归属，再拆分合并；旧 6 个文件暂保留在 `01-concept/design/` 下，待新文件稳定后再删除

---

## Claude's Discretion

- 交互导航工具迁移后，路径修正是关键（catalog-panel.js 和 entry-nav.js 引用旧路径）
- 01-concept 重组是内容驱动的工作：需要先完整阅读 6 个旧文件，理解内容归属，再拆分合并
- `docs/` 的 `design/` 目录下可能还有其他文件需确认

## Deferred Ideas

- Phase 10 执行后期：删除 `01-concept/design/` 下的 6 个旧文件（在 `01-concept/` 下新文件稳定后）
- BACKLOG B-02（潜在客户评分标准设计.md 章节可优化）— 由新创建的 `商业化说明.md` 逐步覆盖

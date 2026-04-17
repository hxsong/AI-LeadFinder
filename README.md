# AI-LeadFinder 产品文档体系

**版本：** v1.1（目录体系重构）
**最后更新：** 2026-04-17

## 快速导航

| 目录 | 内容 | 入口 |
|------|------|------|
| [01-concept/](01-concept/) | 核心概念设计 + 全局规范 | [ER 图](01-concept/design/) · [API 规范](../02-modules/api-specs/) · [术语表](01-concept/glossary.md) |
| [02-modules/](02-modules/) | 产品模块 PRD 文档 | [账号](02-modules/01-账号/) · [静态数据](02-modules/02-静态数据/) · [全部模块](02-modules/README.md) |
| [03-prototypes/](03-prototypes/) | 原型页面 | [页面索引](03-prototypes/pages/) · [样式](03-prototypes/styles/) |
| [04-specs/](04-specs/) | 功能说明文档 | [文档索引](04-specs/) |
| [05-shared/](05-shared/) | 共享知识资产 | [变更历史](05-shared/changelog/) · [杂项](05-shared/misc/) |

## 新目录结构说明

本项目文档从松散结构（`docs/` + `prd-md/` + `prototype/` 分离）重组为统一的五层目录体系：

- **01-concept/** — 核心概念与设计资产，全局共享
- **02-modules/** — 各产品模块的 PRD 文档
- **03-prototypes/** — 原型页面及样式
- **04-specs/** — 功能说明文档
- **05-shared/** — 跨模块共享的变更历史和杂项

详见：[目录结构规范](.planning/phases/06-目录结构规范设计/06-目录结构规范.md)

## 三向映射表入口

每个产品模块（`02-modules/{模块}/`）都有独立的三向映射表：

| 模块 | 三向映射表 |
|------|-----------|
| 00-概述与定义 | [映射表](02-modules/00-概述与定义/README.md) |
| 01-账号 | [映射表](02-modules/01-账号/README.md) |
| 02-静态数据 | [映射表](02-modules/02-静态数据/README.md) |
| 03-企业管理 | [映射表](02-modules/03-企业管理/README.md) |
| 04-AILead管理 | [映射表](02-modules/04-AILead管理/README.md) |
| 05-销售线索 | [映射表](02-modules/05-销售线索/README.md) |
| 06-任务协作 | [映射表](02-modules/06-任务协作/README.md) |
| 07-全局规范 | [映射表](02-modules/07-全局规范/README.md) |

## 维护指南

### 新增文档时

1. 将文件放入对应模块目录
2. 更新该模块的 `README.md`（三向映射表 + PRD 文档列表）
3. 更新顶层 `README.md`（本文件的快速导航表）

### 新增原型页面时

1. 将 HTML 文件放入 `03-prototypes/pages/{模块}/`
2. 更新 `04-specs/{模块}/README.md` 的功能说明文档列表
3. 更新对应模块的三向映射表

### 文档内容变更时

- 在 `05-shared/changelog/` 添加变更记录（格式：`YYYY-MM-DD-变更描述.md`）
- 更新对应模块 README.md 的变更历史摘要

---

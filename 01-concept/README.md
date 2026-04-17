# AI-LeadFinder 概念设计

## 目录职责

本目录收纳 AI-LeadFinder 产品的概念设计文档，定义产品定位、核心业务流程、评分标准和非功能性需求，是所有后续模块设计和实现的基础参考。

## 文档索引

### 概念设计文档

| 文档 | 说明 |
|------|------|
| [AI-LeadFinder｜概念设计](./design/AI-LeadFinder｜概念设计.md) | 产品定义与核心业务流程 |
| [产品核心业务流设计](./design/产品核心业务流设计.md) | 业务流程详细设计 |
| [潜在客户评分标准设计](./design/潜在客户评分标准设计.md) | 四维评分框架与权重配置 |
| [产品非功能性需求清单](./design/产品非功能性需求清单.md) | 性能、安全、可用性基线 |

### 设计原型

| 文件 | 说明 |
|------|------|
| [LeadFinder业务流设计.html](./design/LeadFinder业务流设计.html) | 核心业务流程原型图 |
| [LeadFinder实体关系图.html](./design/LeadFinder实体关系图.html) | 实体关系图原型 |

### 相关参考

- [术语表](./glossary.md) — 产品术语定义
- [API 规范总览](../02-modules/api-specs/) — API 接口规范（在 02-modules/api-specs/）

## 目录结构

```
01-concept/
├── README.md              (本文档)
├── glossary.md            (术语表)
└── design/               (设计文档)
    ├── AI-LeadFinder｜概念设计.md
    ├── 产品核心业务流设计.md
    ├── 潜在客户评分标准设计.md
    ├── 产品非功能性需求清单.md
    ├── LeadFinder业务流设计.html
    └── LeadFinder实体关系图.html
```

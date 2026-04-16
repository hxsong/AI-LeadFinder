# AI-LeadFinder 设计文档

> **版本**：v1.0.0
> **最后更新**：2026-04-10

---

## 目录结构

```
docs/
├── README.md                    # 本文件，设计文档总索引
├── design/                      # 产品设计文档（可视化）
│   ├── LeadFinder修订日志.html
│   ├── LeadFinder业务流设计.html
│   └── LeadFinder实体关系图.html
├── changelog/                   # 修订日志（Markdown，可用于 Git diff）
│   └── v1.0.0.md
└── 产品原型结构分析报告.md       # 文档结构优化分析报告
```

## 目录说明

### design/ 概念设计文档

存放产品概念设计相关的可视化文档（HTML 格式，便于直接浏览器查看）。

| 文件 | 说明 | 对应 PRD 节点 |
|------|------|-------------|
| LeadFinder业务流设计.html | 系统业务流时序图，包含角色、应用系统、自有服务、三方服务的完整交互流程 | P01-P80 全流程 |
| LeadFinder实体关系图.html | 数据实体关系图，展示系统核心数据模型及实体间关系 | 全局数据模型 |
| LeadFinder修订日志.html | 产品原型迭代变更记录，含每次变更的类型、内容和影响文件 | - |

### changelog/ 修订日志

存放 Markdown 格式的修订日志，用于 Git 版本管理和变更追溯。HTML 版本（design/）与 Markdown 版本（changelog/）内容同步更新。

## 关联文档

- **产品需求文档（PRD）**：`../prd-md/README.md`
- **原型页面**：`../prototype/README.md`
- **原型结构分析报告**：`产品原型结构分析报告.md`

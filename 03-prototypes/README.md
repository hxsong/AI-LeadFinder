# 原型页面

> **版本**：v1.0.0
> **职责**：存放所有产品交互原型页面（HTML），供设计评审和研发对齐使用。

---

## 模块映射表入口

通过各模块 README 查阅三向映射表（PRD 节点 ↔ 原型页面 ↔ 功能说明文档）：

| 模块 | README |
|------|--------|
| 00-概述与定义 | [../02-modules/00-概述与定义/README.md](../02-modules/00-概述与定义/README.md) |
| 01-账号与资源管理 | [../02-modules/01-账号/README.md](../02-modules/01-账号/README.md) |
| 02-静态数据获客 | [../02-modules/02-静态数据/README.md](../02-modules/02-静态数据/README.md) |
| 03-动态流量获客 | [../02-modules/03-企业管理/README.md](../02-modules/03-企业管理/README.md) |

---

## 页面目录列表

| 页面文件 | 说明 |
|---------|------|
| 业务分析报告.html | P11 业务分析报告页面 |
| 搜客结果列表.html | P20 搜客结果展示 |
| 搜客执行中.html | P18 搜客执行状态 |
| 搜客需求输入.html | P12 搜客需求录入 |
| 业务初始化.html | P04 业务初始化 |
| 租户资源充值.html | P01 租户资源充值 |
| 静态线索池.html | P26 静态线索管理 |
| 访客雷达.html | P38 访客雷达列表 |
| 独立站授权.html | P07 独立站授权 |
| 动态线索池.html | P45 动态线索管理 |
| 访客行为详情.html | P39 访客行为详情 |
| 搜客记录.html | P17 搜客历史记录 |
| 动态线索详情.html | P46 动态线索详情 |
| 上传业务材料.html | P05 上传业务材料 |
| 探针部署.html | P28 探针部署 |
| 搜客策略预览.html | P13 AI 策略预览 |
| 线索详情.html | P27 线索详情 |
| 资源下发确认.html | P02 资源下发确认 |
| AI业务分析中.html | P10 AI 分析中 |
| 多BOT工作台.html | P03 多 BOT 工作台 |

---

## 交互导航工具

| 文件 | 说明 |
|------|------|
| [catalog-panel.js](./catalog-panel.js) | 浮动目录面板，按页面和功能说明分类，点击跳转 |
| [entry-nav.js](./entry-nav.js) | 左侧固定导航，含分组和图标，从 nav-config.json 读取配置 |
| [nav-config.json](./nav-config.json) | 导航配置，修改后自动生效，无需改 JS 文件 |

使用方式：在原型 HTML 页面中添加 `<script src="../catalog-panel.js"></script>` 或 `<script src="../entry-nav.js"></script>`。

---

## 维护说明

- 新增原型页面时，在此目录列表中补充，并在对应模块的 README 映射表中添加条目
- 页面命名规范：`{功能名}.html`，使用中文命名
- 样式文件位于 `styles/` 目录，组件位于 `components/` 目录
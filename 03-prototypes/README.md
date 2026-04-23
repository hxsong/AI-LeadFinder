# 03-prototypes 原型层设计规范

本目录存放交互原型页面，承接模块层的界面元素设计，为研发提供可视化的界面参考。

---

## 职责定位

| 维度 | 说明 |
|------|------|
| **核心问题** | 界面长什么样？怎么交互？ |
| **关注点** | 视觉呈现、交互逻辑、用户体验 |
| **描述方式** | 可视化、可交互 |
| **读者对象** | 设计师、研发、测试 |
| **变更频率** | 高（随设计迭代） |

---

## 编写原则

1. **还原设计**：页面还原模块层定义的界面元素
2. **交互完整**：包含页面跳转、状态变化等交互逻辑
3. **样式统一**：使用统一的样式规范，保持视觉一致性
4. **可交互**：页面间导航完整可用，支持基本交互

---

## 页面头部注释

**重要提示**：关联文档的文件名和路径必须是实际存在的文件，禁止虚构文件名。引用前请先确认目标文件在对应目录中真实存在。

**添加位置**：注释应放在 `<!DOCTYPE html>` 声明之前，作为文件最顶部的注释。

```html
<!--
  关联文档：
    - [模块设计](../02-modules/{真实存在的模块文档名}.md)
    - [功能说明](../04-specs/{真实存在的页面名}-说明.md)
-->
<!DOCTYPE html>
<html lang="zh-CN">
```

---

## 编写规范

### 文件命名

| 类型 | 命名规则 | 示例 |
|------|----------|------|
| 页面 | `{页面名}.html` | `订单创建.html` |
| 样式 | `{功能}.css` | `global.css`、`form.css` |
| 脚本 | `{功能}.js` | `nav.js`、`modal.js` |

### 页面命名规则

- 使用中文或英文，简洁明了
- 与模块文档中的界面元素名称对应
- 与 specs 文档名称对应

### 交互规范

| 交互类型 | 规范要求 |
|----------|----------|
| 页面跳转 | 所有跳转链接可点击，指向正确页面 |
| 表单提交 | 提交按钮可点击，显示提交状态 |
| 状态切换 | 支持基本的状态切换交互 |
| 错误提示 | 关键操作有错误提示示例 |

---

## 页面与模块的对应关系

### 一对多关系

```
02-modules/01-{模块A}.md
    ↓ 对应多个页面
03-prototypes/pages/
    ├── 模块A-页面1.html
    ├── 模块A-页面2.html
    └── 模块A-页面3.html
```

### 页面组织原则

1. **功能完整**：一个模块的所有页面放在同一目录或使用统一前缀
2. **流程连贯**：页面间跳转符合用户操作流程
3. **命名一致**：页面命名与模块文档中的界面元素名称一致

---

## 样式规范

### 全局样式文件

`styles/global.css` 包含：

| 样式类型 | 说明 |
|----------|------|
| 颜色变量 | 主色、辅助色、状态色 |
| 字体规范 | 字体族、字号、行高 |
| 间距规范 | margin、padding 标准 |
| 组件样式 | 按钮、输入框、卡片等基础组件 |

### 样式命名规范

```css
/* 布局类 */
.container { }
.header { }
.content { }
.footer { }

/* 组件类 */
.btn { }
.btn-primary { }
.input { }
.card { }

/* 状态类 */
.active { }
.disabled { }
.loading { }
```

---

## 上下游关系

```
上游：02-modules/（界面元素指导页面设计）
下游：04-specs/（页面交互转化为技术规格）
```

**变更影响**：本层变更必须同步更新下游文档（04）

---

## 通用组件

### 入口导航

使用 `entry-nav.js` 组件在页面左侧显示功能入口导航。

**使用示例**：

```html
<head>
    <!-- 直接引入组件，无需额外配置 -->
    <script src="../scripts/entry-nav.js"></script>
</head>
```

**规范要求**：

| 维度 | 规范 |
|------|------|
| 位置 | 左侧固定，垂直居中 |
| 样式 | 圆角卡片，图标 + 文字 |
| 交互 | 当前页面高亮 |
| 配置 | 组件内维护导航项列表，页面无需配置 |

**添加新页面**：如需添加新入口，修改 `entry-nav.js` 中的 `NAV_ITEMS` 数组：

```javascript
const NAV_ITEMS = [
    { name: "静态搜客", file: "搜客需求输入.html", icon: "search" },
    { name: "访客雷达", file: "访客雷达.html", icon: "radar" },
    // 添加新入口...
];
```

### 状态切换器

使用 `state-switcher.js` 组件实现页面状态切换，支持 URL 参数 `?state=loading` 快速切换。

**使用示例**：

```html
<head>
    <!-- 1. 先定义配置（必须在引入 state-switcher.js 之前） -->
    <script>
        window.STATE_SWITCHER_CONFIG = {
            states: [
                { key: 'normal', label: '默认状态', color: 'bg-success' },
                { key: 'loading', label: '加载中', color: 'bg-cta' },
                { key: 'empty', label: '无数据', color: 'bg-slate-400' },
                { key: 'error', label: '错误', color: 'bg-red-500' }
            ]
        };
    </script>
    <!-- 2. 后引入组件 -->
    <script src="../scripts/state-switcher.js"></script>
</head>
```

**规范要求**：

| 维度 | 规范 |
|------|------|
| 配置 | 页面自定义 `STATE_SWITCHER_CONFIG` 传入状态列表 |
| 配置位置 | **必须在 `<head>` 中、引入 state-switcher.js 之前定义** |
| 位置 | 右上角固定浮层 |
| 交互 | 圆形按钮 + 下拉菜单 |
| 标识 | 当前状态高亮 |
| 环境 | 仅原型演示使用 |

**必需：监听状态切换事件**

页面必须监听 `statechange` 事件来实现状态切换逻辑，否则状态切换器无法正常工作：

```javascript
<script>
    // 监听状态切换器事件，根据状态切换页面展示
    window.addEventListener('statechange', function(e) {
        const state = e.detail.state;
        // 根据状态切换页面内容显示
        switch(state) {
            case 'loading':
                showLoadingState();
                break;
            case 'empty':
                showEmptyState();
                break;
            case 'error':
                showErrorState();
                break;
            case 'normal':
            default:
                showNormalState();
                break;
        }
    });
</script>
```

---

## 质量检查清单

- [ ] 页面头部注释是否完整？
- [ ] 页面命名是否与模块文档对应？
- [ ] 页面跳转是否完整可用？
- [ ] 关键交互是否可操作？
- [ ] 是否展示了必要的页面状态？
- [ ] 样式是否统一？
- [ ] 是否与模块层的界面元素设计一致？

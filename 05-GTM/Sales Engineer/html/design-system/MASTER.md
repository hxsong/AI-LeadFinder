# AI LeadFinder 售前资料 HTML 设计系统

## 设计概述

基于参考文件 `LeadongAgent.html` 的设计风格，为 AI LeadFinder 售前资料生成一套统一、专业的 HTML 页面设计系统。

## 色彩系统

| Token | 值 | 用途 |
|-------|-----|------|
| Primary | `#3B82F6` | 主色调，按钮、链接、强调 |
| Secondary | `#60A5FA` | 次要色，hover状态、辅助元素 |
| Accent | `#10B981` | 强调色，成功状态、正向指标 |
| CTA | `#F97316` | 行动号召，重要按钮、关键数据 |
| Dark | `#1E293B` | 深色文字、深色背景 |
| Light | `#F8FAFC` | 页面背景、浅色区域 |
| Glass BG | `rgba(255,255,255,0.9)` | 玻璃卡片背景 |
| Glass Border | `rgba(255,255,255,0.2)` | 玻璃卡片边框 |

## 字体系统

- **主字体**: Inter, sans-serif
- **标题**: font-bold, tracking-tight
- **正文**: text-gray-600
- **小标签**: uppercase, tracking-wide, text-sm

## 布局规范

- **容器**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **区块间距**: py-24
- **卡片圆角**: rounded-2xl
- **卡片阴影**: shadow-lg

## 交互组件

### Tooltip 悬停提示
- 容器: `.tooltip-container` (position: relative)
- 内容: `.tooltip-content` (默认隐藏, hover显示)
- 背景: `rgba(30,41,59,0.98)`
- 文字: 白色
- 圆角: 0.75rem
- 最大宽度: 450px
- 动画: opacity + transform, 0.3s cubic-bezier

### 玻璃卡片
- 背景: `rgba(255,255,255,0.9)`
- 模糊: `backdrop-filter: blur(10px)`
- 边框: `1px solid rgba(255,255,255,0.2)`
- 阴影: Tailwind shadow

### 表格样式
- 表头: bg-gray-100, font-semibold, text-gray-500
- 行: hover:bg-gray-50
- 边框: border-gray-200

### 架构图层级
- Layer 1 (Blue): `linear-gradient(135deg, #3B82F6, #2563EB)`
- Layer 2 (Green): `linear-gradient(135deg, #10B981, #059669)`
- Layer 3 (Purple): `linear-gradient(135deg, #8B5CF6, #7C3AED)`
- Layer 4 (Orange): `linear-gradient(135deg, #F97316, #EA580C)`

## 动画效果

- **Fade In Up**: opacity 0→1, translateY(20px→0), 0.8s ease-out
- **延迟类**: delay-100, delay-200, delay-300, delay-400, delay-500
- **Blob动画**: animate-blob, 用于Hero背景装饰

## 页面结构模板

每个HTML页面遵循以下结构:
1. **导航栏**: 固定顶部, 玻璃效果, 包含文档间跳转链接
2. **Hero区域**: 渐变背景, 标题+副标题+关键数据
3. **内容区块**: 交替使用 bg-white 和 bg-gray-50
4. **页脚**: 深色背景, 版权信息

## 导航栏规范

- 左侧: AI LeadFinder Logo + 当前文档标题
- 右侧: 其他文档下拉菜单 / 链接
- 样式: bg-white/80 backdrop-blur-md border-b border-gray-100

## 响应式断点

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 数据可视化规范

### 双引擎架构图
- 使用 CSS Grid + Flexbox 布局
- 引擎卡片: 渐变背景, 圆角, 阴影
- 连接线: SVG 或 CSS border
- 中心AI大脑: 突出显示, 脉冲动画

### 时间线图
- 水平或垂直时间轴
- 节点: 圆形, 渐变背景
- 连线: 2px, 渐变色
- 内容卡片: 玻璃效果

### 评分/对比图表
- 使用表格呈现对比数据
- 使用星级/进度条表示评分
- 使用颜色区分优劣 (绿=优, 红=劣)

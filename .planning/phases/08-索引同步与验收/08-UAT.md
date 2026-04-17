---
status: resolved
phase: 08-索引同步与验收
source:
  - .planning/phases/08-索引同步与验收/08-P8.1-SUMMARY.md
  - .planning/phases/08-索引同步与验收/08-P8.2-SUMMARY.md
started: 2026-04-17T12:10:00+08:00
updated: 2026-04-17T12:26:00+08:00
---

## Current Test
<!-- OVERWRITE each test - shows where we are -->

number: 2
name: 新建 04-specs/README.md 入口文档
expected: |
  04-specs/README.md 存在，包含扁平结构说明、模块映射表入口和全部 21 个 spec 文件索引。点击索引中的链接能打开对应 spec 文件。
awaiting: user response

## Tests

### 1. 新建 03-prototypes/README.md 入口文档
expected: |
  03-prototypes/README.md 存在，包含模块映射表入口和全部 20 个原型页面索引。点击映射表中的链接能打开对应原型 HTML 页面。
result: issue
reported: "页面目录列表的 20 个条目没有可点击的链接，无法从 README 直接跳转到 HTML 页面"
severity: major

### 2. 新建 04-specs/README.md 入口文档
expected: |
  04-specs/README.md 存在，包含扁平结构说明、模块映射表入口和全部 21 个 spec 文件索引。点击索引中的链接能打开对应 spec 文件。
result: issue
reported: "功能说明文档索引的 21 个条目没有可点击链接，且缺少模块映射表入口章节"
severity: major

### 3. 6 个模块 README 映射表格式更新
expected: |
  02-modules 下 6 个模块的 README.md 映射表已从 4 列格式更新为 3 列（PRD节点 | 原型页面 | 功能说明文档），且 spec 引用路径已从 ../prototype/docs/ 更新为 ../04-specs/。
result: pass

### 4. 旧路径引用全部清除
expected: |
  整个 02-modules 目录下无残留旧路径引用：无 ../prototype/docs/、无 ../../prototype/、无 prd-md/ 目录名。
result: pass

### 5. 三层入口导航链路通顺
expected: |
  从 03-prototypes/README.md → 模块 README 映射表 → spec 页面；从 04-specs/README.md → 模块 README 映射表 → PRD 文档页面的三层导航链路均能正常跳转。
result: issue
reported: "04-specs/README.md 缺少模块映射表入口章节，无法通过此入口导航到各模块 README 映射表"
severity: major

### 6. 深层链接抽样验证
expected: |
  点击深层页面链接（如模块 README 映射表中指向的具体 spec 文件链接），目标文件存在且内容正确。
result: issue
reported: "模块 README 映射表中的 spec 文件路径只是纯文本，没有 Markdown 链接格式，无法点击跳转"
severity: major

## Summary

total: 6
passed: 2
issues: 4
pending: 0
skipped: 0

## Gaps

- truth: "03-prototypes/README.md 的页面目录列表包含 20 个条目，但每个条目没有可点击链接指向对应 HTML 文件"
  status: diagnosed
  reason: "User reported: 页面目录列表没有链接"
  severity: major
  test: 1
  root_cause: "页面目录列表表格使用纯文本文件名，未使用 Markdown 链接格式"
  artifacts:
    - path: "03-prototypes/README.md"
      issue: "页面目录列表表格第 24-44 行每行列出文件名但无 `[文件名](./pages/文件名.html)` 链接格式"
  missing:
    - "将每行改为 `[业务分析报告.html](./pages/业务分析报告.html)` 等链接格式"
  debug_session: null

- truth: "04-specs/README.md 的功能说明文档索引起始 21 个条目没有可点击链接指向对应 MD 文件，且缺少模块映射表入口章节"
  status: diagnosed
  reason: "User reported: 没有链接，缺少模块映射表入口"
  severity: major
  test: 2
  root_cause: "功能说明文档索引表格使用纯文本文件名，未使用 Markdown 链接格式"
  artifacts:
    - path: "04-specs/README.md"
      issue: "功能说明文档索引表格第 20-40 行每行列出文件名但无链接格式"
  missing:
    - "将每行改为 `[租户资源充值-说明.md](./租户资源充值-说明.md)` 等链接格式"
  debug_session: null

- truth: "04-specs/README.md 缺少模块映射表入口章节，导致从 04-specs/README.md → 模块 README 映射表 → PRD 页面的导航链路不完整"
  status: diagnosed
  reason: "User reported: 缺少模块映射表入口"
  severity: major
  test: 5
  root_cause: "文档中只有目录结构和索引章节，缺少'模块映射表入口'章节（03-prototypes/README.md 有此章节）"
  artifacts:
    - path: "04-specs/README.md"
      issue: "缺少模块映射表入口章节，03-prototypes/README.md 第 8-17 行有对应表格可作参考"
  missing:
    - "在目录结构和功能说明文档索引之间插入模块映射表入口章节表格"
  debug_session: null

- truth: "02-modules 各模块 README 的文档索引表格中，spec 文件路径为纯文本而非 Markdown 超链接，无法点击跳转"
  status: diagnosed
  reason: "User reported: 映射表中的 spec 路径不是链接"
  severity: major
  test: 6
  root_cause: "文档索引表格的'功能说明文档'列使用纯文本路径，未使用 `[文件名](../04-specs/文件名.md)` 链接格式"
  artifacts:
    - path: "02-modules/01-账号/README.md"
      issue: "第 20-21 行 spec 路径为纯文本：`../04-specs/租户资源充值-说明.md、../04-specs/资源下发确认-说明.md、...`"
    - path: "02-modules/02-静态数据/README.md"
      issue: "同样的纯文本路径问题"
    - path: "02-modules/03-企业管理/README.md"
      issue: "同样的纯文本路径问题"
  missing:
    - "将功能说明文档列改为多链接格式：`[租户资源充值-说明.md](../04-specs/租户资源充值-说明.md)、[资源下发确认-说明.md](../04-specs/资源下发确认-说明.md)、...`"
  debug_session: null

## Current Test

[testing complete]

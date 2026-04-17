---
phase: 09-内容修正和文档清理
plan: 09-P01-空目录清理
wave: 1
type: execute
autonomous: false
files_modified: []
---

<objective>

清理 Phase 7/8 遗留的 9 个空目录（8 个在 04-specs/，1 个在 03-prototypes/components/），并评估 Phase 6 规范遗留的 01-concept/design/ 下 2 个空子目录是否删除。记录 docs/、prd-md/、prototype/ 旧目录待 Phase 10 处理。

</objective>

<tasks>

## Task 1 — D-01: 删除 04-specs/ 下 8 个空模块子目录

<read_first>

- `.planning/phases/09-内容修正和文档清理/09-CONTEXT.md` §D-01
- 确认目标目录确实为空：`find /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/04-specs -type d -empty | sort`

</read_first>

<action>

```bash
cd /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder

# 删除 04-specs/ 下 8 个空目录
rmdir 04-specs/00-概述与定义
rmdir 04-specs/01-账号
rmdir 04-specs/02-静态数据
rmdir 04-specs/03-企业管理
rmdir 04-specs/04-AILead管理
rmdir 04-specs/05-销售线索
rmdir 04-specs/06-任务协作
rmdir 04-specs/07-全局规范
```

</action>

<acceptance_criteria>

- `find 04-specs -type d -empty` 无输出（8 个空目录全部删除）
- `ls 04-specs/` 仅列出 .md 文件，不再有任何子目录

</acceptance_criteria>

---

## Task 2 — D-02: 记录旧目录待 Phase 10 处理

<read_first>

- `.planning/phases/09-内容修正和文档清理/09-CONTEXT.md` §D-02
- 确认旧目录存在：`ls /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/ | grep -E "^docs$|^prd-md$|^prototype$"`

</read_first>

<action>

在 Phase 9 的验收文档末尾追加说明，或在 ROADMAP.md 的 Phase 10 备注中确认三目录保留：

```bash
# 记录旧目录状态（无需修改文件，在执行日志中体现）
echo "docs/, prd-md/, prototype/ 保留，待 Phase 10 清理"
```

D-02 不涉及文件操作，仅为决策确认。Phase 10 将规划删除这三个目录。

</action>

<acceptance_criteria>

- docs/、prd-md/、prototype/ 三个目录在 Phase 9 期间保持原状（不删除）
- Phase 10 的 ROADMAP.md 中明确包含这三个目录的清理规划

</acceptance_criteria>

---

## Task 3 — D-10: 评估并删除 01-concept/design/ 下 2 个空子目录

<read_first>

- `.planning/phases/06-目录结构规范设计/06-CONTEXT.md` §D-01~D-18 — 目录规范定义
- `.planning/phases/06-目录结构规范设计/06-目录结构规范.md` — 01-concept/design/ 子目录说明
- 确认两个目录为空：`ls /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/design/核心业务流/ && ls /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/design/实体关系说明/`
- 检查原始 docs/design/ 是否存在这两个子目录：`ls /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/docs/design/ 2>/dev/null || echo "docs/design/ 不存在"`

</read_first>

<action>

**决策依据：**
- 原始 docs/design/ 不存在"核心业务流/"和"实体关系说明/"子目录
- Phase 6 目录规范中这两个目录是为占位预留，实际迁移中无文件落入
- 设计文档（.html/.md）均直接在 design/ 根目录，符合 Phase 8 验收后的实际状态

**执行：**

```bash
cd /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder

# 删除 Phase 6 规范遗留的占位空目录
rmdir 01-concept/design/核心业务流
rmdir 01-concept/design/实体关系说明
```

</action>

<acceptance_criteria>

- `find 01-concept/design -type d -empty` 无输出（无遗留空子目录）
- `ls 01-concept/design/` 仅列出 4 个设计文件 + 2 个 HTML，不含任何子目录

</acceptance_criteria>

---

## Task 4 — D-01 追加: 删除 03-prototypes/components/ 空目录

<read_first>

- `.planning/phases/09-内容修正和文档清理/09-CONTEXT.md` §D-01
- 确认目录为空：`find /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/03-prototypes/components -type f`
- 确认 prototype/components/ 原始目录：`ls /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/prototype/components/ 2>/dev/null || echo "原型目录不存在"`

</read_first>

<action>

```bash
cd /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder

# 03-prototypes/components/ 为迁移后遗留的空目录，删除
rmdir 03-prototypes/components
```

</action>

<acceptance_criteria>

- `ls 03-prototypes/` 仅包含 pages/ 和 styles/ 两个目录（无 components/ 目录）

</acceptance_criteria>

</tasks>

<verification>

```bash
# 验收：04-specs/ 下无空目录
find /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/04-specs -type d -empty | wc -l
# 期望: 0

# 验收：03-prototypes/ 下无 components/ 目录
ls /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/03-prototypes/
# 期望: 仅 pages  styles

# 验收：01-concept/design/ 下无空子目录
find /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/design -type d -empty | wc -l
# 期望: 0

# 验收：旧目录保留
ls /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/ | grep -E "^docs$|^prd-md$|^prototype$"
# 期望: docs  prd-md  prototype
```

</verification>

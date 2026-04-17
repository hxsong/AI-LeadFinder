# Phase 7 Plan: 内容迁移

**Phase:** 07-内容迁移
**Created:** 2026-04-17
**Status:** Ready for execution

---

## P7.1 — docs/ 内容拆分迁移

```yaml
plan: P7.1
phase: "07-内容迁移"
type: execute
wave: 1
depends_on: []
requirements:
  - MIGRATE-01
files_modified:
  - docs/changelog/*          → 05-shared/changelog/
  - docs/design/核心业务流/*   → 01-concept/design/核心业务流/
  - docs/design/实体关系说明/* → 01-concept/design/实体关系说明/
  - docs/*.md                 → 05-shared/misc/
autonomous: true
```

<objective>
将 docs/ 目录内容拆分迁移到 01-concept/ 和 05-shared/，文件内容不变，路径改变。
</objective>

<tasks>

<task>
<read_first>
- `.planning/phases/06-目录结构规范设计/06-执行标准.md` §Step 1, §Step 2 (docs/ 部分)
- `.planning/phases/06-目录结构规范设计/06-CONTEXT.md` §D-12, D-13, D-14
</read_first>

<action>
```bash
# 1. 创建目标目录
mkdir -p 01-concept/design/核心业务流
mkdir -p 01-concept/design/实体关系说明
mkdir -p 05-shared/changelog
mkdir -p 05-shared/misc

# 2. 迁移 changelog → 05-shared/changelog/
cp -r docs/changelog/* 05-shared/changelog/

# 3. 迁移 design/ → 01-concept/design/
cp -r docs/design/核心业务流 01-concept/design/
cp -r docs/design/实体关系说明 01-concept/design/

# 4. 迁移 docs/ 根目录文件 → 05-shared/misc/
find docs/ -maxdepth 1 -type f -exec cp {} 05-shared/misc/ \;
```
</action>

<acceptance_criteria>
- `05-shared/changelog/` 包含所有 docs/changelog/ 文件
- `01-concept/design/核心业务流/` 包含所有设计文档
- `01-concept/design/实体关系说明/` 包含所有 ER 说明文档
- `05-shared/misc/` 包含 docs/ 根目录所有 .md 文件
</acceptance_criteria>

<verify>
```bash
# 文件数量匹配校验
find docs/changelog/ -type f | sort | wc -l
find 05-shared/changelog/ -type f | sort | wc -l

find docs/design/ -type f | sort | wc -l
find 01-concept/design/ -type f | sort | wc -l

# 抽样 MD5 校验
md5sum docs/changelog/v1.0.0.md
md5sum 05-shared/changelog/v1.0.0.md

# Markdown 元数据完整性校验
for f in 05-shared/changelog/*.md; do
  count=$(grep -c "^---$" "$f" 2>/dev/null || echo 0)
  if [ "$count" -ne 2 ]; then echo "BROKEN frontmatter: $f"; fi
done
```
</verify>

</task>

</tasks>

<verification>

**整体验证步骤：**

1. 文件数量完全匹配（changelog、design 分别对比）
2. 抽样 MD5 校验 changelog/v1.0.0.md
3. 抽样 grep 检查中文段落结构未被截断
4. Markdown 文件 frontmatter 完整性（`---` 闭合）
5. 原始 docs/ 目录未被修改（ls 确认）

</verification>

<success_criteria>
- docs/changelog/ 全部文件出现于 05-shared/changelog/
- docs/design/ 全部文件出现于 01-concept/design/
- docs/ 根目录文件全部出现于 05-shared/misc/
- MD5 抽样一致
- docs/ 原位未被修改
</success_criteria>

---

## P7.2 — prd-md/ 迁移到 02-modules/

```yaml
plan: P7.2
phase: "07-内容迁移"
type: execute
wave: 1
depends_on: []
requirements:
  - MIGRATE-02
files_modified:
  - prd-md/00-概述与定义/*   → 02-modules/00-概述与定义/
  - prd-md/01-账号/*         → 02-modules/01-账号/
  - prd-md/02-静态数据获客/* → 02-modules/02-静态数据/
  - prd-md/03-动态流量获客/* → 02-modules/03-企业管理/
  - prd-md/04-全景画像与触达/* → 02-modules/04-AILead管理/
  - prd-md/05-运营与合规/*   → 02-modules/05-销售线索/
  - prd-md/06-非功能需求/*   → 02-modules/06-任务协作/
  - prd-md/07-全局规范/*     → 02-modules/07-全局规范/
  - prd-md/api-specs/*       → 02-modules/api-specs/
autonomous: true
```

<objective>
将 prd-md/ 全部内容迁移到 02-modules/，子目录重命名（去掉 -md 及描述性后缀），文件内容不变。
</objective>

<tasks>

<task>
<read_first>
- `.planning/phases/06-目录结构规范设计/06-执行标准.md` §Step 1, §Step 2 (prd-md/ 部分)
- `.planning/phases/06-目录结构规范设计/06-CONTEXT.md` §D-15
</read_first>

<action>
```bash
# 1. 创建目标目录
mkdir -p 02-modules/{00-概述与定义,01-账号,02-静态数据,03-企业管理,04-AILead管理,05-销售线索,06-任务协作,07-全局规范,api-specs}

# 2. 迁移各模块（目标目录名已去掉 -md 及描述性后缀）
cp -r prd-md/00-概述与定义/.  02-modules/00-概述与定义/
cp -r prd-md/01-账号/.         02-modules/01-账号/
cp -r prd-md/02-静态数据获客/. 02-modules/02-静态数据/
cp -r prd-md/03-动态流量获客/. 02-modules/03-企业管理/
cp -r prd-md/04-全景画像与触达/. 02-modules/04-AILead管理/
cp -r prd-md/05-运营与合规/.   02-modules/05-销售线索/
cp -r prd-md/06-非功能需求/.   02-modules/06-任务协作/
cp -r prd-md/07-全局规范/.     02-modules/07-全局规范/
cp -r prd-md/api-specs/.       02-modules/api-specs/
```
</action>

<acceptance_criteria>
- 所有 8 个模块目录（00–07）内容迁移完成
- api-specs/ 迁移完成
- 原始 prd-md/ 子目录未修改
</acceptance_criteria>

<verify>
```bash
# 文件数量匹配校验
find prd-md/ -type f | sort | wc -l
find 02-modules/ -type f | sort | wc -l

# 抽样 MD5 校验
md5sum prd-md/00-概述与定义/README.md
md5sum 02-modules/00-概述与定义/README.md

# 验证关键模块根目录存在
ls 02-modules/01-账号/
ls 02-modules/05-销售线索/
ls 02-modules/api-specs/

# Markdown frontmatter 完整性抽样
for f in 02-modules/*/README.md; do
  count=$(grep -c "^---$" "$f" 2>/dev/null || echo 0)
  if [ "$count" -ne 2 ]; then echo "BROKEN frontmatter: $f"; fi
done
```
</verify>

</task>

</tasks>

<verification>

**整体验证步骤：**

1. 文件数量完全匹配（prd-md/ vs 02-modules/）
2. 抽样 MD5 校验 00-概述与定义/README.md
3. 所有 8 个模块子目录内容存在
4. api-specs/ 内容完整
5. Markdown frontmatter 完整性抽样

</verification>

<success_criteria>
- prd-md/ 全部文件出现于 02-modules/
- 8 个模块子目录（00-07）均存在且内容完整
- api-specs/ 迁移完成
- MD5 抽样一致
- prd-md/ 原位未被修改
</success_criteria>

---

## P7.3 — prototype/pages/ 迁移到 03-prototypes/pages/

```yaml
plan: P7.3
phase: "07-内容迁移"
type: execute
wave: 1
depends_on: []
requirements:
  - MIGRATE-03
files_modified:
  - prototype/pages/* → 03-prototypes/pages/
autonomous: true
```

<objective>
将 prototype/pages/ 全部内容迁移到 03-prototypes/pages/，保持模块子目录结构，文件内容不变。
</objective>

<tasks>

<task>
<read_first>
- `.planning/phases/06-目录结构规范设计/06-执行标准.md` §Step 1, §Step 2 (prototype/pages/ 部分)
- `.planning/phases/06-目录结构规范设计/06-CONTEXT.md` §D-16
</read_first>

<action>
```bash
# 1. 确保目标目录存在
mkdir -p 03-prototypes/pages

# 2. 迁移 prototype/pages/ → 03-prototypes/pages/
cp -r prototype/pages/* 03-prototypes/pages/

# 3. 确认 styles/ 和 components/ 已在正确位置（无需移动）
ls 03-prototypes/styles/
ls 03-prototypes/components/
```
</action>

<acceptance_criteria>
- 03-prototypes/pages/ 包含 prototype/pages/ 所有子目录和文件
- 03-prototypes/styles/ 和 03-prototypes/components/ 存在
</acceptance_criteria>

<verify>
```bash
# 文件数量匹配校验
find prototype/pages/ -type f | sort | wc -l
find 03-prototypes/pages/ -type f | sort | wc -l

# HTML 结构完整性校验
for f in 03-prototypes/pages/**/*.html; do
  if grep -q '<html' "$f" && ! grep -q '</html>' "$f"; then
    echo "BROKEN HTML (no closing tag): $f"
  fi
done

# 抽样 HTML 文件确认内容未损坏
head -5 03-prototypes/pages/*/index.html 2>/dev/null | grep -c "<!DOCTYPE\|<html" || echo "HTML structure OK"
```
</verify>

</task>

</tasks>

<verification>

**整体验证步骤：**

1. 文件数量完全匹配（prototype/pages/ vs 03-prototypes/pages/）
2. HTML 标签闭合校验（`<html>` / `</html>`）
3. 抽样检查 HTML 内容片段（确认非空）
4. 原始 prototype/pages/ 未被修改

</verification>

<success_criteria>
- prototype/pages/ 全部文件出现于 03-prototypes/pages/
- 所有 HTML 页面标签闭合
- MD5 抽样一致
- prototype/ 原位未被修改
</success_criteria>

---

## P7.4 — prototype/docs/ 迁移到 04-specs/

```yaml
plan: P7.4
phase: "07-内容迁移"
type: execute
wave: 1
depends_on: []
requirements:
  - MIGRATE-04
files_modified:
  - prototype/docs/* → 04-specs/
autonomous: true
```

<objective>
将 prototype/docs/ 全部内容迁移到 04-specs/，保持模块子目录结构，文件内容不变。
</objective>

<tasks>

<task>
<read_first>
- `.planning/phases/06-目录结构规范设计/06-执行标准.md` §Step 1, §Step 2 (prototype/docs/ 部分)
- `.planning/phases/06-目录结构规范设计/06-CONTEXT.md` §D-17
</read_first>

<action>
```bash
# 1. 创建目标目录
mkdir -p 04-specs/{00-概述与定义,01-账号,02-静态数据,03-企业管理,04-AILead管理,05-销售线索,06-任务协作,07-全局规范}

# 2. 迁移 prototype/docs/ → 04-specs/
cp -r prototype/docs/* 04-specs/
```
</action>

<acceptance_criteria>
- 04-specs/ 包含 prototype/docs/ 所有子目录和文件
</acceptance_criteria>

<verify>
```bash
# 文件数量匹配校验
find prototype/docs/ -type f | sort | wc -l
find 04-specs/ -type f | sort | wc -l

# Markdown frontmatter 完整性抽样
for f in 04-specs/**/*.md; do
  count=$(grep -c "^---$" "$f" 2>/dev/null || echo 0)
  if [ "$count" -ne 2 ]; then echo "BROKEN frontmatter: $f"; fi
done
```
</verify>

</task>

</tasks>

<verification>

**整体验证步骤：**

1. 文件数量完全匹配（prototype/docs/ vs 04-specs/）
2. Markdown frontmatter 完整性抽样
3. 原始 prototype/docs/ 未被修改

</verification>

<success_criteria>
- prototype/docs/ 全部文件出现于 04-specs/
- MD5 抽样一致
- prototype/ 原位未被修改
</success_criteria>

---

## Phase 7 综合验证

### Pre-migration baseline
```bash
find docs/ -type f | sort > /tmp/docs-files.txt
find prd-md/ -type f | sort > /tmp/prd-md-files.txt
find prototype/pages/ -type f | sort > /tmp/prototype-pages.txt
find prototype/docs/ -type f | sort > /tmp/prototype-docs.txt
```

### Post-migration count comparison
```bash
# Each migrated dir must have >= source count
# (source files copied, not moved — originals still exist)
```

### MD5 spot checks
```bash
md5sum docs/changelog/v1.0.0.md 05-shared/changelog/v1.0.0.md
md5sum prd-md/00-概述与定义/README.md 02-modules/00-概述与定义/README.md
```

### Structural integrity
```bash
# Markdown frontmatter: each .md must have exactly 2 --- delimiters
find 05-shared/ 02-modules/ 04-specs/ -name "*.md" -exec sh -c \
  'count=$(grep -c "^---$" "$1"); [ "$count" -eq 2 ] || echo "BROKEN: $1"' _ {} \;

# HTML closure: each .html must have both <html> and </html>
find 03-prototypes/pages/ -name "*.html" -exec sh -c \
  'grep -q "<html" "$1" && ! grep -q "</html>" "$1" && echo "BROKEN HTML: $1"' _ {} \;
```

### Originals untouched
```bash
ls docs/ && ls prd-md/ && ls prototype/
# All three directories must still exist unchanged
```

---

*Plan created: 2026-04-17*
*All 4 plans are Wave 1 — can execute in parallel*

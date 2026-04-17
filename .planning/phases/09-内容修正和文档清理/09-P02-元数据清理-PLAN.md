---
phase: 09-内容修正和文档清理
plan: 09-P02-元数据清理
wave: 2
type: execute
autonomous: false
files_modified:
  - 04-specs/独立站授权-说明.md
  - 04-specs/提示词语言管理-说明.md
  - 04-specs/访客行为详情-说明.md
  - 04-specs/探针部署-说明.md
  - 04-specs/AI业务分析中-说明.md
  - 04-specs/搜客需求输入-说明.md
  - 04-specs/搜客策略预览-说明.md
  - 04-specs/访客雷达-说明.md
  - 04-specs/搜客执行中-说明.md
  - 04-specs/多BOT工作台-说明.md
  - 04-specs/搜客结果列表-说明.md
  - 04-specs/租户资源充值-说明.md
  - 04-specs/业务分析报告-说明.md
  - 04-specs/上传业务材料-说明.md
  - 04-specs/搜客记录-说明.md
  - 04-specs/业务初始化-说明.md
  - 04-specs/静态线索池-说明.md
  - 04-specs/资源下发确认-说明.md
  - 04-specs/动态线索池-说明.md
  - 04-specs/线索详情-说明.md
  - 04-specs/动态线索详情-说明.md
---

<objective>

从 04-specs/ 下全部 21 个 .md 文件中移除 `> **最后审核人**：XXX` 和 `> **审核日期**：YYYY-MM-DD` 两行元数据字段，保留其他所有元数据字段（版本、状态、对应 PRD 节点等）。

</objective>

<tasks>

## Task 1 — D-03/D-04/D-05: 清理 04-specs/ 下所有 .md 文件的元数据

<read_first>

- `.planning/phases/09-内容修正和文档清理/09-CONTEXT.md` §D-03, D-04, D-05
- 确认元数据格式：`grep -n "最后审核人\|审核日期" /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/04-specs/独立站授权-说明.md`
- 确认清理范围：`find /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/04-specs -name "*.md" | wc -l`

</read_first>

<action>

使用 `sed -i` 对 04-specs/ 下每个 .md 文件执行原地删除。两行元数据相邻出现，优先匹配相邻两行连续删除的场景，再处理单独残留行：

```bash
cd /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder

for file in 04-specs/*.md; do
  # 优先匹配相邻两行（审核人+审核日期连续出现）并整体删除空行分隔块
  sed -i '' '/^> \*\*最后审核人\*\*：/d; /^> \*\*审核日期\*\*：/d' "$file"
  # 删除因连续删除产生的多余空行（多行空行压缩为一行）
  sed -i '' '/^$/N;/^\n$/d' "$file"
done
```

**执行前备份（可选）：** 如需备份，执行 `cp -r 04-specs 04-specs.bak`

**注意：** prototype/docs/ 下存在相同的 21 个文件，这些文件是旧目录待 Phase 10 清理，不在本次处理范围内。

</action>

<acceptance_criteria>

- `grep -rn "最后审核人\|审核日期" /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/04-specs/ --include="*.md"` 无输出
- 04-specs/ 下每个 .md 文件仍存在且其他元数据字段（版本、状态、对应 PRD 节点、对应原型页面、最后更新时间、变更原因、关联 Issue/PR、模块归属）完整保留

</acceptance_criteria>

---

## Task 2 — D-04: 验证其他目录无需清理

<read_first>

- `find /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/ -name "*.md" | xargs grep -l "最后审核人\|审核日期" 2>/dev/null`
- `find /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/02-modules/ -name "*.md" | xargs grep -l "最后审核人\|审核日期" 2>/dev/null`
- `find /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/05-shared/ -name "*.md" | xargs grep -l "最后审核人\|审核日期" 2>/dev/null`

</read_first>

<action>

D-04 指定清理范围覆盖 `01-concept/`、`02-modules/`、`04-specs/`、`05-shared/` 下的所有 .md 文件。根据实际扫描：

- 01-concept/ — 无 .md 文件含此元数据字段（设计文档均在 design/ 下）
- 02-modules/ — 无 .md 文件含此元数据字段
- 05-shared/ — 无 .md 文件含此元数据字段

因此实际仅需处理 04-specs/ 下 21 个文件。记录扫描结果作为验收依据：

```bash
echo "=== 01-concept/ ===" && find /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/ -name "*.md" | xargs grep -l "最后审核人\|审核日期" 2>/dev/null || echo "(无匹配文件)"
echo "=== 02-modules/ ===" && find /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/02-modules/ -name "*.md" | xargs grep -l "最后审核人\|审核日期" 2>/dev/null || echo "(无匹配文件)"
echo "=== 05-shared/ ===" && find /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/05-shared/ -name "*.md" | xargs grep -l "最后审核人\|审核日期" 2>/dev/null || echo "(无匹配文件)"
```

</action>

<acceptance_criteria>

- 以上三个 find 命令均输出 "(无匹配文件)"，确认 D-04 的完整范围均已覆盖

</acceptance_criteria>

</tasks>

<verification>

```bash
# 全量验收：确认 04-specs/ 下所有 .md 文件的元数据已清理
echo "=== 04-specs/ 元数据清理结果 ==="
for f in /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/04-specs/*.md; do
  count=$(grep -c "^> \*\*最后审核人\*\*：\|^> \*\*审核日期\*\*：" "$f" 2>/dev/null || echo 0)
  if [ "$count" -gt 0 ]; then
    echo "FAIL: $f 仍有 $count 处元数据"
  fi
done
echo "验收完成，无输出表示全部通过"

# 抽查：一个文件清理前后对比
echo "=== 抽查: 独立站授权-说明.md ==="
grep -n "最后审核人\|审核日期" /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/04-specs/独立站授权-说明.md
# 期望: 无输出
```

</verification>

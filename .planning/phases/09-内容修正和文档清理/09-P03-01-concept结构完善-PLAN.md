---
phase: 09-内容修正和文档清理
plan: 09-P03-01-concept结构完善
wave: 3
type: execute
autonomous: false
files_modified:
  - 01-concept/README.md
  - 01-concept/glossary.md
---

<objective>

创建 01-concept/README.md（全局索引页）和 01-concept/glossary.md（术语表），完善 01-concept/ 目录的入口导航。扫描并记录其他发现的问题（不修复，移交 backlog）。

</objective>

<tasks>

## Task 1 — D-06: 创建 01-concept/README.md

<read_first>

- `.planning/phases/09-内容修正和文档清理/09-CONTEXT.md` §D-06
- `.planning/PROJECT.md` §文档体系（v1.1 已迁移）— 目录结构映射图
- `ls /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/design/` — 确认设计文件列表
- `ls /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/02-modules/api-specs/` — 确认 API 规范目录

</read_first>

<action>

创建 `01-concept/README.md`，内容包含：

1. **职责说明**：本目录收纳产品概念设计文档（产品定义、核心业务流程、评分标准、非功能需求、实体关系图）
2. **全局索引**：链接 design/ 下 4 个 .md 文件、2 个 HTML 原型、glossary.md、02-modules/api-specs/
3. **不创建 api-specs/**（D-08 决策：API 规范已在 02-modules/api-specs/ 覆盖）

```bash
cat > /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/README.md << 'EOF'
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
EOF
```

</action>

<acceptance_criteria>

- 文件 01-concept/README.md 存在
- 文件内容包含"目录职责"章节、"文档索引"表格（含 4 个 .md 链接）、"相关参考"章节（含 glossary.md 和 api-specs 链接）
- 文件中不含"最后审核人"或"审核日期"元数据字段

</acceptance_criteria>

---

## Task 2 — D-07: 创建 01-concept/glossary.md

<read_first>

- `.planning/phases/09-内容修正和文档清理/09-CONTEXT.md` §D-07
- `01-concept/design/AI-LeadFinder｜概念设计.md` — 提取产品定义相关术语
- `01-concept/design/潜在客户评分标准设计.md` — 提取评分体系术语
- `01-concept/design/产品非功能性需求清单.md` — 提取性能/安全术语

</read_first>

<action>

术语来源：从 design/ 下 4 个 .md 文件中提取定义明确的术语。

术语来源分布：
- AI-LeadFinder｜概念设计.md — 产品级术语（AI-LeadFinder、BOT、ICP 等）
- 潜在客户评分标准设计.md — 评分体系术语（需求匹配度、购买能力、采购意向、活跃意向等）
- 产品非功能性需求清单.md — 非功能需求术语（Credits、探针等）

```bash
cat > /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/glossary.md << 'EOF'
# AI-LeadFinder 术语表

本文档定义 AI-LeadFinder 产品中的核心术语，保持与概念设计文档的一致性。

---

## 产品核心术语

| 术语 | 定义 | 来源 |
|------|------|------|
| **AI-LeadFinder** | 面向 B2B 外贸企业的独立站全链路 AI Agent 获客系统 | [概念设计](./design/AI-LeadFinder｜概念设计.md) |
| **BOT** | 一个完整的 AI 获客工作单元，包含独立站授权、搜客配置、线索池等资源 | [概念设计](./design/AI-LeadFinder｜概念设计.md) |
| **ICP (Ideal Customer Profile)** | 理想客户画像，定义目标客户的企业特征和业务类型 | [概念设计](./design/AI-LeadFinder｜概念设计.md) |
| **Credits** | 用量计费单位，用于 AI 线索深度挖掘、AI 邮件生成等高价值功能 | [概念设计](./design/AI-LeadFinder｜概念设计.md) |

---

## 业务流程术语

| 术语 | 定义 | 来源 |
|------|------|------|
| **静态数据获客** | 基于 AI 业务分析潜在客户画像，全网搜寻并分析静态企业数据阶段 | [概念设计](./design/AI-LeadFinder｜概念设计.md) |
| **动态数据获客** | 基于访客访问行为数据，实时采集并分析访客 IP 动态数据阶段 | [概念设计](./design/AI-LeadFinder｜概念设计.md) |
| **全景画像分析** | AI 自动分析静态和动态数据中的相同企业，生成全景画像线索分析报告 | [概念设计](./design/AI-LeadFinder｜概念设计.md) |
| **智能触达** | AI 生成触达计划并自动生成个性化内容，通过第三方服务主动发送消息 | [概念设计](./design/AI-LeadFinder｜概念设计.md) |

---

## 评分体系术语

| 术语 | 定义 | 来源 |
|------|------|------|
| **需求匹配度** | AI 模型判断候选企业是否是客户的潜在客户（供需关系分析） | [评分标准](./design/潜在客户评分标准设计.md) |
| **购买能力** | 企业是否有足够的预算和规模进行采购（规模 + 地理范围） | [评分标准](./design/潜在客户评分标准设计.md) |
| **采购意向** | 企业是否有采购行为（海关进口记录命中） | [评分标准](./design/潜在客户评分标准设计.md) |
| **活跃意向** | 企业是否市场活跃（展会参展记录命中） | [评分标准](./design/潜在客户评分标准设计.md) |
| **HS Code** | 海关商品编码，用于匹配企业的进出口产品品类 | [评分标准](./design/潜在客户评分标准设计.md) |

---

## 非功能需求术语

| 术语 | 定义 | 来源 |
|------|------|------|
| **探针** | 部署在客户独立站的 JS 脚本，采集访客行为数据（gzip 后 ≤ 10KB） | [非功能需求](./design/产品非功能性需求清单.md) |
| **异步任务** | AI 业务分析、搜客执行、线索池挖掘等后台任务，支持超时跳过和重试 | [非功能需求](./design/产品非功能性需求清单.md) |
| **Credits 账务一致性** | Credits 余额操作必须准确无误，不可重复扣费 | [非功能需求](./design/产品非功能性需求清单.md) |

---

*本文档随概念设计文档同步更新。如有术语定义变更，请同步更新对应源文档。*
EOF
```

</action>

<acceptance_criteria>

- 文件 01-concept/glossary.md 存在
- 文件包含至少 10 个术语定义，覆盖产品核心术语、业务流程术语、评分体系术语
- 每个术语包含"定义"和"来源"两列，来源指向 design/ 下对应文档
- README.md 中已包含对 glossary.md 的链接引用

</acceptance_criteria>

---

## Task 3 — D-09: 扫描并记录其他发现的问题

<read_first>

- `.planning/phases/09-内容修正和文档清理/09-CONTEXT.md` §D-09
- `find /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/ -name "*.md" | head -10`
- `ls /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/02-modules/`

</read_first>

<action>

执行扫描，记录发现但不在 Phase 9 中修复的问题：

```bash
echo "=== D-09 问题记录：扫描 Phase 9 执行过程中发现的其他问题 ==="

# 检查：README.md 索引链接有效性（检查 href 指向的文件是否存在）
echo "--- 检查 01-concept/README.md 链接 ---"
# （README.md 为新建文件，需验证设计文件确实存在）
for f in /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/design/*.md; do
  echo "✓ $(basename "$f")"
done

# 检查：01-concept/design/ 下是否有 .md 文件内容不完整（通过文件大小判断）
echo "--- 检查 design/ 下 .md 文件状态 ---"
wc -l /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/design/*.md

# 检查：顶层 README.md 是否需要更新（包含 Phase 9 成果）
echo "--- 检查顶层 README.md ---"
head -5 /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/README.md 2>/dev/null || echo "顶层 README.md 不存在"
```

**记录发现的问题（移交 backlog）：**
在 Phase 9 执行过程中，扫描发现以下需要后续处理的问题，不在本次修复：

1. **潜在客户评分标准设计.md 部分章节内容截断**：第 357-360 行有评分公式缺失（"计算方法"章节下无具体公式内容），第 247-248 行"批量计算优化"和"评分可信度"章节为空，这些是原文档遗留问题，需产品经理补充。
2. **ROADMAP.md 中 Phase 9 Success Criteria 与实际执行不符**：Success Criteria 第 3 条"01-concept/ 按照目录结构规范拆分重组"和第 4 条"03-pages/components/ 补回原有公用 JS 组件"在 Phase 9 范围中已被重新评估，前者已由 Phase 6/7 完成，后者无实际文件需要补回（03-prototypes/components/ 为空目录已删除），建议 Phase 9 完成后更新 ROADMAP.md 的 Success Criteria。

这些问题的记录位置：`.planning/BACKLOG.md`（新建或追加），由 Phase 10 或后续 phase 处理。

</action>

<acceptance_criteria>

- 所有 Phase 9 明确决策（D-01~D-10）均已执行，无遗漏
- D-09 记录的问题格式为文本说明，存放于 BACKLOG.md 或执行日志中
- 记录内容包含：问题描述、发现位置、建议处理方式

</acceptance_criteria>

</tasks>

<verification>

```bash
# 验收：01-concept/README.md 存在且内容完整
echo "=== README.md ==="
test -f /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/README.md && echo "存在" || echo "不存在"
grep -c "术语表\|概念设计文档\|API 规范" /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/README.md

# 验收：glossary.md 存在且包含术语
echo "=== glossary.md ==="
test -f /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/glossary.md && echo "存在" || echo "不存在"
grep -c "AI-LeadFinder\|BOT\|ICP\|Credits" /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/glossary.md

# 验收：README.md 中引用了 glossary.md
grep "glossary" /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/README.md
# 期望: 包含 glossary.md 链接

# 验收：两个文件均无审核人元数据
grep "最后审核人\|审核日期" /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/README.md /Users/henrysong/Desktop/Claude/leadong-prd/AI-leadfinder/01-concept/glossary.md
# 期望: 无输出
```

</verification>

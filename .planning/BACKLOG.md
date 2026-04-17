# AI-LeadFinder Backlog

记录 Phase 9 执行过程中发现的后续待处理问题。

---

## Phase 9 执行过程中发现的问题

### B-01: ROADMAP.md Phase 9 Success Criteria 与实际执行不符

**发现位置:** `.planning/ROADMAP.md` §Phase 9 Success Criteria

**问题描述:** Phase 9 的 Success Criteria 包含以下两条与实际执行范围不符的内容：

1. 第 3 条"01-concept/ 按照目录结构规范拆分重组" — 此工作已于 Phase 6/7 完成，Phase 9 并无此任务
2. 第 4 条"03-pages/components/ 补回原有公用 JS 组件" — 03-prototypes/components/ 在 Phase 9 执行中被确认为空目录并已删除，无 JS 组件需补回

**建议处理方式:** 更新 ROADMAP.md 的 Phase 9 Success Criteria，移除上述两条不符内容，或标注为已通过其他 phase 完成。

**优先级:** 中（不影响功能，仅文档准确性）
**来源:** Phase 9 D-09

---

### B-02: 潜在客户评分标准设计.md 部分章节内容可优化

**发现位置:** `01-concept/design/潜在客户评分标准设计.md`

**问题描述:** 文档第 247-248 行"批量计算优化"和"评分可信度"章节内容较简略，第 357-360 行"计算方法"章节公式示例有限。如需用于研发实现，建议产品经理补充具体计算公式和批量处理策略说明。

**建议处理方式:** 由产品经理补充评分公式的具体实现细节和批量优化策略。

**优先级:** 低（文档完整性建议，不阻塞当前开发）
**来源:** Phase 9 D-09 扫描

<!-- GSD:project-start source:PROJECT.md -->
## Project

**AI-LeadFinder 文档体系重构**

将 AI-LeadFinder 现有的产品文档（HTML 原型 + PRD Markdown + 设计文档）从松散结构重构为层次清晰、交叉索引完备、便于长期维护的文档体系。

**Core Value:** 建立一套**职责分明、双向索引、自我更新**的产品文档结构，让产品经理、研发、测试在任何时候都能快速定位所需信息，且任何一处变更都能追溯影响范围。

### Constraints

- **文件格式**: 文档使用 Markdown（.md），原型使用 HTML，两者职责分离
- **不破坏已有内容**: 重写时保留所有原始功能描述、API 示例、边界规则
- **无 Git 历史要求**: 当前 commit 为初始状态，重构后的新结构直接提交
- **维护便利性**: 任何变更只需更新一处，通过交叉索引传递到其他引用位置
<!-- GSD:project-end -->

<!-- GSD:stack-start source:STACK.md -->
## Technology Stack

Technology stack not yet documented. Will populate after codebase mapping or first phase.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->

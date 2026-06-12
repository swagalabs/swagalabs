---
allowed-tools: Agent, Bash(ls:*), Glob, Grep, Read
description: Create monetization strategy for projects with revenue estimates
---

## Context

- Working directory: !`pwd`
- Projects: !`ls -d */ 2>/dev/null | head -20`

## Your task

Analyze all projects in the current directory and create a monetization strategy.

For each project:

1. **Assess readiness** — what exists, what's missing for revenue
2. **Identify revenue models** — SaaS, marketplace, info-product, services, licensing, commission
3. **Estimate revenue** — conservative monthly range at 3/6/12 month marks
4. **List blockers** — what needs to be built/fixed before first dollar
5. **Estimate time to first revenue** — days/weeks/months

Structure output as:

### Tier 1 — Ready to monetize now
(projects that can generate revenue within 2 weeks)

### Tier 2 — Needs 2-4 weeks of work
(projects that are close but need specific features)

### Tier 3 — Long-term / freeze
(early stage or deprioritized)

### Roadmap
Phase 1 (week 1-2): quick wins
Phase 2 (month 1-2): product launches
Phase 3 (month 3-6): scaling

### Revenue projection table
| Project | Month 3 | Month 6 | Month 12 |

### Fastest path to first dollar
Step-by-step, day-by-day plan for the single fastest way to generate income.

Write in the same language the user used. Be specific about numbers and timelines.

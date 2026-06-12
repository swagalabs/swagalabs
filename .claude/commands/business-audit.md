---
allowed-tools: Agent, Bash(ls:*), Bash(find:*), Glob, Grep, Read
description: Find business problems in a project and propose solutions with priorities
---

## Context

- Working directory: !`pwd`
- Project structure: !`ls -la`
- Git log: !`git log --oneline -5 2>/dev/null || echo "not a git repo"`

## Your task

Analyze the current project (or directory of projects) for business problems.

For each project found, identify problems in these categories:

1. **Revenue blockers** — what prevents making money (no billing, no self-service, no landing page)
2. **Scalability issues** — single-tenant, single-server, no CI/CD, manual deploys
3. **Market risks** — competition, legal, platform dependency
4. **Missing infrastructure** — no monitoring, no backups, no DR
5. **Resource waste** — duplicated projects, scattered efforts, unused code

For each problem produce a row:

| ID | Problem | Category | Impact | Solution | Effort | Priority |
|----|---------|----------|--------|----------|--------|----------|

Where:
- Impact: Critical / High / Medium / Low
- Effort: days / weeks / months
- Priority: do-now / do-next / backlog / ignore

End with a "Quick Wins" section: top 3 things that can be done in under 1 week to unblock revenue.

Write in the same language the user used. Be direct, no fluff.

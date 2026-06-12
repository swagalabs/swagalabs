---
allowed-tools: Read, Write, Glob, Bash(ls:*), Bash(git log:*), Bash(git diff:*)
description: Generate a concise summary report of all work done in this session
---

## Context

- Working directory: !`pwd`
- Recent git activity: !`git log --oneline -20 2>/dev/null || echo "not a git repo"`
- Modified files: !`git diff --name-only HEAD~10 2>/dev/null || echo "no git history"`
- New files: !`git ls-files --others --exclude-standard 2>/dev/null | head -30`

## Your task

Generate a concise report of all work done. The report should include:

1. **Summary** — 2-3 sentences about what was accomplished
2. **Files created/modified** — table with file path and one-line description
3. **Key decisions** — any architectural or strategic decisions made
4. **What's next** — recommended next steps
5. **Links** — file:// links to all created artifacts

### Format rules:
- Use markdown
- Keep it under 100 lines
- Tables over paragraphs
- Link every mentioned file
- Write in the same language the user has been using

Save the report to the user's Desktop in a folder called "Отчеты" (create if needed), with filename format: `Report_YYYY-MM-DD_HH-MM.md`

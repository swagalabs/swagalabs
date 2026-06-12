---
allowed-tools: Read, Write, Edit, Glob, Grep, Agent
description: Write professional wiki documentation on a given topic
---

## Context

- Working directory: !`pwd`
- Argument (topic): $ARGUMENTS

## Your task

Write a professional, expert-level wiki article on the given topic.

### Style rules (MANDATORY):

1. **No AI slop** — no "In today's rapidly evolving landscape", no "Let's dive in", no "In conclusion", no "It's important to note". Write like a senior engineer explaining to a colleague.
2. **Structured** — use headers, tables, code blocks, bullet points. No walls of text.
3. **Practical** — every section should have actionable takeaways, not theory
4. **Examples** — show don't tell. Code examples, real scenarios, before/after
5. **Resources** — link to primary sources (official docs, repos, books). No generic "learn more" links.
6. **Direct tone** — "Do X" not "You might want to consider doing X"
7. **Anti-patterns** — for each best practice, show the wrong way too
8. **Checklists** — end major sections with actionable checklists

### Structure:

```
# Title
> One-line summary of what this doc covers

---

## Section 1
[content with examples]

## Section 2
[content with examples]

...

## Checklist
- [ ] actionable items

## Resources
- [Name](url) — one-line description
```

Write in the same language as the topic was given. Save the result to the current directory as a markdown file with a kebab-case name.

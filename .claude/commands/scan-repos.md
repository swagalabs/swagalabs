---
allowed-tools: Agent, Bash(ls:*), Bash(find:*), Glob, Grep, Read
description: Scan all repos in a directory, produce structured summary of each
---

## Context

- Working directory: !`pwd`
- Repos found: !`ls -d */ 2>/dev/null | head -20`

## Your task

Scan every subdirectory that looks like a project (has .git, package.json, go.mod, build.gradle, Cargo.toml, or src/ folder).

For each project, launch a parallel Explore agent to determine:
1. **Name** and one-line description
2. **Tech stack** (language, framework, DB, infra)
3. **Maturity** (prototype / MVP / production)
4. **Lines of code** (approximate)
5. **Key features** (top 5)
6. **Last activity** (last commit date)

After all agents return, produce a single markdown table:

| Project | Stack | Maturity | LOC | Last Activity | Description |
|---------|-------|----------|-----|---------------|-------------|

Sort by maturity (production first), then by last activity (newest first).

Launch all agents in parallel. Do not scan node_modules, .git, vendor, or build directories.

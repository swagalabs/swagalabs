# Smart Commit & Push

Умный коммит и пуш с обработкой расхождений веток.

## Алгоритм:
1. `git status` — проверить есть ли изменения
2. `git diff --stat` — посмотреть что изменилось
3. `git log --oneline -5` — посмотреть стиль коммитов
4. Сгенерировать коммит-сообщение на английском, коротко
5. `git add` конкретные файлы (НЕ `git add .`)
6. `git commit`
7. Перед пушем проверить расхождение: `git log --oneline origin/main..HEAD` и `git log --oneline HEAD..origin/main`
8. Если ветки разошлись:
   - Если наши изменения полностью заменяют файлы — попробовать `git push --force` (если разрешено)
   - Если force-push заблокирован branch protection — `git pull --rebase`, разрешить конфликты через `git checkout --theirs` для полностью переписанных файлов
   - `git rebase --continue`
9. `git push origin main`

## Важно:
- НИКОГДА не использовать `git add .` или `git add -A`
- Добавлять Co-Authored-By в коммит
- Проверять что force-push разрешен перед использованием
- При rebase конфликтах: `--ours` = upstream (remote), `--theirs` = наш коммит

$ARGUMENTS — опциональное сообщение коммита. Если не указано — сгенерировать автоматически.

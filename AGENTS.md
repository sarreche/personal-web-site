# Project Guidelines

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS

## Principles
- Keep components small and reusable
- Prefer server components
- Avoid unnecessary dependencies
- Maintain visual consistency
- Mobile-first design
- Accessibility basics required

## Design Style
- Minimal
- Modern
- Soft pastel accents
- Clean spacing
- Premium but human

## Avoid
- Overengineering
- Heavy animation
- Complex abstractions
- Large UI libraries

## Folder Rules
/components -> reusable UI
/data -> editable content
/lib -> utilities
/app -> routes/layouts

## Coding Style
- Clear naming
- Semantic HTML
- Simple props
- Avoid deeply nested components

## Git workflow
- `main` is always kept deployable; use a descriptive topic branch for changes.
- Every change is integrated through a documented pull request, including docs and content.
- Keep commits small and imperative; explain user-facing impact when useful.
- Before opening a PR, run `npx tsc --noEmit` and `npm run build`, and include results.
- PRs must document objective, scope, UI screenshots/manual checks when relevant, checks run, and follow-ups.
- Review diffs for secrets, generated files, `node_modules`, `.next`, and unrelated changes.
- After merge, update local `main` and remove the topic branch when no longer needed.

# AGENTS.md

## Mission
Build a trustworthy employment portfolio that presents the owner as a backend developer who connects AI to real services.

## Source of truth
- Personal content: `src/data/portfolio.js`
- Product requirements: `docs/portfolio-spec.md`
- Working method: `docs/workflow.md`
- Current tasks: `CHECKLIST.md`

## Working rules
1. Read this file, the spec, and the checklist before changing the site.
2. Never invent personal facts, metrics, links, or project responsibilities. Keep uncertain values as obvious placeholders.
3. Prefer proof of use and problem solving over proficiency percentages or long tool lists.
4. Preserve responsive behavior, keyboard access, semantic headings, and reduced-motion support.
5. Keep content changes in `src/data/portfolio.js` unless the page structure truly changes.
6. Make the smallest coherent change and update docs/tests when behavior or requirements change.

## Definition of done
- `npm run verify` passes.
- No console errors or broken internal anchors.
- Desktop and 320px-wide layouts remain readable.
- Unknown personal information remains a placeholder.
- `CHECKLIST.md` reflects completed and remaining work.

# AGENTS.md — @paryatech/design-system

Instructions for coding agents (Cursor, Claude Code, Codex, etc.) working **in** this repository or **consuming** it from another project.

## What this package is

Independent design-system package. Install from GitHub — **do not** require a sibling Booking / product repo.

```bash
npm install github:yakosasam797/-Design-System-03-experiment
```

## Consuming from another project

1. Add the dependency via GitHub (not `file:../…` for shared / CI / other machines).
2. Install React 19 peers in the consumer.
3. Import CSS before UI:

```ts
import "@paryatech/design-system/styles.css";
// or tokens.css + typography.css for token-only inject
import { Button, AppShell, ListPage } from "@paryatech/design-system";
```

4. Prefer package exports over copying source into the consumer.
5. Pass **module-supplied** nav via `AppShell` `navGroups` / `nav` slots — never hardcode product routes inside this package.
6. Do not invent new hex colours; use tokens in `tokens.css`.
7. Soft-rect `--radius-md` (10px) for actionable controls; pills only for status chips.
8. Teal = work; pink = place/person. Do not invert.

## Working inside this repository

- Source of truth for visuals is documented Booking List **parity history** (see `VISUAL-PARITY-FAILURE-REPORT.md`, `COLOR-SYSTEM-PLAN.md`). That product is **not** a runtime dependency.
- Tokens live in `src/tokens/tokens.css` (+ `typography.css`). Components must use CSS variables / `--type-*` roles.
- Patterns (`AppShell`, `ListPage`) compose components; do not re-implement Button chrome inside patterns.
- Loading / error: composition stories only — no dedicated Loading/Error components in this pilot.
- Before claiming a visual change is done: build (`npm run build`) and check Storybook (`npm run storybook`).
- Run `npm run build` before committing when `src/` changed so committed `dist/` stays in sync for git consumers.

## Layout

| Path | Role |
| --- | --- |
| `src/tokens` | Colour + typography CSS variables |
| `src/components` | Reusable UI |
| `src/patterns` | AppShell, ListPage |
| `src/foundations` | Storybook foundations (Colorography, Typography) |
| `docs/usage` | Human install / token docs |
| `dist` | Built JS/CSS/types shipped to consumers |

## Forbidden

- Machine-specific paths (`D:\…`, absolute home dirs) in package config or docs install commands.
- Documenting `file:../Design-System-03-experiment` as the primary install path for other projects.
- Coupling package build/runtime to a Booking repository checkout.
- Publishing to npm unless a human explicitly requests it.

## Verification checklist (agents)

After changing the package:

1. `npm run build` succeeds.
2. Exports resolve: `.`, `./tokens.css`, `./typography.css`, `./styles.css`.
3. Storybook starts.
4. A fresh consumer can `npm install github:yakosasam797/-Design-System-03-experiment` and import components without any Booking checkout.

# AGENTS.md — @paryatech/ui

Instructions for coding agents (Cursor, Claude Code, Codex, etc.) working **in** this repository or **consuming** it from another project.

## What this package is

Independent design-system package. Install from GitHub — **do not** require a sibling Booking / product repo.

```bash
pnpm add github:yakosasam797/-Design-System-03-experiment
```

## Consuming from another project

1. Add the dependency via GitHub (not `file:../…` for shared / CI / other machines).
2. Install React 19 peers in the consumer.
3. Import CSS before UI:

```ts
import "@paryatech/ui/styles.css";
import { AppShell, ListPage } from "@paryatech/ui";
```

4. Prefer package exports over copying source into the consumer.
5. Pass **module-supplied** nav via `AppShell` `navGroups` — never hardcode product routes inside this package.
6. Do not invent new hex colours; use tokens in `tokens.css`.
7. Soft-rect `--radius-md` (10px) for actionable controls; pills only for status chips.
8. Teal = work; pink = place/person. Do not invert.

## Mandatory: canonical AppShell

Inspect Storybook **Patterns/AppShell** before building any full page.

1. Every full ParyatechOS screen must use the exported `AppShell` unless an explicitly approved exception exists.
2. Never create local components named `Sidebar`, `Topbar`, `HeaderShell`, `NavigationShell`, or `AppShell` when this package is available.
3. Never infer shell controls from business roles or page content.
4. Do not add Owner/Admin/Member controls. They are not part of the approved Direction 03 shell.
5. Use `variant="detail"` (BackButton visible) on record pages and `variant="list"` (BackButton hidden) on list pages. Breadcrumbs are always required.
6. Product modules may supply navigation data, breadcrumbs, back handler, search, account identity, and page content. They may not override shell width, height, type, colour, padding, radii, icon sizes, or active-item paint.
7. If the shell cannot support a required layout, report a design-system gap. Do not rebuild it locally.
8. Ignore Direction 01 extraction docs (dark 268px sidebar, role switcher). Direction 03 Booking + these stories are the source of truth.
9. Before handoff, prove that `AppShell`, `Sidebar`, and `Topbar` imports resolve from `@paryatech/ui`.

## Table row actions

Booking sheet CTAs are **one Button recipe**, not a local CSS button.

```tsx
import { Button, RowActions, Icon } from "@paryatech/ui";

<RowActions>
  <Button variant="brand" size="sm" leadingIcon={<Icon name="eye" size="sm" />}>
    View
  </Button>
  <Button
    variant="ghost"
    size="sm"
    iconOnly
    aria-label="More"
    leadingIcon={<Icon name="more" size={15} />}
  />
</RowActions>
```

- **View** → `brand` + `sm` + `eye` (14px)
- **Open** / **Continue** → `brand` + `sm` + `openExternal` (14px)
- **More** → `ghost` + `sm` + `iconOnly` inside `RowActions` (Booking sheet `.more-btn`: 28×28, transparent border). Do **not** use Topbar `IconButton` (36px) in a table row.
- Do not omit `leadingIcon` on labelled row CTAs.
- Do not restyle these with local CSS.

Storybook: **Components/Button → Table row actions (Booking)**.

## Pagination (Booking canonical)

Storybook: **Components/Pagination → Booking canonical**.

```tsx
import { Pagination, pageCountFor, rangeLabel } from "@paryatech/ui";

<Pagination
  rangeLabel={rangeLabel(page, pageSize, total)}
  page={page}
  pageCount={pageCountFor(total, pageSize)}
  onPageChange={setPage}
/>
```

Booking chrome is **compact**: result-count on the left; Previous; **only the current page number**; Next.

- Do **not** copy **Components/Pagination/Test states** (`MultiplePages`, `TwoPages`, First/Middle/Last, …). Those are interaction examples. They must not determine Booking appearance.
- Do not paint a 1–N page-number strip because the dataset has more than one page. Booking does not.
- The numbered control shows the current page (2, 3, …). It is not hardcoded to `1`.
- Previous is disabled on page 1; Next is disabled on the last page.
- Use `pageCountFor` + `rangeLabel` so the label matches the page. Do not invent extra records to demo paging.
- No ellipsis — Booking has none.

Product implementations must use their documented module-specific preset, not a visually similar test story.

## AppShell usage

```tsx
<AppShell
  variant="list" // or "detail"
  navGroups={moduleNav}
  breadcrumbs={[{ label: "Operations", href: "..." }, { label: "Bookings" }]}
  onBack={variant === "detail" ? goToList : undefined}
  account={{ name, initials, tone: "pink" }}
  credits={{ remaining, total }}
>
  {page}
</AppShell>
```

### Agent checklist

- [ ] Shared AppShell imported from `@paryatech/ui`
- [ ] Shared Sidebar used (no local Sidebar / NavigationShell)
- [ ] Shared Topbar used (no local Topbar / HeaderShell)
- [ ] Correct shell configuration selected (`list` or `detail`)
- [ ] No invented shell controls
- [ ] Correct back/breadcrumb behaviour
- [ ] No local shell styling
- [ ] Visual comparison vs Booking shell completed
- [ ] Imports for AppShell / Sidebar / Topbar resolve from the package
- [ ] Table View / Open / Continue use `Button variant="brand" size="sm"` + required leading icon
- [ ] Table More uses `Button iconOnly` inside `RowActions`, not Topbar `IconButton`
- [ ] Pagination uses `@paryatech/ui` `Pagination` with the Booking canonical preset (compact: Prev · current page · Next)
- [ ] Pagination totals match the product reference (do not invent rows to demo paging)
- [ ] Range text comes from `rangeLabel` (no extra noun)
- [ ] Test-state stories (`MultiplePages`, etc.) were not copied into the product screen

Run `node scripts/check-local-shell.mjs <consumer-root>` to flag product-level shell clones. Nested panel navigation is allowed.

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
4. A fresh consumer can `pnpm add github:yakosasam797/-Design-System-03-experiment` and import components without any Booking checkout.

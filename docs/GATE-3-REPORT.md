# Gate 3 report — Foundations, icons, core components

**Status:** COMPLETE — stop for review  
**Date:** 2026-09-19  
**Repo:** `@paryatech/design-system` only (Booking untouched)

---

## Shipped

### Foundations (tokens)
- `--size-control-sm|toolbar|md` (32 / 36 / 38)
- `--bp-shell` 1000 · `--bp-communication` 820
- `--z-*` layering · icon size/stroke tokens
- I5/I6 comments on `--surface-2` / `--ink-4`
- Status `*-bg-hover` already present (I8)

### Icons
- `Icon` + registry (`src/icons/`) — high-use set (plus, refresh, search, edit, openExternal, more, chrome, nav samples…)
- Storybook: **Foundations/Icons** searchable gallery

### Components
- **Button:** sizes `xs` | `sm` | `toolbar` | `md`; `leadingIcon` / `trailingIcon`
- **StatusChip:** height 32, radius 8, 12.5px (I1)
- **StatusSelect:** new — Tasks-style menu + tone hovers
- **EmptyState:** `illustrated` | `compact` (I9)
- **Modal:** new — default/wide, head/body/foot
- **TextField:** new — label + input/textarea (modal forms)

### Storybook
- StatusSelect, Modal, TextField stories
- Foundations/SizeRadius reference
- Button toolbar + leadingIcon stories

---

## Explicitly deferred (Gate 4+)

- DetailPage / RecordShell, NotesDrawer, SheetToolbar, KpiStrip
- AppShell / DataSheet deep visual parity pass
- ActionMenu (I10)
- Full icon catalogue (remaining nav glyphs)
- Booking-specific compositions
- npm publish

---

## Verify locally

```bash
npm run build
npm run storybook
```

Compare Button sm/toolbar, StatusChip, StatusSelect open menu vs Gate 1 screenshots under `docs/audit/screenshots/`.

---

## Stop the line

**Gate 3 done.** Await review before Gate 4 (tables, navigation shell, shared patterns).

# Gate 4 report — Tables, shell, shared patterns

**Status:** COMPLETE — stop for review  
**Date:** 2026-09-19  
**Repo:** `@paryatech/design-system` only (Booking untouched)

---

## Shipped

### Patterns
- **DetailPage** — record header slots (`title`, `status`, `meta`, `owners`, `actions`, `tabs`, `children`)
- **AppShell** — bp-shell comment; list/detail chrome unchanged structurally
- **ListPage** — toolbar slot wired for **SheetToolbar** (I2 toolbar CTAs in recipes)

### Components
- **SheetToolbar** — search + filters + actions row (CTA height via Button `toolbar` / 36)
- **NotesDrawer** — browse / compose; Escape close; **I3** pill filter chips (`nd-fil` style)
- **KpiStrip** — metric tiles with tones + optional click

### DataSheet (I4)
- Header cells use `--type-label-table-head-*`
- Tracking set to **0.12px** (Public Sans 12 / 600) per Gate 1 CDP

### Storybook recipes
- Patterns/DetailPage (Overview + NotesDrawer compose)
- Patterns/ListPage (SheetToolbar + toolbar-size head actions)
- Components/NotesDrawer (Browse / Compose)
- Components/SheetToolbar
- Components/KpiStrip

### Package exports
`DetailPage`, `SheetToolbar`, `NotesDrawer`, `KpiStrip` (+ types) from `src/index.ts`

---

## Explicitly deferred (Gate 5+)

- ActionMenu (I10)
- Full icon catalogue
- Booking-specific compositions (CommunicationSplit, vendor cards, finance dual sheets)
- ModalForm as named pattern export (recipes already compose Modal + TextField)
- npm publish
- Consuming Booking migration

---

## Verify locally

```bash
npm run build
npm run storybook
```

Compare vs Gate 1 screenshots:
- `detail__overview__desktop` → DetailPage + KpiStrip
- `notes__browse__desktop` / `notes__compose__desktop` → NotesDrawer pill filters
- List / Tasks toolbars → SheetToolbar + Button `toolbar`
- Sheet headers → Public Sans 12/600/0.12px

---

## Stop the line

**Gate 4 done.** Await review before Gate 5 (consumption / polish / publish readiness).

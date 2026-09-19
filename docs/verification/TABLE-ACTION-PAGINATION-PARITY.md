# Table actions and pagination — root-cause parity

**Date:** 2026-09-19  
**Viewport:** 1440×900  
**Sources:** Booking `http://localhost:5173/` · Storybook `http://localhost:6006/` · vendor CRM `http://localhost:5180/`  
**Captures:** [`screenshots/table-action-pagination/`](./screenshots/table-action-pagination/)

Two separate defects. Neither is a generic visual patch on `Pagination`.

---

## 1. Pagination — “Showing 1–10 of 11 vendors”

### Audit

| Fact | Value |
| --- | --- |
| Vendor CRM HTML reference (`Vendor CRM.dc.html`) | **10** vendors, page size implied by one screen of rows |
| Generated `VENDORS` (before) | **11** — HTML roster plus `Example Hospitality` |
| Page size | **10** |
| Calculated page count | `ceil(11/10) = 2` |
| Visible controls (before) | Prev · **1** · **2** · Next enabled · range `Showing 1–10 of 11 vendors` |
| Booking list footer | `Showing 1–3 of 3` · Prev disabled · single **1** · Next disabled |
| Booking pager chrome | `.foot` / `.pager` / `.pg` — already matched in `Pagination` |

Booking never shows two pages. The shared pager already supports `pageCount > 1`; the vendor list used it because the **dataset was wrong**.

### Classification

| Layer | Classification |
| --- | --- |
| Shared `Pagination` visual chrome | **Not the defect** (already Booking-parity) |
| Shared `Pagination` multi-page capability | Keep — stories `TwoPages` / `MultiplePages` |
| Ellipsis | **Not approved** — Booking has none; do not add |
| Generated list | **Consumer data differs from the reference** |
| Range copy `of N vendors` | **Agent instruction incomplete** — Booking range is `Showing a–b of N` with no noun |
| Page math in the page | Prefer `pageCountFor` + `rangeLabel` so label and buttons cannot drift |

**Not:** shared component missing · shared component visually incorrect · wrong Pagination variant.

### Correction

- Keep `totalItems = 10`, `pageSize = 10`, `pageCount = 1`, range `Showing 1–10 of 10`.
- Do not invent an 11th row to demonstrate paging.
- Dropped `Lion City Travel Partners` (the extra 11th identity). `Example Hospitality` stays as the detail-pilot vendor from `CRM Vendor.dc.html`.
- Consumer uses `rangeLabel(page, pageSize, total)` — no `vendors` suffix.

### Separate valid stories (do not mix into the 10-row recipe)

| Story | Range | `pageCount` | Purpose |
| --- | --- | --- | --- |
| `BookingSinglePage` | 1–3 of 3 | 1 | Booking list / every Booking sheet |
| `TenItemsSinglePage` | 1–10 of 10 | 1 | Faithful 10-row list |
| `TwoPages` | 1–10 of 11 | 2 | Capability only |
| `MultiplePages` / First/Middle/Last | 1–10 of 25 … | 3 | Capability only |
| Ellipsis | — | — | **Not approved** |

---

## 2. Table action buttons — View / Open / Continue / More

### Booking evidence (detail sheets, `.row-acts`)

The Booking **list** has no Action column (rows are `data-open-booking`). Row CTAs live on itinerary / vouchers / tasks / travellers / documents / payables sheets:

| Label | Markup | Icon |
| --- | --- | --- |
| View | `btn btn-brand btn-sm` + 14×14 leading SVG | Eye (stroke 1.9) |
| Open | `btn btn-brand btn-sm` + 14×14 leading SVG | Open-external |
| Upload | same brand sm | Upload (not used on vendor list) |
| Continue | **Not in Booking.** Vendor-domain label; same chrome as Open (`openExternal`) | |
| Edit | Header `btn-primary` / toolbar — **not** a table-row CTA | |
| More | `btn btn-ghost btn-sm btn-icon more-btn` | 15×15 **filled** dots |

Measured More inside `.row-acts`: **28×28**, transparent border/background, `color: var(--ink-3)`; hover surface-3 + line border. This is **not** Topbar `IconButton` (36×36).

Labelled brand sm: height **32**, padding **0 11**, radius **8**, gap **6**, 14px leading icon.

### Generated (before)

```tsx
<Button variant="ghost" size="sm">View</Button>
<IconButton label="More"><Icon name="more" /></IconButton>
```

Local `.vc-sheet-actions` (gap 7px vs Booking 10px). `more` was previously a stroked ring (fill flag missing).

### Classification

| Mismatch | Classification |
| --- | --- |
| View as ghost, no icon | **Correct component but wrong variant used** + **required prop omitted** (`leadingIcon`) |
| More as Topbar `IconButton` | **Correct component but wrong variant used** — must be `Button` `iconOnly` in `RowActions` |
| No `iconOnly` on shared Button | **Shared component missing** (configuration, not a new component) |
| `more` icon as hollow circles | **Shared component visually incorrect** — Booking dots are filled |
| No Storybook / AGENTS recipe | **Storybook documentation incomplete** + **agent instruction incomplete** |
| Local `.vc-sheet-actions` | Consumer workaround — deleted |

**Not:** a new ViewButton / MoreButton per label.

### Approved recipe

```tsx
import { Button, RowActions, Icon } from "@paryatech/design-system";

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

Open / Continue — same row, swap the labelled button:

```tsx
<Button variant="brand" size="sm" leadingIcon={<Icon name="openExternal" size="sm" />}>
  Open
</Button>
```

Storybook: **Components/Button → Table row actions (Booking)**.

---

## 3. Root-cause table

| # | Symptom | Classification | Where it lived | Fix |
| --- | --- | --- | --- | --- |
| 1 | 1–10 of 11, two page buttons | Consumer data differs from the reference | `vendors.ts` (11 rows) | 10 rows; `pageCountFor(10,10) === 1` |
| 1b | Range said “vendors” | Agent instruction incomplete | `VendorsListPage` | `rangeLabel()` |
| 1c | Invented 11th row to demo paging | Agent instruction incomplete | consumer data | Separate `TwoPages` story |
| 2 | Ghost View, no eye | Wrong variant + required prop omitted | `VendorsListPage` (and other sheets) | `brand` + `size="sm"` + `leadingIcon={eye}` |
| 2b | 36px More | Wrong component for the slot | `IconButton` in the row | `Button iconOnly` in `RowActions` |
| 2c | No icon-only sm on Button | Shared component missing | `Button.tsx` / CSS | `iconOnly` + `.pt-row-acts` 28px more |
| 2d | Hollow more dots | Shared component visually incorrect | `icons/registry.tsx` | `fill: true` |
| 2e | Local action CSS | Consumer workaround | `.vc-sheet-actions` | Deleted |
| 2f | No documented recipe | Storybook + AGENTS incomplete | stories / AGENTS.md | Table row actions story + recipe |

---

## 4. Verification (1440×900, 2026-09-19)

| Check | Result |
| --- | --- |
| Generated record count = 10 | **Yes** — `Showing 1–10 of 10` |
| One page button; Prev/Next disabled | **Yes** |
| Pagination chrome vs Booking | **Match** — same 30×30 `.pg`, pink active, JetBrains Mono 12 range |
| View = brand sm + 14px eye | **Yes** — Booking View 74×32 · vendor View 73.7×32 |
| Open = brand sm + 14px openExternal | **Yes** — both 76×32, padding 0 11, gap 6, radius 8, teal `#0F6E63` |
| More = 28×28 ghost iconOnly, filled 15px dots | **Yes** — transparent border, `ink-3` `#545C67` |
| `RowActions` gap | **10px** Booking and vendor |
| Storybook `Table row actions` | Same View + More recipe |
| Storybook `TenItemsSinglePage` | `Showing 1–10 of 10`, one page |
| Storybook `TwoPages` | Capability only — **not** used by the vendor list |
| Imports from `@paryatech/design-system` | `Button`, `RowActions`, `Icon`, `Pagination`, `pageCountFor`, `rangeLabel` |
| Local action-button CSS | **None** (`.vc-sheet-actions` removed) |

### Capture set

| Surface | File |
| --- | --- |
| Booking list footer | [booking-list-footer.png](./screenshots/table-action-pagination/booking-list-footer.png) |
| Booking vouchers Open + More | [booking-row-acts.png](./screenshots/table-action-pagination/booking-row-acts.png) |
| Booking documents View + More | [booking-row-acts-view.png](./screenshots/table-action-pagination/booking-row-acts-view.png) |
| Storybook TenItemsSinglePage | [story-pagination-10.png](./screenshots/table-action-pagination/story-pagination-10.png) |
| Storybook TwoPages (capability) | [story-pagination-11.png](./screenshots/table-action-pagination/story-pagination-11.png) |
| Storybook table row actions | [story-table-row-actions.png](./screenshots/table-action-pagination/story-table-row-actions.png) |
| Vendor list footer | [vendor-list-footer.png](./screenshots/table-action-pagination/vendor-list-footer.png) |
| Vendor list View + More | [vendor-list-actions.png](./screenshots/table-action-pagination/vendor-list-actions.png) |
| Vendor rate cards Open + More | [vendor-rate-card-actions.png](./screenshots/table-action-pagination/vendor-rate-card-actions.png) |

Re-run: `node docs/verification/capture-table-action-pagination.mjs` with Booking `:5173`, Storybook `:6006`, vendor CRM `:5180`.

# Pagination — Booking parity audit

**Status:** Corrected (2026-09-19)  
**SoT:** Live `booking-redesign.html` @ `http://localhost:8443/` + CSS `.foot` / `.pager` / `.pg`  
**DS:** `@paryatech/design-system` `Pagination` + Storybook `Components/Pagination`  
**Evidence:** [`screenshots/pagination/`](./screenshots/pagination/) · [`_metrics.json`](./screenshots/pagination/_metrics.json) · [`compare__booking-vs-storybook-single-page.png`](./screenshots/pagination/compare__booking-vs-storybook-single-page.png)

---

## Method

1. Located every `.foot` / `.pager` in Booking HTML (10 footers).
2. Rendered list + detail tabs; captured footer screenshots and CDP computed styles (`docs/audit/capture-pagination.mjs`).
3. Compared against previous Storybook Pagination (`pageCount={3}` with `"Showing 1–3 of 3"`).
4. Corrected shared component + stories + Vitest interaction tests.
5. Re-captured Storybook `BookingSinglePage` and side-by-side compare shot.

---

## Booking screens with pagination

Every Booking pager markup is identical:

`Prev (disabled) · page "1" (active) · Next (disabled)`  
**No ellipsis. No multi-page number strip in the live module.**

| Booking screen | Total items | Page size | Expected pages | Visible controls | Current Storybook mismatch (before fix) | Required correction |
| --- | ---: | ---: | ---: | --- | --- | --- |
| List — Upcoming (default) | 3 | 3 (all) | **1** | Prev✗ · **1** · Next✗ · range `Showing 1–3 of 3` | Story used `pageCount={3}` → **three** page buttons `1 2 3` with same range text | `pageCount={1}`; only one page button |
| List — narrow 390 | 3 | 3 | **1** | Same controls; foot full-bleed width 390 | Same invalid multi-page story | `NarrowViewport` story with `pageCount={1}` |
| Detail / Overview — itinerary | 5 | 5 | **1** | Prev✗ · **1** · Next✗ · `Showing 1–5 of 5` | N/A (no dedicated story) | Covered by `DisabledBoundaries` / pattern reuse |
| Detail / Overview — vouchers subsheet | 5 | 5 | **1** | Same | — | Same chrome |
| Detail / Tasks — open | 5 | 5 | **1** | Same · `Showing 1–5 of 5` | — | Same |
| Detail / Tasks — completed | 3 | 3 | **1** | Same · `Showing 1–3 of 3` | — | Same |
| Detail / Travellers | 3 | 3 | **1** | Same · `Showing 1–3 of 3` | — | Same |
| Detail / Documents | 6 | 6 | **1** | Same · `Showing 1–6 of 6` | — | Same |
| Detail / Finance — instalments | 3 | 3 | **1** | Same · `Showing 1–3 of 3` | — | Same |
| Detail / Finance — payables | 5 | 5 | **1** | Same · `Showing 1–5 of 5` | — | Same |
| Detail / Vouchers | 5 | 5 | **1** | Same · `Showing 1–5 of 5` | — | Same |
| Detail / Activity | 7 | 7 | **1** | Same · `Showing 1–7 of 7` | — | Same |
| Detail / Vendors (services) | — | — | — | **No `.foot` pager** (card layout) | — | Out of scope |
| Detail / Communication | — | — | — | **No pager** | — | Out of scope |

JS range updates always rewrite as `Showing 1–n of n` (or `Showing 0 of 0`) — never multi-page slicing in this module.

---

## Computed Booking chrome (list footer CDP)

| Token / property | Booking measured |
| --- | --- |
| Foot layout | `flex` · `space-between` · `align center` · `gap 12px` |
| Foot padding | `12px var(--page-pad) 16px` (≈ `12px 25px 16px` at 1440; `12px 16px 16px` at 390) |
| Foot border-top | `1px solid` line `#E4E7EC` |
| Foot background | panel-ground / white |
| Range type | JetBrains Mono **12 / 400** · color ink-2 `#3E4550` |
| Pager gap | **5px** |
| `.pg` size | **min-width 30 · height 30 · padding 0 8px · radius 8px** |
| `.pg` inactive | surface bg · ink-2 · border `--line` |
| `.pg.active` | pink-soft bg `#FBEEF4` · pink-ink `#853F64` · border pink-line `#EFCFDF` |
| `.pg:disabled` | ink-4 `#8A909A` · border line-2 `#EEF0F3` · opacity **1** · `not-allowed` · hover stays surface |
| `.pg:hover` (enabled) | `--surface-3` |
| Active hover | stays pink-soft (no darken) |
| Focus-visible | `outline 2px solid` focus/pink · offset 2px |
| Chevron icons | SVG 13×13 · stroke 2 · paths `m15 18-6-6 6-6` / `m9 18 6-6-6-6` |
| Ellipsis | **Does not exist** |
| Multi-page numbers | **Not rendered in Booking** |

Screenshots: `booking__list__foot.png`, `booking__*__foot*.png`, `booking__list__foot__narrow.png`.

---

## Pre-fix Storybook mismatch (root cause)

```tsx
// INVALID — “Showing 1–3 of 3” implies one page, not three
<Pagination rangeLabel="Showing 1–3 of 3" page={1} pageCount={3} ... />
```

That forced three numbered buttons. Booking never does this.

ListPage recipe repeated the same invalid `pageCount={3}`.

CSS structure was largely already aligned; the behavioural/visual failure was **page-button inventory + example math**.

---

## Corrections shipped

1. **`Pagination`** — still supports `pageCount > 1` for consumers, but renders **exactly** `pageCount` numbered buttons (no ellipsis invention). Safe clamp of `page` into `[1, pageCount]`.
2. **CSS** — matched Booking: radius `8px`, foot `z-index: 1`, active hover keeps pink-soft, disabled hover stays surface.
3. **Stories (valid math only)**  
   - `BookingSinglePage` — `Showing 1–3 of 3`, `pageCount={1}` (**Booking recipe**)  
   - `FirstPage` / `MiddlePage` / `LastPage` / `MultiplePages` — total **25**, page size **10** → 3 pages (`Showing 1–10 / 11–20 / 21–25 of 25`)  
   - `DisabledBoundaries` — `Showing 1–5 of 5`, `pageCount={1}`  
   - `NarrowViewport` — Booking single-page at 390  
4. **ListPage** recipe — `pageCount={1}` with `Showing 1–3 of 3`.  
5. **Tests** — `Pagination.test.tsx` (Vitest) + Storybook `play` functions for page calc, active page, Prev/Next, disabled boundaries.  
6. **Compare shot** — `compare__booking-vs-storybook-single-page.png`.

---

## Post-fix CDP parity (Booking list vs Storybook BookingSinglePage)

| Property | Booking | Storybook | Match |
| --- | --- | --- | --- |
| Range text | Showing 1–3 of 3 | Showing 1–3 of 3 | Yes |
| Page number buttons | `["1"]` | `["1"]` | Yes |
| Button count | 3 (prev+1+next) | 3 | Yes |
| Prev/Next disabled | both true | both true | Yes |
| Active `aria-current` | page | page | Yes |
| Active bg / color / border | `#FBEEF4` / `#853F64` / `#EFCFDF` | same | Yes |
| Disabled color / border | `#8A909A` / `#EEF0F3` | same | Yes |
| Button h×min | 30×30/31 | 30×30/31 | Yes |
| Radius | 8px | 8px | Yes |
| Pager gap | 5px | 5px | Yes |
| Mono 12/400 range + pg | yes | yes | Yes |

---

## Remaining differences (non-blocking)

1. **Foot width / horizontal padding** — Booking foot sits inside AppShell `--page-pad` clamp (~25px at 1440). Storybook padded story uses 16px default. Same component; different parent. ListPage recipe inside AppShell matches Booking padding.
2. **Vendors / Communication** — no Booking pagination to match.
3. **Ellipsis / truncated page lists** — absent in Booking; **not implemented** (would need separate approval).
4. **Pressed (`:active`)** — Booking has no dedicated pressed style; DS likewise has none.
5. **Focus outline colour** — both use design-token focus ring (Booking CDP measured pink focus on `.pg`).

---

## Verify

```bash
npm test
npm run storybook
# Components/Pagination → Booking canonical
node docs/audit/capture-pagination.mjs
node docs/audit/compare-pagination.mjs
```

**Complete when:** Storybook `Booking canonical` shows Prev✗ · **current page** · Next✗ with `Showing 1–3 of 3` — matching Booking list footer. Compact chrome is the default; `MultiplePages` and other **Test states** must not be copied into Booking screens.

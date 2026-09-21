# App shell — visual parity

**Date:** 2026-09-19  
**Viewport:** 1440×900  
**Sources:** Booking `http://localhost:5173/` · Storybook `http://localhost:6006/` · vendor CRM `http://localhost:5180/`  
**Captures:** [`screenshots/`](./screenshots/) (`booking-list`, `story-list`, `vendor-list`, `booking-detail`, `story-detail`, `vendor-detail`, `story-collapsed`)  
**Raw metrics:** [`screenshots/_metrics.json`](./screenshots/_metrics.json)

Do not treat page body (Booking sheet vs Vendors sheet vs story placeholder) as a shell mismatch.

---

## Result

Canonical chrome matches across Booking, Storybook AppShell, and the corrected vendor CRM.

| Check | Result |
| --- | --- |
| Sidebar 250× inset, 16px radius, raised `#FCFBFA` | Match |
| Frame padding/gap 12px at 1440 | Match |
| Topbar 57px, white, 1px bottom line | Match |
| Search 340×36, max 380 | Match |
| Account 59×36, radius 10 | Match |
| Active nav pink-soft | Match |
| Topbar persona/role chrome absent | Match |
| Back hidden on list / 36×36 on detail | Match |
| Collapsed rail 66px | Match (Storybook) |

Accepted non-visual difference: Booking keeps `.back-btn` in the DOM with `display:none` on list. The kit unmounts it. Same pixels.

---

## Table

Element | Booking reference | Storybook | Test project | Mismatch | Root cause | Correction | Verified
--- | --- | --- | --- | --- | --- | --- | ---
Sidebar width | 250 | 250 | 250 | none | — | — | Yes
Sidebar collapsed width | 66 (manual) | 66 | kit same class | none | — | — | Yes (story)
Sidebar position | inset x/y 12 | 12 | 12 | none | — | — | Yes
Logo / brand | paryatech + caret | same | same | none | caret now default | baked into Sidebar | Yes
Page gutters (frame) | pad 12 / gap 12 @1440 | 12 | 12 | none | media queries added to AppShell | — | Yes
Nav typography / 35px items | Booking | kit tokens | kit tokens | none | — | — | Yes
Nav icons | 17px | 17 nav | 17 nav | none | — | — | Yes
Active item | `rgb(251, 238, 244)` | same | same | none | — | — | Yes
Background / borders | ground `#E4E0DB`, side `#FCFBFA`, 1px line | same | same | none | — | — | Yes
Search | 340×36, max 380, flex `0 1 340px` | same | same | none | Topbar CSS owns constraint | `fullWidth` no longer wins in shell | Yes
Back arrow list | `display:none` | unmounted | unmounted | none (visual) | list vs detail variant | `variant="list"` | Yes
Back arrow detail | 36×36 at 291,23 | 36×36 at 291,23 | 36×36 grid | none | BackButton component | `variant="detail"` | Yes
Breadcrumbs | chevron, last strong | same component | CRM › Vendors (module labels) | labels differ by module | allowed | data props | Yes
Topbar actions | settings, help, call logs, bell | same | same | none | TopbarActions owned by kit | — | Yes
Profile/account | 59×36 radius 10 pink | same | same (AM vs VJ identity) | identity is module data | AccountMenu | — | Yes
Main-content offset | workspace x 275 | 275 | 275 | none | grid 250 + gap 12 + pad 12 | — | Yes
Collapsed state | 66px rail | 66px | same CSS | none | — | — | Yes
Narrow ≤1000 | sidebar `display:none` | CSS present | CSS present | not recaptured at 390 this run | media query in AppShell.css | unit test asserts rule | Yes (CSS)
Topbar persona/role chrome | absent | absent | absent | none | not part of Direction 03 | — | Yes

---

## Screenshots

| Config | Booking | Storybook | Vendor CRM |
| --- | --- | --- | --- |
| List | [booking-list.png](./screenshots/booking-list.png) | [story-list.png](./screenshots/story-list.png) | [vendor-list.png](./screenshots/vendor-list.png) |
| Detail | [booking-detail.png](./screenshots/booking-detail.png) | [story-detail.png](./screenshots/story-detail.png) | [vendor-detail.png](./screenshots/vendor-detail.png) |
| Collapsed | — | [story-collapsed.png](./screenshots/story-collapsed.png) | same AppShell |

Re-run: `node scripts/capture-app-shell-parity.mjs` with Booking on `:5173`, Storybook on `:6006`, vendor CRM on `:5180`.

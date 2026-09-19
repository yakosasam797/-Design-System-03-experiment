# Size, radius, spacing — Gate 2 proposal

**Status:** Proposal only  
**SoT:** Gate 1 CDP `2026-09-19T07:00:15Z`  
**Disposition:** I1 keep chip **32/8**; I2 formalise **toolbar 36**; I3 keep notes filter **pill 999 / h=30** as distinct family

---

## 1. Control heights

| Token (proposed) | Value | Booking control | Screens |
| --- | --- | --- | --- |
| `--size-control-xs` | ~28–30 | Notes filter chip h=30; icon denser | Notes browse |
| `--size-control-sm` | **32** | `.btn-sm`, `.st-cap`, `.st-pick` | List CTAs Refresh/Direct booking sm, status chips, Tasks status |
| `--size-control-toolbar` | **36** | Search/filter wrap; inline `height:36` sheet CTAs | List toolbar, Vouchers Upload, Tasks Add task, Travellers/Documents/Finance CTAs |
| `--size-control-md` | **38** | Default `.btn` | Modal primary/cancel, Notes save, default buttons |
| Icon button | 32–38 square | Topbar icons, back, more | Shell topbar, row acts |

**Button size API (proposed):** `xs` | `sm` (32) | `toolbar` (36) | `md` (38). Do not invent a size per label.

---

## 2. Radii

| Token | Value | Use | Screens |
| --- | --- | --- | --- |
| `--radius-sm` / soft-rect CTA | **8px** | `btn-sm`, status chips | List, Tasks |
| `--radius-md` | **10px** | Default btn, search, filter wrap, toolbar 36 CTAs | List toolbar, Voucher upload |
| `--radius-lg` | 12–15px | Menus, notes panel, modals | Notes, Modals, tab-more |
| `--radius-block` | 14–16px | Blocks, sheets chrome, sidebar | Shell, Detail blocks |
| `--radius-pill` | **999px** | Notes `.nd-fil`, some badges only — **not** status chips | Notes browse (**I3**) |
| Tab chip | **6px** | Count badges on tabs | List stages, Detail tabs |

---

## 3. Spacing and gaps

| Token / rule | Value | Screens |
| --- | --- | --- |
| Button icon gap | **7px** | List/Detail CTAs |
| `--page-pad` | `clamp(16px, 2.2cqi, 52px)` | List/Detail content gutters |
| Sheet row / cell padding | per sheet CSS | All DataSheets |
| Nav item pad / gap | ~11px gap, pad 0 11 | Shell sidebar |
| Stack gap in cells | tight 2–4px | List lead stacks |

---

## 4. Icon sizes (cross-ref icons doc)

Dominant widths in Booking SVGs: **15** (most), **14** (CTA leading), **17** (nav), **16**, **13**, **11** (dots), **20** (empty). See `docs/icons/ICON-ARCHITECTURE.md`.

---

## 5. Approval asks

- [ ] Accept height scale sm/toolbar/md
- [ ] Accept soft-rect 8 vs default 10 vs pill 999 split
- [ ] Accept page-pad clamp as layout gutter token

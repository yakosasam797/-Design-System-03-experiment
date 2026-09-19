# Breakpoints and layout — Gate 2 proposal

**Status:** Proposal only  
**SoT:** Booking CSS `@media` + Gate 1 captures at 1440 / 820 / 390  
**I11 disposition:** Document **820px** as a first-class layout breakpoint (communication stack)

---

## 1. Breakpoints

| Name | Value | Behaviour | Booking screens |
| --- | --- | --- | --- |
| Desktop | ≥1001 | Full shell + sidebar | `shell__list__desktop`, detail tabs |
| Shell collapse / hide | **max-width 1000px** | `.side { display: none }`; workspace full-bleed | Narrow shell behaviour; `shell__list__narrow` |
| Communication stack | **max-width 820px** | `.comm` → single column | `detail__communication__820`, `detail__communication__narrow` |
| Compact panels | max-width 900 / 560 | Additional sheet/chrome compression | Detail narrow captures |
| Audit narrow | 390×844 | Phone-ish verification viewport | Gate 1 narrow PNGs |

---

## 2. Layout widths

| Region | Observed | Screens |
| --- | --- | --- |
| Sidebar expanded | ~250px (AppShell SoT) | Shell list/detail |
| Sidebar collapsed | ~66px rail | `shell__collapsed__desktop` |
| Communication list column | 320px | `detail__communication__desktop` |
| Notes drawer | `min(388px, 100vw-24px)` | Notes browse/compose |
| Modal | default + `modal-wide` (catalog) | Modals |

---

## 3. Content gutters

| Token | Value | Screens |
| --- | --- | --- |
| `--page-pad` | clamp 16–52px | List/Detail chrome and sheet bleed |
| Topbar / workspace | full width of main | Shell |

---

## 4. Table density

| Metric | Observed | Screens |
| --- | --- | --- |
| Header row | ~40px (`listSheetHeader` h) | List `sheet-bk` |
| Body row | Booking density (compact) | List, Tasks, Finance sheets |
| Sticky bulk | bottom sticky bar | `list__bulk-selected__desktop` |

---

## 5. Approval asks

- [ ] Promote 1000 (shell) and 820 (communication) as named tokens
- [ ] Keep sidebar 250/66 as AppShell contract
- [ ] Accept page-pad clamp as shared gutter

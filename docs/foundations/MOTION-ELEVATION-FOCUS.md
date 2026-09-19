# Motion, elevation, focus, layering — Gate 2 proposal

**Status:** Proposal only  
**SoT:** Booking CSS + Gate 1 screens

---

## 1. Elevation / shadows

| Token | Value (existing) | Use | Screens |
| --- | --- | --- | --- |
| `--blockShadow` | `0 1px 2px rgba(23,43,77,.045)` | Sheets, blocks, empty cards, communication | List sheet, Detail blocks, Comm |
| `--panelShadow` | light | Sidebar | Shell |
| `--menuShadow` | deeper | Filter/status/tab-more menus | List owner filter, Tasks status menu |
| `--tooltipShadow` | — | `[data-tip]` | Collapsed nav, icon tips |
| `--overlayShadow` | heavy | Notes panel, modal | Notes, Modals |
| `--stickyShadow` | upward | Sticky bulk bar | List bulk |

---

## 2. Focus

| Context | Token | Rule | Screens |
| --- | --- | --- | --- |
| Default / person | `--focus` pink, 2px outline offset 2 | Buttons, tabs, nav, filters, search | Shell, List, Detail |
| Person soft ring | `--focus-person-soft` | Notes textarea, composer | Notes, Communication |
| Work soft | `--focus-work-soft` | Work-primary fields when used | Forms (modals) |

Do not use focus colour as hover fill.

---

## 3. Z-index / layering

| Layer | Approx z | Screens |
| --- | --- | --- |
| Sheet chrome / foot | 1–2 | List/Detail |
| Sticky bulk | 25 | List bulk |
| Page chrome (tabs) | 30 | Detail tabbar |
| Menus | 40 | Tab more, filters |
| Tooltips | 400 | Shell |
| Notes / modal overlays | 500+ | Notes, Modals |

Propose named `--z-dropdown`, `--z-sticky`, `--z-overlay`, `--z-tooltip` in Gate 3.

---

## 4. Disabled and opacity

| Rule | Value | Screens |
| --- | --- | --- |
| Disabled buttons | `opacity: .5` | Modal/list when disabled (pattern) |
| Reveal-on-hover acts | opacity 0 → 1 | Sheet row reveal, notes acts |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` | Global Booking |

---

## 5. Motion

| Token / duration | Use | Screens |
| --- | --- | --- |
| `--duration-fast` | Button colour, tip opacity, checkbox | Shell, List |
| ~0.12–0.18s ease | Notes open scale/opacity, overlays | Notes, Modals |

Prefer opacity/transform; respect reduced motion.

---

## 6. Approval asks

- [ ] Accept shadow token set as elevation system
- [ ] Accept dual focus (person/work)
- [ ] Accept z-index naming for Gate 3
- [ ] Accept disabled opacity 0.5

# Icon architecture

**Status:** Implemented  
**SoT:** Booking `booking-redesign.html` (read-only)  
**Inventory:** [`docs/audit/BOOKING-ICON-INVENTORY.md`](../audit/BOOKING-ICON-INVENTORY.md)  
**Parity:** [`docs/audit/ICON-PARITY-REPORT.md`](../audit/ICON-PARITY-REPORT.md)

## Goals

1. One governed **Icon** + registry (no per-icon wrapper components).
2. Paths copied from Booking HTML — never substitute a “similar” Lucide glyph without an inventory call-out.
3. Flat camelCase canonical names (`bookings`, `openExternal`); semantic aliases in metadata only (`nav.bookings` → `bookings`).
4. Size / stroke tokens wired through `Icon` + `tokens.css`.
5. Colour via `currentColor` only; parent supplies ink / accent / inverse.
6. Decorative default (`aria-hidden`); `title` for meaningful standalone use.
7. Checkbox checkmark and AppShell `brandMark` stay **component-owned** (not general catalogue consumers).

## API

```tsx
import { Icon, ICON_REGISTRY, getIconMeta, resolveIconName } from "@paryatech/design-system";

<Icon name="plus" size="sm" />
<Icon name="nav.bookings" size="nav" />   // alias → bookings
<Icon name="search" size="md" title="Search" />
```

| Export | Role |
| --- | --- |
| `Icon` | Thin SVG renderer |
| `ICON_REGISTRY` / `ICON_NAMES` | Full catalogue metadata + path defs |
| `getIconMeta` / `resolveIconName` | Lookup + alias resolution |
| `IconName` / `IconMeta` / `IconSize` / `IconCategory` | Types |

`src/story-icons.tsx` re-exports thin deprecated wrappers over `Icon` for legacy recipes; prefer `<Icon name="…" />`.

## Size tokens (`--icon-size-*`)

| Token | px | Dominant Booking use |
| --- | --- | --- |
| `2xs` | 11 | Checkbox check (component-owned stroke) |
| `xs` | 13 | Dense list meta |
| `sm` | 14 | CTA leading icons |
| `md` | 15 | Sheet / chrome default |
| `nav` | 17 | Sidebar nav |
| `lg` | 20 | Empty-state illustration |

`Icon` sets width/height from `var(--icon-size-{token})` with px fallback.

## Stroke tokens (`--icon-stroke-*`)

| Token | Value | Use |
| --- | --- | --- |
| `--icon-stroke-default` | 1.7 | Fallback when registry omits stroke |
| `--icon-stroke-emphasis` | 1.9 | CTA / emphasis chrome |
| `--icon-stroke-bold` | 2 | Pager / back chevrons |

Per-glyph `strokeWidth` in the registry wins when Booking differs.

## Colour

| Context | Rule |
| --- | --- |
| Default chrome | `currentColor` → parent `--ink` / `--ink-2` |
| Primary on teal | inverse via button colour |
| Brand outline | `--accent` on control |
| Nav active | pink ink on nav item |
| Notes add | `--pink` on add control |

## Accessibility

| Case | Rule |
| --- | --- |
| Decorative next to text | default `aria-hidden` |
| Icon-only control | name on `IconButton` / button |
| Meaningful standalone | `title` → `role="img"` |

## Catalogue

Canonical names and aliases are generated from the Booking inventory (76 approved glyphs in registry). Storybook **Foundations/Icons → Catalogue** filters by name, category, screen, interactive/decorative, and status.

Categories: Navigation · Actions · Search and filters · Data tables · Dates and locations · Booking and travel · Services · People and ownership · Documents · Finance and payments · Communication · Status and feedback · Directional controls · Misc.

## Known path corrections vs early Gate 2 stubs

| Name | Wrong early DS glyph | Booking / registry |
| --- | --- | --- |
| `home` / `nav.home` | House | **layoutGrid** (2×2 rects) |
| `bookings` / `nav.bookings` | Calendar | Open book paths |

## Deferred

- ActionMenu contents (I10)
- npm publish
- Editing Booking HTML

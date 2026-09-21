# @paryatech/ui

Paryatech UI: Booking-matched design tokens, reusable React components, and AppShell / Sidebar / Topbar patterns.

Visual language matches the Direction 03 Booking module. **This package does not depend on that product repository.** Storybook is documentation and preview only — applications import the same `src/` components via the published package.

## Installation

Peers (React 19):

```bash
pnpm add react@^19 react-dom@^19
```

From GitHub:

```bash
pnpm add github:yakosasam797/-Design-System-03-experiment
```

From a local pack (CI / offline verify):

```bash
pnpm pack
pnpm add /path/to/paryatech-ui-0.2.0.tgz
```

## Required stylesheet

Import once at the app root (Next.js `app/layout.tsx`, Vite `main.tsx`, etc.):

```ts
import "@paryatech/ui/styles.css";
```

That file includes tokens, typography (Google Fonts), reset, focus, and all component CSS.

Tokens only (advanced):

```ts
import "@paryatech/ui/tokens.css";
import "@paryatech/ui/typography.css";
```

## Import the complete library

```tsx
import "@paryatech/ui/styles.css";
import { Sidebar, Topbar, TopBar, Button, AppShell } from "@paryatech/ui";
```

`TopBar` is an alias of `Topbar` (same component).

## Import individual components

```tsx
import { Sidebar } from "@paryatech/ui/sidebar";
import { TopBar, Topbar } from "@paryatech/ui/top-bar";
import { Button } from "@paryatech/ui/button";
```

Other subpaths: `icon-button`, `app-shell`, `data-sheet`, `pagination`, `search-field`, `filter-select`, `text-field`, `checkbox`, `status-chip`, `status-select`, `tab-bar`, `modal`, `tooltip`, `avatar`, `empty-state`, `list-page`, `detail-page`, `icon`.

## Using Sidebar and Top Bar

```tsx
import "@paryatech/ui/styles.css";
import { AppShell, Sidebar, Topbar, Button, Icon } from "@paryatech/ui";

export function Example() {
  return (
    <AppShell
      variant="list"
      navGroups={[
        {
          id: "ops",
          label: "Operations",
          items: [{ id: "bookings", label: "Bookings", href: "/bookings", icon: "bookings" }],
        },
      ]}
      breadcrumbs={[{ label: "Operations" }, { label: "Bookings" }]}
      account={{ name: "Vrushabh Jain", initials: "VJ", tone: "pink" }}
    >
      <Button variant="brand" size="sm" leadingIcon={<Icon name="plus" size="sm" />}>
        New
      </Button>
    </AppShell>
  );
}
```

Standalone pieces (same production components):

```tsx
import { Sidebar, SidebarFooter } from "@paryatech/ui/sidebar";
import { TopBar } from "@paryatech/ui/top-bar";
```

Prefer `AppShell` for full ParyatechOS screens. Do not restyle shell chrome locally.

**Shell SoT:** Booking Direction 03 only — see [`docs/SHELL-SOURCE-OF-TRUTH.md`](docs/SHELL-SOURCE-OF-TRUTH.md) and Storybook **BookingListShell** / **BookingDetailShell**. Topbar is search + kit actions + account; never persona/role switchers.

## shadcn-style registry (copy source)

Registry JSON reuses the same `src/` files (no forks):

```bash
pnpm dlx shadcn@latest add https://raw.githubusercontent.com/yakosasam797/-Design-System-03-experiment/main/registry/r/sidebar.json
```

Local verify:

```bash
pnpm generate:registry
# then: pnpm dlx shadcn@latest add ./registry/r/button.json
```

Package install remains the recommended path for apps. Registry install is for teams that copy source like shadcn.

## Updating package versions

1. Bump `version` in `package.json`.
2. Run `pnpm build` and `pnpm test`.
3. Commit `dist/` (git consumers need built artifacts) or publish a release tag.
4. In apps: `pnpm update @paryatech/ui` (or reinstall the GitHub / tarball reference).

## Foundations

Documented in Storybook **Foundations** and `src/tokens/tokens.css`:

- Colours + semantic roles
- Typography (`typography.css`)
- Spacing, radius, elevation shadows
- Icon sizes, control heights
- Breakpoints (`--bp-shell`, `--bp-communication`)
- Focus styles (`src/styles/focus.css`)

Do not invent new hex values in product apps.

## Scripts

| Script | Purpose |
| --- | --- |
| `pnpm build` | ESM `dist/` + `.d.ts` + `styles.css` |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm lint` | oxlint on `src/` |
| `pnpm test` | Vitest |
| `pnpm storybook` | Component explorer (port 6006) |
| `pnpm build-storybook` | Static Storybook |
| `pnpm generate:registry` | Refresh `registry/r/*.json` |
| `pnpm pack` | Produce installable tarball |

## Agent usage

See [`AGENTS.md`](AGENTS.md).

## Not in this package

- Booking product routes or domain HTML
- Public npm publish (optional; pack + GitHub install are supported)
- Dedicated Loading / Error primitives (compose EmptyState + patterns)

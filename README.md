# @paryatech/design-system

Paryatech design system: colour/typography tokens, reusable UI components, and AppShell / ListPage patterns.

Visual language was validated against a Booking List product surface. **This package does not depend on that product repository.** Clone or install this repo alone.

## Install from GitHub

```bash
npm install github:yakosasam797/-Design-System-03-experiment
```

Equivalent:

```bash
npm install git+https://github.com/yakosasam797/-Design-System-03-experiment.git
```

Peer dependencies (install in the consumer app):

```bash
npm install react@^19 react-dom@^19
```

Local clone (development of the design system itself):

```bash
git clone https://github.com/yakosasam797/-Design-System-03-experiment.git
cd -Design-System-03-experiment
npm install
npm run build
npm run storybook
```

## CSS imports

**Recommended for apps** — tokens + full component CSS (includes font `@import`):

```ts
import "@paryatech/design-system/styles.css";
```

**Tokens only** (HTML inject / custom chrome):

```ts
import "@paryatech/design-system/tokens.css";
import "@paryatech/design-system/typography.css"; // Onest / Public Sans / JetBrains Mono
```

**Components** also import their CSS when you import from the package entry:

```ts
import { Button, AppShell, ListPage } from "@paryatech/design-system";
```

If your bundler does not pull CSS from the JS entry, always add `styles.css` explicitly.

### Fonts

Families load from Google Fonts via `typography.css` / `styles.css`:

- **Onest** — display / button labels  
- **Public Sans** — body / nav  
- **JetBrains Mono** — IDs, money, counts  

No local font files are required. Icons are inline SVG in components (no icon font package).

## Components (v0.1)

| Area | Exports |
| --- | --- |
| Actions | `Button`, `IconButton` |
| Feedback | `StatusChip`, `Tooltip`, `EmptyState` |
| Inputs | `SearchField`, `FilterSelect`, `Checkbox` |
| Data | `DataSheet` (+ header/row/cell helpers), `TabBar`, `Pagination`, `Avatar` |
| A11y | `SkipLink` |
| Shell | `AppShell`, `SidebarNav`, `NavGroup`, `NavItem`, `NotesStrip`, `CreditsMeter` |
| Patterns | `ListPage`, `ListBulkBar` |

## Tokens

Canonical file: `src/tokens/tokens.css` (also export `@paryatech/design-system/tokens.css`).

- Teal = **work** · Pink = **place / person**
- Soft-rect radius (`--radius-md` / 10px) for CTAs; pills for status only
- Typography roles: `--type-*` / `--font-sans` / `--font-display` / `--font-mono`

More detail: [`docs/usage/tokens.md`](docs/usage/tokens.md).

## Storybook

```bash
npm run storybook
```

Opens locally (default port 6006). Foundations → Colorography / Typography; Components; Patterns → AppShell / ListPage.

## Agent usage

See [`AGENTS.md`](AGENTS.md) for rules agents must follow when consuming or extending this package.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run build` | Emit `dist/index.js`, `dist/index.d.ts`, `dist/design-system.css` |
| `npm run storybook` | Component explorer |
| `npm run build-storybook` | Static Storybook |

`prepare` runs `build` after install from git so `dist/` exists for consumers.

## Not in this package

- Booking (or any product) routes, domain IDs, or HTML pages  
- npm registry publish (install from GitHub until further notice)  
- Dedicated Loading / Error components (compose via EmptyState + DataSheet stories)

# Getting started

## Install (any project)

```bash
npm install github:yakosasam797/-Design-System-03-experiment
npm install react@^19 react-dom@^19
```

## Import

```tsx
import "@paryatech/ui/styles.css";
import { AppShell, ListPage } from "@paryatech/ui";

export function Example() {
  return (
    <AppShell
      variant="list"
      navGroups={[
        {
          id: "sales",
          label: "Sales",
          items: [{ id: "bookings", label: "Bookings", active: true, icon: null }],
        },
      ]}
      breadcrumbs={[
        { label: "Operations", href: "#" },
        { label: "Bookings" },
      ]}
      account={{ name: "Ada West", initials: "AW", tone: "pink" }}
    >
      <ListPage title="Bookings">{/* module content */}</ListPage>
    </AppShell>
  );
}
```

Do not recreate Sidebar, Topbar, or AppShell in the product. `variant="detail"` adds the BackButton. There is no role switcher in the shell.

### Tokens-only (e.g. HTML `srcDoc` inject)

```ts
import tokensCss from "@paryatech/ui/tokens.css?raw";
import typographyCss from "@paryatech/ui/typography.css?raw";
// Inject into <style> in the document — no Booking repo required
```

## Develop this package

```bash
git clone https://github.com/yakosasam797/-Design-System-03-experiment.git
cd -Design-System-03-experiment
npm install
npm run build
npm run storybook
```

See root [README.md](../../README.md) and [AGENTS.md](../../AGENTS.md).

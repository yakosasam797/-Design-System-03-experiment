# Getting started

## Install (any project)

```bash
npm install github:yakosasam797/-Design-System-03-experiment
npm install react@^19 react-dom@^19
```

## Import

```tsx
import "@paryatech/design-system/styles.css";
import { Button, AppShell, ListPage, SidebarNav } from "@paryatech/design-system";

export function Example() {
  return (
    <Button variant="primary" size="sm">
      Save
    </Button>
  );
}
```

### Tokens-only (e.g. HTML `srcDoc` inject)

```ts
import tokensCss from "@paryatech/design-system/tokens.css?raw";
import typographyCss from "@paryatech/design-system/typography.css?raw";
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

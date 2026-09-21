import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "./AppShell";
import {
  SHELL_IMPORT_WARNING,
  detailBreadcrumbs,
  exampleAccount,
  exampleCredits,
  exampleNav,
  exampleNotes,
  listBreadcrumbs,
} from "./shellFixture";

const meta: Meta<typeof AppShell> = {
  title: "Patterns/AppShell",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `${SHELL_IMPORT_WARNING}

Canonical ParyatechOS chrome. Modules pass navigation data, breadcrumbs, back handler, search, and account identity. They must not restyle Sidebar width, Topbar height, colours, radii, or the action cluster.

Approved configurations come from Booking Direction 03 only: list (no back, two crumbs, notes hidden) and detail (back + three crumbs, notes visible). Collapse and narrow viewport are the same shell, not extra products. Topbar is search + kit actions + account only — never persona/role switchers.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof AppShell>;

const docs = (when: string, whenNot: string, source: string) => ({
  docs: {
    description: {
      story: `${SHELL_IMPORT_WARNING}

**When to use:** ${when}
**When not to use:** ${whenNot}
**Modules may configure:** navGroups, active item, breadcrumb labels/links, onBack, search handlers, account identity, notification alert, page children.
**Modules must never restyle:** sidebar dimensions, topbar height, type, shell colour, padding, radii, icon sizes, active-item paint, search flex, action cluster.
**Responsive:** ≤1000px sidebar hides; ≤900px topbar wraps and search grows.
**Accessibility:** skip link, collapse aria-expanded, back and icon-button names, breadcrumb nav, account name.
**Booking source:** ${source}`,
    },
  },
});

function Page({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ padding: 8 }}>
      <h1 className="pt-title type-heading-page" style={{ margin: 0 }}>
        {title}
      </h1>
      <p className="pt-muted" style={{ marginTop: 8 }}>
        {body}
      </p>
    </div>
  );
}

export const BookingListShell: Story = {
  name: "BookingListShell",
  parameters: docs(
    "Module list pages (Booking list, Vendors list).",
    "Record pages — use BookingDetailShell.",
    "view-list · shell__list__desktop",
  ),
  render: () => (
    <AppShell
      variant="list"
      navGroups={exampleNav}
      breadcrumbs={listBreadcrumbs}
      credits={exampleCredits}
      account={exampleAccount}
      notificationsAlert
    >
      <Page title="Bookings" body="List configuration: BackButton hidden, two-level crumbs, notes hidden." />
    </AppShell>
  ),
};

export const BookingDetailShell: Story = {
  name: "BookingDetailShell",
  parameters: docs(
    "Record pages. Always includes BackButton and three-level crumbs.",
    "List pages — use BookingListShell.",
    "view-detail · detail__overview__desktop",
  ),
  render: () => (
    <AppShell
      variant="detail"
      navGroups={exampleNav}
      notes={exampleNotes}
      breadcrumbs={detailBreadcrumbs}
      onBack={() => undefined}
      backLabel="Back to bookings"
      credits={exampleCredits}
      account={exampleAccount}
      notificationsAlert
    >
      <Page title="XYZ Family · Dubai" body="Detail configuration: back + crumbs + notes + account." />
    </AppShell>
  ),
};

export const WithBackButton: Story = {
  name: "WithBackButton",
  parameters: docs(
    "Any record that has a parent list. Booking always pairs this with breadcrumbs.",
    "List pages — BackButton is display-none there.",
    "showView('detail') · .back-btn",
  ),
  render: () => (
    <AppShell
      variant="detail"
      navGroups={exampleNav}
      notes={exampleNotes}
      breadcrumbs={detailBreadcrumbs}
      onBack={() => undefined}
      backLabel="Back to bookings"
      credits={exampleCredits}
      account={exampleAccount}
    >
      <Page title="BackButton" body="36×36 soft-rect chevron. Do not substitute a local icon button." />
    </AppShell>
  ),
};

export const WithBreadcrumbs: Story = {
  name: "WithBreadcrumbs",
  parameters: docs(
    "Every Booking view. List = two levels; detail = three.",
    "Do not replace with a page title in the Topbar.",
    ".crumbs · renderCrumbs()",
  ),
  render: () => (
    <AppShell
      variant="list"
      navGroups={exampleNav}
      breadcrumbs={listBreadcrumbs}
      credits={exampleCredits}
      account={exampleAccount}
    >
      <Page title="Breadcrumbs" body="Chevron separators. Last crumb is current (strong). Slots are not a second breadcrumb system." />
    </AppShell>
  ),
};

export const ExpandedSidebar: Story = {
  name: "ExpandedSidebar",
  parameters: docs(
    "Default desktop.",
    "Do not invent a dark full-height sidebar rail.",
    "shell__list__desktop",
  ),
  render: () => (
    <AppShell
      variant="list"
      navGroups={exampleNav}
      breadcrumbs={listBreadcrumbs}
      credits={exampleCredits}
      account={exampleAccount}
    >
      <Page title="Expanded sidebar" body="250px inset rail on --ground. Raised --side, 16px radius." />
    </AppShell>
  ),
};

export const CollapsedSidebar: Story = {
  name: "CollapsedSidebar",
  parameters: docs(
    "User-collapsed icon rail. Same component, collapsed prop.",
    "Not a different product shell.",
    "shell__collapsed__desktop",
  ),
  render: () => (
    <AppShell
      variant="list"
      navGroups={exampleNav}
      breadcrumbs={listBreadcrumbs}
      credits={exampleCredits}
      account={exampleAccount}
      defaultCollapsed
    >
      <Page title="Collapsed sidebar" body="66px icon-rail. Hover/focus tips on the right." />
    </AppShell>
  ),
};

export const ActiveNavigationItem: Story = {
  name: "ActiveNavigationItem",
  parameters: docs(
    "Set active on the current module item via navGroups.",
    "Do not paint a local selected state.",
    ".nav-item.active",
  ),
  render: () => (
    <AppShell
      variant="list"
      navGroups={exampleNav}
      breadcrumbs={listBreadcrumbs}
      credits={exampleCredits}
      account={exampleAccount}
    >
      <Page title="Active item" body="Bookings uses pink-soft selection and aria-current=page." />
    </AppShell>
  ),
};

export const LongNavigationLabels: Story = {
  name: "LongNavigationLabels",
  parameters: docs(
    "Kit-only truncation probe. Labels that exceed the rail truncate with ellipsis; full string in collapsed tip.",
    "Do not copy this label into product nav. Product Operations nav must keep Booking labels (Reports).",
    "Storybook interaction demo — not a product preset",
  ),
  render: () => (
    <AppShell
      variant="list"
      navGroups={exampleNav.map((group) =>
        group.id !== "ops"
          ? group
          : {
              ...group,
              items: group.items.map((item) =>
                item.id === "reports"
                  ? {
                      ...item,
                      label: "Truncation probe label that exceeds the rail width",
                      tip: "Truncation probe label that exceeds the rail width",
                    }
                  : item,
              ),
            },
      )}
      breadcrumbs={listBreadcrumbs}
      credits={exampleCredits}
      account={exampleAccount}
    >
      <Page
        title="Long labels"
        body="Kit truncation demo only. Product nav must use Booking labels (Reports), not this string."
      />
    </AppShell>
  ),
};

export const WithCounts: Story = {
  name: "WithCounts",
  parameters: docs(
    "Notes badge and optional nav item badges.",
    "Do not invent a notification count in the Topbar besides the bell alert dot.",
    "Booking notes badge 2; All tasks has no Booking count — story shows the kit capability.",
  ),
  render: () => (
    <AppShell
      variant="detail"
      navGroups={exampleNav}
      notes={exampleNotes}
      breadcrumbs={detailBreadcrumbs}
      onBack={() => undefined}
      backLabel="Back to bookings"
      credits={exampleCredits}
      account={exampleAccount}
      notificationsAlert
    >
      <Page title="Counts" body="Notes badge + All tasks item badge + notification alert." />
    </AppShell>
  ),
};

export const WithUsagePanel: Story = {
  name: "WithUsagePanel",
  parameters: docs(
    "Credits meter + Upgrade in the sidebar footer. Always present in Booking.",
    "Do not move credits into the Topbar.",
    ".credit in .side-foot",
  ),
  render: () => (
    <AppShell
      variant="list"
      navGroups={exampleNav}
      breadcrumbs={listBreadcrumbs}
      credits={exampleCredits}
      account={exampleAccount}
    >
      <Page title="Usage panel" body="720 / 1,000 credits. Collapsed state keeps the icon." />
    </AppShell>
  ),
};

export const NarrowViewport: Story = {
  name: "NarrowViewport",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    ...docs(
      "Viewports ≤1000px. Sidebar hides until a mobile nav exists.",
      "Do not invent a hamburger in the product.",
      "shell__list__narrow",
    ),
  },
  render: () => (
    <AppShell
      variant="list"
      navGroups={exampleNav}
      breadcrumbs={listBreadcrumbs}
      credits={exampleCredits}
      account={exampleAccount}
    >
      <Page title="Narrow viewport" body="Sidebar display:none. Workspace full-bleed." />
    </AppShell>
  ),
};

export const KeyboardFocus: Story = {
  name: "KeyboardFocus",
  parameters: docs(
    "Tab through skip link, nav items, collapse, back, search, icon buttons, account.",
    "Do not remove focus rings.",
    "button:focus-visible / .nav-item:focus-visible",
  ),
  render: () => (
    <AppShell
      variant="detail"
      navGroups={exampleNav}
      notes={exampleNotes}
      breadcrumbs={detailBreadcrumbs}
      onBack={() => undefined}
      backLabel="Back to bookings"
      credits={exampleCredits}
      account={exampleAccount}
    >
      <Page title="Keyboard focus" body="Tab into nav and topbar. Focus-visible uses --focus." />
    </AppShell>
  ),
};

export const OverflowingNavigation: Story = {
  name: "OverflowingNavigation",
  parameters: docs(
    "More groups than the rail height. Side scroll, not a second inner scrollbar on the page.",
    "Do not shrink item height to fit.",
    ".side-scroll overflow-y auto",
  ),
  render: () => (
    <AppShell
      variant="list"
      navGroups={[
        ...exampleNav,
        {
          id: "more",
          label: "More",
          items: Array.from({ length: 12 }, (_, i) => ({
            id: `extra-${i}`,
            label: `Extra destination ${i + 1}`,
            tip: `Extra destination ${i + 1}`,
            icon: <Icon name="layoutGrid" size="nav" />,
          })),
        },
      ]}
      breadcrumbs={listBreadcrumbs}
      credits={exampleCredits}
      account={exampleAccount}
    >
      <Page title="Overflowing navigation" body="Sidebar body scrolls. Footer and brand stay pinned." />
    </AppShell>
  ),
};

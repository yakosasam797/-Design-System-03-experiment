import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "./AppShell";
import { SearchField } from "../../components/SearchField/SearchField";
import { IconButton } from "../../components/IconButton/IconButton";
import { NotesStrip } from "../../components/NotesStrip/NotesStrip";
import { CreditsMeter } from "../../components/CreditsMeter/CreditsMeter";
import type { NavGroupData } from "../../components/SidebarNav/SidebarNav";
import { Icon } from "../../icons";

const meta: Meta<typeof AppShell> = {
  title: "Patterns/AppShell",
  component: AppShell,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof AppShell>;

/** Example module nav — not a shipped Booking route table */
const exampleNav: NavGroupData[] = [
  {
    id: "workspace",
    label: "Workspace",
    items: [
      { id: "home", label: "Home", tip: "Home", icon: <Icon name="layoutGrid" size="nav" /> },
      { id: "inbox", label: "All inbox", tip: "All inbox", icon: <Icon name="inbox" size="nav" /> },
      { id: "news", label: "News", tip: "News", icon: <Icon name="news" size="nav" /> },
      { id: "tasks", label: "All tasks", tip: "All tasks", badge: 4, icon: <Icon name="tasksNav" size="nav" /> },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    items: [
      { id: "queries", label: "Queries", tip: "Queries", icon: <Icon name="fileText2" size="nav" /> },
      { id: "packages", label: "Packages", tip: "Packages", icon: <Icon name="package" size="nav" /> },
      {
        id: "bookings",
        label: "Bookings",
        tip: "Bookings",
        active: true,
        icon: <Icon name="bookings" size="nav" />,
      },
    ],
  },
  {
    id: "crm",
    label: "CRM",
    items: [
      { id: "customers", label: "Customers", tip: "Customers", icon: <Icon name="customers" size="nav" /> },
      { id: "vendors", label: "Vendors", tip: "Vendors", icon: <Icon name="vendors" size="nav" /> },
    ],
  },
  {
    id: "ops",
    label: "Operations",
    items: [
      { id: "finances", label: "All finances", tip: "All finances", icon: <Icon name="finances" size="nav" /> },
      { id: "team", label: "Team", tip: "Team", icon: <Icon name="team" size="nav" /> },
      { id: "automations", label: "Automations", tip: "Automations", icon: <Icon name="zap" size="nav" /> },
      {
        id: "reports",
        label: "Quarterly performance reports and forecasts",
        tip: "Quarterly performance reports and forecasts",
        icon: <Icon name="chart" size="nav" />,
      },
    ],
  },
];

const brandCaret = <Icon name="chevronDown" size={15} />;

function shellChrome(extra?: { notes?: boolean; listMode?: boolean }) {
  return {
    brandAction: brandCaret,
    listMode: extra?.listMode ?? false,
    notes: extra?.notes === false ? undefined : (
      <NotesStrip label="Module notes" badge={2} onOpen={() => undefined} onAdd={() => undefined} />
    ),
    navGroups: exampleNav,
    sidebarFooter: <CreditsMeter remaining={720} total={1000} />,
    crumbs: (
      <>
        <span>Operations</span>
        <span>/</span>
        <strong>Bookings</strong>
      </>
    ),
    search: <SearchField placeholder="Search anything" style={{ flex: "0 1 280px", maxWidth: 380 }} />,
    actions: (
      <>
        <IconButton label="Settings">
          <Icon name="settings" size="nav" />
        </IconButton>
        <IconButton label="Help">
          <Icon name="help" size="nav" />
        </IconButton>
        <IconButton label="Notifications" alert>
          <Icon name="bell" size="nav" />
        </IconButton>
      </>
    ),
  };
}

export const Expanded: Story = {
  name: "Expanded",
  parameters: {
    docs: {
      description: {
        story:
          "Default desktop sidebar: full labels + groups for wayfinding. Nav data is supplied by the module (`navGroups`) — not hardcoded in the package.",
      },
    },
  },
  render: () => (
    <AppShell {...shellChrome({ listMode: true })} listMode>
      <div style={{ padding: 8 }}>
        <h1 className="pt-title type-heading-page" style={{ margin: 0 }}>
          Expanded sidebar
        </h1>
        <p className="pt-muted" style={{ marginTop: 8 }}>
          listMode hides notes. Pass `navGroups` from the consuming module.
        </p>
      </div>
    </AppShell>
  ),
};

export const Collapsed: Story = {
  name: "Collapsed",
  parameters: {
    docs: {
      description: {
        story: "Icon-rail: hide labels/groups; right-anchored tips on hover/focus replace labels.",
      },
    },
  },
  render: () => (
    <AppShell {...shellChrome({ listMode: true })} listMode defaultCollapsed>
      <p style={{ padding: 16 }}>Collapsed icon-rail — hover nav icons for tips.</p>
    </AppShell>
  ),
};

export const ActiveItem: Story = {
  name: "Active item",
  render: () => (
    <AppShell {...shellChrome({ listMode: true })} listMode>
      <p style={{ padding: 16 }}>Bookings is `active` with pink-soft selection (`aria-current="page"`).</p>
    </AppShell>
  ),
};

export const HoverFocus: Story = {
  name: "Hover / focus",
  render: () => (
    <AppShell {...shellChrome({ listMode: true })} listMode>
      <p style={{ padding: 16 }}>Tab into nav items — focus-visible uses `--focus` ring. Hover uses `--side-hover`.</p>
    </AppShell>
  ),
};

export const LongLabels: Story = {
  name: "Long labels",
  render: () => (
    <AppShell {...shellChrome({ listMode: true })} listMode>
      <p style={{ padding: 16 }}>
        Operations → “Quarterly performance…” truncates with ellipsis; collapsed tip shows the full string.
      </p>
    </AppShell>
  ),
};

export const MultipleGroups: Story = {
  name: "Multiple navigation groups",
  render: () => (
    <AppShell {...shellChrome({ listMode: true })} listMode>
      <p style={{ padding: 16 }}>Four groups (Workspace / Sales / CRM / Operations) via `navGroups` data.</p>
    </AppShell>
  ),
};

export const WithNotificationCount: Story = {
  name: "With notification count",
  render: () => (
    <AppShell
      {...shellChrome()}
      listMode={false}
      notes={<NotesStrip label="Module notes" badge={2} onOpen={() => undefined} onAdd={() => undefined} />}
    >
      <p style={{ padding: 16 }}>Notes badge + All tasks item badge. Notes strip shown (not listMode).</p>
    </AppShell>
  ),
};

export const ApplicationShellExample: Story = {
  name: "Application-shell example",
  render: () => (
    <AppShell {...shellChrome({ listMode: true })} listMode>
      <div style={{ padding: 8 }}>
        <h1 className="pt-title" style={{ fontSize: "var(--type-heading-page-size)", margin: 0 }}>
          Bookings
        </h1>
        <p className="pt-muted" style={{ marginTop: 8 }}>
          Full frame: sidebar + topbar (crumbs / search / actions) + page content.
        </p>
      </div>
    </AppShell>
  ),
};

export const NarrowViewport: Story = {
  name: "Narrow viewport",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story: "≤1000px: sidebar `display:none`; workspace full-bleed (Booking behaviour until a mobile nav exists).",
      },
    },
  },
  render: () => (
    <AppShell {...shellChrome({ listMode: true })} listMode>
      <p style={{ padding: 16 }}>Resize below 1000px — sidebar hides.</p>
    </AppShell>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import { AppShell } from "./AppShell";
import { SearchField } from "../../components/SearchField/SearchField";
import { IconButton } from "../../components/IconButton/IconButton";
import { NotesStrip } from "../../components/NotesStrip/NotesStrip";
import { CreditsMeter } from "../../components/CreditsMeter/CreditsMeter";
import type { NavGroupData } from "../../components/SidebarNav/SidebarNav";
import { IconBell, IconHelp, IconSettings } from "../../story-icons";

const meta: Meta<typeof AppShell> = {
  title: "Patterns/AppShell",
  component: AppShell,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof AppShell>;

/** Example module nav — not a shipped Booking route table */
function icon(path: ReactNode) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {path}
    </svg>
  );
}

const exampleNav: NavGroupData[] = [
  {
    id: "workspace",
    label: "Workspace",
    items: [
      { id: "home", label: "Home", tip: "Home", icon: icon(<><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>) },
      { id: "inbox", label: "All inbox", tip: "All inbox", icon: icon(<><path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.5 6.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-5.5A2 2 0 0 0 16.8 5H7.2a2 2 0 0 0-1.7 1.5z" /></>) },
      { id: "news", label: "News", tip: "News", icon: icon(<><path d="M4 22h16a2 2 0 0 0 2-2V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v16a2 2 0 0 1-2 2 2 2 0 0 1-2-2V9h4" /><path d="M8 7h8M8 11h8M8 15h5" /></>) },
      { id: "tasks", label: "All tasks", tip: "All tasks", badge: 4, icon: icon(<><rect x="3" y="3" width="18" height="18" rx="2" /><path d="m9 12 2 2 4-4" /></>) },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    items: [
      { id: "queries", label: "Queries", tip: "Queries", icon: icon(<><path d="M15 2H8.6A1.6 1.6 0 0 0 7 3.6v16.8A1.6 1.6 0 0 0 8.6 22h10.8a1.6 1.6 0 0 0 1.6-1.6V7.5Z" /><path d="M14 2v6h6" /></>) },
      { id: "packages", label: "Packages", tip: "Packages", icon: icon(<><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></>) },
      {
        id: "bookings",
        label: "Bookings",
        tip: "Bookings",
        active: true,
        icon: icon(<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>),
      },
    ],
  },
  {
    id: "crm",
    label: "CRM",
    items: [
      { id: "customers", label: "Customers", tip: "Customers", icon: icon(<><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M6.2 19a6 6 0 0 1 11.6 0" /></>) },
      { id: "vendors", label: "Vendors", tip: "Vendors", icon: icon(<><path d="M3 9.5 4.5 4h15L21 9.5" /><path d="M4 9.5V20h16V9.5" /><path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /></>) },
    ],
  },
  {
    id: "ops",
    label: "Operations",
    items: [
      { id: "finances", label: "All finances", tip: "All finances", icon: icon(<><path d="M3 21h18" /><path d="M5 21V10l7-5 7 5v11" /><path d="M9 21v-6h6v6" /></>) },
      { id: "team", label: "Team", tip: "Team", icon: icon(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></>) },
      { id: "automations", label: "Automations", tip: "Automations", icon: icon(<path d="M13 2 3 14h9l-1 8 10-12h-9z" />) },
      {
        id: "reports",
        label: "Quarterly performance reports and forecasts",
        tip: "Quarterly performance reports and forecasts",
        icon: icon(<><path d="M3 3v18h18" /><path d="M7 15l3-4 3 3 4-6" /></>),
      },
    ],
  },
];

const brandCaret = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

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
          <IconSettings />
        </IconButton>
        <IconButton label="Help">
          <IconHelp />
        </IconButton>
        <IconButton label="Notifications" alert>
          <IconBell />
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

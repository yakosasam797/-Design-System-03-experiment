import type { NavGroupData } from "../../components/SidebarNav/SidebarNav";
import { Icon } from "../../icons";
import type { AppShellAccount, AppShellBreadcrumb, AppShellCredits, AppShellNotes } from "./types";

/** Do not recreate Sidebar, Topbar or AppShell inside a product module.
 * Import the canonical components from @paryatech/design-system. */
export const SHELL_IMPORT_WARNING =
  "Do not recreate Sidebar, Topbar or AppShell inside a product module. Import the canonical components from @paryatech/design-system.";

export const exampleNav: NavGroupData[] = [
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
      { id: "reports", label: "Reports", tip: "Reports", icon: <Icon name="chart" size="nav" /> },
    ],
  },
];

export const exampleAccount: AppShellAccount = {
  name: "Vrushabh Jain",
  initials: "VJ",
  tone: "pink",
};

export const exampleNotes: AppShellNotes = {
  label: "Booking notes",
  badge: 2,
  onOpen: () => undefined,
  onAdd: () => undefined,
};

export const exampleCredits: AppShellCredits = { remaining: 720, total: 1000 };

export const listBreadcrumbs: AppShellBreadcrumb[] = [
  { label: "Operations", href: "#" },
  { label: "Bookings" },
];

export const detailBreadcrumbs: AppShellBreadcrumb[] = [
  { label: "Operations", href: "#" },
  { label: "Bookings", href: "#" },
  { label: "XYZ Family · Dubai" },
];

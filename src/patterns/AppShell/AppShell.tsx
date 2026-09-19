import { isValidElement, useState, type ReactNode } from "react";
import { SkipLink } from "../../components/SkipLink/SkipLink";
import { SidebarNav, type NavGroupData } from "../../components/SidebarNav/SidebarNav";
import { NotesStrip } from "../../components/NotesStrip/NotesStrip";
import { CreditsMeter } from "../../components/CreditsMeter/CreditsMeter";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import type {
  AppShellAccount,
  AppShellBreadcrumb,
  AppShellCredits,
  AppShellNotes,
  AppShellSearch,
  AppShellVariant,
} from "./types";
import "./AppShell.css";

export type {
  AppShellAccount,
  AppShellBreadcrumb,
  AppShellCredits,
  AppShellNotes,
  AppShellSearch,
  AppShellVariant,
} from "./types";

export interface AppShellProps {
  variant?: AppShellVariant;
  brandName?: string;
  brandMark?: ReactNode;
  /** Decorative caret by default (Booking). Pass `null` to hide. Not an app switcher. */
  brandAction?: ReactNode | null;
  skipHref?: string;
  skipLabel?: string;
  nav?: ReactNode;
  navGroups?: NavGroupData[];
  notes?: ReactNode | AppShellNotes;
  sidebarFooter?: ReactNode;
  credits?: AppShellCredits;
  leading?: ReactNode;
  breadcrumbs?: AppShellBreadcrumb[];
  crumbs?: ReactNode;
  onBack?: () => void;
  backLabel?: string;
  search?: ReactNode | AppShellSearch;
  actions?: ReactNode;
  account?: AppShellAccount;
  onSettings?: () => void;
  onHelp?: () => void;
  onCallLogs?: () => void;
  onNotifications?: () => void;
  notificationsAlert?: boolean;
  children: ReactNode;
  /** @deprecated Use `variant="list"`. Hides notes; hides BackButton. */
  listMode?: boolean;
  defaultCollapsed?: boolean;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

function isElementLike(value: unknown): boolean {
  return isValidElement(value) || Array.isArray(value) || typeof value === "string";
}

function isNotesConfig(value: AppShellProps["notes"]): value is AppShellNotes {
  return !!value && typeof value === "object" && !isElementLike(value) && "label" in value;
}

export function AppShell({
  variant,
  brandName = "paryatech",
  brandMark,
  brandAction,
  skipHref = "#main",
  skipLabel = "Skip to main content",
  nav,
  navGroups,
  notes,
  sidebarFooter,
  credits,
  leading,
  breadcrumbs,
  crumbs,
  onBack,
  backLabel,
  search,
  actions,
  account,
  onSettings,
  onHelp,
  onCallLogs,
  onNotifications,
  notificationsAlert = false,
  children,
  listMode,
  defaultCollapsed = false,
  collapsed: collapsedProp,
  onCollapsedChange,
}: AppShellProps) {
  const resolvedVariant: AppShellVariant = variant ?? (listMode ? "list" : "detail");
  const isList = resolvedVariant === "list";
  const [uncontrolled, setUncontrolled] = useState(defaultCollapsed);
  const collapsed = collapsedProp ?? uncontrolled;
  const setCollapsed = (next: boolean) => {
    onCollapsedChange?.(next);
    if (collapsedProp === undefined) setUncontrolled(next);
  };

  const navContent = navGroups ? <SidebarNav groups={navGroups} /> : nav;

  const notesNode = isNotesConfig(notes) ? (
    <NotesStrip
      label={notes.label}
      badge={notes.badge}
      onOpen={notes.onOpen}
      onAdd={notes.onAdd}
      tip={notes.tip}
      addTip={notes.addTip}
    />
  ) : (
    notes
  );

  const footerNode = sidebarFooter ?? (credits ? <CreditsMeter {...credits} /> : null);

  return (
    <div
      className={`pt-frame ${collapsed ? "pt-frame--collapsed" : ""} ${isList ? "pt-frame--list" : ""}`}
      data-shell-variant={resolvedVariant}
    >
      <SkipLink href={skipHref}>{skipLabel}</SkipLink>

      <Sidebar
        brandName={brandName}
        brandMark={brandMark}
        brandAction={brandAction}
        notes={notesNode}
        listMode={isList}
        footer={footerNode}
        collapsed={collapsed}
        onToggleCollapsed={() => setCollapsed(!collapsed)}
      >
        {navContent}
      </Sidebar>

      <main className="pt-workspace">
        <Topbar
          showBack={!isList}
          onBack={onBack}
          backLabel={backLabel ?? "Back"}
          leading={leading}
          breadcrumbs={breadcrumbs}
          crumbs={crumbs}
          search={search ?? { placeholder: "Search anything" }}
          actions={actions}
          account={account}
          onSettings={onSettings}
          onHelp={onHelp}
          onCallLogs={onCallLogs}
          onNotifications={onNotifications}
          notificationsAlert={notificationsAlert}
        />
        <div className="pt-scroll">
          <div className="pt-content" id="main">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AppShell;

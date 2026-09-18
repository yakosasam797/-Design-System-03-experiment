import { useState, type ReactNode } from "react";
import { SkipLink } from "../../components/SkipLink/SkipLink";
import { SidebarNav, type NavGroupData } from "../../components/SidebarNav/SidebarNav";
import "./AppShell.css";

export interface AppShellProps {
  brandName?: string;
  brandMark?: ReactNode;
  /** Optional caret / app-switcher control next to brand name */
  brandAction?: ReactNode;
  skipHref?: string;
  skipLabel?: string;
  /** Sidebar nav content (slot). Ignored when `navGroups` is provided. */
  nav?: ReactNode;
  /** Structured nav — preferred over hardcoding routes in the package */
  navGroups?: NavGroupData[];
  /** Optional notes strip (hidden when listMode) */
  notes?: ReactNode;
  /** Sidebar footer (e.g. CreditsMeter + Upgrade) */
  sidebarFooter?: ReactNode;
  /** Topbar leading (e.g. back IconButton) */
  leading?: ReactNode;
  /** Breadcrumb slot — consuming module provides content */
  crumbs?: ReactNode;
  /** Search slot */
  search?: ReactNode;
  /** Right actions (icon buttons, account) */
  actions?: ReactNode;
  /** Main workspace content */
  children: ReactNode;
  /** Hides notes strip (Booking list-mode behaviour) */
  listMode?: boolean;
  defaultCollapsed?: boolean;
  /** Controlled collapsed state */
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export function AppShell({
  brandName = "paryatech",
  brandMark,
  brandAction,
  skipHref = "#main",
  skipLabel = "Skip to main content",
  nav,
  navGroups,
  notes,
  sidebarFooter,
  leading,
  crumbs,
  search,
  actions,
  children,
  listMode = false,
  defaultCollapsed = false,
  collapsed: collapsedProp,
  onCollapsedChange,
}: AppShellProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultCollapsed);
  const collapsed = collapsedProp ?? uncontrolled;
  const setCollapsed = (next: boolean) => {
    onCollapsedChange?.(next);
    if (collapsedProp === undefined) setUncontrolled(next);
  };

  const navContent = navGroups ? <SidebarNav groups={navGroups} /> : nav;

  return (
    <div
      className={`pt-frame ${collapsed ? "pt-frame--collapsed" : ""} ${listMode ? "pt-frame--list" : ""}`}
    >
      <SkipLink href={skipHref}>{skipLabel}</SkipLink>

      <aside className="pt-side" aria-label="Sidebar">
        <div className="pt-side__top">
          <span className="pt-brand-mark">
            {brandMark ?? (
              <svg width="17" height="17" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path
                  d="M4 8.5C4 6.6 5.6 5 7.5 5h13.8c4.2 0 7.6 3.4 7.6 7.6 0 4.2-3.4 7.6-7.6 7.6h-6.1l-8 6.4c-1.4 1.1-3.2.1-3.2-1.6V8.5Z"
                  fill="var(--on-brand)"
                />
                <path d="M11 12.4h9.4" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            )}
          </span>
          <span className="pt-brand-name">{brandName}</span>
          {brandAction ? <span className="pt-brand-action">{brandAction}</span> : null}
        </div>

        {!listMode && notes ? <div className="pt-side__notes">{notes}</div> : null}

        <div className="pt-side__scroll">{navContent}</div>

        <div className="pt-side__foot">
          {sidebarFooter}
          <button
            type="button"
            className="pt-side-collapse"
            data-tip={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!collapsed}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={() => setCollapsed(!collapsed)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m11 17-5-5 5-5" />
              <path d="m18 17-5-5 5-5" />
            </svg>
            <span className="pt-side-collapse__txt">Collapse</span>
          </button>
        </div>
      </aside>

      <main className="pt-workspace">
        <div className="pt-topbar">
          {leading}
          {crumbs ? (
            <nav className="pt-crumbs" aria-label="Breadcrumb">
              {crumbs}
            </nav>
          ) : null}
          {search}
          <div className="pt-topbar__actions">{actions}</div>
        </div>
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

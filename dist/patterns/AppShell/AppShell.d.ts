import { type ReactNode } from "react";
import { type NavGroupData } from "../../components/SidebarNav/SidebarNav";
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
export declare function AppShell({ brandName, brandMark, brandAction, skipHref, skipLabel, nav, navGroups, notes, sidebarFooter, leading, crumbs, search, actions, children, listMode, defaultCollapsed, collapsed: collapsedProp, onCollapsedChange, }: AppShellProps): import("react").JSX.Element;
export default AppShell;

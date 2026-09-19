import { type ReactNode } from "react";
import { type NavGroupData } from "../../components/SidebarNav/SidebarNav";
import type { AppShellAccount, AppShellBreadcrumb, AppShellCredits, AppShellNotes, AppShellSearch, AppShellVariant } from "./types";
import "./AppShell.css";
export type { AppShellAccount, AppShellBreadcrumb, AppShellCredits, AppShellNotes, AppShellSearch, AppShellVariant, } from "./types";
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
export declare function AppShell({ variant, brandName, brandMark, brandAction, skipHref, skipLabel, nav, navGroups, notes, sidebarFooter, credits, leading, breadcrumbs, crumbs, onBack, backLabel, search, actions, account, onSettings, onHelp, onCallLogs, onNotifications, notificationsAlert, children, listMode, defaultCollapsed, collapsed: collapsedProp, onCollapsedChange, }: AppShellProps): import("react").JSX.Element;
export default AppShell;

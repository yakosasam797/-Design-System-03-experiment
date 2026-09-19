import type { ReactNode } from "react";
import { type BreadcrumbItem } from "../../components/Breadcrumbs/Breadcrumbs";
import { type AccountMenuProps } from "../../components/AccountMenu/AccountMenu";
import type { AppShellAccount, AppShellSearch } from "./types";
export interface TopbarProps {
    showBack?: boolean;
    onBack?: () => void;
    backLabel?: string;
    leading?: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    crumbs?: ReactNode;
    search?: ReactNode | AppShellSearch;
    actions?: ReactNode;
    account?: AppShellAccount;
    onSettings?: () => void;
    onHelp?: () => void;
    onCallLogs?: () => void;
    onNotifications?: () => void;
    notificationsAlert?: boolean;
}
export declare function Topbar({ showBack, onBack, backLabel, leading, breadcrumbs, crumbs, search, actions, account, onSettings, onHelp, onCallLogs, onNotifications, notificationsAlert, }: TopbarProps): import("react").JSX.Element;
export type { AccountMenuProps };
export default Topbar;

import type { ReactNode } from "react";
import { isValidElement } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { Breadcrumbs, type BreadcrumbItem } from "../../components/Breadcrumbs/Breadcrumbs";
import { AccountMenu, type AccountMenuProps } from "../../components/AccountMenu/AccountMenu";
import { TopbarActions } from "../../components/TopbarActions/TopbarActions";
import { SearchField } from "../../components/SearchField/SearchField";
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

function isSearchConfig(value: TopbarProps["search"]): value is AppShellSearch {
  return !!value && typeof value === "object" && !isValidElement(value) && !Array.isArray(value);
}

export function Topbar({
  showBack = false,
  onBack,
  backLabel = "Back",
  leading,
  breadcrumbs,
  crumbs,
  search,
  actions,
  account,
  onSettings,
  onHelp,
  onCallLogs,
  onNotifications,
  notificationsAlert = false,
}: TopbarProps) {
  const searchNode = isSearchConfig(search) ? (
    <SearchField
      placeholder={search.placeholder ?? "Search anything"}
      aria-label={search["aria-label"] ?? "Search the workspace"}
      value={search.value}
      defaultValue={search.defaultValue}
      onChange={search.onChange}
    />
  ) : (
    search
  );

  const crumbNode = breadcrumbs ? (
    <Breadcrumbs items={breadcrumbs} />
  ) : crumbs ? (
    <nav className="pt-crumbs" aria-label="Breadcrumb">
      {crumbs}
    </nav>
  ) : null;

  const actionCluster = actions ?? (
    <TopbarActions
      onSettings={onSettings}
      onHelp={onHelp}
      onCallLogs={onCallLogs}
      onNotifications={onNotifications}
      notificationsAlert={notificationsAlert}
    />
  );

  const accountNode = account ? (
    <AccountMenu
      name={account.name}
      initials={account.initials}
      tone={account.tone}
      onClick={account.onClick}
    />
  ) : null;

  return (
    <div className="pt-topbar">
      {leading ?? (showBack ? <BackButton label={backLabel} onClick={onBack} /> : null)}
      {crumbNode}
      {searchNode}
      <div className="pt-topbar__actions">
        {actionCluster}
        {accountNode}
      </div>
    </div>
  );
}

export type { AccountMenuProps };

export default Topbar;

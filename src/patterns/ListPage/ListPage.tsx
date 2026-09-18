import type { ReactNode } from "react";
import { TabBar, type TabItem } from "../../components/TabBar/TabBar";
import "./ListPage.css";

export interface ListPageProps {
  title: string;
  actions?: ReactNode;
  tabs?: TabItem[];
  tabValue?: string;
  onTabChange?: (id: string) => void;
  toolbar?: ReactNode;
  /** Sheet / table body */
  children: ReactNode;
  bulk?: ReactNode;
  footer?: ReactNode;
}

export function ListPage({
  title,
  actions,
  tabs,
  tabValue,
  onTabChange,
  toolbar,
  children,
  bulk,
  footer,
}: ListPageProps) {
  return (
    <div className="pt-list">
      <div className="pt-list-head">
        <h1 className="pt-title pt-list-head__title">{title}</h1>
        {actions ? <div className="pt-list-head__acts">{actions}</div> : null}
      </div>

      {tabs && tabValue && onTabChange ? (
        <div className="pt-list-chrome">
          <TabBar items={tabs} value={tabValue} onValueChange={onTabChange} aria-label="List filters" />
        </div>
      ) : null}

      {toolbar ? <div className="pt-list-toolbar">{toolbar}</div> : null}

      <div className="pt-list-sheet">
        {children}
        {bulk}
        {footer}
      </div>
    </div>
  );
}

export function ListBulkBar({
  label,
  children,
}: {
  label: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="pt-bulk">
      <span className="pt-bulk__lbl">{label}</span>
      <div className="pt-bulk__acts">{children}</div>
    </div>
  );
}

export default ListPage;

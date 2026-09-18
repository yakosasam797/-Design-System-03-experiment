import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import "./TabBar.css";

export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

export interface TabBarProps extends HTMLAttributes<HTMLDivElement> {
  items: TabItem[];
  value: string;
  onValueChange: (id: string) => void;
  "aria-label"?: string;
}

export function TabBar({
  items,
  value,
  onValueChange,
  className = "",
  "aria-label": ariaLabel = "Tabs",
  ...rest
}: TabBarProps) {
  return (
    <div className={`pt-tabbar ${className}`.trim()} role="tablist" aria-label={ariaLabel} {...rest}>
      {items.map((item) => (
        <Tab
          key={item.id}
          active={item.id === value}
          count={item.count}
          onClick={() => onValueChange(item.id)}
        >
          {item.label}
        </Tab>
      ))}
    </div>
  );
}

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  count?: number;
  children: ReactNode;
}

export function Tab({ active = false, count, children, className = "", ...rest }: TabProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={`pt-tab ${active ? "pt-tab--active" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
      {typeof count === "number" ? <span className="pt-tab__chip">{count}</span> : null}
    </button>
  );
}

export default TabBar;

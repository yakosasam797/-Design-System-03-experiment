import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import "./SidebarNav.css";

export interface NavItemData {
  id: string;
  label: string;
  icon: ReactNode;
  href?: string;
  active?: boolean;
  tip?: string;
  badge?: ReactNode;
  onSelect?: () => void;
}

export interface NavGroupData {
  id: string;
  label: string;
  items: NavItemData[];
}

export interface NavItemProps {
  id?: string;
  label: string;
  icon: ReactNode;
  href?: string;
  active?: boolean;
  tip?: string;
  badge?: ReactNode;
  onSelect?: () => void;
  className?: string;
}

type ButtonRest = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children" | "className">;
type AnchorRest = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">;

export function NavItem({
  label,
  icon,
  href,
  active = false,
  tip,
  badge,
  onSelect,
  className = "",
  ...rest
}: NavItemProps & ButtonRest & AnchorRest) {
  const cls = `pt-nav-item ${active ? "pt-nav-item--active" : ""} ${className}`.trim();
  const tipAttr = tip ?? label;
  const content = (
    <>
      <span className="pt-nav-item__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="pt-nav-item__label">{label}</span>
      {badge != null && badge !== false ? <span className="pt-nav-item__badge">{badge}</span> : null}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        data-tip={tipAttr}
        aria-current={active ? "page" : undefined}
        onClick={onSelect}
        {...(rest as AnchorRest)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={cls}
      data-tip={tipAttr}
      aria-current={active ? "page" : undefined}
      onClick={onSelect}
      {...(rest as ButtonRest)}
    >
      {content}
    </button>
  );
}

export interface NavGroupProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export function NavGroup({ label, children, className = "" }: NavGroupProps) {
  return (
    <div className={`pt-nav-group ${className}`.trim()}>
      <div className="pt-nav-group__label">{label}</div>
      {children}
    </div>
  );
}

export interface SidebarNavProps {
  groups: NavGroupData[];
  className?: string;
  "aria-label"?: string;
}

export function SidebarNav({
  groups,
  className = "",
  "aria-label": ariaLabel = "Primary",
}: SidebarNavProps) {
  return (
    <nav className={`pt-sidenav ${className}`.trim()} aria-label={ariaLabel}>
      {groups.map((group) => (
        <NavGroup key={group.id} label={group.label}>
          {group.items.map((item) => (
            <NavItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              href={item.href}
              active={item.active}
              tip={item.tip}
              badge={item.badge}
              onSelect={item.onSelect}
            />
          ))}
        </NavGroup>
      ))}
    </nav>
  );
}

export default SidebarNav;

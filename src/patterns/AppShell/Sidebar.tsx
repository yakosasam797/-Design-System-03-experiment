import type { ReactNode } from "react";
import { Icon } from "../../icons";

export interface SidebarProps {
  brandName?: string;
  brandMark?: ReactNode;
  /** Defaults to Booking’s decorative caret. Pass `null` to hide. Not an app switcher. */
  brandAction?: ReactNode | null;
  notes?: ReactNode;
  listMode?: boolean;
  children?: ReactNode;
  footer?: ReactNode;
  collapsed?: boolean;
  onToggleCollapsed?: () => void;
}

const defaultMark = (
  <svg width="17" height="17" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path
      d="M4 8.5C4 6.6 5.6 5 7.5 5h13.8c4.2 0 7.6 3.4 7.6 7.6 0 4.2-3.4 7.6-7.6 7.6h-6.1l-8 6.4c-1.4 1.1-3.2.1-3.2-1.6V8.5Z"
      fill="var(--on-brand)"
    />
    <path d="M11 12.4h9.4" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

const defaultCaret = <Icon name="chevronDown" size={15} />;

export function Sidebar({
  brandName = "paryatech",
  brandMark,
  brandAction,
  notes,
  listMode = false,
  children,
  footer,
  collapsed = false,
  onToggleCollapsed,
}: SidebarProps) {
  const caret = brandAction === undefined ? defaultCaret : brandAction;

  return (
    <aside className="pt-side" aria-label="Sidebar">
      <div className="pt-side__top">
        <span className="pt-brand-mark">{brandMark ?? defaultMark}</span>
        <span className="pt-brand-name">{brandName}</span>
        {caret ? <span className="pt-brand-action">{caret}</span> : null}
      </div>

      {!listMode && notes ? <div className="pt-side__notes">{notes}</div> : null}

      <div className="pt-side__scroll">{children}</div>

      <div className="pt-side__foot">
        {footer}
        <button
          type="button"
          className="pt-side-collapse"
          data-tip={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => onToggleCollapsed?.()}
        >
          <Icon name="collapse" size={16} />
          <span className="pt-side-collapse__txt">Collapse</span>
        </button>
      </div>
    </aside>
  );
}

export function SidebarFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`pt-sidebar-footer ${className}`.trim()}>{children}</div>;
}

export default Sidebar;

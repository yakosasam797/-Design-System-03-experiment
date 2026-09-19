import type { ReactNode } from "react";
import "./SheetToolbar.css";

export interface SheetToolbarProps {
  search?: ReactNode;
  filters?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

/** Search + filters + primary CTA row above a DataSheet. */
export function SheetToolbar({ search, filters, actions, className = "" }: SheetToolbarProps) {
  return (
    <div className={`pt-sheet-toolbar ${className}`.trim()}>
      <div className="pt-sheet-toolbar__leading">
        {search}
        {filters}
      </div>
      {actions ? <div className="pt-sheet-toolbar__actions">{actions}</div> : null}
    </div>
  );
}

export default SheetToolbar;

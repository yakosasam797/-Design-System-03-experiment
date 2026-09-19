import type { ReactNode } from "react";
import "./SheetToolbar.css";
export interface SheetToolbarProps {
    search?: ReactNode;
    filters?: ReactNode;
    actions?: ReactNode;
    className?: string;
}
/** Search + filters + primary CTA row above a DataSheet. */
export declare function SheetToolbar({ search, filters, actions, className }: SheetToolbarProps): import("react").JSX.Element;
export default SheetToolbar;

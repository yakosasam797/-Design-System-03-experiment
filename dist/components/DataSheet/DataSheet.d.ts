import type { HTMLAttributes, ReactNode } from "react";
import "./DataSheet.css";
export interface DataSheetProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    /** When true, show muted loading placeholder rows */
    loading?: boolean;
    loadingRows?: number;
    columns?: number;
    /** Booking List column template (7 + slack) */
    variant?: "default" | "booking";
}
export declare function DataSheet({ children, loading, loadingRows, columns, variant, className, ...rest }: DataSheetProps): import("react").JSX.Element;
export declare function DataSheetHeader({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function DataSheetRow({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>): import("react").JSX.Element;
export declare function DataSheetCell({ children, className, check, ...rest }: HTMLAttributes<HTMLDivElement> & {
    check?: boolean;
}): import("react").JSX.Element;
export declare function LeadCell({ icon, title, subtitle, className, align, }: {
    icon?: ReactNode;
    title: ReactNode;
    subtitle?: ReactNode;
    className?: string;
    align?: "center" | "start";
}): import("react").JSX.Element;
export declare function StackCell({ children, className, }: {
    children: ReactNode;
    className?: string;
}): import("react").JSX.Element;
export declare function StackLine({ icon, children, muted, mono, className, }: {
    icon?: ReactNode;
    children: ReactNode;
    muted?: boolean;
    mono?: boolean;
    className?: string;
}): import("react").JSX.Element;
export declare function MoneyCell({ amount, chip, className, }: {
    amount: ReactNode;
    chip?: ReactNode;
    className?: string;
}): import("react").JSX.Element;
export declare function OwnerCell({ children, className, }: {
    children: ReactNode;
    className?: string;
}): import("react").JSX.Element;
export default DataSheet;

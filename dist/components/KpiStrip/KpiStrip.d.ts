import type { HTMLAttributes, ReactNode } from "react";
import "./KpiStrip.css";
export interface KpiItem {
    id: string;
    label: ReactNode;
    value: ReactNode;
    icon?: ReactNode;
    tone?: "default" | "person" | "work" | "warn" | "danger" | "ok";
    onClick?: () => void;
}
export interface KpiStripProps extends HTMLAttributes<HTMLDivElement> {
    items: KpiItem[];
}
export declare function KpiStrip({ items, className, ...rest }: KpiStripProps): import("react").JSX.Element;
export default KpiStrip;

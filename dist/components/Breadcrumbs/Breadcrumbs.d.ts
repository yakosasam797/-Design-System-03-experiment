import { type MouseEvent, type ReactNode } from "react";
import "./Breadcrumbs.css";
export interface BreadcrumbItem {
    label: ReactNode;
    href?: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}
export interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}
export declare function Breadcrumbs({ items, className }: BreadcrumbsProps): import("react").JSX.Element;
export default Breadcrumbs;

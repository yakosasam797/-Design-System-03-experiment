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
export declare function TabBar({ items, value, onValueChange, className, "aria-label": ariaLabel, ...rest }: TabBarProps): import("react").JSX.Element;
export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    count?: number;
    children: ReactNode;
}
export declare function Tab({ active, count, children, className, ...rest }: TabProps): import("react").JSX.Element;
export default TabBar;

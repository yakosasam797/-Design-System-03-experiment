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
export declare function NavItem({ label, icon, href, active, tip, badge, onSelect, className, ...rest }: NavItemProps & ButtonRest & AnchorRest): import("react").JSX.Element;
export interface NavGroupProps {
    label: string;
    children: ReactNode;
    className?: string;
}
export declare function NavGroup({ label, children, className }: NavGroupProps): import("react").JSX.Element;
export interface SidebarNavProps {
    groups: NavGroupData[];
    className?: string;
    "aria-label"?: string;
}
export declare function SidebarNav({ groups, className, "aria-label": ariaLabel, }: SidebarNavProps): import("react").JSX.Element;
export default SidebarNav;

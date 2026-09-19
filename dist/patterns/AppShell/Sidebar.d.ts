import type { ReactNode } from "react";
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
export declare function Sidebar({ brandName, brandMark, brandAction, notes, listMode, children, footer, collapsed, onToggleCollapsed, }: SidebarProps): import("react").JSX.Element;
export declare function SidebarFooter({ children, className, }: {
    children: ReactNode;
    className?: string;
}): import("react").JSX.Element;
export default Sidebar;

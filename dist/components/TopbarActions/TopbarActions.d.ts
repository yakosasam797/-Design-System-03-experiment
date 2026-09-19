import type { ReactNode } from "react";
import "./TopbarActions.css";
export interface TopbarActionsProps {
    onSettings?: () => void;
    onHelp?: () => void;
    onCallLogs?: () => void;
    onNotifications?: () => void;
    notificationsAlert?: boolean;
    /** Escape hatch for kit stories only — product modules must not inject role switchers here. */
    children?: ReactNode;
}
export declare function TopbarActions({ onSettings, onHelp, onCallLogs, onNotifications, notificationsAlert, children, }: TopbarActionsProps): import("react").JSX.Element;
export default TopbarActions;

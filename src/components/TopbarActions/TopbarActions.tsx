import type { ReactNode } from "react";
import { IconButton } from "../IconButton/IconButton";
import { Icon } from "../../icons";
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

export function TopbarActions({
  onSettings,
  onHelp,
  onCallLogs,
  onNotifications,
  notificationsAlert = false,
  children,
}: TopbarActionsProps) {
  return (
    <div className="pt-topbar-actions">
      <IconButton label="Settings" onClick={onSettings}>
        <Icon name="settings" size="nav" />
      </IconButton>
      <IconButton label="Help and support" onClick={onHelp}>
        <Icon name="help" size="nav" />
      </IconButton>
      <IconButton label="Call logs" onClick={onCallLogs}>
        <Icon name="phone2" size="nav" />
      </IconButton>
      <IconButton
        label={notificationsAlert ? "Notifications, unread" : "Notifications"}
        alert={notificationsAlert}
        onClick={onNotifications}
      >
        <Icon name="bell" size="nav" />
      </IconButton>
      {children}
    </div>
  );
}

export default TopbarActions;

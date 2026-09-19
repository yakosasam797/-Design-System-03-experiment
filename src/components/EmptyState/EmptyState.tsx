import type { HTMLAttributes, ReactNode } from "react";
import { Icon } from "../../icons";
import "./EmptyState.css";

export type EmptyStateVariant = "illustrated" | "compact";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  /** illustrated = list empty card; compact = notes/filter empty */
  variant?: EmptyStateVariant;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  variant = "illustrated",
  className = "",
  ...rest
}: EmptyStateProps) {
  return (
    <div className={`pt-empty pt-empty--${variant} ${className}`.trim()} {...rest}>
      {variant === "illustrated" ? (
        icon ? (
          <div className="pt-empty__ic">{icon}</div>
        ) : (
          <div className="pt-empty__ic" aria-hidden="true">
            <Icon name="pin" size="lg" />
          </div>
        )
      ) : icon ? (
        <div className="pt-empty__ic">{icon}</div>
      ) : null}
      <h4>{title}</h4>
      {description ? <p>{description}</p> : null}
      {action ? <div className="pt-empty__action">{action}</div> : null}
    </div>
  );
}

export default EmptyState;

import type { HTMLAttributes, ReactNode } from "react";
import "./EmptyState.css";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className = "",
  ...rest
}: EmptyStateProps) {
  return (
    <div className={`pt-empty ${className}`.trim()} {...rest}>
      {icon ? <div className="pt-empty__ic">{icon}</div> : (
        <div className="pt-empty__ic" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
      )}
      <h4>{title}</h4>
      {description ? <p>{description}</p> : null}
      {action ? <div className="pt-empty__action">{action}</div> : null}
    </div>
  );
}

export default EmptyState;

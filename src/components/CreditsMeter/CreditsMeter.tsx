import type { ReactNode } from "react";
import { Button } from "../Button/Button";
import "./CreditsMeter.css";

export interface CreditsMeterProps {
  /** Credits still available */
  remaining: number;
  total: number;
  tip?: string;
  upgradeLabel?: string;
  onUpgrade?: () => void;
  upgrade?: ReactNode;
  className?: string;
}

const defaultIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="9" r="6" />
    <path d="M15.5 3.3a6 6 0 0 1 0 11.4" />
  </svg>
);

export function CreditsMeter({
  remaining,
  total,
  tip,
  upgradeLabel = "Upgrade",
  onUpgrade,
  upgrade,
  className = "",
}: CreditsMeterProps) {
  const pct = total > 0 ? Math.min(100, Math.round((remaining / total) * 100)) : 0;
  const tipText = tip ?? `${remaining.toLocaleString()} of ${total.toLocaleString()} credits remaining this cycle`;

  return (
    <div className={`pt-credits ${className}`.trim()} data-tip={tipText}>
      <div className="pt-credits__ic" aria-hidden="true">
        {defaultIcon}
      </div>
      <div className="pt-credits__info">
        <span className="pt-credits__num">
          {remaining.toLocaleString()} / {total.toLocaleString()}
        </span>
        <div className="pt-credits__bar" aria-hidden="true">
          <i style={{ width: `${pct}%` }} />
        </div>
      </div>
      {upgrade ?? (
        <Button variant="primary" size="sm" className="pt-credits__up" onClick={onUpgrade}>
          {upgradeLabel}
        </Button>
      )}
    </div>
  );
}

export default CreditsMeter;

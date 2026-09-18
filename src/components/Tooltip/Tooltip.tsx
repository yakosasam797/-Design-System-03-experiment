import type { ReactNode } from "react";
import "./Tooltip.css";

export interface TooltipProps {
  tip: string;
  children: ReactNode;
  className?: string;
}

export function Tooltip({ tip, children, className = "" }: TooltipProps) {
  return (
    <span className={`pt-tip ${className}`.trim()} data-tip={tip}>
      {children}
    </span>
  );
}

export default Tooltip;

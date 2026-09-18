import type { HTMLAttributes, ReactNode } from "react";
import "./StatusChip.css";

export type StatusTone = "open" | "progress" | "blocked" | "done";

export interface StatusChipProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: StatusTone;
  children: ReactNode;
}

export function StatusChip({
  tone = "open",
  children,
  className = "",
  ...rest
}: StatusChipProps) {
  return (
    <span className={`pt-st pt-st--${tone} ${className}`.trim()} {...rest}>
      {children}
    </span>
  );
}

export default StatusChip;

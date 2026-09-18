import type { HTMLAttributes, ReactNode } from "react";
import "./StatusChip.css";
export type StatusTone = "open" | "progress" | "blocked" | "done";
export interface StatusChipProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: StatusTone;
    children: ReactNode;
}
export declare function StatusChip({ tone, children, className, ...rest }: StatusChipProps): import("react").JSX.Element;
export default StatusChip;

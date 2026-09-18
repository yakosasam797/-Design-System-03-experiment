import type { ReactNode } from "react";
import "./Tooltip.css";
export interface TooltipProps {
    tip: string;
    children: ReactNode;
    className?: string;
}
export declare function Tooltip({ tip, children, className }: TooltipProps): import("react").JSX.Element;
export default Tooltip;

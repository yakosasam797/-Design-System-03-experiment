import type { ReactNode } from "react";
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
export declare function CreditsMeter({ remaining, total, tip, upgradeLabel, onUpgrade, upgrade, className, }: CreditsMeterProps): import("react").JSX.Element;
export default CreditsMeter;

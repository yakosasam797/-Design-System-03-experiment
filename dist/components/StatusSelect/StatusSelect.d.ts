import { type ButtonHTMLAttributes } from "react";
import type { StatusTone } from "../StatusChip/StatusChip";
import "./StatusSelect.css";
export interface StatusSelectOption {
    value: string;
    label: string;
    tone: StatusTone;
}
export interface StatusSelectProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> {
    value: string;
    options: StatusSelectOption[];
    onChange?: (value: string) => void;
    label?: string;
}
export declare function StatusSelect({ value, options, onChange, label, className, ...rest }: StatusSelectProps): import("react").JSX.Element;
export default StatusSelect;

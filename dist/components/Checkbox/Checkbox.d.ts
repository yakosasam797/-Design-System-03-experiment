import type { ButtonHTMLAttributes } from "react";
import "./Checkbox.css";
export type CheckboxState = "off" | "on" | "indeterminate";
export interface CheckboxProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
    state?: CheckboxState;
    onCheckedChange?: (state: CheckboxState) => void;
    label?: string;
}
export declare function Checkbox({ state, onCheckedChange, label, className, ...rest }: CheckboxProps): import("react").JSX.Element;
export default Checkbox;

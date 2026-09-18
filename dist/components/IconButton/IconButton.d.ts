import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./IconButton.css";
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    alert?: boolean;
    label: string;
}
export declare function IconButton({ children, alert, label, className, type, ...rest }: IconButtonProps): import("react").JSX.Element;
export default IconButton;

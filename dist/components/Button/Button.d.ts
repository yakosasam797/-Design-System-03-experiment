import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";
export type ButtonVariant = "primary" | "brand" | "ghost";
export type ButtonSize = "sm" | "md";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: ReactNode;
}
export declare function Button({ variant, size, className, type, children, ...rest }: ButtonProps): import("react").JSX.Element;
export default Button;

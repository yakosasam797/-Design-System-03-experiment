import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";
export type ButtonVariant = "primary" | "brand" | "ghost";
export type ButtonSize = "sm" | "toolbar" | "md" | "xs";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    children?: ReactNode;
}
export declare function Button({ variant, size, leadingIcon, trailingIcon, className, type, children, ...rest }: ButtonProps): import("react").JSX.Element;
export default Button;

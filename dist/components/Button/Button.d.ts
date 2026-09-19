import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";
export type ButtonVariant = "primary" | "brand" | "ghost";
export type ButtonSize = "sm" | "toolbar" | "md" | "xs";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    /** Booking `.btn-icon` — square control, no label text. Pair with `aria-label`. */
    iconOnly?: boolean;
    children?: ReactNode;
}
export declare function Button({ variant, size, leadingIcon, trailingIcon, iconOnly, className, type, children, ...rest }: ButtonProps): import("react").JSX.Element;
export declare function RowActions({ children, className, }: {
    children: ReactNode;
    className?: string;
}): import("react").JSX.Element;
export default Button;

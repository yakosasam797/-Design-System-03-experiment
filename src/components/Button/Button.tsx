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

export function Button({
  variant = "primary",
  size = "md",
  leadingIcon,
  trailingIcon,
  className = "",
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`pt-btn pt-btn--${variant} pt-btn--${size} ${className}`.trim()}
      {...rest}
    >
      {leadingIcon ? <span className="pt-btn__icon">{leadingIcon}</span> : null}
      {children}
      {trailingIcon ? <span className="pt-btn__icon">{trailingIcon}</span> : null}
    </button>
  );
}

export default Button;

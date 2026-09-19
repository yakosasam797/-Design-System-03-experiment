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

export function Button({
  variant = "primary",
  size = "md",
  leadingIcon,
  trailingIcon,
  iconOnly = false,
  className = "",
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  const iconClass = iconOnly ? "pt-btn--icon" : "";
  const { "aria-label": ariaLabelProp, ...restBtn } = rest;
  const label =
    ariaLabelProp ?? (iconOnly && typeof children === "string" ? children : undefined);

  return (
    <button
      type={type}
      className={`pt-btn pt-btn--${variant} pt-btn--${size} ${iconClass} ${className}`.trim()}
      aria-label={label}
      {...restBtn}
    >
      {leadingIcon ? <span className="pt-btn__icon">{leadingIcon}</span> : null}
      {iconOnly ? null : children}
      {trailingIcon ? <span className="pt-btn__icon">{trailingIcon}</span> : null}
    </button>
  );
}

export function RowActions({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`pt-row-acts ${className}`.trim()}>{children}</div>;
}

export default Button;

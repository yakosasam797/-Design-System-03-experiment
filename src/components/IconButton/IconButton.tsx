import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./IconButton.css";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  alert?: boolean;
  label: string;
}

export function IconButton({
  children,
  alert = false,
  label,
  className = "",
  type = "button",
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={`pt-icon-btn ${className}`.trim()}
      aria-label={label}
      {...rest}
    >
      {children}
      {alert ? <span className="pt-icon-btn__alert" aria-hidden="true" /> : null}
    </button>
  );
}

export default IconButton;

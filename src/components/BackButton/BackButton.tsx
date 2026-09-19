import type { ButtonHTMLAttributes } from "react";
import { Icon } from "../../icons";
import "./BackButton.css";

export interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name. Booking list→detail uses “Back to bookings”. */
  label?: string;
}

export function BackButton({
  label = "Back",
  className = "",
  type = "button",
  ...rest
}: BackButtonProps) {
  return (
    <button
      type={type}
      className={`pt-back-btn ${className}`.trim()}
      aria-label={label}
      data-tip={label}
      {...rest}
    >
      <Icon name="chevronLeft" size={16} />
    </button>
  );
}

export default BackButton;

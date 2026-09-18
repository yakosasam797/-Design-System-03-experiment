import type { ButtonHTMLAttributes } from "react";
import "./Checkbox.css";

export type CheckboxState = "off" | "on" | "indeterminate";

export interface CheckboxProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  state?: CheckboxState;
  onCheckedChange?: (state: CheckboxState) => void;
  label?: string;
}

export function Checkbox({
  state = "off",
  onCheckedChange,
  label,
  className = "",
  ...rest
}: CheckboxProps) {
  const next = () => {
    if (!onCheckedChange) return;
    if (state === "off") onCheckedChange("on");
    else if (state === "on") onCheckedChange("off");
    else onCheckedChange("on");
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={state === "indeterminate" ? "mixed" : state === "on"}
      aria-label={label}
      className={`pt-cbx ${state !== "off" ? "pt-cbx--on" : ""} ${state === "indeterminate" ? "pt-cbx--some" : ""} ${className}`.trim()}
      onClick={next}
      {...rest}
    >
      {state === "indeterminate" ? (
        <span className="pt-cbx__dash" />
      ) : (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m5 12 5 5L20 7" />
        </svg>
      )}
    </button>
  );
}

export default Checkbox;

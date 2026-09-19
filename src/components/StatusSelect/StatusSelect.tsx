import { useEffect, useId, useRef, useState, type ButtonHTMLAttributes } from "react";
import type { StatusTone } from "../StatusChip/StatusChip";
import { Icon } from "../../icons/Icon";
import "./StatusSelect.css";

export interface StatusSelectOption {
  value: string;
  label: string;
  tone: StatusTone;
}

export interface StatusSelectProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> {
  value: string;
  options: StatusSelectOption[];
  onChange?: (value: string) => void;
  label?: string;
}

export function StatusSelect({
  value,
  options,
  onChange,
  label = "Status",
  className = "",
  ...rest
}: StatusSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = options.find((o) => o.value === value) ?? options[0];
  const tone = current?.tone ?? "open";

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`pt-st-dd ${open ? "is-open" : ""} ${className}`.trim()}>
      <button
        type="button"
        className={`pt-st-pick pt-st-pick--${tone}`}
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        {...rest}
      >
        <span className="pt-st-pick__label">{current?.label ?? value}</span>
        <Icon name="chevronDown" size={12} className="pt-st-pick__caret" />
      </button>
      {open ? (
        <div className="pt-st-menu" role="listbox" id={listId} aria-label={label}>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              className={`pt-st-opt pt-st-opt--${opt.tone}`}
              aria-selected={opt.value === value}
              onClick={() => {
                onChange?.(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default StatusSelect;

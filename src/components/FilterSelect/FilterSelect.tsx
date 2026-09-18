import { useEffect, useId, useRef, useState } from "react";
import type { HTMLAttributes } from "react";
import "./FilterSelect.css";

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterSelectProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  label?: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  tip?: string;
}

export function FilterSelect({
  label = "Filter",
  options,
  value,
  onChange,
  tip,
  className = "",
  ...rest
}: FilterSelectProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = options.find((o) => o.value === value)?.label ?? label;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className={`pt-filter ${open ? "pt-filter--open" : ""} ${className}`.trim()}
      data-tip={open ? undefined : tip}
      {...rest}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 5h18" />
        <path d="M7 12h10" />
        <path d="M10 19h4" />
      </svg>
      <button
        type="button"
        className="pt-filter-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="pt-filter-btn__label">{current}</span>
        <svg className="pt-filter-caret" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open ? (
        <div className="pt-choice-menu" role="listbox" id={listId}>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={opt.value === value}
              className={`pt-choice-opt ${opt.value === value ? "pt-choice-opt--on" : ""}`}
              onClick={() => {
                onChange(opt.value);
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

export default FilterSelect;

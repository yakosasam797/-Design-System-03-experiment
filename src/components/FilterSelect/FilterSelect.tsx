import { useEffect, useId, useRef, useState } from "react";
import type { HTMLAttributes } from "react";
import { Icon } from "../../icons";
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
      <Icon name="filter" size={15} />
      <button
        type="button"
        className="pt-filter-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="pt-filter-btn__label">{current}</span>
        <Icon name="chevronDown" size={13} className="pt-filter-caret" />
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

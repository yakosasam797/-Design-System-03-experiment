import type { InputHTMLAttributes } from "react";
import "./SearchField.css";

export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  fullWidth?: boolean;
}

export function SearchField({
  className = "",
  fullWidth = false,
  placeholder = "Search",
  "aria-label": ariaLabel = "Search",
  ...rest
}: SearchFieldProps) {
  return (
    <div className={`pt-search ${fullWidth ? "pt-search--full" : ""} ${className}`.trim()}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7.5" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input type="search" placeholder={placeholder} aria-label={ariaLabel} {...rest} />
    </div>
  );
}

export default SearchField;

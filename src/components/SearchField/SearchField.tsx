import type { InputHTMLAttributes } from "react";
import { Icon } from "../../icons";
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
      <Icon name="search" size={16} />
      <input type="search" placeholder={placeholder} aria-label={ariaLabel} {...rest} />
    </div>
  );
}

export default SearchField;

import type { InputHTMLAttributes } from "react";
import "./SearchField.css";
export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    fullWidth?: boolean;
}
export declare function SearchField({ className, fullWidth, placeholder, "aria-label": ariaLabel, ...rest }: SearchFieldProps): import("react").JSX.Element;
export default SearchField;

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
export declare function FilterSelect({ label, options, value, onChange, tip, className, ...rest }: FilterSelectProps): import("react").JSX.Element;
export default FilterSelect;

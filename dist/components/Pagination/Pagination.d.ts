import type { HTMLAttributes } from "react";
import "./Pagination.css";
export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
    /** Range text, e.g. "Showing 1–3 of 3" — must match page math */
    rangeLabel: string;
    page: number;
    pageCount: number;
    onPageChange: (page: number) => void;
}
/**
 * Booking sheet footer: range on the left, compact pager on the right.
 * Compact chrome is Prev · **current page** · Next. Booking never paints
 * a 1–N page-number strip. The numbered control is the current page, not a
 * hardcoded "1".
 */
export declare function Pagination({ rangeLabel, page, pageCount, onPageChange, className, ...rest }: PaginationProps): import("react").JSX.Element;
export default Pagination;

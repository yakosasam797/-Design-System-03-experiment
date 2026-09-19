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
 * Sheet footer pager matching Booking `.foot` / `.pager` / `.pg`.
 * Booking screens always render Prev + current page numbers + Next.
 * No ellipsis — Booking does not implement truncated page lists.
 */
export declare function Pagination({ rangeLabel, page, pageCount, onPageChange, className, ...rest }: PaginationProps): import("react").JSX.Element;
export default Pagination;

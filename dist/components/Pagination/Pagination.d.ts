import type { HTMLAttributes } from "react";
import "./Pagination.css";
export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
    rangeLabel: string;
    page: number;
    pageCount: number;
    onPageChange: (page: number) => void;
}
export declare function Pagination({ rangeLabel, page, pageCount, onPageChange, className, ...rest }: PaginationProps): import("react").JSX.Element;
export default Pagination;

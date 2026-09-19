import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { Icon } from "../../icons";
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
export function Pagination({
  rangeLabel,
  page,
  pageCount,
  onPageChange,
  className = "",
  ...rest
}: PaginationProps) {
  const safeCount = Math.max(1, pageCount);
  const safePage = Math.min(Math.max(1, page), safeCount);

  return (
    <div className={`pt-foot ${className}`.trim()} {...rest}>
      <span className="pt-foot__range">{rangeLabel}</span>
      <div className="pt-pager">
        <PageButton
          disabled={safePage <= 1}
          aria-label="Previous page"
          onClick={() => onPageChange(safePage - 1)}
        >
          <Chevron direction="prev" />
        </PageButton>
        <PageButton active aria-current="page">
          {safePage}
        </PageButton>
        <PageButton
          disabled={safePage >= safeCount}
          aria-label="Next page"
          onClick={() => onPageChange(safePage + 1)}
        >
          <Chevron direction="next" />
        </PageButton>
      </div>
    </div>
  );
}

function Chevron({ direction }: { direction: "prev" | "next" }) {
  return <Icon name={direction === "prev" ? "chevronLeft" : "chevronRight"} size={13} />;
}

interface PageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: ReactNode;
}

function PageButton({ active = false, className = "", children, ...rest }: PageButtonProps) {
  return (
    <button
      type="button"
      className={`pt-pg ${active ? "pt-pg--active" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Pagination;

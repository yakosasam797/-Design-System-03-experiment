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
 * Sheet footer pager matching Booking `.foot` / `.pager` / `.pg`.
 * Booking screens always render Prev + current page numbers + Next.
 * No ellipsis — Booking does not implement truncated page lists.
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
  const pages = Array.from({ length: safeCount }, (_, i) => i + 1);

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
        {pages.map((p) => (
          <PageButton
            key={p}
            active={p === safePage}
            aria-current={p === safePage ? "page" : undefined}
            onClick={() => onPageChange(p)}
          >
            {p}
          </PageButton>
        ))}
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

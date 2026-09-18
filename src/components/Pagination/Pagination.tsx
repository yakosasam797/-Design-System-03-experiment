import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import "./Pagination.css";

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  rangeLabel: string;
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  rangeLabel,
  page,
  pageCount,
  onPageChange,
  className = "",
  ...rest
}: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return (
    <div className={`pt-foot ${className}`.trim()} {...rest}>
      <span className="pt-foot__range">{rangeLabel}</span>
      <div className="pt-pager">
        <PageButton
          disabled={page <= 1}
          aria-label="Previous page"
          onClick={() => onPageChange(page - 1)}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </PageButton>
        {pages.map((p) => (
          <PageButton
            key={p}
            active={p === page}
            aria-current={p === page ? "page" : undefined}
            onClick={() => onPageChange(p)}
          >
            {p}
          </PageButton>
        ))}
        <PageButton
          disabled={page >= pageCount}
          aria-label="Next page"
          onClick={() => onPageChange(page + 1)}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </PageButton>
      </div>
    </div>
  );
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

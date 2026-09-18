import type { HTMLAttributes, ReactNode } from "react";
import "./DataSheet.css";

export interface DataSheetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** When true, show muted loading placeholder rows */
  loading?: boolean;
  loadingRows?: number;
  columns?: number;
  /** Booking List column template (7 + slack) */
  variant?: "default" | "booking";
}

export function DataSheet({
  children,
  loading = false,
  loadingRows = 4,
  columns = 5,
  variant = "default",
  className = "",
  ...rest
}: DataSheetProps) {
  const variantClass = variant === "booking" ? "pt-sheet--booking" : "";
  return (
    <div className={`pt-sheet ${variantClass} ${className}`.trim()} {...rest}>
      <div className="pt-sheet__scroll">
        {loading
          ? Array.from({ length: loadingRows }, (_, i) => (
              <div key={i} className="pt-sheet__row pt-sheet__row--loading" aria-busy="true">
                {Array.from({ length: variant === "booking" ? 7 : columns }, (_, j) => (
                  <div key={j} className="pt-sheet__cell">
                    <span className="pt-sheet__skeleton" />
                  </div>
                ))}
              </div>
            ))
          : children}
      </div>
    </div>
  );
}

export function DataSheetHeader({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`pt-sheet__row pt-sheet__head ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}

export function DataSheetRow({
  children,
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`pt-sheet__row ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}

export function DataSheetCell({
  children,
  className = "",
  check,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { check?: boolean }) {
  return (
    <div className={`pt-sheet__cell ${check ? "pt-sheet__cell--check" : ""} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}

export function LeadCell({
  icon,
  title,
  subtitle,
  className = "",
  align = "center",
}: {
  icon?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  align?: "center" | "start";
}) {
  return (
    <div className={`pt-sheet__lead ${align === "start" ? "pt-sheet__lead--start" : ""} ${className}`.trim()}>
      {icon}
      <div style={{ minWidth: 0 }}>
        <div className="pt-sheet__title">{title}</div>
        {subtitle == null ? null : typeof subtitle === "string" || typeof subtitle === "number" ? (
          <div className="pt-sheet__sub">{subtitle}</div>
        ) : (
          subtitle
        )}
      </div>
    </div>
  );
}

export function StackCell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`pt-sheet__stack ${className}`.trim()}>{children}</div>;
}

export function StackLine({
  icon,
  children,
  muted,
  mono,
  className = "",
}: {
  icon?: ReactNode;
  children: ReactNode;
  muted?: boolean;
  mono?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`pt-sheet__line ${muted ? "pt-sheet__line--muted" : ""} ${mono ? "pt-mono" : ""} ${className}`.trim()}
    >
      {icon}
      {children}
    </div>
  );
}

export function MoneyCell({
  amount,
  chip,
  className = "",
}: {
  amount: ReactNode;
  chip?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`pt-sheet__money ${className}`.trim()}>
      <span className="pt-mono pt-sheet__amount">{amount}</span>
      {chip}
    </div>
  );
}

export function OwnerCell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`pt-sheet__owner ${className}`.trim()}>{children}</div>;
}

export default DataSheet;

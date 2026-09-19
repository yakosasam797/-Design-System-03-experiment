import type { ReactNode } from "react";
import "./DetailPage.css";

export interface DetailPageProps {
  title: ReactNode;
  status?: ReactNode;
  meta?: ReactNode;
  owners?: ReactNode;
  actions?: ReactNode;
  tabs?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function DetailPage({
  title,
  status,
  meta,
  owners,
  actions,
  tabs,
  children,
  className = "",
}: DetailPageProps) {
  return (
    <div className={`pt-detail ${className}`.trim()}>
      <header className="pt-detail__header">
        <div className="pt-detail__title-row">
          <div className="pt-detail__title-block">
            <h1 className="pt-detail__title">{title}</h1>
            {status ? <div className="pt-detail__status">{status}</div> : null}
          </div>
          <div className="pt-detail__aside">
            {owners ? <div className="pt-detail__owners">{owners}</div> : null}
            {actions ? <div className="pt-detail__actions">{actions}</div> : null}
          </div>
        </div>
        {meta ? <div className="pt-detail__meta">{meta}</div> : null}
      </header>
      {tabs ? <div className="pt-detail__tabs">{tabs}</div> : null}
      <div className="pt-detail__body">{children}</div>
    </div>
  );
}

export default DetailPage;

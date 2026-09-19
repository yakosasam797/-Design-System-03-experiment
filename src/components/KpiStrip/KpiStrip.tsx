import type { HTMLAttributes, ReactNode } from "react";
import "./KpiStrip.css";

export interface KpiItem {
  id: string;
  label: ReactNode;
  value: ReactNode;
  icon?: ReactNode;
  tone?: "default" | "person" | "work" | "warn" | "danger" | "ok";
  onClick?: () => void;
}

export interface KpiStripProps extends HTMLAttributes<HTMLDivElement> {
  items: KpiItem[];
}

export function KpiStrip({ items, className = "", ...rest }: KpiStripProps) {
  return (
    <div className={`pt-kpi-strip ${className}`.trim()} {...rest}>
      {items.map((item) => {
        const tone = item.tone ?? "default";
        const classNames = `pt-kpi pt-kpi--${tone}`;
        if (item.onClick) {
          return (
            <button key={item.id} type="button" className={classNames} onClick={item.onClick}>
              {item.icon ? <span className="pt-kpi__ic">{item.icon}</span> : null}
              <span className="pt-kpi__text">
                <span className="pt-kpi__label">{item.label}</span>
                <span className="pt-kpi__value">{item.value}</span>
              </span>
            </button>
          );
        }
        return (
          <div key={item.id} className={classNames}>
            {item.icon ? <span className="pt-kpi__ic">{item.icon}</span> : null}
            <span className="pt-kpi__text">
              <span className="pt-kpi__label">{item.label}</span>
              <span className="pt-kpi__value">{item.value}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default KpiStrip;

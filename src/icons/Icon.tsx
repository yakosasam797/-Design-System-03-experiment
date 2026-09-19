import type { CSSProperties, SVGProps } from "react";
import {
  ICON_REGISTRY,
  resolveIconName,
  type IconName,
  type IconMeta,
} from "./registry";

export type { IconName, IconMeta, IconCategory } from "./registry";
export { ICON_REGISTRY, ICON_NAMES, getIconMeta, resolveIconName } from "./registry";

export type IconSize = "2xs" | "xs" | "sm" | "md" | "nav" | "lg";

/** Fallback px when CSS vars are unavailable (matches --icon-size-*). */
const SIZE_PX: Record<IconSize, number> = {
  "2xs": 11,
  xs: 13,
  sm: 14,
  md: 15,
  nav: 17,
  lg: 20,
};

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  /** Canonical name or semantic alias (e.g. `nav.bookings`, `back`) */
  name: IconName | string;
  size?: IconSize | number;
  /** When set, icon is meaningful (`role="img"`); otherwise decorative */
  title?: string;
}

export function Icon({ name, size = "md", title, className = "", style, ...rest }: IconProps) {
  const resolved =
    resolveIconName(name) ?? (name in ICON_REGISTRY ? (name as IconName) : undefined);
  if (!resolved) {
    return null;
  }
  const def = ICON_REGISTRY[resolved] as IconMeta;
  const decorative = !title;

  const sizeStyle: CSSProperties =
    typeof size === "number"
      ? { width: size, height: size }
      : {
          width: `var(--icon-size-${size}, ${SIZE_PX[size]}px)`,
          height: `var(--icon-size-${size}, ${SIZE_PX[size]}px)`,
        };

  const common = {
    viewBox: "0 0 24 24" as const,
    className,
    style: { ...sizeStyle, ...style },
    "data-icon": resolved,
    "aria-hidden": decorative ? (true as const) : undefined,
    role: title ? ("img" as const) : undefined,
    ...rest,
  };

  if (def.fill) {
    return (
      <svg fill="currentColor" {...common}>
        {title ? <title>{title}</title> : null}
        {def.paths}
      </svg>
    );
  }

  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={def.strokeWidth ?? "var(--icon-stroke-default, 1.7)"}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...common}
    >
      {title ? <title>{title}</title> : null}
      {def.paths}
    </svg>
  );
}

export default Icon;

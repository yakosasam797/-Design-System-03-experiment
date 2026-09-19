import type { SVGProps } from "react";
import { type IconName } from "./registry";
export type { IconName, IconMeta, IconCategory } from "./registry";
export { ICON_REGISTRY, ICON_NAMES, getIconMeta, resolveIconName } from "./registry";
export type IconSize = "2xs" | "xs" | "sm" | "md" | "nav" | "lg";
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
    /** Canonical name or semantic alias (e.g. `nav.bookings`, `back`) */
    name: IconName | string;
    size?: IconSize | number;
    /** When set, icon is meaningful (`role="img"`); otherwise decorative */
    title?: string;
}
export declare function Icon({ name, size, title, className, style, ...rest }: IconProps): import("react").JSX.Element | null;
export default Icon;

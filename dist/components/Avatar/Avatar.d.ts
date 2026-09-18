import type { HTMLAttributes, ReactNode } from "react";
import "./Avatar.css";
export type AvatarTone = "default" | "pink";
export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    tone?: AvatarTone;
    size?: number;
}
export declare function Avatar({ children, tone, size, className, style, ...rest }: AvatarProps): import("react").JSX.Element;
export default Avatar;

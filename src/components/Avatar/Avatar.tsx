import type { HTMLAttributes, ReactNode } from "react";
import "./Avatar.css";

export type AvatarTone = "default" | "pink";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tone?: AvatarTone;
  size?: number;
}

export function Avatar({
  children,
  tone = "default",
  size = 30,
  className = "",
  style,
  ...rest
}: AvatarProps) {
  const sm = size <= 26;
  return (
    <span
      className={`pt-avatar ${sm ? "pt-avatar--sm" : ""} pt-avatar--${tone} ${className}`.trim()}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      {children}
    </span>
  );
}

export default Avatar;

import type { HTMLAttributes, ReactNode } from "react";
import "./EmptyState.css";
export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    icon?: ReactNode;
    action?: ReactNode;
}
export declare function EmptyState({ title, description, icon, action, className, ...rest }: EmptyStateProps): import("react").JSX.Element;
export default EmptyState;

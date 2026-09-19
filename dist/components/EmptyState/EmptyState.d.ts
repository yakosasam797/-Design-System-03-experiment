import type { HTMLAttributes, ReactNode } from "react";
import "./EmptyState.css";
export type EmptyStateVariant = "illustrated" | "compact";
export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    icon?: ReactNode;
    action?: ReactNode;
    /** illustrated = list empty card; compact = notes/filter empty */
    variant?: EmptyStateVariant;
}
export declare function EmptyState({ title, description, icon, action, variant, className, ...rest }: EmptyStateProps): import("react").JSX.Element;
export default EmptyState;

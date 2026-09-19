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
export declare function DetailPage({ title, status, meta, owners, actions, tabs, children, className, }: DetailPageProps): import("react").JSX.Element;
export default DetailPage;

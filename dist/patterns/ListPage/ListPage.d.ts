import type { ReactNode } from "react";
import { type TabItem } from "../../components/TabBar/TabBar";
import "./ListPage.css";
export interface ListPageProps {
    title: string;
    actions?: ReactNode;
    tabs?: TabItem[];
    tabValue?: string;
    onTabChange?: (id: string) => void;
    toolbar?: ReactNode;
    /** Sheet / table body */
    children: ReactNode;
    bulk?: ReactNode;
    footer?: ReactNode;
}
export declare function ListPage({ title, actions, tabs, tabValue, onTabChange, toolbar, children, bulk, footer, }: ListPageProps): import("react").JSX.Element;
export declare function ListBulkBar({ label, children, }: {
    label: ReactNode;
    children?: ReactNode;
}): import("react").JSX.Element;
export default ListPage;

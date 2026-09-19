import type { ButtonHTMLAttributes } from "react";
import "./BackButton.css";
export interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Accessible name. Booking list→detail uses “Back to bookings”. */
    label?: string;
}
export declare function BackButton({ label, className, type, ...rest }: BackButtonProps): import("react").JSX.Element;
export default BackButton;

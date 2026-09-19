import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import "./TextField.css";
export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label: ReactNode;
    hint?: ReactNode;
    multiline?: false;
}
export interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: ReactNode;
    hint?: ReactNode;
    multiline: true;
}
export declare function TextField(props: TextFieldProps | TextAreaFieldProps): import("react").JSX.Element;
export default TextField;

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

export function TextField(props: TextFieldProps | TextAreaFieldProps) {
  const { label, hint, className = "", id, multiline, ...rest } = props as TextFieldProps & {
    multiline?: boolean;
  };
  const fieldId = id ?? (typeof label === "string" ? `pt-tf-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

  return (
    <div className={`pt-mf ${className}`.trim()}>
      <label className="pt-mf__l" htmlFor={fieldId}>
        {label}
      </label>
      {multiline ? (
        <textarea
          id={fieldId}
          className="pt-mf__i"
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input id={fieldId} className="pt-mf__i" {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {hint ? <p className="pt-mf__hint">{hint}</p> : null}
    </div>
  );
}

export default TextField;

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { buttons, forms, typography } from "@/lib/design-system";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
};

export function FormField({
  label,
  htmlFor,
  children,
  className = "",
}: FormFieldProps) {
  return (
    <div className={`${forms.field} ${className}`.trim()}>
      <label htmlFor={htmlFor} className={typography.formLabel}>
        {label}
      </label>
      {children}
    </div>
  );
}

type FormInputProps = ComponentPropsWithoutRef<"input">;

export function FormInput({ className = "", ...props }: FormInputProps) {
  return (
    <input
      className={`${forms.input} ${forms.inputHeight} ${className}`.trim()}
      {...props}
    />
  );
}

type FormTextareaProps = ComponentPropsWithoutRef<"textarea">;

export function FormTextarea({ className = "", ...props }: FormTextareaProps) {
  return (
    <textarea
      className={`${forms.input} ${forms.textarea} ${className}`.trim()}
      {...props}
    />
  );
}

type FormSubmitButtonProps = ComponentPropsWithoutRef<"button">;

export function FormSubmitButton({
  className = "",
  children,
  ...props
}: FormSubmitButtonProps) {
  return (
    <button
      type="submit"
      className={[buttons.formSubmit, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

export function FormStatusMessage({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`${forms.statusMessage} ${className}`.trim()}
      role="status"
    >
      {children}
    </p>
  );
}

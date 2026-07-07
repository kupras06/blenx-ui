"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import clsx from "clsx";
import { FieldLabel, FieldDescription, FieldError } from "../Field/field";
import { Textarea, type TextareaProps } from "../Textarea/textarea";
import { fieldWrapper } from "../Field/field-wrapper.css";

export interface TextareaFieldProps extends Omit<TextareaProps, "id"> {
  label: string;
  description?: string;
  error?: string;
}

export function TextareaField({
  label,
  description,
  error,
  className,
  style,
  ...props
}: TextareaFieldProps) {
  const fieldValid = error ? (false as const) : undefined;

  return (
    <FieldPrimitive.Root valid={fieldValid} className={clsx(fieldWrapper, className)} style={style}>
      <FieldLabel>{label}</FieldLabel>
      <Textarea {...props} />
      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </FieldPrimitive.Root>
  );
}

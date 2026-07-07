"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import clsx from "clsx";
import { FieldLabel, FieldDescription, FieldError } from "../Field/field";
import { Input, type InputProps } from "../Input/input";
import { fieldWrapper } from "../Field/field-wrapper.css";

export interface TextFieldProps extends Omit<InputProps, "id"> {
  label: string;
  description?: string;
}

export function TextField({
  label,
  description,
  error,
  className,
  style,
  ...props
}: TextFieldProps) {
  const fieldValid = error ? (false as const) : undefined;

  return (
    <FieldPrimitive.Root valid={fieldValid} className={clsx(fieldWrapper, className)} style={style}>
      <FieldLabel>{label}</FieldLabel>
      <Input error={error} {...props} />
      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </FieldPrimitive.Root>
  );
}

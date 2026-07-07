"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import clsx from "clsx";
import { FieldLabel, FieldDescription, FieldError } from "../Field/field";
import { Input, type InputProps } from "../Input/input";
import { fieldWrapper } from "../Field/field-wrapper.css";

export interface NumberFieldProps extends Omit<InputProps, "id" | "type"> {
  label: string;
  description?: string;
  min?: number;
  max?: number;
  step?: number;
}

export function NumberField({
  label,
  description,
  error,
  min,
  max,
  step,
  className,
  style,
  ...props
}: NumberFieldProps) {
  const fieldValid = error ? (false as const) : undefined;

  return (
    <FieldPrimitive.Root valid={fieldValid} className={clsx(fieldWrapper, className)} style={style}>
      <FieldLabel>{label}</FieldLabel>
      <Input error={error} type="number" min={min} max={max} step={step} {...props} />
      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </FieldPrimitive.Root>
  );
}

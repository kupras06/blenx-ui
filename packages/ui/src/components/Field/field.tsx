"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import clsx from "clsx";
import type React from "react";
import { field, label, item, description, error } from "./field.css";

export function Field({
  className,
  style,
  ...props
}: FieldPrimitive.Root.Props & {
  className?: string;
  style?: React.CSSProperties;
}): React.ReactElement {
  return (
    <FieldPrimitive.Root
      className={clsx(field, className)}
      style={style}
      data-slot="field"
      {...props}
    />
  );
}

export function FieldLabel({
  className,
  style,
  ...props
}: FieldPrimitive.Label.Props & {
  className?: string;
  style?: React.CSSProperties;
}): React.ReactElement {
  return (
    <FieldPrimitive.Label
      className={clsx(label, className)}
      style={style}
      data-slot="field-label"
      {...props}
    />
  );
}

export function FieldItem({
  className,
  style,
  ...props
}: FieldPrimitive.Item.Props & {
  className?: string;
  style?: React.CSSProperties;
}): React.ReactElement {
  return (
    <FieldPrimitive.Item
      className={clsx(item, className)}
      style={style}
      data-slot="field-item"
      {...props}
    />
  );
}

export function FieldDescription({
  className,
  style,
  ...props
}: FieldPrimitive.Description.Props & {
  className?: string;
  style?: React.CSSProperties;
}): React.ReactElement {
  return (
    <FieldPrimitive.Description
      className={clsx(description, className)}
      style={style}
      data-slot="field-description"
      {...props}
    />
  );
}

function FieldError({
  className,
  style,
  ...props
}: FieldPrimitive.Error.Props & {
  className?: string;
  style?: React.CSSProperties;
}): React.ReactElement {
  return (
    <FieldPrimitive.Error
      className={clsx(error, className)}
      style={style}
      data-slot="field-error"
      {...props}
    />
  );
}

export const FieldControl: typeof FieldPrimitive.Control = FieldPrimitive.Control;
export const FieldValidity: typeof FieldPrimitive.Validity = FieldPrimitive.Validity;

export { FieldError };

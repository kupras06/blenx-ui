"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import clsx from "clsx";
import type React from "react";
import { label, item, description, error } from "./field.css";
import { applyBaseSprinkles } from "../../utils/ve-style.utils";
import type { BaseSprinkles } from "../../utils/sprinkles.css";

export function Field({
  className,
  style,
  ...props
}: FieldPrimitive.Root.Props & BaseSprinkles): React.ReactElement {
  const [baseStyles, otherProps] = applyBaseSprinkles({
    display: "flex",
    direction: "column",
    align: "start",
    gap: "sm",
    flex: 1,
    ...props,
  });
  return (
    <FieldPrimitive.Root
      className={clsx(baseStyles, className)}
      style={style}
      data-slot="field"
      {...otherProps}
    />
  );
}

export function FieldLabel({
  className,
  style,
  ...props
}: FieldPrimitive.Label.Props): React.ReactElement {
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
}: FieldPrimitive.Item.Props): React.ReactElement {
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
}: FieldPrimitive.Description.Props): React.ReactElement {
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
}: FieldPrimitive.Error.Props): React.ReactElement {
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

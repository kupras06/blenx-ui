"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import clsx from "clsx";
import type * as React from "react";
import { shell, textarea, textareaLg, textareaSm } from "./textarea.css";

export type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> &
  React.RefAttributes<HTMLTextAreaElement> & {
    size?: "sm" | "default" | "lg" | number;
    className?: string;
    style?: React.CSSProperties;
  };

export function Textarea({
  size = "default",
  className,
  style,
  ref,
  ...props
}: TextareaProps): React.ReactElement {
  return (
    <span className={shell} data-size={size} data-slot="textarea-control" style={style}>
      <FieldPrimitive.Control
        ref={ref}
        value={props.value}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        render={(defaultProps: React.ComponentProps<"textarea">) => (
          <textarea
            ref={ref}
            className={clsx(
              textarea,
              size === "sm" && textareaSm,
              size === "lg" && textareaLg,
              className,
            )}
            data-slot="textarea"
            {...defaultProps}
            {...props}
          />
        )}
      />
    </span>
  );
}

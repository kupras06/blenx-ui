"use client";

import { mergeProps } from "@base-ui/react";
import { Field as FieldPrimitive } from "@base-ui/react/field";
import * as stylex from "@stylexjs/stylex";
import type * as React from "react";
import { textareaStyles } from "./textarea.styles";

export type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> &
  React.RefAttributes<HTMLTextAreaElement> & {
    size?: "sm" | "default" | "lg" | number;
  };

export function Textarea({ size = "default", ref, ...props }: TextareaProps): React.ReactElement {
  const shellProps = stylex.props(textareaStyles.shell);
  const textareaProps = {
    ...props,
    ...stylex.props(
      textareaStyles.textarea,
      size === "sm" && textareaStyles.textareaSm,
      size === "lg" && textareaStyles.textareaLg,
    ),
  };

  return (
    <span {...shellProps} data-size={size} data-slot="textarea-control">
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
            {...mergeProps(defaultProps, textareaProps)}
            data-slot="textarea"
            {...props}
          />
        )}
      />
    </span>
  );
}

"use client";

import { useRender } from "@base-ui/react";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import clsx from "clsx";
import type * as React from "react";
import type { _BaseDivProps } from "#utils/types";
import {
  group,
  addon,
  addonInlineStart,
  addonInlineEnd,
  addonBlockStart,
  addonBlockEnd,
  text as textStyle,
  menu,
  input as inputStyle,
  textarea as textareaStyle,
} from "./input-group.css";

type Align = "inline-start" | "inline-end" | "block-start" | "block-end";

type InputGroupProps = _BaseDivProps;

function InputGroup({ className, ...props }: InputGroupProps): React.ReactElement {
  return <fieldset className={clsx(group, className)} data-slot="input-group" {...props} />;
}

type InputGroupAddonProps = _BaseDivProps & {
  align?: Align;
};

function InputGroupAddon({
  align = "inline-start",
  className,
  ...props
}: InputGroupAddonProps): React.ReactElement {
  return (
    <div
      className={clsx(
        addon,
        align === "inline-start" && addonInlineStart,
        align === "inline-end" && addonInlineEnd,
        align === "block-start" && addonBlockStart,
        align === "block-end" && addonBlockEnd,
        className,
      )}
      data-align={align}
      data-slot="input-group-addon"
      role="presentation"
      onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const isInteractive = target.closest(
          "button, a, input, select, textarea, [role='button'], [role='combobox'], [role='listbox'], [data-slot='select-trigger']",
        );
        if (isInteractive) return;
        e.preventDefault();
        const parent = e.currentTarget.parentElement;
        const input = parent?.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          "input, textarea",
        );
        if (input && !parent?.querySelector("input:focus, textarea:focus")) {
          input.focus();
        }
      }}
      {...props}
    />
  );
}

type InputGroupTextProps = React.ComponentProps<"span">;

function InputGroupText({ className, ...props }: InputGroupTextProps): React.ReactElement {
  return <span className={clsx(textStyle, className)} {...props} />;
}

type InputGroupInputProps = Omit<
  InputPrimitive.Props & React.RefAttributes<HTMLInputElement>,
  "style"
>;

function InputGroupInput({ className, ...props }: InputGroupInputProps): React.ReactElement {
  return (
    <InputPrimitive className={clsx(inputStyle, className)} data-slot="input-control" {...props} />
  );
}

type InputGroupTextareaProps = Omit<React.ComponentPropsWithoutRef<"textarea">, "style">;

function InputGroupTextarea({ ...props }: InputGroupTextareaProps): React.ReactElement {
  return <textarea className={textareaStyle} rows={4} data-slot="textarea-control" {...props} />;
}

function InputGroupMenu({
  className,
  render,
  ...props
}: useRender.ComponentProps<"nav">): React.ReactElement {
  return useRender({
    defaultTagName: "nav",
    props: {
      className: clsx(menu, className),
      "data-slot": "input-group-menu",
      ...props,
    } as never,
    render,
  });
}

const InputGroupCheckboxItem = CheckboxPrimitive.Root;
const InputGroupRadioGroup = RadioGroupPrimitive;
const InputGroupRadioItem = RadioPrimitive.Root;

export type {
  InputGroupAddonProps,
  InputGroupInputProps,
  InputGroupProps,
  InputGroupTextareaProps,
};
export {
  InputGroup,
  InputGroupAddon,
  InputGroupCheckboxItem,
  InputGroupInput,
  InputGroupMenu,
  InputGroupRadioGroup,
  InputGroupRadioItem,
  InputGroupText,
  InputGroupTextarea,
};

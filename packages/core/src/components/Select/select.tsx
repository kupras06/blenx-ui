import { Select as SelectPrimitive } from "@base-ui/react/select";
import clsx from "clsx";
import type * as React from "react";
import { Field, FieldError, FieldLabel } from "../Field/field";
import {
  groupLabel,
  icon as iconStyle,
  item as itemStyle,
  itemIndicator,
  label as labelStyle,
  popup,
  scrollArrow,
  separator as separatorStyle,
  trigger as triggerStyle,
  triggerLg,
  triggerSm,
} from "./select.css";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "../../icons";

type SelectSize = "sm" | "default" | "lg";

type SelectItemProp = string | number | { label: React.ReactNode; value: unknown };

type SelectProps = SelectPrimitive.Root.Props<SelectItemProp>;

export function Select({ children, ...props }: SelectProps) {
  return <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>;
}

export function SelectLabel(props: SelectPrimitive.Label.Props) {
  return <SelectPrimitive.Label className={labelStyle} {...props} />;
}

export function SelectTrigger({
  size = "default",
  className,
  style,
  ...props
}: SelectPrimitive.Trigger.Props & {
  size?: SelectSize;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <SelectPrimitive.Trigger
      className={clsx(
        triggerStyle,
        size === "sm" && triggerSm,
        size === "lg" && triggerLg,
        className,
      )}
      style={style}
      {...props}
    />
  );
}

export function SelectValue({ placeholder, ...props }: SelectPrimitive.Value.Props) {
  return <SelectPrimitive.Value placeholder={placeholder} {...props} />;
}

export function SelectIcon(props: SelectPrimitive.Icon.Props) {
  return (
    <SelectPrimitive.Icon className={iconStyle} {...props}>
      <ChevronDownIcon width={16} />
    </SelectPrimitive.Icon>
  );
}

export function SelectPortal(props: SelectPrimitive.Portal.Props) {
  return <SelectPrimitive.Portal {...props} />;
}

export function SelectPositioner({ sideOffset = 4, ...props }: SelectPrimitive.Positioner.Props) {
  return <SelectPrimitive.Positioner sideOffset={sideOffset} {...props} />;
}

export function SelectPopup(props: SelectPrimitive.Popup.Props) {
  return <SelectPrimitive.Popup className={popup} {...props} />;
}

export function SelectList(props: SelectPrimitive.List.Props) {
  return <SelectPrimitive.List {...props} />;
}

export function SelectItem({
  children,
  ...props
}: SelectPrimitive.Item.Props & { children: React.ReactNode }) {
  return (
    <SelectPrimitive.Item className={itemStyle} {...props}>
      <SelectPrimitive.ItemIndicator className={itemIndicator}>
        <CheckIcon width={14} />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

export function SelectSeparator(props: SelectPrimitive.Separator.Props) {
  return <SelectPrimitive.Separator className={separatorStyle} {...props} />;
}

export function SelectGroup(props: SelectPrimitive.Group.Props) {
  return <SelectPrimitive.Group {...props} />;
}

export function SelectGroupLabel(props: SelectPrimitive.GroupLabel.Props) {
  return <SelectPrimitive.GroupLabel className={groupLabel} {...props} />;
}

export function SelectScrollUpArrow(props: SelectPrimitive.ScrollUpArrow.Props) {
  return (
    <SelectPrimitive.ScrollUpArrow className={scrollArrow} {...props}>
      <ChevronUpIcon width={12} />
    </SelectPrimitive.ScrollUpArrow>
  );
}

export function SelectScrollDownArrow(props: SelectPrimitive.ScrollDownArrow.Props) {
  return (
    <SelectPrimitive.ScrollDownArrow className={scrollArrow} {...props}>
      <ChevronDownIcon width={12} />
    </SelectPrimitive.ScrollDownArrow>
  );
}

// ─── Convenience wrapper ──────────────────────────────────────────────────────

interface SelectWrapperProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
}

export function SelectWrapper({ label, error, children }: SelectWrapperProps) {
  return (
    <Field invalid={Boolean(error)}>
      {label && <FieldLabel>{label}</FieldLabel>}
      {children}
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
}

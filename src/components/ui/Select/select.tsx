import { Select as SelectPrimitive } from "@base-ui/react/select";
import { CaretDownIcon, CaretUpIcon, CheckIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type * as React from "react";
import { Field, FieldError, FieldLabel } from "../Field/field";
import { selectStyles } from "./select.styles";

type SelectSize = "sm" | "default" | "lg";

type SelectItemProp =
	| string
	| number
	| { label: React.ReactNode; value: unknown };

interface SelectRootProps extends SelectPrimitive.Root.Props<SelectItemProp> {}

export function SelectRoot({ children, ...props }: SelectRootProps) {
	return <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>;
}

export function SelectLabel(props: SelectPrimitive.Label.Props) {
	return (
		<SelectPrimitive.Label {...stylex.props(selectStyles.label)} {...props} />
	);
}

export function SelectTrigger({
	size = "default",
	...props
}: SelectPrimitive.Trigger.Props & { size?: SelectSize }) {
	return (
		<SelectPrimitive.Trigger
			{...stylex.props(
				selectStyles.trigger,
				size === "sm" && selectStyles.triggerSm,
				size === "lg" && selectStyles.triggerLg,
			)}
			{...props}
		/>
	);
}

export function SelectValue({
	placeholder,
	...props
}: SelectPrimitive.Value.Props) {
	return <SelectPrimitive.Value placeholder={placeholder} {...props} />;
}

export function SelectIcon(props: SelectPrimitive.Icon.Props) {
	return (
		<SelectPrimitive.Icon {...stylex.props(selectStyles.icon)} {...props}>
			<CaretDownIcon size={16} />
		</SelectPrimitive.Icon>
	);
}

export function SelectPortal(props: SelectPrimitive.Portal.Props) {
	return <SelectPrimitive.Portal {...props} />;
}

export function SelectPositioner({
	sideOffset = 4,
	...props
}: SelectPrimitive.Positioner.Props) {
	return <SelectPrimitive.Positioner sideOffset={sideOffset} {...props} />;
}

export function SelectPopup(props: SelectPrimitive.Popup.Props) {
	return (
		<SelectPrimitive.Popup {...stylex.props(selectStyles.popup)} {...props} />
	);
}

export function SelectList(props: SelectPrimitive.List.Props) {
	return <SelectPrimitive.List {...props} />;
}

export function SelectItem({
	children,
	...props
}: SelectPrimitive.Item.Props & { children: React.ReactNode }) {
	return (
		<SelectPrimitive.Item {...stylex.props(selectStyles.item)} {...props}>
			<SelectPrimitive.ItemIndicator
				{...stylex.props(selectStyles.itemIndicator)}
			>
				<CheckIcon size={14} weight="bold" />
			</SelectPrimitive.ItemIndicator>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	);
}

export function SelectSeparator(props: SelectPrimitive.Separator.Props) {
	return (
		<SelectPrimitive.Separator
			{...stylex.props(selectStyles.separator)}
			{...props}
		/>
	);
}

export function SelectGroup(props: SelectPrimitive.Group.Props) {
	return <SelectPrimitive.Group {...props} />;
}

export function SelectGroupLabel(props: SelectPrimitive.GroupLabel.Props) {
	return (
		<SelectPrimitive.GroupLabel
			{...stylex.props(selectStyles.groupLabel)}
			{...props}
		/>
	);
}

export function SelectScrollUpArrow(
	props: SelectPrimitive.ScrollUpArrow.Props,
) {
	return (
		<SelectPrimitive.ScrollUpArrow
			{...stylex.props(selectStyles.scrollArrow)}
			{...props}
		>
			<CaretUpIcon size={12} />
		</SelectPrimitive.ScrollUpArrow>
	);
}

export function SelectScrollDownArrow(
	props: SelectPrimitive.ScrollDownArrow.Props,
) {
	return (
		<SelectPrimitive.ScrollDownArrow
			{...stylex.props(selectStyles.scrollArrow)}
			{...props}
		>
			<CaretDownIcon size={12} />
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
		<Field invalid={!!error}>
			{label && <FieldLabel>{label}</FieldLabel>}
			{children}
			{error && <FieldError>{error}</FieldError>}
		</Field>
	);
}

// ─── Compound component namespace ─────────────────────────────────────────────

export const Select = {
	Root: SelectRoot,
	Label: SelectLabel,
	Trigger: SelectTrigger,
	Value: SelectValue,
	Icon: SelectIcon,
	Portal: SelectPortal,
	Positioner: SelectPositioner,
	Popup: SelectPopup,
	List: SelectList,
	Item: SelectItem,
	Separator: SelectSeparator,
	Group: SelectGroup,
	GroupLabel: SelectGroupLabel,
	ScrollUpArrow: SelectScrollUpArrow,
	ScrollDownArrow: SelectScrollDownArrow,
	Wrapper: SelectWrapper,
};

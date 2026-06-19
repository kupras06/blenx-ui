"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import * as stylex from "@stylexjs/stylex";
import type * as React from "react";
import type { _BaseDivProps, PropsWithStylex } from "@/utils/stylex.utils";
import { inputGroupStyles } from "./input-group.styles";

type Align = "inline-start" | "inline-end" | "block-start" | "block-end";

type InputGroupProps = PropsWithStylex<React.ComponentProps<"fieldset">>;

function InputGroup({ style, ...props }: InputGroupProps): React.ReactElement {
	const groupStyleProps = stylex.props(inputGroupStyles.group, style);
	return <fieldset {...groupStyleProps} data-slot="input-group" {...props} />;
}

type InputGroupAddonProps = _BaseDivProps & {
	align?: Align;
};

function InputGroupAddon({
	align = "inline-start",
	style,
	...props
}: InputGroupAddonProps): React.ReactElement {
	const addonStyleProps = stylex.props(
		inputGroupStyles.addon,
		align === "inline-start" && inputGroupStyles.addonInlineStart,
		align === "inline-end" && inputGroupStyles.addonInlineEnd,
		align === "block-start" && inputGroupStyles.addonBlockStart,
		align === "block-end" && inputGroupStyles.addonBlockEnd,
		style,
	);

	return (
		// Biome-ignore lint/a11y/noStaticElementInteractions: div acts as a focus proxy for the inner input
		<div
			{...addonStyleProps}
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
				const input = parent?.querySelector<
					HTMLInputElement | HTMLTextAreaElement
				>("input, textarea");
				if (input && !parent?.querySelector("input:focus, textarea:focus")) {
					input.focus();
				}
			}}
			{...props}
		/>
	);
}

type InputGroupTextProps = React.ComponentProps<"span">;

function InputGroupText({
	className,
	...props
}: InputGroupTextProps): React.ReactElement {
	const textProps = stylex.props(inputGroupStyles.text);
	return (
		<span
			className={[textProps.className, className].filter(Boolean).join(" ")}
			{...props}
		/>
	);
}

type InputGroupInputProps = Omit<
	InputPrimitive.Props & React.RefAttributes<HTMLInputElement>,
	"style"
>;

function InputGroupInput({
	className,
	...props
}: InputGroupInputProps): React.ReactElement {
	const inputProps = stylex.props(inputGroupStyles.input);
	return (
		<InputPrimitive
			{...inputProps}
			className={[inputProps.className, className].filter(Boolean).join(" ")}
			data-slot="input-control"
			{...props}
		/>
	);
}

type InputGroupTextareaProps = Omit<
	React.ComponentPropsWithoutRef<"textarea">,
	"style"
>;

function InputGroupTextarea({
	...props
}: InputGroupTextareaProps): React.ReactElement {
	const textareaProps = stylex.props(inputGroupStyles.textarea);
	return (
		<textarea
			{...textareaProps}
			rows={4}
			data-slot="textarea-control"
			{...props}
		/>
	);
}

function InputGroupMenu({
	className,
	render,
	...props
}: useRender.ComponentProps<"nav">): React.ReactElement {
	const menuProps = stylex.props(inputGroupStyles.menu);
	return useRender({
		defaultTagName: "nav",
		props: mergeProps<"nav">(
			{
				...menuProps,
				className: [menuProps.className, className].filter(Boolean).join(" "),
				"data-slot": "input-group-menu",
			} as never,
			props,
		),
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

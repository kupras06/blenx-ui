"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { fieldStyles } from "./field.styles";

export function Field({
	style,
	...props
}: PropsWithStylex<FieldPrimitive.Root.Props>): React.ReactElement {
	const fieldProps = stylex.props(fieldStyles.field, style);
	return <FieldPrimitive.Root {...fieldProps} data-slot="field" {...props} />;
}

export function FieldLabel({
	style,
	...props
}: PropsWithStylex<FieldPrimitive.Label.Props>): React.ReactElement {
	const labelProps = stylex.props(fieldStyles.label, style);
	return (
		<FieldPrimitive.Label {...labelProps} data-slot="field-label" {...props} />
	);
}

export function FieldItem({
	style,
	...props
}: PropsWithStylex<FieldPrimitive.Item.Props>): React.ReactElement {
	const itemProps = stylex.props(fieldStyles.item, style);
	return (
		<FieldPrimitive.Item {...itemProps} data-slot="field-item" {...props} />
	);
}

export function FieldDescription({
	style,
	...props
}: PropsWithStylex<FieldPrimitive.Description.Props>): React.ReactElement {
	const descriptionProps = stylex.props(fieldStyles.description, style);
	return (
		<FieldPrimitive.Description
			{...descriptionProps}
			data-slot="field-description"
			{...props}
		/>
	);
}

export function FieldError({
	style,
	...props
}: PropsWithStylex<FieldPrimitive.Error.Props>): React.ReactElement {
	const errorProps = stylex.props(fieldStyles.error, style);
	return (
		<FieldPrimitive.Error {...errorProps} data-slot="field-error" {...props} />
	);
}

export const FieldControl: typeof FieldPrimitive.Control =
	FieldPrimitive.Control;
export const FieldValidity: typeof FieldPrimitive.Validity =
	FieldPrimitive.Validity;

export { FieldPrimitive };

"use client";

import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import * as stylex from "@stylexjs/stylex";
import * as React from "react";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import type { SeparatorProps } from "../Separator/separator";
import { Separator } from "../Separator/separator";
import {
	Toggle as ToggleComponent,
	type ToggleProps as ToggleComponentProps,
	type ToggleSize,
	type ToggleVariant,
} from "../Toggle/toggle";
import { toggleGroupStyles } from "./toggle-group.styles";

type ToggleGroupVariant = ToggleVariant;
type ToggleGroupSize = ToggleSize;

type ToggleGroupContextValue = {
	variant: ToggleGroupVariant;
	size: ToggleGroupSize;
	orientation: "horizontal" | "vertical";
};

export const ToggleGroupContext =
	React.createContext<ToggleGroupContextValue | null>(null);

export type ToggleGroupProps = PropsWithStylex<
	ToggleGroupPrimitive.Props & {
		variant?: ToggleGroupVariant;
		size?: ToggleGroupSize;
		orientation?: "horizontal" | "vertical";
	}
>;

export function ToggleGroup({
	style,
	variant = "default",
	size = "default",
	orientation = "horizontal",
	children,
	...props
}: ToggleGroupProps): React.ReactElement {
	const isHorizontal = orientation === "horizontal";
	const isOutline = variant === "outline";

	const contextValue = React.useMemo(
		() => ({ variant, size, orientation }),
		[variant, size, orientation],
	);

	const groupProps = stylex.props(
		toggleGroupStyles.groupBase,
		isHorizontal
			? toggleGroupStyles.groupHorizontal
			: toggleGroupStyles.groupVertical,
		isOutline ? toggleGroupStyles.groupOutline : toggleGroupStyles.groupDefault,
		style,
	);

	return (
		<ToggleGroupPrimitive
			{...groupProps}
			data-slot="toggle-group"
			data-variant={variant}
			data-size={size}
			orientation={orientation}
			{...props}
		>
			<ToggleGroupContext.Provider value={contextValue}>
				{children}
			</ToggleGroupContext.Provider>
		</ToggleGroupPrimitive>
	);
}

export function ToggleGroupItem({
	style,
	children,
	variant,
	size,
	...props
}: PropsWithStylex<
	ToggleComponentProps & {
		variant?: ToggleGroupVariant;
		size?: ToggleGroupSize;
	}
>): React.ReactElement {
	const context = React.useContext(ToggleGroupContext);

	const resolvedVariant = variant ?? context?.variant ?? "default";
	const resolvedSize = size ?? context?.size ?? "default";
	const orientation = context?.orientation ?? "horizontal";
	const isOutline = resolvedVariant === "outline";

	const itemProps = stylex.props(
		isOutline &&
			(orientation === "horizontal"
				? toggleGroupStyles.outlineItemHorizontal
				: toggleGroupStyles.outlineItemVertical),
		style,
	);

	return (
		<ToggleComponent
			{...itemProps}
			data-size={resolvedSize}
			data-variant={resolvedVariant}
			size={resolvedSize}
			variant={resolvedVariant}
			{...props}
		>
			{children}
		</ToggleComponent>
	);
}

export function ToggleGroupSeparator({
	className,
	orientation,
	...props
}: {
	className?: string;
	orientation?: "horizontal" | "vertical";
} & SeparatorProps): React.ReactElement {
	const context = React.useContext(ToggleGroupContext);
	const resolvedOrientation =
		orientation ??
		(context?.orientation === "vertical" ? "horizontal" : "vertical");

	return (
		<Separator
			className={className}
			orientation={resolvedOrientation}
			{...props}
		/>
	);
}

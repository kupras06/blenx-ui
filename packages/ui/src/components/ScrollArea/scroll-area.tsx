"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import type { CSSProperties } from "react";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { scrollAreaStyles } from "./scroll-area.styles";
import { applyBoxHeightStyle, type BoxHeightStyles } from "../Box/box.styles";

type ScrollAreaProps = PropsWithStylex<ScrollAreaPrimitive.Root.Props> & {
	scrollFade?: boolean;
	scrollbarGutter?: boolean;
	fill?: boolean;
	height?: BoxHeightStyles | CSSProperties["height"];
};

function ScrollArea({
	children,
	scrollFade = false,
	scrollbarGutter = false,
	fill = false,
	height = "60svh",
	style,
	...props
}: ScrollAreaProps): React.ReactElement {
	const heightStyle = applyBoxHeightStyle(height);
	const rootProps = stylex.props(
		scrollAreaStyles.root,
		style,
		heightStyle,
		Boolean(!heightStyle && height) && scrollAreaStyles.height(height),
	);
	return (
		<ScrollAreaPrimitive.Root
			{...rootProps}
			data-slot="scroll-area-root"
			{...props}
		>
			<ScrollAreaPrimitive.Viewport
				{...stylex.props(
					scrollAreaStyles.viewport,
					scrollFade && scrollAreaStyles.viewportFade,
					scrollbarGutter && scrollAreaStyles.viewportGutter,
				)}
				data-slot="scroll-area-viewport"
			>
				<ScrollAreaPrimitive.Content
					{...stylex.props(fill && scrollAreaStyles.contentFill)}
					data-slot="scroll-area-content"
				>
					{children}
				</ScrollAreaPrimitive.Content>
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar orientation="vertical" />
			<ScrollBar orientation="horizontal" />
			<ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
		</ScrollAreaPrimitive.Root>
	);
}

type ScrollBarProps = PropsWithStylex<ScrollAreaPrimitive.Scrollbar.Props>;

function ScrollBar({
	orientation = "vertical",
	style,
	...props
}: ScrollBarProps): React.ReactElement {
	const scrollbarProps = stylex.props(
		scrollAreaStyles.scrollbar,
		orientation === "horizontal" && scrollAreaStyles.scrollbarHorizontal,
		orientation === "vertical" && scrollAreaStyles.scrollbarVertical,
		style,
	);
	return (
		<ScrollAreaPrimitive.Scrollbar
			{...scrollbarProps}
			data-slot="scroll-area-scrollbar"
			orientation={orientation}
			{...props}
		>
			<ScrollAreaPrimitive.Thumb
				{...stylex.props(scrollAreaStyles.thumb)}
				data-slot="scroll-area-thumb"
			/>
		</ScrollAreaPrimitive.Scrollbar>
	);
}

export { ScrollArea, ScrollBar };
export type { ScrollAreaProps, ScrollBarProps };

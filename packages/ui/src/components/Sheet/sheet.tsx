"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { XIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import type { _BaseDivProps, PropsWithStylex } from "@/utils/stylex.utils";
import { ScrollArea } from "../ScrollArea/scroll-area";
import { sheetStyles } from "./sheet.styles";
import { IconButton } from "../IconButton/icon-button";

type Side = "right" | "left" | "top" | "bottom";

export const Sheet: typeof SheetPrimitive.Root = SheetPrimitive.Root;

export const SheetPortal: typeof SheetPrimitive.Portal = SheetPrimitive.Portal;

export function SheetTrigger(
	props: SheetPrimitive.Trigger.Props,
): React.ReactElement {
	return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

export function SheetClose(
	props: SheetPrimitive.Close.Props,
): React.ReactElement {
	return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

export function SheetBackdrop({
	style,
	...props
}: PropsWithStylex<SheetPrimitive.Backdrop.Props>): React.ReactElement {
	return (
		<SheetPrimitive.Backdrop
			{...stylex.props(sheetStyles.backdrop, style)}
			data-slot="sheet-backdrop"
			{...props}
		/>
	);
}

type SheetViewportProps = PropsWithStylex<
	SheetPrimitive.Viewport.Props & {
		side?: Side;
		variant?: "default" | "inset";
	}
>;

export function SheetViewport({
	style,
	side,
	variant = "default",
	...props
}: SheetViewportProps): React.ReactElement {
	return (
		<SheetPrimitive.Viewport
			{...stylex.props(
				sheetStyles.viewport,
				side === "bottom" && sheetStyles.viewportBottom,
				side === "top" && sheetStyles.viewportTop,
				side === "left" && sheetStyles.viewportLeft,
				side === "right" && sheetStyles.viewportRight,
				variant === "inset" && sheetStyles.viewportInset,
				style,
			)}
			data-slot="sheet-viewport"
			{...props}
		/>
	);
}

export function SheetPopup({
	style,
	children,
	showCloseButton = true,
	side = "right",
	variant = "default",
	closeProps,
	portalProps,
	...props
}: PropsWithStylex<
	SheetPrimitive.Popup.Props & {
		showCloseButton?: boolean;
		side?: Side;
		variant?: "default" | "inset";
		closeProps?: SheetPrimitive.Close.Props;
		portalProps?: SheetPrimitive.Portal.Props;
	}
>): React.ReactElement {
	return (
		<SheetPortal {...portalProps}>
			<SheetBackdrop />
			<SheetViewport side={side} variant={variant}>
				<SheetPrimitive.Popup
					{...stylex.props(
						sheetStyles.popup,
						side === "bottom" && sheetStyles.popupBottom,
						side === "top" && sheetStyles.popupTop,
						side === "left" && sheetStyles.popupLeft,
						side === "right" && sheetStyles.popupRight,
						variant === "inset" && sheetStyles.popupInset,
						style,
					)}
					data-slot="sheet-popup"
					{...props}
				>
					{children}
					{showCloseButton && (
						<SheetPrimitive.Close
							aria-label="Close"
							render={
								<IconButton variant="ghost" style={sheetStyles.closeButton} />
							}
							{...closeProps}
						>
							<XIcon />
						</SheetPrimitive.Close>
					)}
				</SheetPrimitive.Popup>
			</SheetViewport>
		</SheetPortal>
	);
}

type HeaderProps = useRender.ComponentProps<"div">;

export function SheetHeader({
	render,
	...props
}: HeaderProps): React.ReactElement {
	const headerProps = stylex.props(sheetStyles.header);
	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(
			{
				...headerProps,
				"data-slot": "sheet-header",
			} as never,
			props,
		),
		render,
	});
}

type FooterProps = _BaseDivProps & {
	variant?: "default" | "bare";
};

export function SheetFooter({
	style,
	variant = "default",
	render,
	...props
}: FooterProps): React.ReactElement {
	const footerProps = stylex.props(
		sheetStyles.footer,
		variant === "default" && sheetStyles.footerDefault,
		variant === "bare" && sheetStyles.footerBare,
		style,
	);
	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(
			{
				...footerProps,
				"data-slot": "sheet-footer",
			} as never,
			props,
		),
		render,
	});
}

export function SheetTitle(
	props: SheetPrimitive.Title.Props,
): React.ReactElement {
	return (
		<SheetPrimitive.Title
			{...stylex.props(sheetStyles.title)}
			data-slot="sheet-title"
			{...props}
		/>
	);
}

export function SheetDescription(
	props: SheetPrimitive.Description.Props,
): React.ReactElement {
	return (
		<SheetPrimitive.Description
			{...stylex.props(sheetStyles.description)}
			data-slot="sheet-description"
			{...props}
		/>
	);
}

type PanelProps = _BaseDivProps & {
	scrollFade?: boolean;
};

export function SheetPanel({
	style,
	scrollFade = true,
	render,
	...props
}: PanelProps): React.ReactElement {
	const panelProps = stylex.props(sheetStyles.panel, style);
	return (
		<ScrollArea scrollFade={scrollFade}>
			{useRender({
				defaultTagName: "div",
				props: mergeProps<"div">(
					{
						...panelProps,
						"data-slot": "sheet-panel",
					} as never,
					props,
				),
				render,
			})}
		</ScrollArea>
	);
}

export type { SheetViewportProps };

export { SheetBackdrop as SheetOverlay, SheetPopup as SheetContent };

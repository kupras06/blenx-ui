"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { mergeProps } from "@base-ui/react/merge-props";
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { useRender } from "@base-ui/react/use-render";
import { ArrowRightIcon, XIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import { createContext, useContext, useMemo } from "react";
import type { _BaseDivProps, PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { ScrollArea } from "../ScrollArea/scroll-area";
import { drawerStyles } from "./drawer.styles";
import { IconButton } from "../IconButton/icon-button";

type DrawerPosition = "right" | "left" | "top" | "bottom";

const DrawerContext: React.Context<{ position: DrawerPosition }> =
	createContext<{
		position: DrawerPosition;
	}>({
		position: "bottom",
	});

const directionMap: Record<
	DrawerPosition,
	DrawerPrimitive.Root.Props["swipeDirection"]
> = {
	bottom: "down",
	left: "left",
	right: "right",
	top: "up",
};

export const DrawerCreateHandle: typeof DrawerPrimitive.createHandle =
	DrawerPrimitive.createHandle;

export function Drawer({
	swipeDirection,
	position = "bottom",
	...props
}: DrawerPrimitive.Root.Props & {
	position?: DrawerPosition;
}): React.ReactElement {
	const contextValue = useMemo(() => ({ position }), [position]);
	return (
		<DrawerContext.Provider value={contextValue}>
			<DrawerPrimitive.Root
				swipeDirection={swipeDirection ?? directionMap[position]}
				{...props}
			/>
		</DrawerContext.Provider>
	);
}

export const DrawerPortal: typeof DrawerPrimitive.Portal =
	DrawerPrimitive.Portal;

export function DrawerTrigger(
	props: DrawerPrimitive.Trigger.Props,
): React.ReactElement {
	return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

export function DrawerClose(
	props: DrawerPrimitive.Close.Props,
): React.ReactElement {
	return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

export function DrawerSwipeArea({
	style,
	position: positionProp,
	...props
}: PropsWithStylex<
	DrawerPrimitive.SwipeArea.Props & {
		position?: DrawerPosition;
	}
>): React.ReactElement {
	const { position: contextPosition } = useContext(DrawerContext);
	const position = positionProp ?? contextPosition;
	const swipeAreaProps = stylex.props(
		drawerStyles.swipeArea,
		position === "bottom" && drawerStyles.swipeAreaBottom,
		position === "top" && drawerStyles.swipeAreaTop,
		position === "left" && drawerStyles.swipeAreaLeft,
		position === "right" && drawerStyles.swipeAreaRight,
		style,
	);

	return (
		<DrawerPrimitive.SwipeArea
			{...swipeAreaProps}
			data-slot="drawer-swipe-area"
			{...props}
		/>
	);
}

export function DrawerBackdrop({
	style,
	...props
}: PropsWithStylex<DrawerPrimitive.Backdrop.Props>): React.ReactElement {
	const backdropProps = stylex.props(drawerStyles.backdrop, style);
	return (
		<DrawerPrimitive.Backdrop
			{...backdropProps}
			data-slot="drawer-backdrop"
			{...props}
		/>
	);
}

export function DrawerViewport({
	style,
	position,
	variant = "default",
	...props
}: PropsWithStylex<
	DrawerPrimitive.Viewport.Props & {
		position?: DrawerPosition;
		variant?: "default" | "straight" | "inset";
	}
>): React.ReactElement {
	const viewportProps = stylex.props(
		drawerStyles.viewport,
		position === "bottom" && drawerStyles.viewportBottom,
		position === "top" && drawerStyles.viewportTop,
		position === "left" && drawerStyles.viewportLeft,
		position === "right" && drawerStyles.viewportRight,
		variant === "inset" && drawerStyles.viewportInset,
		style,
	);

	return (
		<DrawerPrimitive.Viewport
			{...viewportProps}
			data-slot="drawer-viewport"
			{...props}
		/>
	);
}

export function DrawerPopup({
	style,
	children,
	showCloseButton = false,
	position: positionProp,
	variant = "default",
	showBar = false,
	portalProps,
	...props
}: PropsWithStylex<
	DrawerPrimitive.Popup.Props & {
		showCloseButton?: boolean;
		position?: DrawerPosition;
		variant?: "default" | "straight" | "inset";
		showBar?: boolean;
		portalProps?: DrawerPrimitive.Portal.Props;
	}
>): React.ReactElement {
	const { position: contextPosition } = useContext(DrawerContext);
	const position = positionProp ?? contextPosition;
	const popupProps = stylex.props(
		drawerStyles.popup,
		position === "bottom" && drawerStyles.popupBottom,
		position === "top" && drawerStyles.popupTop,
		position === "left" && drawerStyles.popupLeft,
		position === "right" && drawerStyles.popupRight,
		variant === "default" && drawerStyles.popupDefault,
		variant === "straight" && drawerStyles.popupStraight,
		variant === "inset" && drawerStyles.popupInset,
		style,
	);

	return (
		<DrawerPortal {...portalProps}>
			<DrawerBackdrop />
			<DrawerViewport position={position} variant={variant}>
				<DrawerPrimitive.Popup
					{...popupProps}
					data-slot="drawer-popup"
					{...props}
				>
					{showCloseButton && (
						<DrawerPrimitive.Close
							aria-label="Close"
							render={
								<IconButton variant="ghost" style={drawerStyles.closeButton} />
							}
						>
							<XIcon />
						</DrawerPrimitive.Close>
					)}{" "}
					{children}
					{showBar && <DrawerBar />}
				</DrawerPrimitive.Popup>
			</DrawerViewport>
		</DrawerPortal>
	);
}

export function DrawerHeader({
	style,
	allowSelection = false,
	render,
	...props
}: _BaseDivProps & {
	allowSelection?: boolean;
}): React.ReactElement {
	const headerProps = stylex.props(drawerStyles.header, style);
	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(
			{
				...headerProps,
				"data-slot": "drawer-header",
			} as never,
			props,
		),
		render: allowSelection ? <DrawerContent render={render} /> : render,
	});
}

export function DrawerFooter({
	style,
	variant = "default",
	allowSelection = true,
	render,
	...props
}: _BaseDivProps & {
	variant?: "default" | "bare";
	allowSelection?: boolean;
}): React.ReactElement {
	const footerProps = stylex.props(
		drawerStyles.footer,
		variant === "default" && drawerStyles.footerDefault,
		variant === "bare" && drawerStyles.footerBare,
		style,
	);

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(
			{
				...footerProps,
				"data-slot": "drawer-footer",
			} as never,
			props,
		),
		render: allowSelection ? <DrawerContent render={render} /> : render,
	});
}

export function DrawerTitle(
	props: DrawerPrimitive.Title.Props,
): React.ReactElement {
	return (
		<DrawerPrimitive.Title
			{...stylex.props(drawerStyles.title)}
			data-slot="drawer-title"
			{...props}
		/>
	);
}

export function DrawerDescription(
	props: DrawerPrimitive.Description.Props,
): React.ReactElement {
	return (
		<DrawerPrimitive.Description
			{...stylex.props(drawerStyles.description)}
			data-slot="drawer-description"
			{...props}
		/>
	);
}

export function DrawerPanel({
	style,
	scrollFade = true,
	scrollable = true,
	allowSelection = true,
	render,
	...props
}: _BaseDivProps & {
	scrollFade?: boolean;
	scrollable?: boolean;
	allowSelection?: boolean;
}): React.ReactElement {
	const panelProps = stylex.props(drawerStyles.panel, style);
	const content = useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(
			{
				...panelProps,
				"data-slot": "drawer-panel",
			} as never,
			props,
		),
		render: allowSelection ? <DrawerContent render={render} /> : render,
	});

	if (scrollable) {
		return <ScrollArea scrollFade={scrollFade}>{content}</ScrollArea>;
	}

	return content;
}

export function DrawerBar({
	style,
	position: positionProp,
	render,
	...props
}: _BaseDivProps & {
	position?: DrawerPosition;
}): React.ReactElement {
	const { position: contextPosition } = useContext(DrawerContext);
	const position = positionProp ?? contextPosition;
	const horizontal = position === "left" || position === "right";
	const barProps = stylex.props(
		drawerStyles.bar,
		horizontal && drawerStyles.barHorizontal,
		!horizontal && drawerStyles.barVertical,
		position === "top" && drawerStyles.barTop,
		position === "bottom" && drawerStyles.barBottom,
		position === "left" && drawerStyles.barLeft,
		position === "right" && drawerStyles.barRight,
		style,
	);

	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(
			{
				...barProps,
				"aria-hidden": true,
				"data-slot": "drawer-bar",
			} as never,
			props,
		),
		render,
	});
}

export const DrawerContent: typeof DrawerPrimitive.Content =
	DrawerPrimitive.Content;

export function DrawerMenu({
	style,
	render,
	...props
}: PropsWithStylex<useRender.ComponentProps<"nav">>): React.ReactElement {
	const menuProps = stylex.props(drawerStyles.menu, style);
	return useRender({
		defaultTagName: "nav",
		props: mergeProps<"nav">(
			{
				...menuProps,
				"data-slot": "drawer-menu",
			} as never,
			props,
		),
		render,
	});
}

export function DrawerMenuItem({
	style,
	variant = "default",
	render,
	disabled,
	...props
}: PropsWithStylex<
	useRender.ComponentProps<"button"> & {
		variant?: "default" | "destructive";
	}
>): React.ReactElement {
	const itemProps = stylex.props(
		drawerStyles.menuItem,
		variant === "destructive" && drawerStyles.menuItemDestructive,
		style,
	);
	return useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(
			{
				...itemProps,
				"data-slot": "drawer-menu-item",
				"data-variant": variant,
				disabled,
				type: "button" as const,
			} as never,
			props,
		),
		render,
	});
}

export function DrawerMenuSeparator({
	style,
	render,
	...props
}: _BaseDivProps): React.ReactElement {
	const separatorProps = stylex.props(drawerStyles.separator, style);
	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(
			{
				...separatorProps,
				"data-slot": "drawer-menu-separator",
			} as never,
			props,
		),
		render,
	});
}

export function DrawerMenuGroup({
	style,
	render,
	...props
}: _BaseDivProps): React.ReactElement {
	const groupProps = stylex.props(drawerStyles.menuGroup, style);
	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(
			{
				...groupProps,
				"data-slot": "drawer-menu-group",
			} as never,
			props,
		),
		render,
	});
}

export function DrawerMenuGroupLabel({
	style,
	render,
	...props
}: _BaseDivProps): React.ReactElement {
	const labelProps = stylex.props(drawerStyles.menuGroupLabel, style);
	return useRender({
		defaultTagName: "div",
		props: mergeProps<"div">(
			{
				...labelProps,
				"data-slot": "drawer-menu-group-label",
			} as never,
			props,
		),
		render,
	});
}

export function DrawerMenuTrigger({
	className,
	children,
	...props
}: DrawerPrimitive.Trigger.Props): React.ReactElement {
	const triggerProps = stylex.props(drawerStyles.menuTrigger);
	return (
		<DrawerTrigger
			className={[triggerProps.className, className].filter(Boolean).join(" ")}
			data-slot="drawer-menu-trigger"
			{...props}
		>
			{children}
			<ArrowRightIcon {...stylex.props(drawerStyles.menuTriggerIcon)} />
		</DrawerTrigger>
	);
}

export function DrawerMenuCheckboxItem({
	className,
	children,
	checked,
	defaultChecked,
	onCheckedChange,
	variant = "default",
	disabled,
	render,
	...props
}: CheckboxPrimitive.Root.Props & {
	variant?: "default" | "switch";
	render?: React.ReactElement;
}): React.ReactElement {
	const checkboxProps = stylex.props(
		drawerStyles.menuCheckbox,
		variant === "switch" && drawerStyles.menuCheckboxSwitch,
		variant !== "switch" && drawerStyles.menuCheckboxDefault,
	);
	return (
		<CheckboxPrimitive.Root
			checked={checked}
			className={[checkboxProps.className, className].filter(Boolean).join(" ")}
			data-slot="drawer-menu-checkbox-item"
			defaultChecked={defaultChecked}
			disabled={disabled}
			onCheckedChange={onCheckedChange}
			render={render}
			{...props}
		>
			{variant === "switch" ? (
				<>
					<span {...stylex.props(drawerStyles.menuCheckboxSwitchLabel)}>
						{children}
					</span>
					<CheckboxPrimitive.Indicator
						{...stylex.props(drawerStyles.menuCheckboxSwitchIndicator)}
						keepMounted
					>
						<span {...stylex.props(drawerStyles.menuCheckboxSwitchThumb)} />
					</CheckboxPrimitive.Indicator>
				</>
			) : (
				<>
					<CheckboxPrimitive.Indicator
						{...stylex.props(drawerStyles.menuCheckboxIndicator)}
					>
						<svg
							fill="none"
							height="24"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>fd</title>
							<path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
						</svg>
					</CheckboxPrimitive.Indicator>
					<span {...stylex.props(drawerStyles.menuCheckboxLabel)}>
						{children}
					</span>
				</>
			)}
		</CheckboxPrimitive.Root>
	);
}

export function DrawerMenuRadioGroup({
	className,
	...props
}: RadioGroupPrimitive.Props): React.ReactElement {
	const radioGroupProps = stylex.props(drawerStyles.menuGroup);
	return (
		<RadioGroupPrimitive
			className={[radioGroupProps.className, className]
				.filter(Boolean)
				.join(" ")}
			data-slot="drawer-menu-radio-group"
			{...props}
		/>
	);
}

function DrawerMenuRadioItem({
	className,
	children,
	value,
	disabled,
	render,
	...props
}: RadioPrimitive.Root.Props & {
	value: string;
	render?: React.ReactElement;
}): React.ReactElement {
	const radioProps = stylex.props(drawerStyles.menuRadio);
	return (
		<RadioPrimitive.Root
			className={[radioProps.className, className].filter(Boolean).join(" ")}
			data-slot="drawer-menu-radio-item"
			disabled={disabled}
			render={render}
			value={value}
			{...props}
		>
			<RadioPrimitive.Indicator
				{...stylex.props(drawerStyles.menuRadioIndicator)}
			>
				<svg
					fill="none"
					height="24"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>fd</title>
					<path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
				</svg>
			</RadioPrimitive.Indicator>
			<span {...stylex.props(drawerStyles.menuRadioLabel)}>{children}</span>
		</RadioPrimitive.Root>
	);
}

export { DrawerMenuRadioItem };

"use client";

import { mergeProps, useRender } from "@base-ui/react";
import { CaretRightIcon, DotsThreeIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type { ComponentPropsWithoutRef } from "react";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { breadcrumbsStyles } from "./breadcrumbs.styles";

type NavProps = PropsWithStylex<useRender.ComponentProps<"nav">>;

export function Breadcrumb({ style, render, ...props }: NavProps) {
	const sx = stylex.props(breadcrumbsStyles.root, style);
	const merged = mergeProps(props, sx, { "aria-label": "breadcrumb" });
	return useRender({ defaultTagName: "nav", props: merged, render });
}

type OlProps = PropsWithStylex<ComponentPropsWithoutRef<"ol">>;

export function BreadcrumbList({ style, ...props }: OlProps) {
	return <ol {...stylex.props(breadcrumbsStyles.list, style)} {...props} />;
}

type LiProps = PropsWithStylex<ComponentPropsWithoutRef<"li">>;

export function BreadcrumbItem({ style, ...props }: LiProps) {
	return <li {...stylex.props(breadcrumbsStyles.item, style)} {...props} />;
}

type LinkProps = PropsWithStylex<useRender.ComponentProps<"a">>;

export function BreadcrumbLink({ style, render, ...props }: LinkProps) {
	const defaultProps = {
		...stylex.props(breadcrumbsStyles.link, style),
	};
	const merged = mergeProps(defaultProps, props);
	return useRender({ defaultTagName: "a", props: merged, render });
}

type SpanProps = PropsWithStylex<ComponentPropsWithoutRef<"span">>;

export function BreadcrumbPage({ style, ...props }: SpanProps) {
	return (
		<span
			{...stylex.props(breadcrumbsStyles.page, style)}
			aria-current="page"
			{...props}
		/>
	);
}

export function BreadcrumbSeparator({ children, style, ...props }: LiProps) {
	return (
		<li
			role="presentation"
			aria-hidden="true"
			{...stylex.props(breadcrumbsStyles.separator, style)}
			{...props}
		>
			{children ?? <CaretRightIcon size={16} />}
		</li>
	);
}

export function BreadcrumbEllipsis({ style, ...props }: SpanProps) {
	return (
		<span
			role="presentation"
			{...stylex.props(breadcrumbsStyles.ellipsis, style)}
			{...props}
		>
			<DotsThreeIcon size={16} />
			<span {...stylex.props(breadcrumbsStyles.srOnly)}>More</span>
		</span>
	);
}

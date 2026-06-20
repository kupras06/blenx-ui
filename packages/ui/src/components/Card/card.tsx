import { mergeProps, useRender } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";
import type { _BaseDivProps, PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { Surface, type SurfaceProps } from "../Surface/surface";
import {
	cardPaddingStyles,
	cardSectionStyles,
	cardTextStyles,
} from "./card.styles";

type CardProps = SurfaceProps;

type SectionPadding = keyof typeof cardPaddingStyles;

type CardSectionProps = _BaseDivProps & {
	padding?: SectionPadding;
};
function Card(props: CardProps) {
	return <Surface padding="medium" withBorder variant="sunken" {...props} />;
}
function CardHeader({
	render,
	padding = "medium",
	style,
	...props
}: CardSectionProps) {
	const stylexProps = stylex.props(
		cardSectionStyles.base,
		cardSectionStyles.header,
		cardPaddingStyles[padding],
		style,
	);
	const mergedProps = mergeProps(stylexProps, props);
	return useRender({
		defaultTagName: "div",
		props: mergedProps,
		render,
	});
}

function CardBody({
	render,
	padding = "medium",
	style,
	...props
}: CardSectionProps) {
	const stylexProps = stylex.props(
		cardSectionStyles.base,
		cardSectionStyles.body,
		cardPaddingStyles[padding],
		style,
	);
	const mergedProps = mergeProps(stylexProps, props);
	return useRender({
		defaultTagName: "div",
		props: mergedProps,
		render,
	});
}

function CardFooter({
	render,
	padding = "medium",
	style,
	...props
}: CardSectionProps) {
	const stylexProps = stylex.props(
		cardSectionStyles.base,
		cardSectionStyles.footer,
		cardPaddingStyles[padding],
		style,
	);
	const mergedProps = mergeProps(stylexProps, props);
	return useRender({
		defaultTagName: "div",
		props: mergedProps,
		render,
	});
}

type CardTitleProps = PropsWithStylex<useRender.ComponentProps<"h1">>;

function CardTitle({ render, style, ...props }: CardTitleProps) {
	const stylexProps = stylex.props(cardTextStyles.title, style);
	const mergedProps = mergeProps(stylexProps, props);
	return useRender({
		defaultTagName: "div",
		props: mergedProps,
		render,
	});
}

type CardDescriptionProps = PropsWithStylex<useRender.ComponentProps<"p">>;

function CardDescription({ render, style, ...props }: CardDescriptionProps) {
	const stylexProps = stylex.props(cardTextStyles.description, style);
	const mergedProps = mergeProps(stylexProps, props);
	return useRender({
		defaultTagName: "div",
		props: mergedProps,
		render,
	});
}
export type {
	CardProps,
	CardDescriptionProps,
	CardSectionProps,
	CardTitleProps,
};
export { Card, CardDescription, CardTitle, CardFooter, CardBody, CardHeader };

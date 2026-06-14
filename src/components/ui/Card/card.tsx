import { mergeProps, useRender } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";
import type { _BaseDivProps, PropsWithStylex } from "@/utils/stylex.utils";
import { cardPaddingStyles, cardSectionStyles, cardStyles, cardTextStyles } from "./card.styles";

type Props = _BaseDivProps & {
  padding?: keyof typeof cardPaddingStyles;
  style?: stylex.StyleXStyles;
};

export function Card({ render, padding = "medium", style, ...props }: Props) {
  const stylexProps = stylex.props(cardStyles.base, cardPaddingStyles[padding], style);
  const mergedProps = mergeProps(stylexProps, props);
  return useRender({
    defaultTagName: "div",
    props: mergedProps,
    render,
  });
}

type CardRootProps = _BaseDivProps;

export function CardRoot({ render, style, ...props }: CardRootProps) {
  const stylexProps = stylex.props(cardStyles.base, style);
  const mergedProps = mergeProps(stylexProps, props);
  return useRender({
    defaultTagName: "div",
    props: mergedProps,
    render,
  });
}

type SectionPadding = keyof typeof cardPaddingStyles;

type CardSectionProps = _BaseDivProps & {
  padding?: SectionPadding;
};

export function CardHeader({ render, padding = "medium", style, ...props }: CardSectionProps) {
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

export function CardBody({ render, padding = "medium", style, ...props }: CardSectionProps) {
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

export function CardFooter({ render, padding = "medium", style, ...props }: CardSectionProps) {
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

export function CardTitle({ render, style, ...props }: CardTitleProps) {
  const stylexProps = stylex.props(cardTextStyles.title, style);
  const mergedProps = mergeProps(stylexProps, props);
  return useRender({
    defaultTagName: "div",
    props: mergedProps,
    render,
  });
}

type CardDescriptionProps = PropsWithStylex<useRender.ComponentProps<"p">>;

export function CardDescription({ render, style, ...props }: CardDescriptionProps) {
  const stylexProps = stylex.props(cardTextStyles.description, style);
  const mergedProps = mergeProps(stylexProps, props);
  return useRender({
    defaultTagName: "div",
    props: mergedProps,
    render,
  });
}

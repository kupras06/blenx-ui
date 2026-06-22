import { useRender } from "@base-ui/react";
import clsx from "clsx";
import type { _BaseDivProps } from "#utils/types";
import { Surface, type SurfaceProps } from "../Surface/surface";
import {
  title as titleStyle,
  description as descriptionStyle,
  sectionBase,
  sectionHeader,
  sectionBody,
  sectionFooter,
  sectionPadding,
} from "./card.css";

type CardProps = SurfaceProps;

type CardSectionProps = _BaseDivProps & {
  padding?: "small" | "medium" | "large";
};

function Card(props: CardProps) {
  return <Surface padding="medium" withBorder variant="sunken" {...props} />;
}

function CardHeader({ render, padding = "medium", className, style, ...props }: CardSectionProps) {
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(sectionBase, sectionHeader, sectionPadding[padding], className),
      style,
      ...props,
    },
    render,
  });
}

function CardBody({ render, padding = "medium", className, style, ...props }: CardSectionProps) {
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(sectionBase, sectionBody, sectionPadding[padding], className),
      style,
      ...props,
    },
    render,
  });
}

function CardFooter({ render, padding = "medium", className, style, ...props }: CardSectionProps) {
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(sectionBase, sectionFooter, sectionPadding[padding], className),
      style,
      ...props,
    },
    render,
  });
}

type CardTitleProps = useRender.ComponentProps<"h1"> & {
  className?: string;
  style?: React.CSSProperties;
};

function CardTitle({ render, className, style, ...props }: CardTitleProps) {
  return useRender({
    defaultTagName: "div",
    props: { className: clsx(titleStyle, className), style, ...props },
    render,
  });
}

type CardDescriptionProps = useRender.ComponentProps<"p"> & {
  className?: string;
  style?: React.CSSProperties;
};

function CardDescription({ render, className, style, ...props }: CardDescriptionProps) {
  return useRender({
    defaultTagName: "div",
    props: { className: clsx(descriptionStyle, className), style, ...props },
    render,
  });
}

export type { CardProps, CardDescriptionProps, CardSectionProps, CardTitleProps };
export { Card, CardDescription, CardTitle, CardFooter, CardBody, CardHeader };

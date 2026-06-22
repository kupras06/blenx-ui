import { useRender } from "@base-ui/react/use-render";
import clsx from "clsx";
import type React from "react";
import { textVariants } from "./text.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { applyBaseSprinkles } from "#utils/styles";
import type { BaseSprinkles } from "#utils/sprinkles.css";
import type { _BaseDivProps } from "#utils/types";

const variantTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",

  body1: "p",
  body2: "p",
  body3: "p",
  body4: "p",
  p: "p",

  caption: "span",
  creatorNote: "aside",
  code: "code",
  div: "div",
} as const satisfies Record<string, keyof React.JSX.IntrinsicElements>;

export type TextProps = _BaseDivProps &
  BaseSprinkles &
  RecipeVariants<typeof textVariants> & { span?: boolean };

export function Text({
  variant = "body1",
  textAlign,
  weight,
  className,
  style,
  size = "medium",
  render,
  span,
  transform = "none",
  ...props
}: TextProps): React.ReactElement {
  const [baseStyles, htmlProps] = applyBaseSprinkles(props);
  const rootCls = clsx(
    baseStyles,
    textVariants({ variant, textAlign, weight, transform, size }),
    className,
  );
  if (span) {
    return useRender({
      defaultTagName: "span",
      props: { className: rootCls, style, ...htmlProps },
      render,
    });
  }
  return useRender({
    defaultTagName: variantTag[variant],
    props: { className: rootCls, style, ...htmlProps },
    render,
  });
}

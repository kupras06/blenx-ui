import { useRender } from "@base-ui/react/use-render";
import clsx from "clsx";
import type React from "react";
import { textVariants } from "./text.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import type { BaseSprinkles } from "../../utils/sprinkles.css";
import { applyBaseSprinkles } from "../../utils/ve-style.utils";
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

export type TextProps = useRender.ComponentProps<"div"> &
  BaseSprinkles &
  RecipeVariants<typeof textVariants> & { span?: boolean } & {
    size?: BaseSprinkles["fontSize"];
  };

export function Text({
  variant = "body1",
  textAlign,
  weight,
  className,
  color = "primary",
  style,
  size,
  render,
  span,
  transform = "none",
  ...props
}: TextProps): React.ReactElement {
  const [baseStyles, htmlProps] = applyBaseSprinkles({ ...props, color, fontSize: size });
  const rootCls = clsx(
    baseStyles,
    textVariants({ variant, textAlign, weight, transform }),
    className,
  );
  const mergedProps = { className: rootCls, style, ...htmlProps };
  if (span) {
    return useRender({
      defaultTagName: "span",
      props: mergedProps,
      render,
    });
  }
  return useRender({
    defaultTagName: variantTag[variant],
    props: mergedProps,
    render,
  });
}

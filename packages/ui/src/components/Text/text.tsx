import { useRender } from "@base-ui/react/use-render";
import clsx from "clsx";
import type React from "react";
import {
  base,
  variant as variantRecipe,
  align as alignRecipe,
  weight as weightRecipe,
  transform as transformRecipe,
  size as sizeRecipe,
} from "./text.css";
import { Box, type BoxProps } from "../Box/box";

const variantTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "div",
  body2: "div",
  body3: "div",
  body4: "div",
  caption: "div",
  creatorNote: "p",
  p: "p",
  code: "code",
} as const satisfies Record<string, keyof React.JSX.IntrinsicElements>;
export type TextVariant = keyof typeof variantTag;

export type TextProps = BoxProps & {
  variant?: TextVariant;
  textAlign?: "left" | "center" | "right";
  weight?: "regular" | "medium" | "semibold" | "bold";
  transform?: "uppercase" | "capitalize" | "none" | "lowercase";
  size?:
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "xxxlarge"
    | "huge"
    | "massive"
    | "titanic";
  span?: boolean;
};

export function Text({
  variant = "body1",
  color,
  textAlign,
  weight,
  className,
  style,
  size: textSize = "medium",
  render,
  span,
  transform = "none",
  children,
  ...props
}: TextProps): React.ReactElement {
  const rootCls = clsx(
    base,
    variantRecipe({ variant }),
    textAlign && alignRecipe({ textAlign }),
    weight && weightRecipe({ weight }),
    transformRecipe({ transform }),
    sizeRecipe({ size: textSize }),
    className,
  );

  if (span) {
    return useRender({
      defaultTagName: "span",
      props: { className: rootCls, style, children, ...props },
      render,
    });
  }

  return (
    <Box render={render} className={rootCls} style={style} color={color} {...props}>
      {children}
    </Box>
  );
}

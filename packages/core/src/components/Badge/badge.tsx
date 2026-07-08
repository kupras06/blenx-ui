import clsx from "clsx";
import { badgeRecipe } from "./badge.css";
import { Box, type BoxProps } from "../Box/box";
import type { RecipeVariants } from "@vanilla-extract/recipes";

type Props = BoxProps & RecipeVariants<typeof badgeRecipe>;

export function Badge({
  variant = "solid",
  palette = "default",
  className,
  style,
  ...props
}: Props) {
  return (
    <Box className={clsx(badgeRecipe({ variant, palette }), className)} style={style} {...props} />
  );
}

import clsx from "clsx";
import { badgeRecipe } from "./badge.css";
import { Box, type BoxProps } from "../Box/box";
import type { RecipeVariants } from "@vanilla-extract/recipes";

type Props = BoxProps & RecipeVariants<typeof badgeRecipe>;

export function Badge({ variant, appearance, className, style, ...props }: Props) {
  return (
    <Box
      className={clsx(badgeRecipe({ variant, appearance }), className)}
      style={style}
      {...props}
    />
  );
}

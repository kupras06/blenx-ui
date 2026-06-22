import clsx from "clsx";
import type { BoxProps } from "../Box/box";
import { Box } from "../Box/box";
import { variantRecipe } from "./surface.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
type SurfaceProps = BoxProps & RecipeVariants<typeof variantRecipe>;

function Surface({ variant, interactive, className, style, ...props }: SurfaceProps) {
  return (
    <Box
      className={clsx(variantRecipe({ variant, interactive }), className)}
      style={style}
      {...props}
    />
  );
}

export type { SurfaceProps };
export { Surface };

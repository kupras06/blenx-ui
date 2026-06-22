import clsx from "clsx";
import { Box, type BoxProps } from "../Box/box";
import { gridRecipe, gridGapVariants, gridSpanVariants, gridItem } from "./grid.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

type GridVariants = RecipeVariants<typeof gridRecipe>;
type SpacingToken = keyof typeof gridGapVariants;

export type GridProps = Omit<BoxProps, "gap"> &
  GridVariants & {
    gap?: SpacingToken;
  };

export type GridItemProps = BoxProps & {
  span?: keyof typeof gridSpanVariants;
};

function Grid({
  gap: gapProp = "medium",
  columns,
  align,
  justify,
  className,
  style,
  ...props
}: GridProps) {
  return (
    <Box
      display="grid"
      className={clsx(
        gridRecipe({ columns, align, justify }),
        gapProp && gridGapVariants[gapProp],
        className,
      )}
      style={style}
      {...props}
    />
  );
}

function GridItem({ span: spanProp, className, style, ...props }: GridItemProps) {
  return (
    <Box
      className={clsx(gridItem, spanProp && gridSpanVariants[spanProp], className)}
      style={style}
      {...props}
    />
  );
}

export { Grid, GridItem };

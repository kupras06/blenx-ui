import clsx from "clsx";
import { Box, type BoxProps } from "../Box/box";
import { gridSprinkles } from "../../utils/sprinkles.css";
import { gridSpanVariants, gridItem } from "./grid.css";
import { applyGridSprinkles } from "../../utils/ve-style.utils";

type GridSprinkles = Parameters<typeof gridSprinkles>[0];

export type GridProps = Omit<BoxProps, "columns" | "gap" | "align"> & GridSprinkles;

export type GridItemProps = BoxProps & {
  span?: keyof typeof gridSpanVariants;
};

function Grid({ className, style, ...props }: GridProps) {
  const [gridStyles, restProps] = applyGridSprinkles(props);
  return (
    <Box display="grid" className={clsx(gridStyles, className)} style={style} {...restProps} />
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

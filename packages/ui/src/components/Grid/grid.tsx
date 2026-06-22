import clsx from "clsx";
import { Box, type BoxProps } from "../Box/box";
import { gridSprinkles } from "../../utils/sprinkles.css";
import { gridSpanVariants, gridItem } from "./grid.css";

type GridSprinkles = Parameters<typeof gridSprinkles>[0];

export type GridProps = Omit<BoxProps, "columns" | "gap" | "align"> & GridSprinkles;

export type GridItemProps = BoxProps & {
  span?: keyof typeof gridSpanVariants;
};

function Grid({
  columns,
  flow,
  align,
  justify,
  gap,
  rowGap,
  columnGap,
  className,
  style,
  ...props
}: GridProps) {
  return (
    <Box
      display="grid"
      className={clsx(
        gridSprinkles({
          columns,
          flow,
          align,
          justify,
          gap,
          rowGap,
          columnGap,
        }),
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

import clsx from "clsx";
import type { BoxProps } from "../Box/box";
import { Box } from "../Box/box";
import { stackRecipe } from "./stack.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

type StackVariants = RecipeVariants<typeof stackRecipe>;

export type StackProps = Omit<BoxProps, "display"> & StackVariants;

export function Stack({
  direction,
  gap,
  align,
  justify,
  wrap,
  className,
  style,
  ...props
}: StackProps) {
  return (
    <Box
      display="flex"
      className={clsx(stackRecipe({ direction, gap, align, justify, wrap }), className)}
      style={style}
      {...props}
    />
  );
}

type VStackProps = Omit<StackProps, "direction">;

export function VStack(props: VStackProps) {
  return <Stack direction="column" {...props} />;
}

type HStackProps = Omit<StackProps, "direction">;

export function HStack(props: HStackProps) {
  return <Stack direction="row" {...props} />;
}

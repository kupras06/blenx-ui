import type { BoxProps } from "../Box/box";
import { Box } from "../Box/box";
import clsx from "clsx";
import { containerRecipe } from "./container.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
export type ContainerVariants = RecipeVariants<typeof containerRecipe>;

type Props = BoxProps & ContainerVariants;
export type ContainerProps = Props;
export function Container({ size, centered = true, contentCentered, className, ...props }: Props) {
  return (
    <Box
      {...props}
      flexShrink={0}
      className={clsx(
        containerRecipe({
          size,
          centered,
          contentCentered,
        }),
        className,
      )}
    />
  );
}

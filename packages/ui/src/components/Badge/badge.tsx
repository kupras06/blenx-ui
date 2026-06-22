import clsx from "clsx";
import { badgeRecipe } from "./badge.css";
import { Box, type BoxProps } from "../Box/box";

type Variant = "default" | "primary" | "secondary" | "danger" | "sucess";

type Props = BoxProps & {
  variant?: Variant;
};

export function Badge({ variant = "default", className, style, ...props }: Props) {
  return <Box className={clsx(badgeRecipe({ variant }), className)} style={style} {...props} />;
}

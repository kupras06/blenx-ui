import clsx from "clsx";
import type { BoxProps } from "../Box/box";
import { Box } from "../Box/box";
import { base, interactive, variant } from "./surface.css";

type SurfaceVariant = "default" | "outline" | "raised" | "sunken";
type SurfaceProps = BoxProps & {
  variant?: SurfaceVariant;
  interactive?: boolean;
};

function Surface({
  variant: v = "default",
  interactive: int,
  className,
  style,
  ...props
}: SurfaceProps) {
  return (
    <Box
      className={clsx(base, variant({ variant: v }), int && interactive, className)}
      style={style}
      {...props}
    />
  );
}

export type { SurfaceProps, SurfaceVariant };
export { Surface };

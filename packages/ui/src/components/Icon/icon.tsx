import clsx from "clsx";
import { iconWrapper } from "./icon.css";
import { Box, type BoxProps } from "../Box/box";

type IconProps = BoxProps;

export function Icon({ children, className, style, ...props }: IconProps) {
  return (
    <Box className={clsx(iconWrapper, className)} style={style} {...props}>
      {children}
    </Box>
  );
}

export type { IconProps };

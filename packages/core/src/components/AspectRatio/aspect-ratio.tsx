"use client";

import clsx from "clsx";
import type { BoxProps } from "../Box/box";
import { Box } from "../Box/box";
import * as styles from "./aspect-ratio.css";

type AspectRatioProps = BoxProps & {
  ratio?: number;
};

export function AspectRatio({ ratio = 16 / 9, className, style, ...boxProps }: AspectRatioProps) {
  return (
    <Box
      className={clsx(styles.root, className)}
      style={{ aspectRatio: `${ratio}`, ...style }}
      {...boxProps}
    />
  );
}

import clsx from "clsx";
import type React from "react";
import { spinner } from "./spinner.css";
import { LoaderCircleIcon } from "../../icons";

type Props = Omit<
  React.ComponentProps<typeof LoaderCircleIcon>,
  "className" | "style" | "width" | "height"
> & {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
};

export function Spinner({ className, style, size, ...props }: Props): React.ReactElement {
  return (
    <LoaderCircleIcon
      className={clsx(spinner, className)}
      style={style}
      width={size}
      height={size}
      {...props}
    />
  );
}

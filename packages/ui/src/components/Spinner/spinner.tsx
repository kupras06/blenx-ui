import { CircleNotchIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import type React from "react";
import { spinner } from "./spinner.css";

type Props = Omit<React.ComponentProps<typeof CircleNotchIcon>, "className" | "style"> & {
  className?: string;
  style?: React.CSSProperties;
};

export function Spinner({ className, style, ...props }: Props): React.ReactElement {
  return (
    <CircleNotchIcon weight="bold" className={clsx(spinner, className)} style={style} {...props} />
  );
}

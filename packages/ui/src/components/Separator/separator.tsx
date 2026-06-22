import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import clsx from "clsx";
import type * as React from "react";
import { separator, withLabel, label as labelStyle } from "./separator.css";

type Orientation = "horizontal" | "vertical";
type SeparatorTone = "subtle" | "strong";

export type SeparatorProps = Omit<SeparatorPrimitive.Props, "className" | "style"> & {
  orientation?: Orientation;
  label?: React.ReactNode;
  tone?: SeparatorTone;
  className?: string;
  style?: React.CSSProperties;
};

export function Separator({
  orientation = "horizontal",
  label,
  tone = "strong",
  className,
  style,
  ...props
}: SeparatorProps) {
  const baseCls = separator({ orientation, tone });
  if (orientation === "horizontal" && label) {
    return (
      <SeparatorPrimitive className={clsx(baseCls, withLabel, className)} style={style} {...props}>
        <span className={labelStyle}>{label}</span>
      </SeparatorPrimitive>
    );
  }
  return <SeparatorPrimitive className={clsx(baseCls, className)} style={style} {...props} />;
}

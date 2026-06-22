"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import clsx from "clsx";
import { base, pressed, radius, size, variant } from "./toggle.css";

export type ToggleVariant = "default" | "outline";
export type ToggleSize = "default" | "sm" | "lg";
export type ToggleRadius =
  | "none"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "full";

export interface ToggleProps extends Omit<TogglePrimitive.Props, "className" | "style"> {
  variant?: ToggleVariant;
  size?: ToggleSize;
  className?: string;
  style?: React.CSSProperties;
  radius?: ToggleRadius;
}

export function Toggle({
  children,
  className,
  style,
  variant: v = "default",
  radius: r,
  size: s = "default",
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      {...props}
      render={(renderProps, state) => {
        return (
          <button
            {...renderProps}
            className={clsx(
              base,
              size({ size: s }),
              variant({ variant: v }),
              state.pressed && pressed[v],
              r && radius({ radius: r }),
              className,
            )}
            style={style}
          >
            {children}
          </button>
        );
      }}
    />
  );
}

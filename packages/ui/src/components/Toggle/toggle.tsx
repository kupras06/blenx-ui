"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import clsx from "clsx";
import { base, pressed, radius, size, variant } from "./toggle.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
export type ToggleVariant = "default" | "outline";
export type ToggleSize = "default" | "sm" | "lg";
export type ToggleRadius = RecipeVariants<typeof radius>;

export type ToggleProps = Omit<TogglePrimitive.Props, "className" | "style"> &
  ToggleRadius & {
    variant?: ToggleVariant;
    size?: ToggleSize;
    className?: string;
    style?: React.CSSProperties;
  };

export function Toggle({
  children,
  className,
  style,
  variant: v = "default",
  radius: r = "default",
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

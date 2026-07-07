"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import clsx from "clsx";
import { base, pressed, toggleRecipes } from "./toggle.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
export type ToggleSize = "default" | "sm" | "lg";
export type ToggleVariants = RecipeVariants<typeof toggleRecipes>;

export type ToggleProps = TogglePrimitive.Props &
  ToggleVariants & {
    size?: ToggleSize;
  };

export function Toggle({
  children,
  className,
  variant = "default",
  size = "default",
  palette,
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      data-palette={palette}
      {...props}
      render={(renderProps, state) => {
        return (
          <button
            {...renderProps}
            className={clsx(
              base,
              toggleRecipes({ size, variant, palette }),
              state.pressed && pressed[variant],
              className,
            )}
          >
            {children}
          </button>
        );
      }}
    />
  );
}

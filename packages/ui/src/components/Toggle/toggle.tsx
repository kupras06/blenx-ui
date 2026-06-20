"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import * as stylex from "@stylexjs/stylex";
import { type BorderRadiusProp, borderRadiusStyles } from "@blenx-dev/ui/utils/layout.styles";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import {
  togglePressedStyles,
  toggleSizeStyles,
  toggleStyles,
  toggleVariantStyles,
} from "./toggle.styles";

export type ToggleVariant = "default" | "outline";
export type ToggleSize = "default" | "sm" | "lg";

export interface ToggleProps extends PropsWithStylex<TogglePrimitive.Props> {
  variant?: ToggleVariant;
  size?: ToggleSize;
  style?: stylex.StyleXStyles;
  radius?: BorderRadiusProp;
}

export function Toggle({
  children,
  style,
  variant = "default",
  radius,
  size = "default",
  ...props
}: ToggleProps) {
  const variantStyle = toggleVariantStyles[variant];
  const sizeStyle = toggleSizeStyles[size];
  return (
    <TogglePrimitive
      data-slot="toggle"
      {...props}
      render={(renderProps, toggleState) => {
        const pressedStyle = togglePressedStyles[variant];
        const renderStyles = stylex.props(
          toggleStyles.base,
          variantStyle,
          sizeStyle,
          radius && borderRadiusStyles[radius],
          toggleState.pressed && pressedStyle,
          style,
        );
        return (
          <button {...renderProps} {...renderStyles}>
            {children}
          </button>
        );
      }}
    />
  );
}

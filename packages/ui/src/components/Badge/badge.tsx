import clsx from "clsx";
import {
  badgeBase,
  badgeDanger,
  badgeDefault,
  badgeOutline,
  badgePrimary,
  badgeRecipe,
  badgeSecondary,
  badgeSoft,
  badgeSolid,
  badgeSuccess,
} from "./badge.css";
import { Box, type BoxProps } from "../Box/box";
import type { RecipeVariants } from "@vanilla-extract/recipes";

type Props = BoxProps & RecipeVariants<typeof badgeRecipe>;

export const variantStyles: Record<string, string> = {
  default: badgeDefault,
  primary: badgePrimary,
  secondary: badgeSecondary,
  success: badgeSuccess,
  danger: badgeDanger,
};

export const appearanceStyles: Record<string, string> = {
  solid: badgeSolid,
  outline: badgeOutline,
  soft: badgeSoft,
};
export function getBadgeStyles(variant: string, appearance: string): string {
  const base = badgeBase;
  const v = variantStyles[variant] ?? badgeDefault;
  const a = appearanceStyles[appearance] ?? badgeSolid;
  return `${base} ${v} ${a}`;
}

export function Badge({ variant, appearance, className, style, ...props }: Props) {
  return (
    <Box
      className={clsx(badgeRecipe({ variant, appearance }), className)}
      style={style}
      {...props}
    />
  );
}

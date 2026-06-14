import * as stylex from "@stylexjs/stylex";
import { spacing, theme } from "@/lib/theme/theme.stylex";
export const badgeStyles = stylex.create({
  root: {
    display: "inline-block",
    padding: spacing.xsmall,
    borderRadius: theme.borderRadius,
    backgroundColor: theme.surfaceRaised,
    color: theme.contentPrimary,
    fontSize: 12,
    lineHeight: 1.2,
  },
  primary: {
    backgroundColor: theme.primary,
    color: theme.contentOnPrimary,
  },
  secondary: {
    backgroundColor: theme.secondary,
    color: theme.contentPrimary,
  },
});
export const badgeVariantStyles = stylex.create({
  default: {
    backgroundColor: theme.surfaceRaised,
    color: theme.contentPrimary,
  },
  primary: {
    backgroundColor: theme.primary,
    color: theme.contentOnPrimary,
  },
  secondary: {
    backgroundColor: theme.secondary,
    color: theme.contentPrimary,
  },
});

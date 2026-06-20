import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";

export const surfaceVariantStyles = stylex.create({
  default: {
    backgroundColor: theme.surface,
    borderRadius: theme.borderRadius,
  },
  outline: {
    backgroundColor: theme.surface,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.border,
  },
  raised: {
    backgroundColor: theme.surfaceRaised,
    boxShadow: theme.shadowMd,
  },
  sunken: {
    backgroundColor: theme.surfaceSubtle,
  },
});
export const surfaceInteractiveStyles = stylex.create({
  base: {
    cursor: "pointer",
    ":hover": {
      backgroundColor: theme.surfaceHover,
    },
    ":focus-visible": {
      outline: `2px solid ${theme.focusRing}`,
      outlineOffset: "2px",
    },
  },
});

export const surfaceStyles = stylex.create({
  base: {
    textDecoration: "none",
  },
});

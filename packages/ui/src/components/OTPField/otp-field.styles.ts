import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { fontSize, spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const otpFieldStyles = stylex.create({
  root: {
    display: "flex",
    alignItems: "center",
    gap: spacing["1"],
  },
});

export const otpInputStyles = stylex.create({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.borderRadius,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.border,
    backgroundColor: theme.background,
    color: theme.contentPrimary,
    outline: "none",
    caretColor: theme.primary,
    transition: "box-shadow 0.15s ease, border-color 0.15s ease",
    padding: 0,
    margin: 0,
    ":focus-visible": {
      borderColor: theme.borderStrong,
      boxShadow: `0 0 0 2px ${theme.borderStrong}`,
    },
    ":aria-invalid": {
      borderColor: theme.sentimentNegative,
      boxShadow: `0 0 0 2px ${theme.sentimentNegative}`,
    },
  },
  default: {
    width: spacing["9"],
    height: spacing["9"],
    fontSize: fontSize.medium,
  },
  lg: {
    width: spacing["10"],
    height: spacing["10"],
    fontSize: fontSize.large,
  },
});

export const otpSeparatorStyles = stylex.create({
  base: {
    backgroundColor: theme.border,
    borderRadius: "999px",
    width: spacing["3"],
    height: spacing["0.5"],
    flexShrink: 0,
  },
});

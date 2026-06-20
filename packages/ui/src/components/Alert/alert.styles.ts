import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import {
  borderRadius,
  borderWidth,
  fontSize,
  spacing,
} from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const alertStyles = stylex.create({
  root: {
    display: "flex",
    alignItems: "flex-start",
    gap: spacing["2"],
    paddingTop: spacing["3"],
    paddingBottom: spacing["3"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    borderRadius: borderRadius.medium,
    borderWidth: borderWidth.thin,
    borderStyle: "solid",
    fontSize: fontSize.small,
    lineHeight: 1.5,
  },
});

export const alertVariantStyles = stylex.create({
  info: {
    backgroundColor: theme.sentimentInfoSubtle,
    borderColor: theme.sentimentInfo,
    color: theme.sentimentInfo,
  },
  success: {
    backgroundColor: theme.sentimentPositiveSubtle,
    borderColor: theme.sentimentPositive,
    color: theme.sentimentPositive,
  },
  warning: {
    backgroundColor: theme.sentimentWarningSubtle,
    borderColor: theme.sentimentWarning,
    color: theme.sentimentWarning,
  },
  error: {
    backgroundColor: theme.sentimentNegativeSubtle,
    borderColor: theme.sentimentNegative,
    color: theme.sentimentNegative,
  },
});

import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import {
  borderRadius,
  borderWidth,
  fontSize,
  fontWeight,
  spacing,
} from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const tableColorStyles = stylex.create({
  secondary: {
    color: theme.contentSecondary,
  },
});
export const tableStyles = stylex.create({
  root: {
    width: "100%",
    borderCollapse: "collapse",
    color: theme.contentSecondary,
    boxSizing: "border-box",
  },
  head: {
    backgroundColor: theme.backgroundSubtle,
  },
  header: {
    paddingTop: spacing["2"],
    paddingBottom: spacing["2"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    fontSize: fontSize.xsmall,
    fontWeight: fontWeight.semibold,
    color: theme.contentSecondary,
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    borderBottomWidth: borderWidth.thin,
    borderBottomStyle: "solid",
    borderBottomColor: theme.border,
    whiteSpace: "nowrap",
    userSelect: "none",
  },
  row: {
    transition: "background-color 0.15s ease",
    ":hover": {
      backgroundColor: theme.surfaceHover,
    },
  },
  cell: {
    paddingTop: spacing["2"],
    paddingBottom: spacing["2"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    fontSize: fontSize.small,
    borderBottomWidth: borderWidth.hairline,
    borderBottomStyle: "solid",
    borderBottomColor: theme.borderSubtle,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  wrapper: {
    borderWidth: borderWidth.thin,
    borderStyle: "solid",
    borderColor: theme.border,
    borderRadius: borderRadius.medium,
    maxWidth: "100%",
    overflowX: "auto",
  },
});

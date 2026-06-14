import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/theme.stylex";

export const boxStyles = stylex.create({
  root: {
    boxSizing: "border-box",
  },
  withBorder: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: theme.borderRadius,
    borderColor: theme.border,
  },
  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  grow: {
    flexGrow: 1,
    minWidth: 0,
  },
  shrink: {
    flexShrink: 0,
  },
});

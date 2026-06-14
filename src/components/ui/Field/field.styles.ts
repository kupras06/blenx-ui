import * as stylex from "@stylexjs/stylex";
import { fontSize } from "@/lib/theme/theme.stylex";

export const fieldStyles = stylex.create({
  field: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
  },
  label: {
    display: "inline-flex",
    alignItems: "center",
    fontWeight: 400,
    fontSize: fontSize.medium,
    color: "inherit",
  },
  item: {
    display: "flex",
    flex: 1,
  },
  description: {
    fontSize: "12px",
    lineHeight: 1.4,
    color: "var(--muted-foreground, inherit)",
  },
  error: {
    fontSize: "12px",
    lineHeight: 1.4,
    color: "var(--destructive-foreground, inherit)",
  },
});

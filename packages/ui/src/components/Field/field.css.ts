import { style } from "@vanilla-extract/css";
import { fontSize } from "@blenx-dev/theme/tokens";

export const field = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  flex: 1,
});

export const label = style({
  display: "inline-flex",
  alignItems: "center",
  fontWeight: 400,
  fontSize: fontSize.md,
  color: "inherit",
});

export const item = style({
  display: "flex",
  flex: 1,
});

export const description = style({
  fontSize: "12px",
  lineHeight: 1.4,
  color: "var(--muted-foreground, inherit)",
});

export const error = style({
  fontSize: "12px",
  lineHeight: 1.4,
  color: "var(--destructive-foreground, inherit)",
});

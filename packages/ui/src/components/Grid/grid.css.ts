import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const columnStyle = (n: number) => ({
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  "@media": {
    "screen and (min-width: 640px)": {
      gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
    },
  },
});

export const gridRecipe = recipe({
  variants: {
    columns: {
      1: { gridTemplateColumns: "repeat(1, minmax(0, 1fr))" },
      2: columnStyle(2),
      3: columnStyle(3),
      4: columnStyle(4),
      5: columnStyle(5),
      6: columnStyle(6),
      7: columnStyle(7),
      8: columnStyle(8),
      9: columnStyle(9),
      10: columnStyle(10),
      11: columnStyle(11),
      12: columnStyle(12),
    },
    align: {
      start: { alignItems: "start" },
      center: { alignItems: "center" },
      end: { alignItems: "end" },
      stretch: { alignItems: "stretch" },
    },
    justify: {
      start: { justifyItems: "start" },
      center: { justifyItems: "center" },
      end: { justifyItems: "end" },
      stretch: { justifyItems: "stretch" },
    },
  },
});

export const gridGapVariants = {
  none: { gap: 0 },
  xxsmall: { gap: "4px" },
  xsmall: { gap: "8px" },
  small: { gap: "12px" },
  medium: { gap: "16px" },
  large: { gap: "24px" },
  xlarge: { gap: "32px" },
  xxlarge: { gap: "48px" },
  xxxlarge: { gap: "64px" },
  huge: { gap: "80px" },
  massive: { gap: "96px" },
} as const;

export const gridSpanVariants = {
  1: { gridColumn: "span 1 / span 1" },
  2: { gridColumn: "span 2 / span 2" },
  3: { gridColumn: "span 3 / span 3" },
  4: { gridColumn: "span 4 / span 4" },
  5: { gridColumn: "span 5 / span 5" },
  6: { gridColumn: "span 6 / span 6" },
  7: { gridColumn: "span 7 / span 7" },
  8: { gridColumn: "span 8 / span 8" },
  9: { gridColumn: "span 9 / span 9" },
  10: { gridColumn: "span 10 / span 10" },
  11: { gridColumn: "span 11 / span 11" },
  12: { gridColumn: "span 12 / span 12" },
} as const;

export const gridItem = style({
  boxSizing: "border-box",
  minWidth: 0,
});

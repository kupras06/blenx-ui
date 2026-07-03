import { style } from "@vanilla-extract/css";

const spanEntries: Record<number, { gridColumn: string }> = {};
for (let i = 1; i <= 12; i++) {
  spanEntries[i] = { gridColumn: `span ${i} / span ${i}` };
}
export const gridSpanVariants = spanEntries;

export const gridItem = style({
  minWidth: 0,
});

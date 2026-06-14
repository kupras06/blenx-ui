import * as stylex from "@stylexjs/stylex";

export const gridColumnStyles = stylex.create({
	1: { gridTemplateColumns: "repeat(1, minmax(0, 1fr))" },
	2: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
	3: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
	4: { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" },
	5: { gridTemplateColumns: "repeat(5, minmax(0, 1fr))" },
	6: { gridTemplateColumns: "repeat(6, minmax(0, 1fr))" },
	7: { gridTemplateColumns: "repeat(7, minmax(0, 1fr))" },
	8: { gridTemplateColumns: "repeat(8, minmax(0, 1fr))" },
	9: { gridTemplateColumns: "repeat(9, minmax(0, 1fr))" },
	10: { gridTemplateColumns: "repeat(10, minmax(0, 1fr))" },
	11: { gridTemplateColumns: "repeat(11, minmax(0, 1fr))" },
	12: { gridTemplateColumns: "repeat(12, minmax(0, 1fr))" },
});

export const gridAlignStyles = stylex.create({
	start: { alignItems: "start" },
	center: { alignItems: "center" },
	end: { alignItems: "end" },
	stretch: { alignItems: "stretch" },
});

export const gridJustifyStyles = stylex.create({
	start: { justifyItems: "start" },
	center: { justifyItems: "center" },
	end: { justifyItems: "end" },
	stretch: { justifyItems: "stretch" },
});

export const gridSpanStyles = stylex.create({
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
});

export const gridStyles = stylex.create({
	item: {
		boxSizing: "border-box",
		minWidth: 0,
	},
});

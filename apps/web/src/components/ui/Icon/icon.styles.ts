import * as stylex from "@stylexjs/stylex";

export const iconWrapperStyles = stylex.create({
	base: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		width: "fit-content",
		height: "fit-content",
		flexShrink: 0,
	},
});

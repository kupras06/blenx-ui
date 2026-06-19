import * as stylex from "@stylexjs/stylex";

export const spin = stylex.keyframes({
	from: {
		transform: "rotate(0deg)",
	},
	to: {
		transform: "rotate(360deg)",
	},
});

export const spinnerStyles = stylex.create({
	spinner: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		transformOrigin: "center",
		animationName: spin,
		animationDuration: "1s",
		animationIterationCount: "infinite",
		animationTimingFunction: "linear",
	},
});

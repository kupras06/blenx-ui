import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { duration } from "@/lib/theme/tokens.stylex";

export const HANDLE_SIZE = 8;

export const splitterStyles = stylex.create({
	root: {
		display: "flex",
		overflow: "hidden",
		width: "100%",
		height: "100%",
	},
	rootHorizontal: {
		flexDirection: "row",
	},
	rootVertical: {
		flexDirection: "column",
	},
	rootDisabled: {
		pointerEvents: "none",
		opacity: 0.6,
	},
	panel: {
		overflow: "auto",
		flexShrink: 0,
		flexBasis: 0,
	},
	handle: {
		position: "relative",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
		backgroundColor: theme.borderSubtle,
		transitionProperty: "background-color",
		transitionDuration: duration.fast,
		outline: "none",
		":hover": {
			backgroundColor: theme.border,
		},
		":focus-visible": {
			backgroundColor: theme.primary,
		},
	},
	handleActive: {
		backgroundColor: theme.primary,
	},
	handleDisabled: {
		cursor: "not-allowed",
		opacity: 0.4,
	},
	handleHorizontal: {
		width: HANDLE_SIZE,
		cursor: "col-resize",
	},
	handleVertical: {
		height: HANDLE_SIZE,
		cursor: "row-resize",
	},
});

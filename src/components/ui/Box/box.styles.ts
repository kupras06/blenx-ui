import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";

export const boxStyles = stylex.create({
	root: {
		boxSizing: "border-box",
		borderRadius: theme.borderRadius,
		display: "block",
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
	maxWidth: (value: string | number) => ({
		maxWidth: value,
	}),
});

export const boxSizeStyles = stylex.create({
	xxs: { maxWidth: 220 },
	xs: { maxWidth: 320 },
	sm: { maxWidth: 640 },
	md: { maxWidth: 768 },
	lg: { maxWidth: 1024 },
	xl: { maxWidth: 1280 },
	full: { maxWidth: "none" },
});

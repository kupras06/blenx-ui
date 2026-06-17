import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import type { paddingXStyles } from "./layout.styles";

export const colorStyles = stylex.create({
	primary: { color: theme.contentPrimary },
	secondary: { color: theme.contentSecondary },
	accent: { color: theme.contentAccent },
	disabled: { color: theme.contentDisabled },
	error: { color: theme.sentimentNegative },
	success: { color: theme.sentimentPositive },
	warning: { color: theme.sentimentWarning },
	info: { color: theme.sentimentInfo },
});

export const bgColorStyles = stylex.create({
	primary: { backgroundColor: theme.primary },
	secondary: { backgroundColor: theme.secondary },
	surface: { backgroundColor: theme.surface },
	disabled: { backgroundColor: theme.surfaceSubtle },
	error: { backgroundColor: theme.sentimentNegativeSubtle },
	success: { backgroundColor: theme.sentimentPositiveSubtle },
	warning: { backgroundColor: theme.sentimentWarningSubtle },
	info: { backgroundColor: theme.sentimentInfoSubtle },
});
type BoxSpacing = keyof typeof paddingXStyles;
export type SpacingProps = {
	padding?: BoxSpacing;
	paddingX?: BoxSpacing;
	paddingY?: BoxSpacing;
	margin?: BoxSpacing;
	marginX?: BoxSpacing;
	marginY?: BoxSpacing;
};

export type ColorProps = {
	color?: keyof typeof colorStyles;
	backgroundColor?: keyof typeof bgColorStyles;
};

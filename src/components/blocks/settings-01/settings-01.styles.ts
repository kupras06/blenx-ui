import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, fontSize } from "@/lib/theme/tokens.stylex";

export const settingsStyles = stylex.create({
	container: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.medium,
		padding: spacing.large,
		maxWidth: 800,
		marginLeft: "auto",
		marginRight: "auto",
		boxSizing: "border-box",
	},
	tabsList: {
		display: "flex",
		flexDirection: "row",
		gap: 0,
		overflowX: "auto",
	},
	section: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.medium,
	},
	fieldGroup: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.small,
	},
	switchRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingTop: spacing.small,
		paddingBottom: spacing.small,
	},
	switchLabel: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.xxsmall,
	},
	switchTitle: {
		fontSize: fontSize.small,
		fontWeight: 500,
	},
	switchDescription: {
		fontSize: fontSize.xsmall,
		color: theme.contentSecondary,
	},
	billingInfo: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.small,
	},
	planRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	fitContent: {
		width: "fit-content",
	},
});

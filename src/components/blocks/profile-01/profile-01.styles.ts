import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, fontSize } from "@/lib/theme/tokens.stylex";

export const profileStyles = stylex.create({
	container: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.large,
		padding: spacing.large,
		maxWidth: 720,
		marginLeft: "auto",
		marginRight: "auto",
		boxSizing: "border-box",
	},
	profileHeader: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: spacing.medium,
	},
	avatarSection: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: spacing.xsmall,
	},
	avatarUpload: {
		position: "relative",
		cursor: "pointer",
	},
	uploadOverlay: {
		position: "absolute",
		inset: 0,
		borderRadius: "50%",
		backgroundColor: "rgba(0,0,0,0.4)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "white",
		opacity: 0,
		transition: "opacity 0.2s",
	},
	formSection: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.medium,
	},
	formRow: {
		display: "flex",
		flexDirection: "row",
		gap: spacing.medium,
	},
	fieldGroup: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.small,
		flex: 1,
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
	dangerZone: {
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: theme.sentimentNegativeSubtle,
		borderRadius: theme.borderRadius,
		padding: spacing.medium,
		display: "flex",
		flexDirection: "column",
		gap: spacing.medium,
	},
	dangerHeader: {
		color: theme.sentimentNegative,
		fontWeight: 600,
	},
	sectionTitle: {
		fontSize: fontSize.medium,
		fontWeight: 600,
		marginBottom: spacing.small,
	},
	fitContent: {
		width: "fit-content",
	},
});

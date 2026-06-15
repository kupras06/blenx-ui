import * as stylex from "@stylexjs/stylex";
import { Link } from "@tanstack/react-router";
import { theme } from "@/lib/theme/contract.stylex";
import { fontSize, letterSpacing, spacing } from "@/lib/theme/tokens.stylex";
import { Separator, Text } from "./ui";

const styles = stylex.create({
	header: {
		position: "sticky",
		top: 0,
		zIndex: 200,
		backgroundColor: theme.background,
		paddingInline: spacing["4"],
		paddingBlock: spacing["3"],
	},
	inner: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: spacing.small,
		justifyContent: "space-between",
	},
	logo: {
		textDecoration: "none",
		color: theme.contentPrimary,
		fontWeight: 700,
		fontSize: fontSize.large,
		letterSpacing: letterSpacing.tight,
		lineHeight: 1,
	},
	link: {
		textDecoration: "none",
		color: theme.contentSecondary,
		lineHeight: 1,
		paddingBlock: spacing["1"],
		fontSize: fontSize.small,
	},
	divider: {
		border: "none",
		borderTopWidth: "1px",
		borderTopStyle: "solid",
		borderTopColor: theme.border,
	},
});

function Header() {
	return (
		<div {...stylex.props(styles.header)}>
			<div {...stylex.props(styles.inner)}>
				<Link to="/" {...stylex.props(styles.logo)}>
					<Text variant="h3">Blenx UI</Text>
				</Link>
				<a
					href="https://github.com/blenx-dev/blenx-dev"
					target="_blank"
					rel="noopener noreferrer"
					{...stylex.props(styles.link)}
				>
					GitHub &rarr;
				</a>
			</div>
			<Separator />
		</div>
	);
}

export { Header };

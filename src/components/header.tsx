import { ListIcon, XIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { ClientOnly, Link, useLocation } from "@tanstack/react-router";
import { useMediaQuery } from "@uidotdev/usehooks";
import { theme } from "@/lib/theme/contract.stylex";
import { fontSize, letterSpacing, spacing } from "@/lib/theme/tokens.stylex";
import { useSidebarStore } from "@/stores/docs-sidebar";
import { Button, Separator, Text } from "./ui";

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
	navLinks: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: spacing["4"],
	},
	link: {
		textDecoration: "none",
		color: theme.contentSecondary,
		lineHeight: 1,
		paddingBlock: spacing["1"],
		fontSize: fontSize.small,
	},
	activeLink: {
		color: theme.contentPrimary,
		fontWeight: 600,
	},
	divider: {
		border: "none",
		borderTopWidth: "1px",
		borderTopStyle: "solid",
		borderTopColor: theme.border,
	},
});
function DocsRouteOption() {
	const sidebarOpen = useSidebarStore((st) => st.isOpen);
	const setOpen = useSidebarStore((st) => st.setOpen);
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	const { pathname } = useLocation();
	const isDocsActive = pathname.startsWith("/docs");
	if (isSmallDevice)
		return (
			<Button
				size="icon"
				variant="secondary"
				onClick={() => setOpen(!sidebarOpen)}
				aria-label="Toggle sidebar"
			>
				{sidebarOpen ? <XIcon /> : <ListIcon />}
			</Button>
		);
	return (
		<Button
			size="xsmall"
			variant={isDocsActive ? "soft" : "ghost"}
			render={<Link to="/docs" />}
		>
			Docs
		</Button>
	);
}
function Header() {
	const { pathname } = useLocation();
	const isThemeBuilderActive = pathname === "/theme-builder";
	const isHomeActive = pathname === "/";
	return (
		<div {...stylex.props(styles.header)}>
			<div {...stylex.props(styles.inner)}>
				<Link
					to="/"
					{...stylex.props(styles.logo, isHomeActive && styles.activeLink)}
				>
					<Text variant="h3">Blenx UI</Text>
				</Link>
				<div {...stylex.props(styles.navLinks)}>
					<ClientOnly>
						<DocsRouteOption />
					</ClientOnly>
					<Button
						size="xsmall"
						variant={isThemeBuilderActive ? "soft" : "ghost"}
						render={<Link to="/theme-builder" />}
					>
						Theme Builder
					</Button>
					<Button
						size="xsmall"
						variant="link"
						render={
							<a
								href="https://github.com/blenx-dev/blenx-dev"
								target="_blank"
								rel="noopener noreferrer"
								{...stylex.props(styles.link)}
							/>
						}
					>
						GitHub &rarr;
					</Button>
				</div>
			</div>
			<Separator />
		</div>
	);
}

export { Header };

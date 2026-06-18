import { ListIcon, XIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { ClientOnly, Link, useLocation } from "@tanstack/react-router";
import { useMediaQuery } from "@uidotdev/usehooks";
import { GITHUB_URL } from "@/constants";
import { theme } from "@/lib/theme/contract.stylex";
import { fontSize, letterSpacing, spacing } from "@/lib/theme/tokens.stylex";
import { useSidebarStore } from "@/stores/docs-sidebar";
import { Button, Container, HStack, Separator, Text } from "./ui";

const styles = stylex.create({
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
	const { pathname } = useLocation();
	const isDocsActive = pathname.startsWith("/docs");
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
function BlocksRouteOption() {
	const { pathname } = useLocation();
	const isBlocksActive = pathname.startsWith("/blocks");
	return (
		<Button
			size="xsmall"
			variant={isBlocksActive ? "soft" : "ghost"}
			render={<Link to="/blocks" />}
		>
			Blocks
		</Button>
	);
}
function DocsRouteSidebarOption() {
	const sidebarOpen = useSidebarStore((st) => st.isOpen);
	const setOpen = useSidebarStore((st) => st.setOpen);
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	if (isSmallDevice)
		return (
			<Button
				size="icon"
				variant="soft"
				onClick={() => setOpen(!sidebarOpen)}
				aria-label="Toggle sidebar"
			>
				{sidebarOpen ? <XIcon /> : <ListIcon />}
			</Button>
		);
}
function Header() {
	const { pathname } = useLocation();
	const isThemeBuilderActive = pathname === "/theme-builder";
	const isHomeActive = pathname === "/";
	return (
		<>
			<Container size="full" paddingX="medium" paddingY="none">
				<HStack align="center" justify="between" paddingY="xsmall">
					<HStack align="center" justify="between" gap="xxsmall">
						<ClientOnly>
							<DocsRouteSidebarOption />
						</ClientOnly>
						<Link
							to="/"
							{...stylex.props(styles.logo, isHomeActive && styles.activeLink)}
						>
							<Text variant="h3">Blenx UI</Text>
						</Link>
					</HStack>
					<div {...stylex.props(styles.navLinks)}>
						<ClientOnly>
							<DocsRouteOption />
							<BlocksRouteOption />
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
									href={GITHUB_URL}
									target="_blank"
									aria-label="Project Github URL"
									rel="noopener noreferrer"
									{...stylex.props(styles.link)}
								/>
							}
						>
							GitHub &rarr;
						</Button>
					</div>
				</HStack>
			</Container>
			<Separator />
		</>
	);
}

export { Header };

import {
	WarningIcon,
	ListIcon,
	MoonIcon,
	SunIcon,
	XIcon,
} from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { ClientOnly, Link, useLocation } from "@tanstack/react-router";
import { useMediaQuery, useLocalStorage } from "@uidotdev/usehooks";
import { GITHUB_URL } from "@/constants";
import { theme } from "@/lib/theme/contract.stylex";
import { fontSize, letterSpacing, spacing } from "@/lib/theme/tokens.stylex";
import { useSidebarStore } from "@/stores/docs-sidebar";
import { Button, Container, HStack, Icon, Separator, Text } from "./ui";
import { darkTheme, lightTheme } from "@/lib/app-theme.stylex";
import { useEffect } from "react";

const styles = stylex.create({
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
	activeLink: {
		color: theme.contentPrimary,
		fontWeight: 600,
	},
});
function DocsRouteOption() {
	const { pathname } = useLocation();
	const isDocsActive = pathname.startsWith("/docs");
	return (
		<Button
			size="xsmall"
			variant={isDocsActive ? "soft" : "ghost"}
			nativeButton={false}
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
			nativeButton={false}
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
const lightThemeClass = stylex.props(lightTheme).className || "";
const darkThemeClass = stylex.props(darkTheme).className || "";
export function ThemeEffect() {
	const [themeMode] = useLocalStorage("Blenx-Theme", "light");

	useEffect(() => {
		document.documentElement.classList.remove(
			...lightThemeClass.split(" "),
			...darkThemeClass.split(" "),
		);
		document.documentElement.classList.add(
			...(themeMode === "dark" ? darkThemeClass : lightThemeClass).split(" "),
		);
		document.documentElement.setAttribute("data-theme", themeMode);
	}, [themeMode]);

	return null;
}
function ThemeToggle() {
	const [themeMode, setThemeMode] = useLocalStorage("Blenx-Theme", "light");

	const handleToggle = () => {
		const previousTheme = themeMode;
		const nextTheme = previousTheme === "light" ? "dark" : "light";
		setThemeMode(nextTheme);
		document.documentElement.classList.remove(
			...lightThemeClass.split(" "),
			...darkThemeClass.split(" "),
		);
		if (nextTheme === "light") {
			document.documentElement.classList.add(...lightThemeClass.split(" "));
		} else {
			document.documentElement.classList.add(...darkThemeClass.split(" "));
		}
		document.documentElement.setAttribute("data-theme", nextTheme);
	};
	return (
		<Button
			size="icon"
			variant="ghost"
			onClick={handleToggle}
			aria-label={`Switch to ${themeMode === "light" ? "dark" : "light"} mode`}
		>
			{themeMode === "light" ? <MoonIcon /> : <SunIcon />}
		</Button>
	);
}

function Header() {
	const { pathname } = useLocation();
	const isDocsActive = pathname.startsWith("/docs");
	const isBlocksActive = pathname.startsWith("/blocks");
	const isThemeBuilderActive = pathname === "/theme-builder";
	const isHomeActive = pathname === "/";
	return (
		<>
			<Container size="full" paddingX="medium" paddingY="none">
				<HStack align="center" justify="between" paddingY="xsmall">
					<HStack align="center" justify="between" gap="xxsmall">
						<ClientOnly>
							{isDocsActive && <DocsRouteSidebarOption />}
						</ClientOnly>
						<Link
							to="/"
							{...stylex.props(styles.logo, isHomeActive && styles.activeLink)}
						>
							<Text variant="h3">Blenx UI</Text>
						</Link>
					</HStack>
					<HStack>
						<ClientOnly>
							{!isDocsActive && <DocsRouteOption />}
							{isDocsActive && <BlocksRouteOption />}
							<ThemeToggle />
						</ClientOnly>
						{isDocsActive && (
							<Button
								size="xsmall"
								variant={isThemeBuilderActive ? "soft" : "ghost"}
								nativeButton={false}
								render={<Link to="/theme-builder" />}
							>
								<HStack gap="xxsmall" position="relative">
									Theme Builder
									<Icon
										color="error"
										backgroundColor="error"
										position="absolute"
										bottom="small"
										padding="xxsmall"
										left="massive"
									>
										<WarningIcon />
									</Icon>
								</HStack>
							</Button>
						)}
						{!isDocsActive && !isBlocksActive && (
							<Button
								size="xsmall"
								nativeButton={false}
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
						)}
					</HStack>
				</HStack>
			</Container>
			<Separator />
		</>
	);
}

export { Header };

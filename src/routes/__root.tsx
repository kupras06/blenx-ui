import * as stylex from "@stylexjs/stylex";
import "../app.css";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "@/components/header";
import { Box, VStack } from "@/components/ui";
import { appTheme } from "@/lib/app-theme.stylex";
import { theme } from "@/lib/theme/contract.stylex";

export const Route = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Blenx UI",
			},
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=DM+Mono&display=swap",
			},
		],
	}),

	component: RootDocument,
});

const rootStyles = stylex.create({
	body: {
		backgroundColor: theme.background,
		color: theme.contentPrimary,
		margin: 0,
	},
});

function RootDocument() {
	return (
		<html lang="en" {...stylex.props(appTheme)}>
			<head>
				<HeadContent />
				{import.meta.env.DEV && (
					<>
						<link rel="stylesheet" href="/virtual:stylex.css" />
						<script type="module" src="/@id/virtual:stylex:runtime" />
					</>
				)}
			</head>
			<body {...stylex.props(rootStyles.body)}>
				<VStack>
					<Header />
					<Box render={<main />} grow>
						<Outlet />
					</Box>
				</VStack>
				<TanStackRouterDevtools position="bottom-left" />
				<Scripts />
			</body>
		</html>
	);
}

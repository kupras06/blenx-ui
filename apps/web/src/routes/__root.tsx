import * as stylex from "@stylexjs/stylex";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
	ClientOnly,
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { Header, ThemeEffect } from "@/components/header";
import { Box, Container } from "@blenx-dev/ui/components";;
import { darkTheme } from "@/lib/app-theme.stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { fonts } from "@/lib/theme/tokens.stylex";
import appCss from "@/app.css?url";
import { Analytics } from "@vercel/analytics/react"
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
	{
		head: () => ({
			meta: [
				{
					charSet: "utf8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					title:
						"Blenx UI — Modern React Component Library powered by StyleX & Base UI",
				},
				{
					name: "description",
					content:
						"A modern, no-Tailwind React component library built with StyleX and Base UI. Accessible, headless primitives with shadcn-style ergonomics.",
				},
				{
					name: "keywords",
					content:
						"stylex, base-ui, react, react-components, component-library, ui-kit, design-system, no-tailwind, shadcn, modern, typescript, zustand, ui-components, headless-ui, accessible-components",
				},
				{
					name: "author",
					content: "Blenx UI",
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "og:site_name",
					content: "Blenx UI",
				},
				{
					property: "og:title",
					content: "Blenx UI — Modern React Component Library",
				},
				{
					property: "og:description",
					content:
						"Built with StyleX and Base UI. Accessible, headless primitives with shadcn-style ergonomics.",
				},
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
				{
					name: "twitter:title",
					content: "Blenx UI — Modern React Component Library",
				},
				{
					name: "twitter:description",
					content:
						"Built with StyleX and Base UI. Accessible, headless primitives with shadcn-style ergonomics.",
				},
			],
			links: [
				{
					rel: "canonical",
					href: "https://blenx-ui.vercel.app/",
				},
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
				{
					rel: "stylesheet",
					href: appCss,
				},
				{
					rel: "manifest",
					href: "/manifest.json",
				},
			],
		}),

		component: RootDocument,
	},
);

const rootStyles = stylex.create({
	body: {
		backgroundColor: theme.background,
		color: theme.contentPrimary,
		margin: 0,
		fontFamily: fonts.display,
		fontSize: "14px",
		lineHeight: 1.5,
		maxWidth: "100svw",
	},
});

function RootDocument() {
	const { queryClient } = Route.useRouteContext();

	return (
		<html lang="en" {...stylex.props(darkTheme)}>
			<head>
				<HeadContent />
				<meta property="og:image" content="https://blenx-ui.vercel.app/og" />
				<meta name="twitter:image" content="https://blenx-ui.vercel.app/og" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: "Blenx UI",
							url: "https://blenx-ui.vercel.app",
							description:
								"A modern, no-Tailwind React component library built with StyleX and Base UI.",
							applicationCategory: "Component Library",
							keywords:
								"stylex, base-ui, react, component-library, ui-kit, design-system, shadcn",
						}),
					}}
				/>
				{import.meta.env.DEV ? (
					<>
						<link rel="stylesheet" href="/virtual:stylex.css" />
						<script type="module" src="/@id/virtual:stylex:runtime" />
					</>
				) : (
					<link rel="stylesheet" href="/assets/stylex.css" />
				)}
			</head>
			<body {...stylex.props(rootStyles.body)}>
				<ClientOnly>
					<ThemeEffect />
				</ClientOnly>
				<QueryClientProvider client={queryClient}>
					<Container size="full">
						<Header />
						<Box render={<main />} grow>
							<Outlet />
						</Box>
					</Container>
				</QueryClientProvider>
				<Analytics />
				<Scripts />
			</body>
		</html>
	);
}

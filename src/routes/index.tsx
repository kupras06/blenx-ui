import * as stylex from "@stylexjs/stylex";
import { createFileRoute, Link } from "@tanstack/react-router";
import { fontSize, fonts, spacing } from "@/lib/theme/theme.stylex";
import { Box, Container, Grid, Separator, Surface, Text, VStack } from "@/ui";

const styles = stylex.create({
	grid: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: spacing["4"],
	},
	docLink: {
		display: "block",
		textDecoration: "none",
		color: "inherit",
	},
	list: {
		listStyle: "disc",
		paddingInlineStart: spacing["6"],
		margin: 0,
	},
	code: {
		fontFamily: fonts.mono,
		fontSize: fontSize.small,
	},
	gettingStartedMargin: {
		marginTop: spacing["4"],
	},
});

const docLinks = [
	{
		to: "/docs/installation",
		title: "Installation \u2192",
		desc: "Configure your project and install components.",
	},
	{
		to: "/docs/styling",
		title: "Styling \u2192",
		desc: "How Stylex works in Blenx UI.",
	},
	{
		to: "/docs/primitives",
		title: "Primitives \u2192",
		desc: "Base UI component architecture.",
	},
	{
		to: "/docs/limitations",
		title: "Limitations \u2192",
		desc: "Important constraints and tradeoffs.",
	},
];

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<Container size="md">
			<Box padding="medium">
				<VStack gap="small">
					<Text variant="h1">Blenx UI</Text>
					<Text variant="body1" color="secondary">
						A design system of React components built with Stylex and Base UI.
						Distributed via the shadcn registry model.
					</Text>
				</VStack>
			</Box>

			<Surface variant="outline" padding="medium">
				<VStack gap="small">
					<Text variant="h4">Getting Started</Text>
					<Text variant="body2" color="secondary">
						Install individual components directly into your project.
					</Text>
					<Surface variant="sunken" padding="medium">
						<code {...stylex.props(styles.code)}>
							npx shadcn@latest add http://localhost:3001/reg/button.json
						</code>
					</Surface>
				</VStack>
			</Surface>

			<div {...stylex.props(styles.gettingStartedMargin)}>
				<Surface variant="outline" padding="medium">
					<VStack gap="small">
						<Text variant="h4">Prerequisites</Text>
						<ul {...stylex.props(styles.list)}>
							{["Base UI", "Stylex bundler plugin", "TypeScript"].map(
								(item) => (
									<li key={item}>
										<Text variant="body2" color="secondary" render={<span />}>
											{item}
										</Text>
									</li>
								),
							)}
						</ul>
					</VStack>
				</Surface>
			</div>

			<Separator tone="subtle" />

			<VStack gap="medium">
				<Text variant="h2">Documentation</Text>
				<Grid {...stylex.props(styles.grid)}>
					{docLinks.map((link) => (
						<Link key={link.to} to={link.to} {...stylex.props(styles.docLink)}>
							<Surface variant="outline" padding="medium" interactive>
								<VStack gap="xxsmall">
									<Text variant="h5">{link.title}</Text>
									<Text variant="body2" color="secondary">
										{link.desc}
									</Text>
								</VStack>
							</Surface>
						</Link>
					))}
				</Grid>
			</VStack>
		</Container>
	);
}

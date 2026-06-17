import {
	ArrowRightIcon,
	CodeIcon,
	CubeIcon,
	PaintBrushIcon,
	ShieldCheckIcon,
} from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { createFileRoute, Link } from "@tanstack/react-router";
import { fontSize, fonts, spacing } from "@/lib/theme/tokens.stylex";
import {
	Box,
	Container,
	Grid,
	HStack,
	Separator,
	Surface,
	Text,
	VStack,
} from "@/ui";

const styles = stylex.create({
	hero: {
		paddingTop: spacing["10"],
		paddingBottom: spacing["8"],
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: spacing["4"],
	},
	heroTitle: {
		fontSize: "48px",
		lineHeight: 1.1,
		fontWeight: 700,
		letterSpacing: "-0.04em",
		backgroundImage: "linear-gradient(135deg, #fff 0%, #a1a1aa 100%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
	},
	heroSubtitle: {
		fontSize: "18px",
		maxWidth: "600px",
		lineHeight: 1.6,
		color: "#a1a1aa",
	},
	actionRow: {
		display: "flex",
		gap: spacing["3"],
		marginTop: spacing["4"],
		alignItems: "center",
		justifyContent: "center",
	},
	primaryButton: {
		display: "inline-flex",
		alignItems: "center",
		gap: spacing["2"],
		backgroundColor: "#fff",
		color: "#000",
		padding: "10px 20px",
		borderRadius: "var(--border-radius-md)",
		textDecoration: "none",
		fontWeight: 600,
		fontSize: "14px",
		transition: "transform 0.15s ease",
		":hover": {
			transform: "translateY(-1px)",
			opacity: 0.9,
		},
	},
	secondaryButton: {
		display: "inline-flex",
		alignItems: "center",
		gap: spacing["2"],
		backgroundColor: "transparent",
		color: "#fff",
		padding: "10px 20px",
		borderRadius: "var(--border-radius-md)",
		border: "1px solid #30363d",
		textDecoration: "none",
		fontWeight: 600,
		fontSize: "14px",
		transition: "all 0.15s ease",
		":hover": {
			backgroundColor: "#161b22",
			borderColor: "#8b949e",
		},
	},
	grid: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
		gap: spacing["4"],
		marginTop: spacing["6"],
		marginBottom: spacing["6"],
	},
	featureIcon: {
		width: "40px",
		height: "40px",
		borderRadius: "var(--border-radius-sm)",
		backgroundColor: "#161b22",
		border: "1px solid #30363d",
		color: "#58a6ff",
		marginBottom: spacing["3"],
	},
});

const features = [
	{
		icon: <PaintBrushIcon size={20} weight="duotone" />,
		title: "Powered by StyleX",
		desc: "Zero-runtime CSS-in-JS. Write predictable, scalable, and fully type-safe styles without the mess of Tailwind utility classes.",
	},
	{
		icon: <CubeIcon size={20} weight="duotone" />,
		title: "Base UI Primitives",
		desc: "Built on top of Base UI by MUI. Unstyled, headless components that handle complex accessibility and interaction logic for you.",
	},
	{
		icon: <CodeIcon size={20} weight="duotone" />,
		title: "Own Your Code",
		desc: "Distributed via the shadcn CLI model. You don't install a bloated npm package—you install the exact source code into your repository.",
	},
	{
		icon: <ShieldCheckIcon size={20} weight="duotone" />,
		title: "Fully Accessible",
		desc: "WAI-ARIA compliant out of the box. Keyboard navigation, focus management, and screen-reader support built into every component.",
	},
];

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
		<Container size="lg">
			<VStack gap="xlarge">
				{/* Hero Section */}
				<div {...stylex.props(styles.hero)}>
					<h1 {...stylex.props(styles.heroTitle)}>
						Beautifully designed components.
						<br />
						Zero Tailwind.
					</h1>
					<p {...stylex.props(styles.heroSubtitle)}>
						A premium, modern React component library engineered for performance
						and scalability. Built strictly with <strong>StyleX</strong> and
						headless <strong>Base UI</strong> primitives, giving you complete
						ownership of your code.
					</p>
					<div {...stylex.props(styles.actionRow)}>
						<Link
							to="/docs/installation"
							{...stylex.props(styles.primaryButton)}
						>
							Get Started <ArrowRightIcon weight="bold" />
						</Link>
						<a
							href="https://github.com"
							target="_blank"
							rel="noreferrer"
							{...stylex.props(styles.secondaryButton)}
						>
							View on GitHub
						</a>
					</div>
				</div>

				<Separator tone="subtle" />

				{/* Features Grid */}
				<VStack gap="medium">
					<Box>
						<Text variant="h2">Why choose Blenx UI?</Text>
						<Text variant="body2" color="secondary">
							We ripped out the utility classes to give you type-safe,
							collocated styles that scale.
						</Text>
					</Box>
					<div {...stylex.props(styles.grid)}>
						{features.map((feature) => (
							<Surface key={feature.title} variant="outline" padding="large">
								<HStack
									withBorder
									backgroundColor="surface"
									color="info"
									maxWidth={40}
									padding="xsmall"
									marginY="xsmall"
								>
									{feature.icon}
								</HStack>
								<VStack gap="small">
									<Text variant="h4">{feature.title}</Text>
									<Text variant="body2" color="secondary">
										{feature.desc}
									</Text>
								</VStack>
							</Surface>
						))}
					</div>
				</VStack>

				{/* Getting Started Quick Look */}
				<Surface variant="sunken" padding="large">
					<Grid>
						<VStack gap="medium">
							<Text variant="h3">Start building today.</Text>
							<Text variant="body2" color="secondary">
								Initialize the registry and add exactly what you need. No
								bloated node_modules. No CSS overrides. Just clean, type-safe
								React code living directly in your project.
							</Text>
						</VStack>
						<Surface variant="sunken" withBorder padding="medium">
							<Text variant="code" color="success">
								npx shadcn@latest add http://blenx-ui.com/reg/button.json
							</Text>
						</Surface>
					</Grid>
				</Surface>
				{/* Documentation Links */}
				<VStack gap="medium">
					<Text variant="h2">Documentation</Text>
					<Grid columns={4}>
						{docLinks.map((link) => (
							<Surface
								key={link.to}
								render={<Link to={link.to} />}
								variant="outline"
								padding="medium"
								interactive
							>
								<VStack gap="xxsmall">
									<Text variant="h5">{link.title}</Text>
									<Text variant="body2" color="secondary">
										{link.desc}
									</Text>
								</VStack>
							</Surface>
						))}
					</Grid>
				</VStack>
				<Box padding="massive" />
			</VStack>
		</Container>
	);
}

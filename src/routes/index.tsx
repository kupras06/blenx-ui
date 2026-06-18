import {
	ArrowRightIcon,
	CodeIcon,
	CubeIcon,
	PaintBrushIcon,
	ShieldCheckIcon,
} from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { createFileRoute, Link } from "@tanstack/react-router";
import { GITHUB_URL } from "@/constants";
import {
	Box,
	Button,
	Container,
	Grid,
	HStack,
	Separator,
	Surface,
	Text,
	VStack,
} from "@/ui";
import { theme } from "@/lib/theme/contract.stylex";

const styles = stylex.create({
	heroTitle: {
		fontSize: "48px",
		lineHeight: 1.1,
		fontWeight: 700,
		letterSpacing: "-0.04em",
		backgroundImage: `linear-gradient(135deg, ${theme.contentPrimary} 0%, ${theme.contentDisabled} 100%)`,
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
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
		<Container size="lg" padding="medium">
			<VStack gap="xlarge" align="center">
				<Box paddingY="large">
					<Text variant="h1" align="center" style={styles.heroTitle}>
						Beautifully designed components.
						<br />
						Zero Tailwind.
					</Text>
				</Box>
				<Box maxWidth={600} paddingY="large">
					<Text variant="body1" size="large" color="secondary" align="center">
						A premium, modern React component library engineered for performance
						and scalability. Built strictly with <strong>StyleX</strong> and
						headless <strong>Base UI</strong> primitives, giving you complete
						ownership of your code.
					</Text>
				</Box>
				<HStack align="center" justify="center" gap="medium">
					<Button radius="none" render={<Link to="/docs/installation" />}>
						Get Started <ArrowRightIcon weight="bold" />
					</Button>
					<Button
						radius="none"
						variant="soft"
						render={
							<a
								href={GITHUB_URL}
								target="_blank"
								rel="noreferrer"
								aria-label="Project Github URL"
							/>
						}
					>
						View on GitHub
					</Button>
				</HStack>
				<Separator />

				{/* Features Grid */}
				<VStack gap="medium">
					<Box>
						<Text variant="h2">Why choose Blenx UI?</Text>
						<Text variant="body2" color="secondary">
							We ripped out the utility classes to give you type-safe,
							collocated styles that scale.
						</Text>
					</Box>
					<Grid columns={2}>
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
					</Grid>
				</VStack>

				{/* Getting Started Quick Look */}
				<Surface variant="sunken" padding="large">
					<HStack wrap>
						<VStack gap="medium">
							<Text variant="h3">Start building today.</Text>
							<Text variant="body2" color="secondary">
								Initialize the registry and add exactly what you need. No
								bloated node_modules. No CSS overrides. Just clean, type-safe
								React code living directly in your project.
							</Text>
						</VStack>
						<Surface variant="sunken" withBorder padding="medium" grow>
							<Text variant="code" color="success">
								npx shadcn@latest add http://blenx-ui.com/reg/button.json
							</Text>
						</Surface>
					</HStack>
				</Surface>
				{/* Documentation Links */}
				<VStack gap="medium">
					<Text variant="h2">Documentation</Text>
					<HStack wrap>
						{docLinks.map((link) => (
							<Surface
								key={link.to}
								render={<Link to={link.to} />}
								variant="outline"
								padding="medium"
								interactive
								grow
							>
								<VStack gap="xxsmall">
									<Text variant="h5">{link.title}</Text>
									<Text variant="body2" color="secondary">
										{link.desc}
									</Text>
								</VStack>
							</Surface>
						))}
					</HStack>
				</VStack>
				<Box padding="massive" />
			</VStack>
		</Container>
	);
}

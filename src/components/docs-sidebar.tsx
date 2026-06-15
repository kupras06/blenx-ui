import * as stylex from "@stylexjs/stylex";
import { Link, useLocation } from "@tanstack/react-router";
import { Box, Surface, Text, VStack } from "@/components/ui";

interface SidebarSection {
	title: string;
	links: { to: string; label: string }[];
}

const sections: SidebarSection[] = [
	{
		title: "Getting Started",
		links: [
			{ to: "/docs", label: "Overview" },
			{ to: "/docs/installation", label: "Installation" },
		],
	},
	{
		title: "Concepts",
		links: [
			{ to: "/docs/styling", label: "Styling" },
			{ to: "/docs/primitives", label: "Primitives" },
		],
	},
	{
		title: "Customization",
		links: [{ to: "/docs/theming", label: "Theming" }],
	},
	{
		title: "Reference",
		links: [{ to: "/docs/limitations", label: "Limitations" }],
	},
];

const styles = stylex.create({
	link: {
		textDecoration: "none",
	},
	innerNav: {
		display: "flex",
		flexDirection: "column",
		gap: "var(--space-4)",
	},
	linkList: {
		display: "flex",
		flexDirection: "column",
		gap: 2,
	},
});

function DocsSidebar() {
	const { pathname } = useLocation();

	return (
		<VStack gap="medium">
			{sections.map((section) => (
				<Box key={section.title}>
					<Text variant="body2" weight="semibold">
						{section.title}
					</Text>
					<VStack gap="xxsmall">
						{section.links.map((link) => {
							const isActive =
								link.to === "/docs"
									? pathname === "/docs" || pathname === "/docs/"
									: pathname.startsWith(link.to);
							return (
								<Surface
									variant={isActive ? "sunken" : "default"}
									radius="small"
									paddingY="xxsmall"
									paddingX="xsmall"
									key={link.to}
									render={<Link {...stylex.props(styles.link)} to={link.to} />}
								>
									<Text
										variant="body2"
										color={isActive ? "primary" : "secondary"}
									>
										{link.label}
									</Text>
								</Surface>
							);
						})}
					</VStack>
				</Box>
			))}
		</VStack>
	);
}

export { DocsSidebar };

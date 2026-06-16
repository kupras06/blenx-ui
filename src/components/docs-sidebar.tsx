import * as stylex from "@stylexjs/stylex";
import { Link, useLocation } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { docsQueries } from "@/lib/docs-api";
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
		title: "Components",
		links: [{ to: "/docs/data-table", label: "DataTable" }],
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
	componentLink: {
		paddingLeft: "var(--space-3)",
	},
});

const CATEGORY_ORDER = [
	"Forms",
	"Data Display",
	"Overlay",
	"Navigation",
	"Feedback",
	"Layout",
	"Typography",
	"Utility",
];

function DocsSidebar() {
	const { pathname } = useLocation();
	const { data: manifest } = useQuery(docsQueries.manifest());

	const groupedComponents =
		manifest &&
		CATEGORY_ORDER.reduce(
			(groups, category) => {
				const items = Object.entries(manifest)
					.filter(
						([, data]) => data.category === category && category !== "Utility",
					)
					.sort(([a], [b]) => a.localeCompare(b));

				if (items.length > 0) {
					groups.push({ category, items });
				}
				return groups;
			},
			[] as Array<{
				category: string;
				items: Array<[string, { title: string }]>;
			}>,
		);

	const dynamicSections: SidebarSection[] = [];

	if (groupedComponents) {
		for (const group of groupedComponents) {
			dynamicSections.push({
				title: group.category,
				links: group.items.map(([key, data]) => ({
					to: `/components/${key}`,
					label: data.title,
				})),
			});
		}
	}

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

			{dynamicSections.map((section) => (
				<Box key={section.title}>
					<Text variant="body2" weight="semibold">
						{section.title}
					</Text>
					<VStack gap="xxsmall">
						{section.links.map((link) => {
							const isActive = pathname.startsWith(link.to);
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

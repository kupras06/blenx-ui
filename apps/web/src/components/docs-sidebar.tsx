import * as stylex from "@stylexjs/stylex";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "@tanstack/react-router";
import { Box, Surface, Text, VStack } from "@blenx-dev/ui/components";;
import { docsQueries } from "@/lib/docs-api";

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
		links: [
			{ to: "/docs/theming", label: "Theming" },
			{ to: "/theme-builder", label: "Theme Builder" },
		],
	},
	{
		title: "Components",
		links: [{ to: "/docs/components/data-table", label: "DataTable" }],
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
	maxHeight: {
		maxHeight: "90svh",
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

function DocsSidebar({ onClose }: { onClose?: () => void }) {
	const { pathname } = useLocation();
	const { data: manifest } = useQuery(docsQueries.manifest());

	const groupedComponents =
		manifest &&
		CATEGORY_ORDER.reduce(
			(groups, category) => {
				const items = Object.entries(manifest).filter(
					([, data]) => data.category === category,
				);
				items.sort(([a], [b]) => a.localeCompare(b));

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
					to: `/docs/components/${key}`,
					label: data.title,
				})),
			});
		}
	}
	return (
		<Surface variant="sunken">
			<VStack gap="medium" padding="medium">
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
										variant={isActive ? "outline" : "sunken"}
										radius="small"
										paddingY="xxsmall"
										paddingX="xsmall"
										key={link.to}
										render={
											<Link
												{...stylex.props(styles.link)}
												to={link.to}
												onClick={onClose}
											/>
										}
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
								const isActive = pathname === link.to;
								return (
									<Surface
										variant={isActive ? "outline" : "sunken"}
										radius="small"
										paddingY="xxsmall"
										paddingX="xsmall"
										key={link.to}
										render={
											<Link
												{...stylex.props(styles.link)}
												to={link.to}
												onClick={onClose}
											/>
										}
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
		</Surface>
	);
}

export { DocsSidebar };

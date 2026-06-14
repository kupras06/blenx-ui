import * as stylex from "@stylexjs/stylex";
import { Link, useLocation } from "@tanstack/react-router";
import { Container, Text, VStack } from "@/components/ui";
import {
	borderRadius,
	fontSize,
	fontWeight,
	lineHeight,
	spacing,
	theme,
} from "@/lib/theme/theme.stylex";

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
		display: "block",
		fontSize: fontSize.small,
		color: theme.contentSecondary,
		textDecoration: "none",
		paddingBlock: spacing["1"],
		paddingInline: spacing["2"],
		borderRadius: borderRadius.small,
		lineHeight: lineHeight.normal,
	},
	linkActive: {
		color: theme.contentPrimary,
		fontWeight: fontWeight.medium,
		backgroundColor: theme.surfaceSubtle,
	},
});

function DocsSidebar() {
	const { pathname } = useLocation();

	return (
		<Container size="xxs">
			<VStack render={<nav />}>
				{sections.map((section) => (
					<div key={section.title}>
						<Text>{section.title}</Text>
						{section.links.map((link) => {
							const isActive =
								link.to === "/docs"
									? pathname === "/docs" || pathname === "/docs/"
									: pathname.startsWith(link.to);
							return (
								<Link
									key={link.to}
									to={link.to}
									{...stylex.props(styles.link, isActive && styles.linkActive)}
								>
									<Text variant="body3">{link.label}</Text>
								</Link>
							);
						})}
					</div>
				))}
			</VStack>
		</Container>
	);
}

export { DocsSidebar };

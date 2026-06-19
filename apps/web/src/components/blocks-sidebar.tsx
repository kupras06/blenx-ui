import * as stylex from "@stylexjs/stylex";
import { Link, useLocation } from "@tanstack/react-router";
import { Box, Surface, Text, VStack } from "@blenx-dev/ui/components";

const BLOCK_SECTIONS = [
	{
		title: "Application States",
		links: [{ to: "/blocks/application-states", label: "Application States" }],
	},
	{
		title: "Marketing",
		links: [{ to: "/blocks/marketing", label: "Marketing" }],
	},
	{
		title: "Authentication",
		links: [{ to: "/blocks/authentication", label: "Authentication" }],
	},
	{
		title: "Dashboard",
		links: [{ to: "/blocks/dashboard", label: "Dashboard" }],
	},
];

const styles = stylex.create({
	link: {
		textDecoration: "none",
	},
});

function BlocksSidebar({ onClose }: { onClose?: () => void }) {
	const { pathname } = useLocation();

	return (
		<Surface variant="sunken">
			<VStack gap="medium" padding="medium">
				{BLOCK_SECTIONS.map((section) => (
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

export { BlocksSidebar };

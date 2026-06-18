import * as stylex from "@stylexjs/stylex";
import { VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Badge } from "./badge";

const styles = stylex.create({
	grid: {
		display: "flex",
		flexWrap: "wrap",
		gap: "var(--space-2)",
		alignItems: "center",
	},
});

export function BadgeDemo() {
	return (
		<VStack gap="medium">
			<Text variant="h6">Variants</Text>
			<div {...stylex.props(styles.grid)}>
				<Badge variant="default">Default</Badge>
				<Badge variant="primary">Primary</Badge>
				<Badge variant="secondary">Secondary</Badge>
			</div>
		</VStack>
	);
}

export const demos = [{ name: "Default", component: BadgeDemo }];

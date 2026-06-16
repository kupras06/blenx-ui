import * as stylex from "@stylexjs/stylex";
import { VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Input } from "./input";

const styles = stylex.create({
	grid: {
		display: "flex",
		flexDirection: "column",
		gap: "var(--space-3)",
		maxWidth: 320,
	},
});

function InputDemo() {
	return (
		<VStack gap="medium">
			<div {...stylex.props(styles.grid)}>
				<Text variant="h6">Sizes</Text>
				<Input size="sm" placeholder="Small input" />
				<Input placeholder="Default input" />
				<Input size="lg" placeholder="Large input" />
			</div>

			<div {...stylex.props(styles.grid)}>
				<Text variant="h6">With Error</Text>
				<Input error="This field is required" placeholder="Email address" />
			</div>
		</VStack>
	);
}

export { InputDemo as Demo };

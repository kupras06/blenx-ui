import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Box } from "./box";

export function DefaultStory() {
	return (
		<Stack gap="medium">
			<Box padding="medium" withBorder radius="medium">
				<Text variant="body2">Box with border, padding, radius</Text>
			</Box>
			<Box padding="large" radius="xlarge" display="flex">
				<Text variant="body2">Box as flex with full radius</Text>
			</Box>
			<Box fullWidth padding="small" withBorder>
				<Text variant="body2">Full width box</Text>
			</Box>
		</Stack>
	);
}

import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Input } from "./input";

export function SizesStory() {
	return (
		<Stack gap="medium">
			<Text variant="h4">Sizes</Text>
			<Input size="sm" placeholder="Small input" />
			<Input size="default" placeholder="Default input" />
			<Input size="lg" placeholder="Large input" />
		</Stack>
	);
}

export function StatesStory() {
	return (
		<Stack gap="medium">
			<Text variant="h4">States</Text>
			<Input placeholder="Normal input" />
			<Input placeholder="Disabled input" disabled />
			<Input placeholder="With error" error="This field is required" />
		</Stack>
	);
}

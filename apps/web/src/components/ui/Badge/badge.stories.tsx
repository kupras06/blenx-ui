import { HStack } from "../Stack/stack";
import { Badge } from "./badge";

export function VariantsStory() {
	return (
		<HStack gap="medium" align="center">
			<Badge>Default</Badge>
			<Badge variant="primary">Primary</Badge>
			<Badge variant="secondary">Secondary</Badge>
		</HStack>
	);
}

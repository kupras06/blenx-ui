import { VStack } from "@/ui";
import { Surface } from "../ui/Surface/surface";
import { Text } from "../ui/Text/text";

function DocApiReference() {
	return (
		<VStack gap="medium">
			<Text variant="h3">API Reference</Text>
			<Surface padding="medium" variant="sunken">
				<Text variant="body2" color="secondary">
					Coming soon — props and types will be extracted automatically from
					TypeScript definitions.
				</Text>
			</Surface>
		</VStack>
	);
}

export { DocApiReference };

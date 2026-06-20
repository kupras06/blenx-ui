import { Surface, Text, VStack } from "@blenx-dev/ui/components";

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

import { Box } from "../ui/Box/box";
import { Surface } from "../ui/Surface/surface";
import { Text } from "../ui/Text/text";

function DocApiReference() {
	return (
		<Box>
			<Text variant="h3">API Reference</Text>
			<Surface padding="medium" variant="sunken">
				<Text variant="body2" color="secondary">
					Coming soon — props and types will be extracted automatically from
					TypeScript definitions.
				</Text>
			</Surface>
		</Box>
	);
}

export { DocApiReference };

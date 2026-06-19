import { createFileRoute } from "@tanstack/react-router";
import { DocHeading } from "@/components/docs/doc-heading";
import { Box, Separator, Text, VStack } from "@blenx-dev/ui/components";;

export const Route = createFileRoute("/blocks/")({
	component: BlocksHome,
});

function BlocksHome() {
	return (
		<VStack>
			<VStack gap="small">
				<DocHeading variant="h1" title="Blenx UI Blocks" />
				<Text variant="body2" color="secondary">
					Ready-to-use page-level blocks built with Blenx UI components.
				</Text>
			</VStack>

			<Separator />

			<VStack>
				<Box>
					<DocHeading variant="h2" title="Browse Blocks" />
					<Text variant="body2" color="secondary">
						Select a category from the sidebar to browse available blocks.
					</Text>
				</Box>
			</VStack>
		</VStack>
	);
}

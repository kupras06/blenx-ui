import { createFileRoute } from "@tanstack/react-router";
import { Box, Separator, Surface, Text, VStack } from "@/components/ui";

export const Route = createFileRoute("/docs/")({
	component: DocsHome,
});

function DocsHome() {
	return (
		<VStack>
			<VStack gap="small">
				<Text variant="h1">Blenx UI Docs</Text>
				<Text variant="body2" color="secondary">
					A design system built with Stylex and Base UI, distributed via the
					shadcn registry model.
				</Text>
			</VStack>

			<Separator />

			<VStack>
				<Box>
					<Text variant="h2">Quick Start</Text>
					<Text variant="body2" color="secondary">
						Install components via the shadcn CLI into your React project:
					</Text>
				</Box>
				<Surface render={<pre />} padding="medium" variant="sunken">
					<code>
						npx shadcn@latest add http://localhost:3001/reg/button.json
					</code>
				</Surface>
				<Text>
					Browse the sidebar to learn about installation, styling, theming, and
					constraints.
				</Text>
			</VStack>
		</VStack>
	);
}

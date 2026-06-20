import { createFileRoute } from "@tanstack/react-router";
import { DocHeading } from "@/components/docs/doc-heading";
import { Box, Separator, Text, VStack } from "@blenx-dev/ui/components";;
import { CodeBlock } from "@/components/ui/CodeBlock/code-block";
const INSTALLATION_COMMAND = `// npx shadcn@latest init
// Update component-registry in components.json
npx shadcn@latest add http://localhost:3001/reg/button.json`;
export const Route = createFileRoute("/docs/")({
	component: DocsHome,
});

function DocsHome() {
	return (
		<VStack>
			<VStack gap="small">
				<DocHeading variant="h1" title="Blenx UI Docs" />
				<Text variant="body2" color="secondary">
					A design system built with Stylex and Base UI, distributed via the
					shadcn registry model.
				</Text>
			</VStack>

			<Separator />

			<VStack>
				<Box>
					<DocHeading variant="h2" title="Quick Start" />
					<Text variant="body2" color="secondary">
						Install components via the shadcn CLI into your React project:
					</Text>
				</Box>
				<CodeBlock language="bash" code={INSTALLATION_COMMAND} />
				<Text>
					Browse the sidebar to learn about installation, styling, theming, and
					constraints.
				</Text>
			</VStack>
		</VStack>
	);
}

import { createFileRoute } from "@tanstack/react-router";
import { DocHeading } from "@/components/docs/doc-heading";
import { Box, CodeBlock, Separator, Text, VStack } from "@blenx-dev/ui/components";;

export const Route = createFileRoute("/docs/installation")({
	component: InstallationDoc,
});
const COMPONENTS_JSON = `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@blenx-dev/ui/components";,
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "blenx-dev": {
      "baseUrl": "http://localhost:3001/reg"
    }
  }
}`;
const COMPONENT_INSTALL_COMMAND = `# Using the registry URL directly
npx shadcn@latest add http://localhost:3001/reg/button.json

# Or using the configured registry name
npx shadcn@latest add @blenx-dev/button`;

const DEPENDENCIES_COMMAND = `npm install @stylexjs/stylex @base-ui/react @phosphor-icons/react
# Plus optional: react-day-picker, date-fns, react-colorful`;

const BUNDLER_COMMAND = `// Example: vite.config.ts
import stylex from "@stylexjs/unplugin";

export default defineConfig({
  plugins: [
    stylex.vite({ ... }),
  ],
});`;
function InstallationDoc() {
	return (
		<VStack>
			<DocHeading variant="h1" title="Installation" />
			<DocHeading variant="h2" title="Prerequisites" />
			<Box render={<ul />}>
				<li>
					<Text variant="body2">React 19+</Text>
				</li>
				<li>
					<Text variant="body2">@stylexjs/stylex</Text>
				</li>
				<li>
					<Text variant="body2">@base-ui/react</Text>
				</li>
				<li>
					<Text variant="body2">
						A JS bundler with Stylex plugin support (Vite, Next.js, Webpack)
					</Text>
				</li>
				<li>
					<Text variant="body2">shadcn CLI v4+</Text>
				</li>
			</Box>

			<Separator tone="subtle" />

			<Box>
				<VStack gap="medium">
					<DocHeading variant="h2" title="1. Configure the Registry" />
					<Text variant="body2" color="secondary">
						Add the Blenx UI registry to your project's{" "}
						<Text variant="code" span>
							components.json
						</Text>
						:
					</Text>
					<CodeBlock code={COMPONENTS_JSON} />
				</VStack>
			</Box>

			<Separator tone="subtle" />

			<Box>
				<VStack gap="medium">
					<DocHeading variant="h2" title="2. Install a Component" />
					<CodeBlock language="bash" code={COMPONENT_INSTALL_COMMAND} />
				</VStack>
			</Box>

			<Separator tone="subtle" />

			<Box>
				<VStack gap="medium">
					<DocHeading variant="h2" title="3. Required Dependencies" />
					<Text variant="body2" color="secondary">
						Each component may require installing additional packages:
					</Text>
					<CodeBlock language="bash" code={DEPENDENCIES_COMMAND} />
				</VStack>
			</Box>

			<Separator tone="subtle" />

			<Box>
				<VStack gap="medium">
					<DocHeading variant="h2" title="4. Configure Stylex" />
					<Text variant="body2" color="secondary">
						Your bundler must be configured with the Stylex plugin. Components
						use atomic CSS via Stylex, which requires a build-time transform.
					</Text>
					<CodeBlock code={BUNDLER_COMMAND} />
				</VStack>
			</Box>
		</VStack>
	);
}

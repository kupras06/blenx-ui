import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";
import { Box, Separator, Surface, Text, VStack } from "@/components/ui";

export const Route = createFileRoute("/docs/installation")({
	component: InstallationDoc,
});

function InstallationDoc() {
	return (
		<DocsLayout>
			<VStack>
				<Text variant="h1">Installation</Text>

				<VStack gap="medium">
					<Text variant="h2">Prerequisites</Text>
					<VStack gap="xxsmall" render={<ul />}>
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
					</VStack>
				</VStack>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">1. Configure the Registry</Text>
						<Text variant="body2" color="secondary">
							Add the Blenx UI registry to your project's{" "}
							<Text variant="code">components.json</Text>:
						</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<code>{`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "blenx-dev": {
      "baseUrl": "http://localhost:3001/reg"
    }
  }
}`}</code>
						</Surface>
					</VStack>
				</Box>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">2. Install a Component</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<code>{`# Using the registry URL directly
npx shadcn@latest add http://localhost:3001/reg/button.json

# Or using the configured registry name
npx shadcn@latest add @blenx-dev/button`}</code>
						</Surface>
					</VStack>
				</Box>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">3. Required Dependencies</Text>
						<Text variant="body2" color="secondary">
							Each component may require installing additional packages:
						</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<code>{`npm install @stylexjs/stylex @base-ui/react @phosphor-icons/react
# Plus optional: react-day-picker, date-fns, react-colorful`}</code>
						</Surface>
					</VStack>
				</Box>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">4. Configure Stylex</Text>
						<Text variant="body2" color="secondary">
							Your bundler must be configured with the Stylex plugin. Components
							use atomic CSS via Stylex, which requires a build-time transform.
						</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<code>{`// Example: vite.config.ts
import { stylexPlugin } from "@stylexjs/unplugin/vite";

export default defineConfig({
  plugins: [
    stylexPlugin({ ... }),
  ],
});`}</code>
						</Surface>
					</VStack>
				</Box>
			</VStack>
		</DocsLayout>
	);
}

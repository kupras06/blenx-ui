import * as stylex from "@stylexjs/stylex";
import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";
import { Separator, Surface, Text, VStack } from "@/components/ui";
import { docStyles } from "./docs.styles";

export const Route = createFileRoute("/docs/installation")({
	component: InstallationDoc,
});

function InstallationDoc() {
	return (
		<DocsLayout>
			<div {...stylex.props(docStyles.page)}>
				<Text variant="h1">Installation</Text>

				<VStack gap="medium">
					<Text variant="h2">Prerequisites</Text>
					<ul {...stylex.props(docStyles.list)}>
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
					</ul>
				</VStack>

				<Separator tone="subtle" />

				<div {...stylex.props(docStyles.section)}>
					<VStack gap="medium">
						<Text variant="h2">1. Configure the Registry</Text>
						<Text variant="body2" color="secondary">
							Add the Blenx UI registry to your project's{" "}
							<code {...stylex.props(docStyles.code)}>components.json</code>:
						</Text>
						<Surface
							variant="sunken"
							padding="medium"
							render={<pre />}
							{...stylex.props(docStyles.pre)}
						>
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
				</div>

				<Separator tone="subtle" />

				<div {...stylex.props(docStyles.section)}>
					<VStack gap="medium">
						<Text variant="h2">2. Install a Component</Text>
						<Surface
							variant="sunken"
							padding="medium"
							render={<pre />}
							{...stylex.props(docStyles.pre)}
						>
							<code>{`# Using the registry URL directly
npx shadcn@latest add http://localhost:3001/reg/button.json

# Or using the configured registry name
npx shadcn@latest add @blenx-dev/button`}</code>
						</Surface>
					</VStack>
				</div>

				<Separator tone="subtle" />

				<div {...stylex.props(docStyles.section)}>
					<VStack gap="medium">
						<Text variant="h2">3. Required Dependencies</Text>
						<Text variant="body2" color="secondary">
							Each component may require installing additional packages:
						</Text>
						<Surface
							variant="sunken"
							padding="medium"
							render={<pre />}
							{...stylex.props(docStyles.pre)}
						>
							<code>{`npm install @stylexjs/stylex @base-ui/react @phosphor-icons/react
# Plus optional: react-day-picker, date-fns, react-colorful`}</code>
						</Surface>
					</VStack>
				</div>

				<Separator tone="subtle" />

				<div {...stylex.props(docStyles.section)}>
					<VStack gap="medium">
						<Text variant="h2">4. Configure Stylex</Text>
						<Text variant="body2" color="secondary">
							Your bundler must be configured with the Stylex plugin. Components
							use atomic CSS via Stylex, which requires a build-time transform.
						</Text>
						<Surface
							variant="sunken"
							padding="medium"
							render={<pre />}
							{...stylex.props(docStyles.pre)}
						>
							<code>{`// Example: vite.config.ts
import { stylexPlugin } from "@stylexjs/unplugin/vite";

export default defineConfig({
  plugins: [
    stylexPlugin({ ... }),
  ],
});`}</code>
						</Surface>
					</VStack>
				</div>
			</div>
		</DocsLayout>
	);
}

import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";
import { Box, Separator, Surface, Text, VStack } from "@/components/ui";

export const Route = createFileRoute("/docs/limitations")({
	component: LimitationsDoc,
});

function LimitationsDoc() {
	return (
		<DocsLayout>
			<VStack>
				<Text variant="h1">Limitations</Text>
				<Text variant="body2" color="secondary">
					Blenx UI makes specific technology choices that come with important
					constraints. Review these before adopting the library.
				</Text>

				<Box>
					<VStack gap="medium">
						<Text variant="h2">Monorepo Not Supported for Consumers</Text>
						<Text variant="body2" color="secondary">
							The shadcn registry model copies source files directly into your
							project. The copied files use import aliases (
							<Text variant="code">@/components</Text>,{" "}
							<Text variant="code">@/lib</Text>, etc.) that assume a flat
							project structure.
						</Text>
						<Text variant="body2" color="secondary">
							If you are using a monorepo (Turborepo, Nx, Rush, pnpm
							workspaces), the installed component files and their relative
							imports may not resolve correctly across package boundaries. Each
							consuming application must independently configure its own alias
							resolution and Stylex plugin.
						</Text>
						<Text variant="body2" color="secondary">
							<strong>Recommendation:</strong> Install components into a single
							application package, not into a shared UI package within your
							monorepo.
						</Text>
					</VStack>
				</Box>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">Stylex Build Requirement</Text>
						<Text variant="body2" color="secondary">
							Stylex is a build-time CSS-in-JS solution. Every consumer project
							must:
						</Text>
						<VStack render={<ul />}>
							<li>
								<Text variant="body2">
									Install and configure the Stylex bundler plugin (
									<Text variant="code">@stylexjs/unplugin</Text>)
								</Text>
							</li>
							<li>
								<Text variant="body2">
									Use a supported bundler: Vite, Next.js, Webpack, or ESBuild
								</Text>
							</li>
							<li>
								<Text variant="body2">
									NOT use CSS-in-JS solutions that conflict with atomic class
									extraction (e.g., styled-components, Emotion)
								</Text>
							</li>
						</VStack>
						<Text variant="body2" color="secondary">
							Without proper Stylex configuration, components will render
							without styles.
						</Text>
					</VStack>
				</Box>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">Base UI Version Lock</Text>
						<Text variant="body2" color="secondary">
							Blenx UI depends on specific{" "}
							<Text variant="code">@base-ui/react</Text> APIs. The library is
							tested against <strong>Base UI React ^1.5.0</strong>. Upgrading
							Base UI may break component behavior. If you need a newer Base UI
							version, test all components thoroughly.
						</Text>
					</VStack>
				</Box>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">No Tailwind CSS Support</Text>
						<Text variant="body2" color="secondary">
							This project deliberately chose Stylex over Tailwind CSS. The
							registry components ship with their own Stylex styles. If your
							project uses Tailwind, the two can coexist, but components will
							use Stylex classes, not Tailwind utilities. You cannot override
							component styles with <Text variant="code">className</Text> — use
							the <Text variant="code">style</Text> prop instead.
						</Text>
					</VStack>
				</Box>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">Phosphor Icons</Text>
						<Text variant="body2" color="secondary">
							The library uses <Text variant="code">@phosphor-icons/react</Text>{" "}
							for all iconography. If you prefer a different icon set, you will
							need to replace icon imports in the installed component source
							files manually.
						</Text>
					</VStack>
				</Box>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">Framework Compatibility</Text>
						<Text variant="body2" color="secondary">
							Components are built with React 19+ and are not tested with:
						</Text>
						<VStack render={<ul />}>
							<li>
								<Text variant="body2">React Native</Text>
							</li>
							<li>
								<Text variant="body2">
									Vue, Svelte, Solid, or other frameworks
								</Text>
							</li>
							<li>
								<Text variant="body2">
									Older React versions {"<"}
									{"19"}
									{">"}
								</Text>
							</li>
						</VStack>
					</VStack>
				</Box>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">CSS Custom Properties Theming</Text>
						<Text variant="body2" color="secondary">
							Theme tokens are implemented as Stylex CSS variables. While this
							enables efficient light/dark mode switching, it means theme
							customization is limited to CSS variable overrides. You cannot use
							JavaScript-level theme switching without updating component source
							code.
						</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<Text>{`/* Override theme tokens in your CSS */
:root {
  --primary: #your-color;
  --background: #your-bg;
}`}</Text>
						</Surface>
					</VStack>
				</Box>
			</VStack>
		</DocsLayout>
	);
}

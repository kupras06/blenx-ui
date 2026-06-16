import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";
import { Box, Separator, Surface, Text, VStack } from "@/components/ui";

export const Route = createFileRoute("/docs/theming")({
	component: ThemingDoc,
});

function ThemingDoc() {
	return (
		<DocsLayout>
			<VStack gap="medium">
				<Text variant="h1">Theming</Text>
				<Text variant="body1" color="secondary">
					Blenx UI provides two approaches for customizing the look and feel of
					your components. The Stylex Contract Theme is the recommended approach
					for projects already using Stylex.
				</Text>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">
							Approach 1: Stylex Contract Theme (Recommended)
						</Text>
						<Text variant="body1" color="secondary">
							Create a typed theme using{" "}
							<Text variant="code">stylex.createTheme</Text> from the exported
							theme contract. This gives you full type safety and integrates
							directly with Stylex's theming system.
						</Text>
						<Text variant="body1" color="secondary">
							The generated theme is applied via a{" "}
							<Text variant="code">className</Text> on the root element. All
							child components using the contract tokens will automatically pick
							up your custom values.
						</Text>

						<Text variant="h3">1. Create a theme file</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<Text variant="code">
								{`// styles/my-theme.stylex.ts
import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/theme/contract.stylex";

export const myTheme = stylex.createTheme(theme, {
  primary: "#6C63FF",
  primarySubtle: "#8B83FF",
  secondary: "#FF6584",

  background: "#FAFAFA",
  backgroundSubtle: "#F0F0F5",

  surface: "#FFFFFF",
  surfaceSubtle: "#F0F0F5",
  surfaceHover: "#E8E8EE",

  border: "#D1D1E0",
  borderSubtle: "#E5E5F0",

  contentPrimary: "#2D2D44",
  contentSecondary: "#6B6B80",

  focusRing: "#6C63FF",
});`}
							</Text>
						</Surface>

						<Text variant="h3">2. Apply to root element</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<Text variant="code">
								{`// React — wrap your app root
import * as stylex from "@stylexjs/stylex";
import { myTheme } from "./styles/my-tokens.stylex";

function App() {
  return (
    <div {...stylex.props(myTheme)}>
      <YourApp />
    </div>
  );
}`}
							</Text>
						</Surface>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<Text variant="code">
								{`// Next.js — apply to the body or a layout wrapper
// app/layout.tsx
import { myTheme } from "@/styles/my-tokens.stylex";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myTheme}>
        {children}
      </body>
    </html>
  );
}`}
							</Text>
						</Surface>

						<Text variant="h3">Available Imports</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<Text variant="code">
								{`// Import the contract for createTheme
import { theme } from "@blenx-dev/theme/contract.stylex";

// Or use the convenience re-exports
import { theme, borderRadius, spacing, fontSize } from "@/lib/theme/tokens.stylex";`}
							</Text>
						</Surface>
					</VStack>
				</Box>

				<Separator tone="subtle" />
			</VStack>
		</DocsLayout>
	);
}

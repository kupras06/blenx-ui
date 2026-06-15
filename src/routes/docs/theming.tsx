import * as stylex from "@stylexjs/stylex";
import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";
import { Box, Separator, Surface, Text, VStack } from "@/components/ui";
import { docStyles } from "./docs.styles";

export const Route = createFileRoute("/docs/theming")({
	component: ThemingDoc,
});

const tokenTable = [
	["--primary", "--background", "--surface"],
	["--primarySubtle", "--backgroundSubtle", "--surfaceSubtle"],
	["--secondary", "--border", "--surfaceRaised"],
	["--borderSubtle", "--borderStrong", "--surfaceHover"],
	["--contentPrimary", "--contentSecondary", "--surfaceOverlay"],
	["--contentDisabled", "--contentAccent", "--contentOnPrimary"],
	["--contentInverse", "--focusRing", "--borderRadius"],
	["--sentimentNegative", "--sentimentNegativeSubtle", ""],
	["--sentimentPositive", "--sentimentPositiveSubtle", ""],
	["--sentimentWarning", "--sentimentWarningSubtle", ""],
	["--sentimentInfo", "--sentimentInfoSubtle", ""],
	["--shadowSm", "--shadowMd", "--shadowLg", "--shadowXl"],
];

const comparisonRows = [
	[
		"Configuration",
		"Requires Stylex bundler plugin",
		"None \u2014 just add a CSS file",
	],
	["Type Safety", "Full type checking on token names", "None"],
	[
		"Light/Dark Mode",
		"Automatic via Stylex theme values",
		"Manual via media query in CSS",
	],
	["Setup Effort", "Requires Stylex setup + TypeScript file", "Minimal"],
	[
		"Best For",
		"Full design system customization",
		"Quick overrides, non-Stylex projects",
	],
];

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

				<Box>
					<VStack gap="medium">
						<Text variant="h2">Approach 2: CSS Variable Override</Text>
						<Text variant="body2" color="secondary">
							The simplest approach. Create a CSS file that redeclares any of
							the theme's CSS custom properties. Your values will take
							precedence over the defaults through the cascade.
						</Text>
						<Text variant="body2" color="secondary">
							This works without any build configuration and can be done
							entirely in CSS. It is ideal for quick overrides, small tweaks, or
							projects that do not use Stylex directly.
						</Text>

						<Text variant="h3">Example</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<Text variant="code">
								{`/* my-theme.css — import or link after the component styles */
:root {
  --primary: #1a1a2e;
  --secondary: #e94560;
  --background: #f8f9fa;
  --surface: #ffffff;
  --contentPrimary: #1a1a2e;
  --focusRing: #e94560;
}

@media (prefers-color-scheme: dark) {
  :root {
    --primary: #eaeaea;
    --background: #16213e;
    --surface: #1a1a2e;
    --contentPrimary: #eaeaea;
    --focusRing: #e94560;
  }
}`}
							</Text>
						</Surface>

						<Text variant="h3">Available Theme Tokens</Text>
						<Text variant="body2" color="secondary">
							All semantic color tokens from the theme contract. Override any
							subset &mdash; the rest fall back to defaults.
						</Text>
						<div {...stylex.props(docStyles.tableWrapper)}>
							<table {...stylex.props(docStyles.table)}>
								<thead>
									<tr>
										<th {...stylex.props(docStyles.th)}>Token</th>
										<th {...stylex.props(docStyles.th)}>Token</th>
										<th {...stylex.props(docStyles.th)}>Token</th>
										<th {...stylex.props(docStyles.th)}>Token</th>
									</tr>
								</thead>
								<tbody>
									{tokenTable.map((row) => (
										<tr key={row.join("")}>
											{row.map((cell) => (
												<td key={cell} {...stylex.props(docStyles.td)}>
													{cell}
												</td>
											))}
											{row.length < 4
												? Array.from({ length: 4 - row.length }, () => "").map(
														(i) => (
															<td
																key={`td-filler-${row.join("-")}-${i}`}
																{...stylex.props(docStyles.td)}
															/>
														),
													)
												: null}
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<Text variant="h3">Primitive Tokens</Text>
						<Text variant="body2" color="secondary">
							Spacing, typography, radius, and motion tokens are also available
							for override:
						</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<Text variant="code">
								{`:root {
  --radius-medium: 6px;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --space-4: 12px;
  --duration-normal: 150ms;
}`}
							</Text>
						</Surface>
					</VStack>
				</Box>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">Comparing the Two Approaches</Text>
						<div {...stylex.props(docStyles.tableWrapper)}>
							<table {...stylex.props(docStyles.table)}>
								<thead>
									<tr>
										<th {...stylex.props(docStyles.th)} />
										<th {...stylex.props(docStyles.th)}>Stylex Contract</th>
										<th {...stylex.props(docStyles.th)}>CSS Override</th>
									</tr>
								</thead>
								<tbody>
									{comparisonRows.map(([label, stylexVal, cssVal]) => (
										<tr key={label}>
											<td {...stylex.props(docStyles.tdLabel)}>{label}</td>
											<td {...stylex.props(docStyles.td)}>{stylexVal}</td>
											<td {...stylex.props(docStyles.td)}>{cssVal}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</VStack>
				</Box>
			</VStack>
		</DocsLayout>
	);
}

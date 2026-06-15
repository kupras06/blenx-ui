import * as stylex from "@stylexjs/stylex";
import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";
import { Separator, Surface, Text, VStack } from "@/components/ui";
import { theme } from "@/lib/theme/contract.stylex";
import { fontSize, fonts, fontWeight, lineHeight, spacing } from "@/lib/theme/tokens.stylex";

const styles = stylex.create({
	code: {
		fontFamily: fonts.mono,
		fontSize: fontSize.small,
		lineHeight: lineHeight.normal,
	},
	inlineCode: {
		fontFamily: fonts.mono,
		fontSize: fontSize.small,
	},
	paragraph: {
		fontSize: fontSize.small,
		color: theme.contentSecondary,
		margin: 0,
		lineHeight: lineHeight.relaxed,
	},
	heading3: {
		fontSize: fontSize.large,
		fontWeight: fontWeight.semibold,
		margin: 0,
		color: theme.contentPrimary,
		marginTop: spacing["6"],
		marginBottom: spacing["2"],
	},
	section: {
		marginBottom: spacing["8"],
	},
	tableWrapper: {
		overflowX: "auto",
	},
	table: {
		width: "100%",
		borderCollapse: "collapse",
		fontSize: fontSize.small,
		lineHeight: lineHeight.relaxed,
	},
	th: {
		textAlign: "left",
		paddingInline: spacing["3"],
		paddingBlock: spacing["2"],
		borderBottomWidth: 1,
		borderBottomStyle: "solid",
		borderBottomColor: theme.border,
		fontWeight: fontWeight.semibold,
		color: theme.contentPrimary,
		whiteSpace: "nowrap",
	},
	td: {
		paddingInline: spacing["3"],
		paddingBlock: spacing["2"],
		borderBottomWidth: 1,
		borderBottomStyle: "solid",
		borderBottomColor: theme.borderSubtle,
		color: theme.contentSecondary,
		fontFamily: fonts.mono,
		fontSize: fontSize.xsmall,
	},
	tdLabel: {
		paddingInline: spacing["3"],
		paddingBlock: spacing["2"],
		borderBottomWidth: 1,
		borderBottomStyle: "solid",
		borderBottomColor: theme.borderSubtle,
		color: theme.contentSecondary,
		fontFamily: fonts.mono,
		fontSize: fontSize.xsmall,
		fontWeight: fontWeight.medium,
	},
	compactP: {
		fontSize: fontSize.small,
		color: theme.contentSecondary,
		margin: 0,
		lineHeight: lineHeight.relaxed,
		marginBottom: spacing["2"],
	},
	codeBlockMargin: {
		marginTop: spacing["3"],
	},
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

export const Route = createFileRoute("/docs/theming")({
	component: ThemingDoc,
});

function ThemingDoc() {
	return (
		<DocsLayout>
			<VStack gap="medium">
				<Text variant="h1">Theming</Text>
				<p {...stylex.props(styles.paragraph)}>
					Blenx UI provides two approaches for customizing the look and feel of
					your components. The Stylex Contract Theme is the recommended approach
					for projects already using Stylex.
				</p>

				<Separator tone="subtle" />

				<div {...stylex.props(styles.section)}>
					<VStack gap="medium">
						<Text variant="h2">
							Approach 1: Stylex Contract Theme (Recommended)
						</Text>
						<p {...stylex.props(styles.paragraph)}>
							Create a typed theme using{" "}
							<code {...stylex.props(styles.inlineCode)}>
								stylex.createTheme
							</code>{" "}
							from the exported theme contract. This gives you full type safety
							and integrates directly with Stylex's theming system.
						</p>
						<p {...stylex.props(styles.paragraph)}>
							The generated theme is applied via a{" "}
							<code {...stylex.props(styles.inlineCode)}>className</code> on the
							root element. All child components using the contract tokens will
							automatically pick up your custom values.
						</p>

						<h3 {...stylex.props(styles.heading3)}>1. Create a theme file</h3>
						<Surface variant="sunken" padding="medium">
							<code
								{...stylex.props(styles.code)}
							>{`// styles/my-theme.stylex.ts
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
});`}</code>
						</Surface>

						<h3 {...stylex.props(styles.heading3)}>2. Apply to root element</h3>
						<Surface variant="sunken" padding="medium">
							<code
								{...stylex.props(styles.code)}
							>{`// React — wrap your app root
import * as stylex from "@stylexjs/stylex";
import { myTheme } from "./styles/my-tokens.stylex";

function App() {
  return (
    <div {...stylex.props(myTheme)}>
      <YourApp />
    </div>
  );
}`}</code>
						</Surface>
						<div {...stylex.props(styles.codeBlockMargin)}>
							<Surface variant="sunken" padding="medium">
								<code
									{...stylex.props(styles.code)}
								>{`// Next.js — apply to the body or a layout wrapper
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
}`}</code>
							</Surface>
						</div>

						<h3 {...stylex.props(styles.heading3)}>Available Imports</h3>
						<Surface variant="sunken" padding="medium">
							<code
								{...stylex.props(styles.code)}
							>{`// Import the contract for createTheme
import { theme } from "@blenx-dev/theme/contract.stylex";

// Or use the convenience re-exports
import { theme, borderRadius, spacing, fontSize } from "@/lib/theme/tokens.stylex";`}</code>
						</Surface>
					</VStack>
				</div>

				<Separator tone="subtle" />

				<div {...stylex.props(styles.section)}>
					<VStack gap="medium">
						<Text variant="h2">Approach 2: CSS Variable Override</Text>
						<p {...stylex.props(styles.paragraph)}>
							The simplest approach. Create a CSS file that redeclares any of
							the theme's CSS custom properties. Your values will take
							precedence over the defaults through the cascade.
						</p>
						<p {...stylex.props(styles.paragraph)}>
							This works without any build configuration and can be done
							entirely in CSS. It is ideal for quick overrides, small tweaks, or
							projects that do not use Stylex directly.
						</p>

						<h3 {...stylex.props(styles.heading3)}>Example</h3>
						<Surface variant="sunken" padding="medium">
							<code
								{...stylex.props(styles.code)}
							>{`/* my-theme.css — import or link after the component styles */
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
}`}</code>
						</Surface>

						<h3 {...stylex.props(styles.heading3)}>Available Theme Tokens</h3>
						<p {...stylex.props(styles.compactP)}>
							All semantic color tokens from the theme contract. Override any
							subset &mdash; the rest fall back to defaults.
						</p>
						<div {...stylex.props(styles.tableWrapper)}>
							<table {...stylex.props(styles.table)}>
								<thead>
									<tr>
										<th {...stylex.props(styles.th)}>Token</th>
										<th {...stylex.props(styles.th)}>Token</th>
										<th {...stylex.props(styles.th)}>Token</th>
										<th {...stylex.props(styles.th)}>Token</th>
									</tr>
								</thead>
								<tbody>
									{tokenTable.map((row) => (
										<tr key={row.join("")}>
											{row.map((cell) => (
												<td key={cell} {...stylex.props(styles.td)}>
													{cell}
												</td>
											))}
											{row.length < 4
												? Array.from({ length: 4 - row.length }).map((_) => (
														<td
															key={`empty-${row.join("-")}`}
															{...stylex.props(styles.td)}
														/>
													))
												: null}
										</tr>
									))}
								</tbody>
							</table>
						</div>

						<h3 {...stylex.props(styles.heading3)}>Primitive Tokens</h3>
						<p {...stylex.props(styles.compactP)}>
							Spacing, typography, radius, and motion tokens are also available
							for override:
						</p>
						<Surface variant="sunken" padding="medium">
							<code {...stylex.props(styles.code)}>{`:root {
  --radius-medium: 6px;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --space-4: 12px;
  --duration-normal: 150ms;
}`}</code>
						</Surface>
					</VStack>
				</div>

				<Separator tone="subtle" />

				<div {...stylex.props(styles.section)}>
					<VStack gap="medium">
						<Text variant="h2">Comparing the Two Approaches</Text>
						<div {...stylex.props(styles.tableWrapper)}>
							<table {...stylex.props(styles.table)}>
								<thead>
									<tr>
										<th {...stylex.props(styles.th)} />
										<th {...stylex.props(styles.th)}>Stylex Contract</th>
										<th {...stylex.props(styles.th)}>CSS Override</th>
									</tr>
								</thead>
								<tbody>
									{comparisonRows.map(([label, stylexVal, cssVal]) => (
										<tr key={label}>
											<td {...stylex.props(styles.tdLabel)}>{label}</td>
											<td {...stylex.props(styles.td)}>{stylexVal}</td>
											<td {...stylex.props(styles.td)}>{cssVal}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</VStack>
				</div>
			</VStack>
		</DocsLayout>
	);
}

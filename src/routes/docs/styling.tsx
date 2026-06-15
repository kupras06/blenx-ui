import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";
import { Box, Separator, Surface, Text, VStack } from "@/components/ui";

export const Route = createFileRoute("/docs/styling")({
	component: StylingDoc,
});

function StylingDoc() {
	return (
		<DocsLayout>
			<VStack>
				<Text variant="h1">Styling with Stylex</Text>
				<Separator />
				<Box>
					<VStack gap="medium">
						<Text variant="h2">Why Stylex?</Text>
						<Text variant="body2" color="secondary">
							Blenx UI uses <strong>Stylex</strong> as its styling engine.
							Stylex is a CSS-in-JS library developed by Meta that compiles to
							atomic CSS at build time. Unlike runtime CSS-in-JS solutions,
							Stylex produces tiny, deterministic stylesheets with zero runtime
							overhead.
						</Text>
						<Text variant="body2" color="secondary">
							This means all styling is resolved at build time, resulting in
							minimal bundle size and excellent runtime performance. The
							tradeoff is that Stylex requires bundler plugin configuration and
							does not support CSS Cascade layers or traditional stylesheet
							features.
						</Text>
					</VStack>
				</Box>

				<Separator tone="subtle" />

				<Box>
					<VStack gap="medium">
						<Text variant="h2">Design Tokens</Text>
						<Text variant="body2" color="secondary">
							The design system is driven by CSS variables defined via{" "}
							<Text variant="code">stylex.defineVars</Text>:
						</Text>
						<Surface variant="sunken" padding="medium" render={<pre />}>
							<Text variant="code">{`export const theme = stylex.defineVars({
  primary: "",
  background: "",
  surface: "",
  border: "",
  contentPrimary: "",
  sentimentNegative: "",
  focusRing: "",
  shadowSm: "",
  // ...
});`}</Text>
						</Surface>
						<Text variant="body2" color="secondary">
							Theme tokens support automatic light/dark mode via media queries.
							See{" "}
							<a
								href="/docs/theming"
								style={{ color: "var(--primary)", textDecoration: "underline" }}
							>
								Theming
							</a>{" "}
							for details on customizing them.
						</Text>
					</VStack>
				</Box>

				<Separator tone="subtle" />

				<VStack gap="medium">
					<Text variant="h2">Style Composition</Text>
					<Text variant="body2" color="secondary">
						Components compose styles using{" "}
						<Text variant="code">stylex.props()</Text>, which merges multiple
						style definitions and applies them as atomic classes:
					</Text>
					<Surface variant="sunken" padding="medium" render={<pre />}>
						<code>{`const resolved = stylex.props(
  buttonStyles.base,
  variantStyles[variant],
  sizeStyles[size],
  style,          // overrides via prop
);`}</code>
					</Surface>
				</VStack>
				<Separator tone="subtle" />

				<VStack gap="medium">
					<Text variant="h2">Key Constraints</Text>
					<Box render={<ul />}>
						<li>
							<Text variant="body2">
								Stylex does not support <Text variant="code">@media</Text>{" "}
								queries in <Text variant="code">stylex.create</Text> — use{" "}
								<Text variant="code">stylex.defineVars</Text> with media query
								overrides.
							</Text>
						</li>
						<li>
							<Text variant="body2">
								Dynamic styles must be defined statically and toggled via
								conditionals — not created inline.
							</Text>
						</li>
						<li>
							<Text variant="body2">
								CSS custom properties are the primary theming mechanism.
							</Text>
						</li>
						<li>
							<Text variant="body2">
								Bundler plugin ( <Text variant="code">@stylexjs/unplugin</Text>)
								is required at build time.
							</Text>
						</li>
						<li>
							<Text variant="body2">
								No runtime style injection — all styles are extracted during
								build.
							</Text>
						</li>
					</Box>
				</VStack>
			</VStack>
		</DocsLayout>
	);
}

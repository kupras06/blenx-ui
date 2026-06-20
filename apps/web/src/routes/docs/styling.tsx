import { createFileRoute } from "@tanstack/react-router";
import { DocHeading } from "@/components/docs/doc-heading";
import { Box,Separator, Text, VStack } from "@blenx-dev/ui/components";;
import { CodeBlock } from "@/components/ui/CodeBlock/code-block";	
export const Route = createFileRoute("/docs/styling")({
	component: StylingDoc,
});

const DESIGN_TOKENS_CODE = `export const theme = stylex.defineVars({
  primary: "",
  background: "",
  surface: "",
  border: "",
  contentPrimary: "",
  sentimentNegative: "",
  focusRing: "",
  shadowSm: "",
  // ...
});`;

const STYLE_COMPOSITION_CODE = `const resolved = stylex.props(
  buttonStyles.base,
  variantStyles[variant],
  sizeStyles[size],
  style,          // overrides via prop
);`;

function StylingDoc() {
	return (
		<VStack>
			<DocHeading variant="h1" title="Styling with Stylex" />
			<Box>
				<VStack gap="medium">
					<DocHeading variant="h2" title="Why Stylex?" />
					<Text variant="body2" color="secondary">
						Blenx UI uses <strong>Stylex</strong> as its styling engine. Stylex
						is a CSS-in-JS library developed by Meta that compiles to atomic CSS
						at build time. Unlike runtime CSS-in-JS solutions, Stylex produces
						tiny, deterministic stylesheets with zero runtime overhead.
					</Text>
					<Text variant="body2" color="secondary">
						This means all styling is resolved at build time, resulting in
						minimal bundle size and excellent runtime performance. The tradeoff
						is that Stylex requires bundler plugin configuration and does not
						support CSS Cascade layers or traditional stylesheet features.
					</Text>
				</VStack>
			</Box>

			<Separator tone="subtle" />

			<Box>
				<VStack gap="medium">
					<DocHeading variant="h2" title="Design Tokens" />
					<Text variant="body2" color="secondary">
						The design system is driven by CSS variables defined via{" "}
						<Text variant="code" span>
							stylex.defineVars
						</Text>
						:
					</Text>
					<CodeBlock code={DESIGN_TOKENS_CODE} />
					<Text variant="body2" color="secondary">
						Theme tokens support automatic light/dark mode via media queries.
						See <a href="/docs/theming">Theming</a> for details on customizing
						them.
					</Text>
				</VStack>
			</Box>

			<Separator tone="subtle" />

			<VStack gap="medium">
				<DocHeading variant="h2" title="Style Composition" />
				<Text variant="body2" color="secondary">
					Components compose styles using{" "}
					<Text variant="code" span>
						stylex.props()
					</Text>
					, which merges multiple style definitions and applies them as atomic
					classes:
				</Text>
				<CodeBlock code={STYLE_COMPOSITION_CODE} />
			</VStack>
			<Separator tone="subtle" />

			<VStack gap="medium">
				<DocHeading variant="h2" title="Key Constraints" />
				<Box render={<ul />}>
					<li>
						<Text variant="body2">
							Stylex does not support{" "}
							<Text variant="code" span>
								@media
							</Text>{" "}
							queries in{" "}
							<Text variant="code" span>
								stylex.create
							</Text>{" "}
							— use{" "}
							<Text variant="code" span>
								stylex.defineVars
							</Text>{" "}
							with media query overrides.
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
							Bundler plugin ({" "}
							<Text variant="code" span>
								@stylexjs/unplugin
							</Text>
							) is required at build time.
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
	);
}

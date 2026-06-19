import { createFileRoute } from "@tanstack/react-router";
import { DocHeading } from "@/components/docs/doc-heading";
import { CodeBlock, Grid, Separator, Surface, Text, VStack } from "@/components/ui";

export const Route = createFileRoute("/docs/primitives")({
	component: PrimitivesDoc,
});

function PrimitivesDoc() {
	return (
		<>
			<VStack gap="medium">
				<DocHeading variant="h1" title="Primitives with Base UI" />
				<DocHeading variant="h2" title="Why Base UI?" />
				<Text variant="body2" color="secondary">
					Blenx UI is built on <strong>Base UI React</strong> (
					<Text variant="code" span>
						@base-ui/react
					</Text>
					), a headless component library from the creators of Material UI. Base
					UI provides unstyled, accessible primitives that handle behavior,
					keyboard navigation, focus management, and ARIA attributes.
				</Text>
				<Text variant="body2" color="secondary">
					Each Blenx UI component wraps a Base UI primitive with Stylex styling.
					This separation keeps the behavioral logic framework-agnostic while
					allowing full control over visual presentation.
				</Text>
				<Separator tone="subtle" />
			</VStack>

			<VStack gap="medium" paddingY="medium">
				<DocHeading variant="h2" title="Component Architecture" />
				<CodeBlock
					code={`// Base UI handles behavior and accessibility
import { useRender } from "@base-ui/react/use-render";

// Stylex handles visual styling
import * as stylex from "@stylexjs/stylex";

export function Button({ render, ...props }) {
  return useRender({
    defaultTagName: "button",
    props: stylex.props(buttonStyles.base, props),
    render,
  });
}`}
				/>
			</VStack>

			<Separator tone="subtle" />

			<VStack gap="medium" paddingY="medium">
				<DocHeading variant="h2" title="Key Primitives Used" />
				<Grid columns={2}>
					<Surface withBorder padding="small">
						<Text variant="h5">Dialog</Text>
						<Text variant="body2" color="secondary">
							@base-ui/react/dialog
						</Text>
					</Surface>
					<Surface withBorder padding="small">
						<Text variant="h5">Popover</Text>
						<Text variant="body2" color="secondary">
							@base-ui/react/popover
						</Text>
					</Surface>
					<Surface withBorder padding="small">
						<Text variant="h5">Select, Menu, Combobox, Autocomplete</Text>
						<Text variant="body2" color="secondary">
							various Base UI modules
						</Text>
					</Surface>
					<Surface withBorder padding="small">
						<Text variant="h5">Field, Input, Switch, Toggle</Text>
						<Text variant="body2" color="secondary">
							form primitives
						</Text>
					</Surface>
					<Surface withBorder padding="small">
						<Text variant="h5">ScrollArea, Tabs, Separator, Avatar</Text>
						<Text variant="body2" color="secondary">
							layout and media
						</Text>
					</Surface>
					<Surface withBorder padding="small">
						<Text variant="h5">useRender, mergeProps</Text>
						<Text variant="body2" color="secondary">
							composition utilities
						</Text>
					</Surface>
				</Grid>
			</VStack>

			<Separator tone="subtle" />

			<VStack gap="medium" paddingY="medium">
				<DocHeading variant="h2" title="Extending with render">
					Extending with{" "}
					<Text variant="code" size="large" span>
						render
					</Text>
				</DocHeading>
				<Text variant="body2" color="secondary">
					Every component supports a{" "}
					<Text variant="code" span>
						render
					</Text>{" "}
					prop that lets you override the rendered HTML element. This makes the
					library highly composable:
				</Text>
				<CodeBlock
					code={`// Render Button as a link
<Button render={<a href="/page" />}>Go</Button>

// Compose Dialog close as a Button
<DialogPrimitive.Close render={<Button size="small" />}>
  <XIcon />
</DialogPrimitive.Close>`}
				/>
			</VStack>
		</>
	);
}

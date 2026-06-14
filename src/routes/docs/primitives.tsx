import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";

export const Route = createFileRoute("/docs/primitives")({
	component: PrimitivesDoc,
});

const s = {
	section: { marginBottom: "var(--space-8)" } as React.CSSProperties,
	code: {
		backgroundColor: "var(--surfaceSubtle)",
		borderRadius: "var(--radius-small)",
		paddingInline: "var(--space-1)",
		fontFamily: "var(--font-mono)",
		fontSize: "var(--font-size-small)",
	} as React.CSSProperties,
	pre: {
		backgroundColor: "var(--surfaceSubtle)",
		borderRadius: "var(--radius-medium)",
		padding: "var(--space-4)",
		overflowX: "auto",
		fontFamily: "var(--font-mono)",
		fontSize: "var(--font-size-small)",
		lineHeight: "var(--leading-normal)",
		margin: 0,
	} as React.CSSProperties,
	card: {
		borderRadius: "var(--radius-medium)",
		border: "1px solid var(--border)",
		padding: "var(--space-4)",
	} as React.CSSProperties,
	paragraph: {
		fontSize: "var(--font-size-small)",
		color: "var(--contentSecondary)",
		margin: 0,
		lineHeight: "var(--leading-relaxed)",
	} as React.CSSProperties,
};

function PrimitivesDoc() {
	return (
		<DocsLayout>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "var(--space-8)",
				}}
			>
				<h1
					style={{
						fontSize: "var(--font-size-display)",
						fontWeight: "var(--font-weight-bold)",
						margin: 0,
						color: "var(--contentPrimary)",
					}}
				>
					Primitives with Base UI
				</h1>

				<section style={s.section}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "var(--space-4)",
						}}
					>
						<h2
							style={{
								fontSize: "var(--font-size-xxlarge)",
								fontWeight: "var(--font-weight-bold)",
								margin: 0,
								color: "var(--contentPrimary)",
							}}
						>
							Why Base UI?
						</h2>
						<p style={s.paragraph}>
							Blenx UI is built on <strong>Base UI React</strong> (
							<code style={s.code}>@base-ui/react</code>), a headless component
							library from the creators of Material UI. Base UI provides
							unstyled, accessible primitives that handle behavior, keyboard
							navigation, focus management, and ARIA attributes.
						</p>
						<p style={s.paragraph}>
							Each Blenx UI component wraps a Base UI primitive with Stylex
							styling. This separation keeps the behavioral logic
							framework-agnostic while allowing full control over visual
							presentation.
						</p>
					</div>
				</section>

				<hr
					style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }}
				/>

				<section style={s.section}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "var(--space-4)",
						}}
					>
						<h2
							style={{
								fontSize: "var(--font-size-xxlarge)",
								fontWeight: "var(--font-weight-bold)",
								margin: 0,
								color: "var(--contentPrimary)",
							}}
						>
							Component Architecture
						</h2>
						<pre style={s.pre}>
							<code>{`// Base UI handles behavior and accessibility
import { useRender } from "@base-ui/react/use-render";

// Stylex handles visual styling
import * as stylex from "@stylexjs/stylex";

export function Button({ render, ...props }) {
  return useRender({
    defaultTagName: "button",
    props: stylex.props(buttonStyles.base, props),
    render,
  });
}`}</code>
						</pre>
					</div>
				</section>

				<hr
					style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }}
				/>

				<section style={s.section}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "var(--space-4)",
						}}
					>
						<h2
							style={{
								fontSize: "var(--font-size-xxlarge)",
								fontWeight: "var(--font-weight-bold)",
								margin: 0,
								color: "var(--contentPrimary)",
							}}
						>
							Key Primitives Used
						</h2>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gap: "var(--space-3)",
							}}
						>
							<div style={s.card}>
								<p
									style={{
										fontSize: "var(--font-size-small)",
										fontWeight: "var(--font-weight-medium)",
										margin: 0,
										color: "var(--contentPrimary)",
									}}
								>
									Dialog
								</p>
								<p
									style={{
										fontSize: "var(--font-size-xsmall)",
										color: "var(--contentSecondary)",
										margin: 0,
									}}
								>
									@base-ui/react/dialog
								</p>
							</div>
							<div style={s.card}>
								<p
									style={{
										fontSize: "var(--font-size-small)",
										fontWeight: "var(--font-weight-medium)",
										margin: 0,
										color: "var(--contentPrimary)",
									}}
								>
									Popover
								</p>
								<p
									style={{
										fontSize: "var(--font-size-xsmall)",
										color: "var(--contentSecondary)",
										margin: 0,
									}}
								>
									@base-ui/react/popover
								</p>
							</div>
							<div style={s.card}>
								<p
									style={{
										fontSize: "var(--font-size-small)",
										fontWeight: "var(--font-weight-medium)",
										margin: 0,
										color: "var(--contentPrimary)",
									}}
								>
									Select, Menu, Combobox, Autocomplete
								</p>
								<p
									style={{
										fontSize: "var(--font-size-xsmall)",
										color: "var(--contentSecondary)",
										margin: 0,
									}}
								>
									various Base UI modules
								</p>
							</div>
							<div style={s.card}>
								<p
									style={{
										fontSize: "var(--font-size-small)",
										fontWeight: "var(--font-weight-medium)",
										margin: 0,
										color: "var(--contentPrimary)",
									}}
								>
									Field, Input, Switch, Toggle
								</p>
								<p
									style={{
										fontSize: "var(--font-size-xsmall)",
										color: "var(--contentSecondary)",
										margin: 0,
									}}
								>
									form primitives
								</p>
							</div>
							<div style={s.card}>
								<p
									style={{
										fontSize: "var(--font-size-small)",
										fontWeight: "var(--font-weight-medium)",
										margin: 0,
										color: "var(--contentPrimary)",
									}}
								>
									ScrollArea, Tabs, Separator, Avatar
								</p>
								<p
									style={{
										fontSize: "var(--font-size-xsmall)",
										color: "var(--contentSecondary)",
										margin: 0,
									}}
								>
									layout and media
								</p>
							</div>
							<div style={s.card}>
								<p
									style={{
										fontSize: "var(--font-size-small)",
										fontWeight: "var(--font-weight-medium)",
										margin: 0,
										color: "var(--contentPrimary)",
									}}
								>
									useRender, mergeProps
								</p>
								<p
									style={{
										fontSize: "var(--font-size-xsmall)",
										color: "var(--contentSecondary)",
										margin: 0,
									}}
								>
									composition utilities
								</p>
							</div>
						</div>
					</div>
				</section>

				<hr
					style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }}
				/>

				<section style={s.section}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "var(--space-4)",
						}}
					>
						<h2
							style={{
								fontSize: "var(--font-size-xxlarge)",
								fontWeight: "var(--font-weight-bold)",
								margin: 0,
								color: "var(--contentPrimary)",
							}}
						>
							Extending with <code style={s.code}>render</code>
						</h2>
						<p style={s.paragraph}>
							Every component supports a <code style={s.code}>render</code> prop
							that lets you override the rendered HTML element. This makes the
							library highly composable:
						</p>
						<pre style={s.pre}>
							<code>{`// Render Button as a link
<Button render={<a href="/page" />}>Go</Button>

// Compose Dialog close as a Button
<DialogPrimitive.Close render={<Button size="small" />}>
  <XIcon />
</DialogPrimitive.Close>`}</code>
						</pre>
					</div>
				</section>
			</div>
		</DocsLayout>
	);
}

import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";

export const Route = createFileRoute("/docs/limitations")({
	component: LimitationsDoc,
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
	list: {
		listStyle: "disc",
		paddingInlineStart: "var(--space-6)",
		margin: 0,
	} as React.CSSProperties,
	li: {
		fontSize: "var(--font-size-small)",
		lineHeight: "var(--leading-relaxed)",
	} as React.CSSProperties,
	paragraph: {
		fontSize: "var(--font-size-small)",
		color: "var(--contentSecondary)",
		margin: 0,
		lineHeight: "var(--leading-relaxed)",
	} as React.CSSProperties,
};

function LimitationsDoc() {
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
					Limitations
				</h1>
				<p style={s.paragraph}>
					Blenx UI makes specific technology choices that come with important
					constraints. Review these before adopting the library.
				</p>

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
							Monorepo Not Supported for Consumers
						</h2>
						<p style={s.paragraph}>
							The shadcn registry model copies source files directly into your
							project. The copied files use import aliases (
							<code style={s.code}>@/components</code>,{" "}
							<code style={s.code}>@/lib</code>, etc.) that assume a flat
							project structure.
						</p>
						<p style={s.paragraph}>
							If you are using a monorepo (Turborepo, Nx, Rush, pnpm
							workspaces), the installed component files and their relative
							imports may not resolve correctly across package boundaries. Each
							consuming application must independently configure its own alias
							resolution and Stylex plugin.
						</p>
						<p style={s.paragraph}>
							<strong>Recommendation:</strong> Install components into a single
							application package, not into a shared UI package within your
							monorepo.
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
							Stylex Build Requirement
						</h2>
						<p style={s.paragraph}>
							Stylex is a build-time CSS-in-JS solution. Every consumer project
							must:
						</p>
						<ul style={s.list}>
							<li style={s.li}>
								Install and configure the Stylex bundler plugin (
								<code style={s.code}>@stylexjs/unplugin</code>)
							</li>
							<li style={s.li}>
								Use a supported bundler: Vite, Next.js, Webpack, or ESBuild
							</li>
							<li style={s.li}>
								NOT use CSS-in-JS solutions that conflict with atomic class
								extraction (e.g., styled-components, Emotion)
							</li>
						</ul>
						<p style={s.paragraph}>
							Without proper Stylex configuration, components will render
							without styles.
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
							Base UI Version Lock
						</h2>
						<p style={s.paragraph}>
							Blenx UI depends on specific{" "}
							<code style={s.code}>@base-ui/react</code> APIs. The library is
							tested against <strong>Base UI React ^1.5.0</strong>. Upgrading
							Base UI may break component behavior. If you need a newer Base UI
							version, test all components thoroughly.
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
							No Tailwind CSS Support
						</h2>
						<p style={s.paragraph}>
							This project deliberately chose Stylex over Tailwind CSS. The
							registry components ship with their own Stylex styles. If your
							project uses Tailwind, the two can coexist, but components will
							use Stylex classes, not Tailwind utilities. You cannot override
							component styles with <code style={s.code}>className</code> — use
							the <code style={s.code}>style</code> prop instead.
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
							Phosphor Icons
						</h2>
						<p style={s.paragraph}>
							The library uses <code style={s.code}>@phosphor-icons/react</code>{" "}
							for all iconography. If you prefer a different icon set, you will
							need to replace icon imports in the installed component source
							files manually.
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
							Framework Compatibility
						</h2>
						<p style={s.paragraph}>
							Components are built with React 19+ and are not tested with:
						</p>
						<ul style={s.list}>
							<li style={s.li}>React Native</li>
							<li style={s.li}>Vue, Svelte, Solid, or other frameworks</li>
							<li style={s.li}>Older React versions (&lt;19)</li>
						</ul>
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
							CSS Custom Properties Theming
						</h2>
						<p style={s.paragraph}>
							Theme tokens are implemented as Stylex CSS variables. While this
							enables efficient light/dark mode switching, it means theme
							customization is limited to CSS variable overrides. You cannot use
							JavaScript-level theme switching without updating component source
							code.
						</p>
						<pre style={s.pre}>
							<code>{`/* Override theme tokens in your CSS */
:root {
  --primary: #your-color;
  --background: #your-bg;
}`}</code>
						</pre>
					</div>
				</section>
			</div>
		</DocsLayout>
	);
}

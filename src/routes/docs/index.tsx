import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";

export const Route = createFileRoute("/docs/")({
	component: DocsHome,
});

function DocsHome() {
	return (
		<DocsLayout>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "var(--space-6)",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "var(--space-3)",
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
						Blenx UI Docs
					</h1>
					<p
						style={{
							fontSize: "var(--font-size-medium)",
							color: "var(--contentSecondary)",
							margin: 0,
							lineHeight: "var(--leading-relaxed)",
						}}
					>
						A design system built with Stylex and Base UI, distributed via the
						shadcn registry model.
					</p>
				</div>

				<hr
					style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }}
				/>

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
						Quick Start
					</h2>
					<p
						style={{
							fontSize: "var(--font-size-small)",
							color: "var(--contentSecondary)",
							margin: 0,
							lineHeight: "var(--leading-relaxed)",
						}}
					>
						Install components via the shadcn CLI into your React project:
					</p>
					<pre
						style={{
							backgroundColor: "var(--surfaceSubtle)",
							borderRadius: "var(--radius-medium)",
							padding: "var(--space-4)",
							overflowX: "auto",
							fontFamily: "var(--font-mono)",
							fontSize: "var(--font-size-small)",
							lineHeight: "var(--leading-normal)",
							margin: 0,
						}}
					>
						<code>{`npx shadcn@latest add http://localhost:3001/reg/button.json`}</code>
					</pre>
					<p
						style={{
							fontSize: "var(--font-size-small)",
							color: "var(--contentSecondary)",
							margin: 0,
							lineHeight: "var(--leading-relaxed)",
						}}
					>
						Browse the sidebar to learn about installation, styling, theming,
						and constraints.
					</p>
				</div>
			</div>
		</DocsLayout>
	);
}

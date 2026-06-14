import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";

export const Route = createFileRoute("/docs/styling")({
  component: StylingDoc,
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

function StylingDoc() {
  return (
    <DocsLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
        <h1
          style={{
            fontSize: "var(--font-size-display)",
            fontWeight: "var(--font-weight-bold)",
            margin: 0,
            color: "var(--contentPrimary)",
          }}
        >
          Styling with Stylex
        </h1>

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <h2
              style={{
                fontSize: "var(--font-size-xxlarge)",
                fontWeight: "var(--font-weight-bold)",
                margin: 0,
                color: "var(--contentPrimary)",
              }}
            >
              Why Stylex?
            </h2>
            <p style={s.paragraph}>
              Blenx UI uses <strong>Stylex</strong> as its styling engine. Stylex is a CSS-in-JS
              library developed by Meta that compiles to atomic CSS at build time. Unlike runtime
              CSS-in-JS solutions, Stylex produces tiny, deterministic stylesheets with zero runtime
              overhead.
            </p>
            <p style={s.paragraph}>
              This means all styling is resolved at build time, resulting in minimal bundle size and
              excellent runtime performance. The tradeoff is that Stylex requires bundler plugin
              configuration and does not support CSS Cascade layers or traditional stylesheet
              features.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <h2
              style={{
                fontSize: "var(--font-size-xxlarge)",
                fontWeight: "var(--font-weight-bold)",
                margin: 0,
                color: "var(--contentPrimary)",
              }}
            >
              Design Tokens
            </h2>
            <p style={s.paragraph}>
              The design system is driven by CSS variables defined via{" "}
              <code style={s.code}>stylex.defineVars</code>:
            </p>
            <pre style={s.pre}>
              <code>{`export const theme = stylex.defineVars({
  primary: "",
  background: "",
  surface: "",
  border: "",
  contentPrimary: "",
  sentimentNegative: "",
  focusRing: "",
  shadowSm: "",
  // ...
});`}</code>
            </pre>
            <p style={s.paragraph}>
              Theme tokens support automatic light/dark mode via media queries. See{" "}
              <a href="/docs/theming" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                Theming
              </a>{" "}
              for details on customizing them.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <h2
              style={{
                fontSize: "var(--font-size-xxlarge)",
                fontWeight: "var(--font-weight-bold)",
                margin: 0,
                color: "var(--contentPrimary)",
              }}
            >
              Style Composition
            </h2>
            <p style={s.paragraph}>
              Components compose styles using <code style={s.code}>stylex.props()</code>, which
              merges multiple style definitions and applies them as atomic classes:
            </p>
            <pre style={s.pre}>
              <code>{`const resolved = stylex.props(
  buttonStyles.base,
  variantStyles[variant],
  sizeStyles[size],
  style,          // overrides via prop
);`}</code>
            </pre>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <h2
              style={{
                fontSize: "var(--font-size-xxlarge)",
                fontWeight: "var(--font-weight-bold)",
                margin: 0,
                color: "var(--contentPrimary)",
              }}
            >
              Key Constraints
            </h2>
            <ul style={s.list}>
              <li style={s.li}>
                Stylex does not support <code style={s.code}>@media</code> queries in{" "}
                <code style={s.code}>stylex.create</code> — use{" "}
                <code style={s.code}>stylex.defineVars</code> with media query overrides.
              </li>
              <li style={s.li}>
                Dynamic styles must be defined statically and toggled via conditionals — not created
                inline.
              </li>
              <li style={s.li}>CSS custom properties are the primary theming mechanism.</li>
              <li style={s.li}>
                Bundler plugin (<code style={s.code}>@stylexjs/unplugin</code>) is required at build
                time.
              </li>
              <li style={s.li}>
                No runtime style injection — all styles are extracted during build.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { DocsLayout } from "@/components/docs-layout";

export const Route = createFileRoute("/docs/installation")({
  component: InstallationDoc,
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
};

function InstallationDoc() {
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
          Installation
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
              Prerequisites
            </h2>
            <ul style={s.list}>
              <li style={s.li}>React 19+</li>
              <li style={s.li}>@stylexjs/stylex</li>
              <li style={s.li}>@base-ui/react</li>
              <li style={s.li}>A JS bundler with Stylex plugin support (Vite, Next.js, Webpack)</li>
              <li style={s.li}>shadcn CLI v4+</li>
            </ul>
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
              1. Configure the Registry
            </h2>
            <p
              style={{
                fontSize: "var(--font-size-small)",
                color: "var(--contentSecondary)",
                margin: 0,
              }}
            >
              Add the Blenx UI registry to your project's{" "}
              <code style={s.code}>components.json</code>:
            </p>
            <pre style={s.pre}>
              <code>{`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "blenx-dev": {
      "baseUrl": "http://localhost:3001/reg"
    }
  }
}`}</code>
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
              2. Install a Component
            </h2>
            <pre style={s.pre}>
              <code>{`# Using the registry URL directly
npx shadcn@latest add http://localhost:3001/reg/button.json

# Or using the configured registry name
npx shadcn@latest add @blenx-dev/button`}</code>
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
              3. Required Dependencies
            </h2>
            <p
              style={{
                fontSize: "var(--font-size-small)",
                color: "var(--contentSecondary)",
                margin: 0,
              }}
            >
              Each component may require installing additional packages:
            </p>
            <pre style={s.pre}>
              <code>{`npm install @stylexjs/stylex @base-ui/react @phosphor-icons/react
# Plus optional: react-day-picker, date-fns, react-colorful`}</code>
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
              4. Configure Stylex
            </h2>
            <p
              style={{
                fontSize: "var(--font-size-small)",
                color: "var(--contentSecondary)",
                margin: 0,
              }}
            >
              Your bundler must be configured with the Stylex plugin. Components use atomic CSS via
              Stylex, which requires a build-time transform.
            </p>
            <pre style={s.pre}>
              <code>{`// Example: vite.config.ts
import { stylexPlugin } from "@stylexjs/unplugin/vite";

export default defineConfig({
  plugins: [
    stylexPlugin({ ... }),
  ],
});`}</code>
            </pre>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}

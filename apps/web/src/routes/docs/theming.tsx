import { createFileRoute } from "@tanstack/react-router";
import { DocHeading } from "@/components/docs/doc-heading";
import { Box, Separator, Text, VStack } from "@blenx-dev/ui/components";;
import { CodeBlock } from "@/components/ui/CodeBlock/code-block";	
export const Route = createFileRoute("/docs/theming")({
	component: ThemingDoc,
});

const THEME_FILE_CODE = `// styles/my-theme.stylex.ts
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
});`;

const REACT_WRAPPER_CODE = `// React — wrap your app root
import * as stylex from "@stylexjs/stylex";
import { myTheme } from "./styles/my-tokens.stylex";

function App() {
  return (
    <div {...stylex.props(myTheme)}>
      <YourApp />
    </div>
  );
}`;

const NEXTJS_WRAPPER_CODE = `// Next.js — apply to the body or a layout wrapper
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
}`;

const AVAILABLE_IMPORTS_CODE = `// Import the contract for createTheme
import { theme } from "@blenx-dev/theme/contract.stylex";

// Or use the convenience re-exports
import { theme, borderRadius, spacing, fontSize } from "@/lib/theme/tokens.stylex";`;

function ThemingDoc() {
	return (
		<VStack gap="medium">
			<DocHeading variant="h1" title="Theming" />
			<Box>
				<VStack gap="medium">
					<DocHeading
						variant="h2"
						title="Recommended Approach: Stylex Contract Theme"
					/>
					<Text variant="body1" color="secondary">
						Create a typed theme using{" "}
						<Text variant="code" span>
							stylex.createTheme
						</Text>{" "}
						from the exported theme contract. This gives you full type safety
						and integrates directly with Stylex's theming system.
					</Text>
					<Text variant="body1" color="secondary">
						The generated theme is applied via a{" "}
						<Text variant="code" span>
							className
						</Text>{" "}
						on the root element. All child components using the contract tokens
						will automatically pick up your custom values.
					</Text>

					<DocHeading variant="h3" title="1. Create a theme file" />
					<CodeBlock code={THEME_FILE_CODE} />

					<DocHeading variant="h3" title="2. Apply to root element" />
					<CodeBlock code={REACT_WRAPPER_CODE} />
					<CodeBlock code={NEXTJS_WRAPPER_CODE} />

					<DocHeading variant="h3" title="Available Imports" />
					<CodeBlock code={AVAILABLE_IMPORTS_CODE} />
				</VStack>
			</Box>

			<Separator tone="subtle" />
		</VStack>
	);
}

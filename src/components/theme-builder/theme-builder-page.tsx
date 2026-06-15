import * as stylex from "@stylexjs/stylex";
import { spacing } from "@/lib/theme/tokens.stylex";
import { ScrollArea, Text, VStack } from "@/components/ui";
import { ThemeBuilderProvider } from "./theme-builder-context";
import { ThemePreviewProvider } from "./theme-provider";
import {
	ColorControls,
	TypographyControls,
	NonColorControls,
	PresetControls,
} from "./controls";

const styles = stylex.create({
	layout: {
		display: "grid",
		gridTemplateColumns: "320px 1fr",
		height: "calc(100vh - 57px)",
	},
	sidebar: {
		borderRightWidth: 1,
		borderRightStyle: "solid",
		borderRightColor: "var(--xrvdk6j)",
		overflow: "auto",
	},
	preview: {
		padding: spacing["6"],
		overflow: "auto",
	},
});

export function ThemeBuilderPage() {
	return (
		<ThemeBuilderProvider>
			<ThemePreviewProvider>
				<div {...stylex.props(styles.layout)}>
					<ScrollArea {...stylex.props(styles.sidebar)}>
						<VStack padding="medium" gap="medium">
							<Text variant="h2">Theme Builder</Text>
							<PresetControls />
							<ColorControls />
							<TypographyControls />
							<NonColorControls />
						</VStack>
					</ScrollArea>
					<div {...stylex.props(styles.preview)}>
						<Text variant="h3">Preview</Text>
						<VStack padding="medium" gap="medium">
							<Text variant="h1">Heading 1</Text>
							<Text variant="h2">Heading 2</Text>
							<Text variant="h3">Heading 3</Text>
							<Text variant="body1">
								Body text with primary color. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</Text>
							<Text variant="body2" color="secondary">
								Secondary body text for less emphasis.
							</Text>
						</VStack>
					</div>
				</div>
			</ThemePreviewProvider>
		</ThemeBuilderProvider>
	);
}

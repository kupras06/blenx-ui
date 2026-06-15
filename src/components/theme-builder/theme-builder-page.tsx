import * as stylex from "@stylexjs/stylex";
import { spacing } from "@/lib/theme/tokens.stylex";
import {
	ScrollArea,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
	Text,
	VStack,
} from "@/components/ui";
import { ThemeBuilderProvider } from "./theme-builder-context";
import { ThemePreviewProvider } from "./theme-provider";
import {
	ColorControls,
	TypographyControls,
	NonColorControls,
	PresetControls,
} from "./controls";
import { ComponentShowcase, ExampleDashboard } from "./preview";

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
					<ScrollArea {...stylex.props(styles.preview)}>
						<Tabs defaultValue="showcase">
							<TabsList>
								<TabsTab value="showcase">Components</TabsTab>
								<TabsTab value="dashboard">Dashboard</TabsTab>
							</TabsList>
							<TabsPanel value="showcase">
								<ComponentShowcase />
							</TabsPanel>
							<TabsPanel value="dashboard">
								<ExampleDashboard />
							</TabsPanel>
						</Tabs>
					</ScrollArea>
				</div>
			</ThemePreviewProvider>
		</ThemeBuilderProvider>
	);
}

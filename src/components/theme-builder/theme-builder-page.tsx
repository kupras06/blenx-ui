import { ListIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
	Accordion,
	Button,
	ScrollArea,
	Splitter,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
} from "@/components/ui";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing } from "@/lib/theme/tokens.stylex";
import {
	ColorControls,
	NonColorControls,
	PresetControls,
	TypographyControls,
} from "./controls";
import { PreviewErrorBoundary } from "./error-boundary";
import { ExportPanel } from "./export";
import { ImpactSummary } from "./impact-map";
import { ComponentShowcase, ExampleDashboard } from "./preview";
import { HowItWorks, TokenTable } from "./stylex-showcase";
import { ThemeBuilderProvider, useThemeBuilder } from "./theme-builder-context";
import { ThemePreviewProvider } from "./theme-provider";

const styles = stylex.create({
	layout: {
		display: "grid",
		gridTemplateColumns: "340px 1fr",
		height: "calc(100vh - 57px)",
	},
	layoutFull: {
		gridTemplateColumns: "1fr",
	},
	sidebar: {
		borderRightWidth: 1,
		borderRightStyle: "solid",
		borderRightColor: theme.border,
		overflow: "auto",
		maxHeight: "90svh",
		backgroundColor: theme.background,
	},
	sidebarOverlay: {
		position: "fixed",
		inset: 0,
		zIndex: 100,
		backgroundColor: theme.surfaceOverlay,
	},
	sidebarDrawer: {
		position: "fixed",
		top: 57,
		left: 0,
		bottom: 0,
		width: "80%",
		maxWidth: 340,
		zIndex: 101,
		backgroundColor: theme.background,
		borderRightWidth: 1,
		borderRightStyle: "solid",
		borderRightColor: theme.border,
		overflow: "auto",
	},
	preview: {
		padding: spacing["6"],
		overflow: "auto",
	},
	previewCompact: {
		padding: spacing["3"],
	},
	mobileToggle: {
		display: "flex",
		alignItems: "center",
		gap: spacing["2"],
		paddingBlock: spacing["2"],
		marginBottom: spacing["3"],
	},
	impactRow: {
		paddingInline: spacing["3"],
	},
});

function SidebarContent() {
	return (
		<Accordion.Root
			defaultValue={["presets", "colors", "typography", "noncolor", "export"]}
		>
			<PresetControls />
			<ColorControls />
			<TypographyControls />
			<NonColorControls />
			<ExportPanel />
			<TokenTable />
			<HowItWorks />
		</Accordion.Root>
	);
}

function Sidebar({ compact }: { compact: boolean }) {
	const sidebarOpen = useThemeBuilder((s) => s.sidebarOpen);

	if (!compact) {
		return (
			<ScrollArea {...stylex.props(styles.sidebar)}>
				<SidebarContent />
			</ScrollArea>
		);
	}

	if (!sidebarOpen) return null;

	return (
		<ScrollArea {...stylex.props(styles.sidebarDrawer)}>
			<SidebarContent />
		</ScrollArea>
	);
}

function PreviewPanel({ compact }: { compact: boolean }) {
	const toggleSidebar = useThemeBuilder((s) => s.toggleSidebar);

	return (
		<ScrollArea
			{...stylex.props(styles.preview, compact && styles.previewCompact)}
		>
			{compact && (
				<div {...stylex.props(styles.mobileToggle)}>
					<Button variant="ghost" size="small" onClick={toggleSidebar}>
						<ListIcon size={16} />
						Controls
					</Button>
				</div>
			)}

			<Tabs defaultValue="showcase">
				<TabsList>
					<TabsTab value="showcase">Components</TabsTab>
					<TabsTab value="dashboard">Dashboard</TabsTab>
					<TabsTab value="inspector">Variables</TabsTab>
				</TabsList>
				<TabsPanel value="showcase">
					<PreviewErrorBoundary>
						<ComponentShowcase />
					</PreviewErrorBoundary>
				</TabsPanel>
				<TabsPanel value="dashboard">
					<PreviewErrorBoundary>
						<ExampleDashboard />
					</PreviewErrorBoundary>
				</TabsPanel>
				<TabsPanel value="inspector">
					<ImpactSummary />
					<TokenTable />
					<HowItWorks />
				</TabsPanel>
			</Tabs>
		</ScrollArea>
	);
}

function ThemeBuilderInner() {
	const isMobile = useMediaQuery("(max-width: 639px)");
	const isTablet = useMediaQuery("(max-width: 1023px)");
	const compact = isMobile || isTablet;

	if (compact) {
		return (
			<ThemePreviewProvider>
				<div {...stylex.props(styles.layout, styles.layoutFull)}>
					<Sidebar compact />
					<PreviewPanel compact />
				</div>
			</ThemePreviewProvider>
		);
	}

	return (
		<ThemePreviewProvider>
			<Splitter orientation="horizontal">
				<Splitter.Panel defaultSize={28} minSize={18} maxSize={50}>
					<ScrollArea {...stylex.props(styles.sidebar)}>
						<SidebarContent />
					</ScrollArea>
				</Splitter.Panel>
				<Splitter.Handle />
				<Splitter.Panel minSize={30}>
					<PreviewPanel compact={false} />
				</Splitter.Panel>
			</Splitter>
		</ThemePreviewProvider>
	);
}

export function ThemeBuilderPage() {
	return (
		<ThemeBuilderProvider>
			<ThemeBuilderInner />
		</ThemeBuilderProvider>
	);
}

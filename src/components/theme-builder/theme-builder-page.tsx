import { ListIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
	Accordion,
	Button,
	ScrollArea,
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
			<Accordion.Item value="presets">
				<Accordion.Header>
					<Accordion.Trigger>Presets</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					<PresetControls />
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value="colors">
				<Accordion.Header>
					<Accordion.Trigger>Colors</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					<ColorControls noSection />
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value="typography">
				<Accordion.Header>
					<Accordion.Trigger>Typography</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					<TypographyControls noSection />
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value="noncolor">
				<Accordion.Header>
					<Accordion.Trigger>Design Tokens</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					<NonColorControls />
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value="export">
				<Accordion.Header>
					<Accordion.Trigger>Export</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					<ExportPanel noSection />
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value="variables">
				<Accordion.Header>
					<Accordion.Trigger>Theme Variables</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					<TokenTable noSection />
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value="howitworks">
				<Accordion.Header>
					<Accordion.Trigger>How It Works</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Panel>
					<HowItWorks noSection />
				</Accordion.Panel>
			</Accordion.Item>
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

	return (
		<ThemePreviewProvider>
			<div {...stylex.props(styles.layout, compact && styles.layoutFull)}>
				<Sidebar compact={compact} />
				<PreviewPanel compact={compact} />
			</div>
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

import { ListIcon } from "@phosphor-icons/react";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
	Accordion,
	Box,
	Button,
	ScrollArea,
	Splitter,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
} from "@/components/ui";
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
import { ClientOnly } from "@tanstack/react-router";

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
			<ScrollArea height="90svh">
				<SidebarContent />
			</ScrollArea>
		);
	}

	if (!sidebarOpen) return null;

	return (
		<ScrollArea height="90svh">
			<SidebarContent />
		</ScrollArea>
	);
}

function PreviewPanel({ compact }: { compact: boolean }) {
	const toggleSidebar = useThemeBuilder((s) => s.toggleSidebar);

	return (
		<ScrollArea height="90svh">
			{compact && (
				<Button variant="ghost" size="small" onClick={toggleSidebar}>
					<ListIcon size={16} />
					Controls
				</Button>
			)}

			<Box paddingX="xlarge">
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
			</Box>
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
				<Sidebar compact />
				<PreviewPanel compact />
			</ThemePreviewProvider>
		);
	}

	return (
		<ThemePreviewProvider>
			<Splitter orientation="horizontal">
				<Splitter.Panel defaultSize={28} minSize={18} maxSize={50}>
					<ScrollArea height="90svh">
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
			<ClientOnly>
				<ThemeBuilderInner />
			</ClientOnly>
		</ThemeBuilderProvider>
	);
}

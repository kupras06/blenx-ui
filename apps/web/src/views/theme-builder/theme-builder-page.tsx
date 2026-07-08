import { SidebarIcon } from "@phosphor-icons/react";
import {
  Accordion,
  Box,
  IconButton,
  ScrollArea,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Sheet,
  SheetPopup,
  HStack,
  Container,
  SheetPanel,
  SheetHeader,
  SheetTitle,
} from "@blenx-dev/core";
import { ColorControls, NonColorControls, PresetControls, TypographyControls } from "./controls";
import { PreviewErrorBoundary } from "./error-boundary";
import { ExportPanel } from "./export";
import { ImpactSummary } from "./impact-map";
import {
  AuthPreview,
  ComponentShowcase,
  ExampleDashboard,
  MarketingPreview,
  SettingsPreview,
  StatesPreview,
} from "./preview";
import { HowItWorks, TokenTable } from "./ve-showcase";
import { ThemeBuilderProvider } from "./theme-builder-context";
import { ThemePreviewProvider } from "./theme-provider";
import { ClientOnly, useNavigate, useSearch } from "@tanstack/react-router";
import type { ThemeBuilderSearch } from "@/routes/theme-builder";

function SidebarContent() {
  return (
    <Accordion defaultValue={["presets", "colors", "typography", "noncolor", "export"]}>
      <PresetControls />
      <ColorControls />
      <TypographyControls />
      <NonColorControls />
      <ExportPanel />
      <TokenTable />
      <HowItWorks />
    </Accordion>
  );
}

function ThemeBuilderInner() {
  const { tab, sidebar: sidebarOpen } = useSearch({ from: "/theme-builder" });
  const navigate = useNavigate({ from: "/theme-builder" });
  const setSidebarOpen = (open: boolean) => {
    console.log({ open });
    navigate({
      search: (prev: ThemeBuilderSearch) => ({ ...prev, sidebar: open ? "true" : "false" }),
    });
  };

  const toggleSidebar = () => setSidebarOpen(sidebarOpen !== "true");

  return (
    <ThemePreviewProvider>
      <Box position="relative" height="full" maxHeight="screen">
        <Sheet open={sidebarOpen === "true"} onOpenChange={setSidebarOpen}>
          <SheetPopup>
            <SheetHeader>
              <SheetTitle>Theme Congiuration</SheetTitle>
            </SheetHeader>
            <SheetPanel>
              <SidebarContent />
            </SheetPanel>
          </SheetPopup>
        </Sheet>

        <Box>
          <ScrollArea height="92svh">
            <Tabs
              py="md"
              value={tab}
              onValueChange={(value) => {
                navigate({
                  search: (prev: ThemeBuilderSearch) => ({
                    ...prev,
                    tab: value as ThemeBuilderSearch["tab"],
                  }),
                });
              }}
            >
              <HStack align={"center"}>
                <IconButton variant="ghost" onClick={toggleSidebar} aria-label="Open sidebar">
                  <SidebarIcon size={16} />
                </IconButton>{" "}
                <TabsList>
                  <TabsTab value="showcase">Components</TabsTab>
                  <TabsTab value="dashboard">Dashboard</TabsTab>
                  <TabsTab value="auth">Auth</TabsTab>
                  <TabsTab value="settings">Settings</TabsTab>
                  <TabsTab value="marketing">Marketing</TabsTab>
                  <TabsTab value="states">States</TabsTab>
                  <TabsTab value="inspector">Variables</TabsTab>
                </TabsList>
              </HStack>
              <TabsPanel value="showcase">
                <PreviewErrorBoundary>
                  <ComponentShowcase />
                </PreviewErrorBoundary>
              </TabsPanel>
              <TabsPanel value="dashboard" py={"md"}>
                <PreviewErrorBoundary>
                  <ExampleDashboard />
                </PreviewErrorBoundary>
              </TabsPanel>
              <TabsPanel value="auth">
                <PreviewErrorBoundary>
                  <AuthPreview />
                </PreviewErrorBoundary>
              </TabsPanel>
              <TabsPanel value="settings">
                <PreviewErrorBoundary>
                  <SettingsPreview />
                </PreviewErrorBoundary>
              </TabsPanel>
              <TabsPanel value="marketing">
                <PreviewErrorBoundary>
                  <MarketingPreview />
                </PreviewErrorBoundary>
              </TabsPanel>
              <TabsPanel value="states">
                <PreviewErrorBoundary>
                  <StatesPreview />
                </PreviewErrorBoundary>
              </TabsPanel>
              <TabsPanel value="inspector">
                <HStack justify={"between"}>
                  <ImpactSummary />
                  <Container size="xl">
                    <ScrollArea height={"80svh"}>
                      <Accordion>
                        <TokenTable />
                        <HowItWorks />
                      </Accordion>
                    </ScrollArea>
                  </Container>
                </HStack>
              </TabsPanel>
            </Tabs>
          </ScrollArea>
        </Box>
      </Box>
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

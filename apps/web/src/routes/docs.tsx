import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { DocsSidebar } from "@/views/docs/docs-sidebar";
import { DocsToc } from "@/views/docs/DocsToc";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Box, Container, HStack, ScrollArea, Sheet, SheetPopup } from "@blenx-dev/components";
import { ClientOnly, createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { useSidebarStore } from "@/stores/docs-sidebar";

function DrawerSidebar() {
  const sidebarOpen = useSidebarStore((st) => st.isOpen);
  const setOpen = useSidebarStore((st) => st.setOpen);
  return (
    <Sheet open={sidebarOpen} onOpenChange={setOpen}>
      <SheetPopup side="left">
        <ScrollArea height="100svh">
          <DocsSidebar onClose={() => setOpen(false)} />
        </ScrollArea>
      </SheetPopup>
    </Sheet>
  );
}

function RenderSidebarNavs() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <>
      {isSmallDevice ? (
        <DrawerSidebar />
      ) : (
        <Container size="xxs" centered contentCentered>
          <ScrollArea height="90svh">
            <DocsSidebar />
          </ScrollArea>
        </Container>
      )}
    </>
  );
}

function TocSection() {
  const matches = useMatches({
    select: (r) => r.reverse().find((m) => (m.context as any).toc),
  });
  return <DocsToc items={(matches?.context as any)?.toc} />;
}

function DocsLayout() {
  return (
    <Container size="2xl" centered py="medium">
      <HStack>
        <ClientOnly>
          <RenderSidebarNavs />
        </ClientOnly>
        <Box grow={1}>
          <ScrollArea height="90svh">
            <Outlet />
          </ScrollArea>
        </Box>
        <ClientOnly>
          <TocSection />
        </ClientOnly>
      </HStack>
    </Container>
  );
}

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
  errorComponent: DefaultCatchBoundary,
});

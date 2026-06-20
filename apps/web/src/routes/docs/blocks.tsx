import { ClientOnly, createFileRoute, Outlet } from "@tanstack/react-router";
import { useMediaQuery } from "@uidotdev/usehooks";
import { BlocksSidebar } from "@/components/blocks-sidebar";
import { DocTOC } from "@/components/docs/doc-toc";
import { Box, Container, HStack, ScrollArea, Sheet, SheetPopup } from "@blenx-dev/ui/components";
import { useSidebarStore } from "@/stores/docs-sidebar";

export const Route = createFileRoute("/docs/blocks")({
  component: BlocksLayout,
});

function DrawerSidebar() {
  const sidebarOpen = useSidebarStore((st) => st.isOpen);
  const setOpen = useSidebarStore((st) => st.setOpen);
  return (
    <Sheet open={sidebarOpen} onOpenChange={setOpen}>
      <SheetPopup side="left">
        <ScrollArea height="100svh">
          <BlocksSidebar onClose={() => setOpen(false)} />
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
        <Container size="xxs">
          <ScrollArea height="90svh">
            <BlocksSidebar />
          </ScrollArea>
        </Container>
      )}
    </>
  );
}
function BlocksLayout() {
  return (
    <Container padding="medium">
      <HStack>
        <ClientOnly>
          <RenderSidebarNavs />
        </ClientOnly>
        <Box grow>
          <ScrollArea height="90svh">
            <Box data-doc-content="">
              <Outlet />
            </Box>
          </ScrollArea>
        </Box>
        <ClientOnly>
          <DocTOC />
        </ClientOnly>
      </HStack>
    </Container>
  );
}

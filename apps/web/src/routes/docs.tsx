import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { DocsSidebar } from "@/views/docs/docs-sidebar";
import { DocsToc } from "@/views/docs/DocsToc";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  Box,
  Container,
  HStack,
  ScrollArea,
  Sheet,
  SheetPopup,
  Surface,
  Text,
  VStack,
} from "@blenx-dev/components";
import {
  ClientOnly,
  createFileRoute,
  Link,
  Outlet,
  useLocation,
  useMatches,
} from "@tanstack/react-router";
import { sidebarLink } from "@/lib/styles.css";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import type { SidebarSection } from "@/views/docs/docs-utils";
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
  return (
    <VStack gap="medium">
      <DocsPrevNext />
      <DocsTocSection />
    </VStack>
  );
}

function DocsTocSection() {
  const matches = useMatches({
    select: (r) => r.reverse().find((m) => (m.context as any).toc),
  });
  return <DocsToc items={(matches?.context as any)?.toc} />;
}

function getSidebarSections(
  matches: ReadonlyArray<{ context: Record<string, unknown> }>,
): SidebarSection[] {
  for (let i = matches.length - 1; i >= 0; i--) {
    const ctx = matches[i].context as { sidebarSections?: unknown };
    if (Array.isArray(ctx.sidebarSections)) {
      return ctx.sidebarSections as SidebarSection[];
    }
  }
  return [];
}

function DocsPrevNext() {
  const { pathname } = useLocation();
  const matches = useMatches() as ReadonlyArray<{ context: Record<string, unknown> }>;
  const sidebarSections = getSidebarSections(matches);

  const allLinks = sidebarSections.flatMap((s) => s.links);
  const normalize = (p: string) => p.replace(/\/$/, "") || "/docs";
  const currentIndex = allLinks.findIndex((link) => normalize(link.to) === normalize(pathname));

  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? allLinks[currentIndex - 1] : null;
  const next = currentIndex < allLinks.length - 1 ? allLinks[currentIndex + 1] : null;

  return (
    <VStack gap="xxsmall" paddingX="small">
      {prev ? (
        <Surface
          interactive
          variant="sunken"
          borderRadius="xs"
          padding="sm"
          render={<Link className={sidebarLink} to={prev.to} />}
        >
          <HStack gap="xxsmall" align="center">
            <CaretLeftIcon size={14} />
            <VStack gap="none">
              <Text variant="caption" color="secondary">
                Previous
              </Text>
              <Text variant="body2">{prev.label}</Text>
            </VStack>
          </HStack>
        </Surface>
      ) : (
        <Surface variant="sunken" borderRadius="xs" padding="sm" style={{ opacity: 0.4 }}>
          <HStack gap="xxsmall" align="center">
            <CaretLeftIcon size={14} />
            <VStack gap="none">
              <Text variant="caption" color="disabled">
                Previous
              </Text>
              <Text variant="body2" color="disabled">
                None
              </Text>
            </VStack>
          </HStack>
        </Surface>
      )}

      {next ? (
        <Surface
          interactive
          variant="sunken"
          borderRadius="xs"
          padding="sm"
          render={<Link className={sidebarLink} to={next.to} />}
        >
          <HStack gap="xxsmall" align="center">
            <CaretRightIcon size={14} />
            <VStack gap="none">
              <Text variant="caption" color="secondary">
                Next
              </Text>
              <Text variant="body2">{next.label}</Text>
            </VStack>
          </HStack>
        </Surface>
      ) : (
        <Surface variant="sunken" borderRadius="xs" padding="sm" style={{ opacity: 0.4 }}>
          <HStack gap="xxsmall" align="center">
            <CaretRightIcon size={14} />
            <VStack gap="none">
              <Text variant="caption" color="disabled">
                Next
              </Text>
              <Text variant="body2" color="disabled">
                None
              </Text>
            </VStack>
          </HStack>
        </Surface>
      )}
    </VStack>
  );
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

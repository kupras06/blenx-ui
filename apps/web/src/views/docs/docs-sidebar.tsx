import type { SidebarSection } from "@/views/docs/docs-utils";
import { Box, Surface, Text, VStack } from "@blenx-dev/ui";
import { Link, useLocation, useMatches } from "@tanstack/react-router";

const isLinkActive = (link: string, pathname: string) =>
  link === "/docs"
    ? pathname === "/docs" || pathname === "/docs/"
    : link === "/blocks"
      ? pathname === "/blocks" || pathname.startsWith("/blocks/")
      : pathname === link || pathname.startsWith(link + "/");

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

function DocsSidebar({ onClose }: { onClose?: () => void }) {
  const { pathname } = useLocation();
  const matches = useMatches() as ReadonlyArray<{ context: Record<string, unknown> }>;
  const sidebarSections = getSidebarSections(matches);

  return (
    <Surface variant="sunken" fullWidth>
      <VStack gap="md" padding="md">
        {sidebarSections.map((section) => (
          <Box key={section.title}>
            <Text variant="h3">{section.title}</Text>
            <VStack gap="xxs">
              {section.links.map((link) => {
                const isActive = isLinkActive(link.to, pathname);
                return (
                  <Surface
                    variant={isActive ? "default" : "sunken"}
                    borderRadius="xs"
                    paddingY="xs"
                    paddingX="sm"
                    key={link.to}
                    render={<Link to={link.to} onClick={onClose} />}
                  >
                    <Text variant="body2" color={isActive ? "primary" : "secondary"}>
                      {link.label}
                    </Text>
                  </Surface>
                );
              })}
            </VStack>
          </Box>
        ))}
      </VStack>
    </Surface>
  );
}

export { DocsSidebar };

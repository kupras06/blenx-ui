import * as stylex from "@stylexjs/stylex";
import { Link, useLocation } from "@tanstack/react-router";
import { Box, Surface, Text, VStack } from "@blenx-dev/ui/components";
import { BlocksSidebar } from "./blocks-sidebar";
import { useDocsData } from "@/views/docs/DocsDataProvider";

const styles = stylex.create({
  link: {
    textDecoration: "none",
  },
});
const isLintActive = (link: string, pathname: string) =>
  link === "/docs"
    ? pathname === "/docs" || pathname === "/docs/"
    : link === "/blocks"
      ? pathname === "/blocks" || pathname.startsWith("/blocks/")
      : pathname === link || pathname.startsWith(link + "/");
function DocsSidebar({ onClose }: { onClose?: () => void }) {
  const { pathname } = useLocation();
  const allSections = useDocsData((st) => st.allSections);
  const isBlockRoute = pathname.startsWith("/docs/blocks");
  if (isBlockRoute) return <BlocksSidebar />;

  return (
    <Surface variant="sunken" grow={1}>
      <VStack gap="medium" padding="medium">
        {allSections.map((section) => (
          <Box key={section.title}>
            <Text variant="h3">{section.title}</Text>
            <VStack gap="xxsmall">
              {section.links.map((link) => {
                const isActive = isLintActive(link.to, pathname);
                return (
                  <Surface
                    variant={isActive ? "default" : "sunken"}
                    borderRadius="xxsmall"
                    paddingY="xs"
                    paddingX="sm"
                    key={link.to}
                    render={<Link {...stylex.props(styles.link)} to={link.to} onClick={onClose} />}
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

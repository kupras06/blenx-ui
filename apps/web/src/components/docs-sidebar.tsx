import * as stylex from "@stylexjs/stylex";
import { Link, useLocation } from "@tanstack/react-router";
import { allGuides, allComponents } from "content-collections";
import { Box, Surface, Text, VStack } from "@blenx-dev/ui/components";

interface SidebarLink {
  to: string;
  label: string;
}

interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

const staticSections: SidebarSection[] = [
  {
    title: "Customization",
    links: [
      { to: "/docs/theming", label: "Theming" },
      { to: "/theme-builder", label: "Theme Builder" },
    ],
  },
  {
    title: "Blocks",
    links: [
      { to: "/blocks", label: "All Blocks" },
      { to: "/blocks/authentication", label: "Authentication" },
      { to: "/blocks/application-states", label: "Application States" },
      { to: "/blocks/marketing", label: "Marketing" },
      { to: "/blocks/dashboard", label: "Dashboard" },
    ],
  },
];

function formatLabel(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const styles = stylex.create({
  link: {
    textDecoration: "none",
  },
});

function DocsSidebar({ onClose }: { onClose?: () => void }) {
  const { pathname } = useLocation();

  const guideLinks: SidebarLink[] = allGuides
    .sort((a, b) => a.navigation.order - b.navigation.order)
    .map((g) => ({
      to: g.navigation.link ?? `/docs/${g._meta.path}`,
      label: g.title,
    }));

  const componentLinks: SidebarLink[] = [...allComponents]
    .sort((a, b) => a.navigation.order - b.navigation.order)
    .map((c) => ({
      to: `/docs/components/${c._meta.path}`,
      label: formatLabel(c._meta.path),
    }));

  const allSections: SidebarSection[] = [
    { title: "Guides", links: guideLinks },
    { title: "Components", links: componentLinks },
    ...staticSections,
  ];

  return (
    <Surface variant="sunken">
      <VStack gap="medium" padding="medium">
        {allSections.map((section) => (
          <Box key={section.title}>
            <Text variant="body2" weight="semibold">
              {section.title}
            </Text>
            <VStack gap="xxsmall">
              {section.links.map((link) => {
                const isActive =
                  link.to === "/docs"
                    ? pathname === "/docs" || pathname === "/docs/"
                    : link.to === "/blocks"
                      ? pathname === "/blocks" || pathname.startsWith("/blocks/")
                      : pathname === link.to || pathname.startsWith(link.to + "/");
                return (
                  <Surface
                    variant={isActive ? "outline" : "sunken"}
                    radius="small"
                    paddingY="xxsmall"
                    paddingX="xsmall"
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

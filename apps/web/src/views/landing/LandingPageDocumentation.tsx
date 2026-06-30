import { Box, Grid, Surface, Text, VStack } from "@blenx-dev/core";
import { Link } from "@tanstack/react-router";

const docLinks = [
  {
    to: "installation",
    title: "Installation",
    desc: "Configure your project and install components.",
  },
  {
    to: "styling",
    title: "Styling",
    desc: "How Vanilla Extract works in Blenx UI.",
  },
  {
    to: "installation",
    title: "Components",
    desc: "Browse all available components.",
  },
  {
    to: "theming",
    title: "Theming",
    desc: "Customize light and dark themes.",
  },
  {
    to: "primitives",
    title: "Primitives",
    desc: "Base UI component architecture.",
  },
  {
    to: "primitives",
    title: "Accessibility",
    desc: "WAI-ARIA compliance and keyboard navigation.",
  },
  {
    to: "limitations",
    title: "Limitations",
    desc: "Important constraints and tradeoffs.",
  },
];
export function LandingPageDocumentation() {
  return (
    <VStack gap="lg">
      <VStack gap="sm" align="center">
        <Text variant="h1" align="center">
          Documentation
        </Text>
        <Box maxWidth={480}>
          <Text variant="body2" color="secondary" align="center">
            Everything you need to get started with Blenx UI.
          </Text>
        </Box>
      </VStack>
      <Grid columns={{ base: 2, md: 4 }} gap="md">
        {docLinks.map((link) => (
          <Surface
            key={link.to + link.title}
            render={
              <Link
                to="/docs/guides/$guide"
                params={{
                  guide: link.to,
                }}
              />
            }
            variant="outline"
            padding="md"
            interactive
          >
            <VStack gap="xxs">
              <Text variant="h5">{link.title}</Text>
              <Text variant="body2" color="secondary">
                {link.desc}
              </Text>
            </VStack>
          </Surface>
        ))}
      </Grid>
    </VStack>
  );
}

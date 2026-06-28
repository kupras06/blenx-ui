import { GITHUB_URL } from "@/constants";
import { Box, Button, Container, HStack, Text, VStack } from "@blenx-dev/ui";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

export function LandingPageCTA() {
  return (
    <Container>
      <VStack gap="lg" align="center">
        <Box>
          <Text variant="h2" align="center" size="xxl">
            Build with components you actually own.
          </Text>
        </Box>
        <Box>
          <Text variant="body1" size="lg" color="secondary" align="center">
            Stop fighting your component library. Install what you need, customize everything, and
            scale with confidence.
          </Text>
        </Box>
        <HStack gap="md" wrap justify="center">
          <Button
            size="lg"
            variant="solid"
            radius="sm"
            render={
              <Link
                to="/docs/guides/$guide"
                params={{
                  guide: "installation",
                }}
              />
            }
          >
            Get Started <ArrowRightIcon weight="bold" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            radius="sm"
            render={
              <Link
                to="/docs/guides/$guide"
                params={{
                  guide: "installation",
                }}
              />
            }
          >
            View Components
          </Button>
          <Button
            size="lg"
            variant="ghost"
            radius="sm"
            render={
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="View on GitHub" />
            }
          >
            GitHub ↗
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}

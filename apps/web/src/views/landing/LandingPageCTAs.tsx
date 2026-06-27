import { GITHUB_URL } from "@/constants";
import { Box, Button, Container, HStack, Text, VStack } from "@blenx-dev/components";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

export function LandingPageCTA() {
  return (
    <Container>
      <VStack gap="large" align="center">
        <Box>
          <Text variant="h2" align="center" size="xxlarge">
            Build with components you actually own.
          </Text>
        </Box>
        <Box>
          <Text variant="body1" size="large" color="secondary" align="center">
            Stop fighting your component library. Install what you need, customize everything, and
            scale with confidence.
          </Text>
        </Box>
        <HStack gap="medium" wrap justify="center">
          <Button
            size="large"
            variant="solid"
            radius="small"
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
            size="large"
            variant="outline"
            radius="small"
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
            size="large"
            variant="ghost"
            radius="small"
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

import { GITHUB_URL } from "@/constants";
import { Badge, Box, Button, Container, HStack, Text, VStack } from "@blenx-dev/components";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

export function LandingHero() {
  return (
    <Container size="3xl" paddingX="medium" paddingTop="large" paddingBottom="massive">
      <VStack gap="large" align="center">
        <Text variant="h1" textAlign="center" size="xxlarge">
          The shadcn/ui experience
          <br />
          for Vanilla Extract.
        </Text>
        <Box maxWidth={640} px={"2xl"}>
          <Text variant="body1" size="large" color="secondary" textAlign="center">
            Accessible React components built with Vanilla Extract and Base UI. Copy the source. Own
            the code. Build without vendor lock-in.
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
                  guide: "getting-started",
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
            Browse Components
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
        <HStack gap="small" wrap justify="center">
          <Badge
            variant="secondary"
            // style={styles.badgePill}
          >
            Registry First
          </Badge>
          <Badge
            variant="primary"
            // style={styles.badgePill}
          >
            Vanilla Extract Native
          </Badge>
          <Badge
            variant="secondary"
            // style={styles.badgePill}
          >
            Base UI Powered
          </Badge>
          <Badge
            variant="primary"
            // style={styles.badgePill}
          >
            Accessible
          </Badge>
          <Badge
            variant="secondary"
            // style={styles.badgePill}
          >
            Type Safe
          </Badge>
        </HStack>
      </VStack>
    </Container>
  );
}

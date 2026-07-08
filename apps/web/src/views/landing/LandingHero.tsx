import { GITHUB_URL } from "@/constants";
import { Badge, Box, Button, Container, HStack, Text, VStack } from "@blenx-dev/core";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

export function LandingHero() {
  return (
    <Container size="xxxl" paddingX="md" paddingTop="lg" paddingBottom="massive">
      <VStack gap="lg" align="center">
        <Text variant="h1" textAlign="center" size="xxl">
          The shadcn/ui experience
          <br />
          for Vanilla Extract.
        </Text>
        <Box maxWidth={640} px={"xxl"}>
          <Text variant="body1" size="lg" color="secondary" textAlign="center">
            Accessible React components built with Vanilla Extract and Base UI. Copy the source. Own
            the code. Build without vendor lock-in.
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
                  guide: "getting-started",
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
            Browse Components
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
        <HStack gap="sm" wrap justify="center">
          <Badge
            palette="secondary"
            // style={styles.badgePill}
          >
            Registry First
          </Badge>
          <Badge
            palette="primary"
            // style={styles.badgePill}
          >
            Vanilla Extract Native
          </Badge>
          <Badge
            palette="secondary"
            // style={styles.badgePill}
          >
            Base UI Powered
          </Badge>
          <Badge
            palette="primary"
            // style={styles.badgePill}
          >
            Accessible
          </Badge>
          <Badge
            palette="secondary"
            // style={styles.badgePill}
          >
            Type Safe
          </Badge>
        </HStack>
      </VStack>
    </Container>
  );
}

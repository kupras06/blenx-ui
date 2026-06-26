import { Button, Container, Text, VStack } from "@blenx-dev/ui/components";
import { Link } from "@tanstack/react-router";

export function DefaultCatchBoundary({ error }: { error: Error }) {
  return (
    <Container padding="huge" centered>
      <VStack align="center" gap="medium">
        <VStack align="center" gap="xxsmall">
          <Text variant="h1">Something went wrong</Text>
          <Text variant="body1" color="secondary">
            {error instanceof Error ? error.message : "An unexpected error occurred"}
          </Text>
        </VStack>
        <Button render={<Link to="/" />}>Go Home</Button>
      </VStack>
    </Container>
  );
}

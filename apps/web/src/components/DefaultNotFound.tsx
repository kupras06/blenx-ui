import { Button, Container, HStack, Text, VStack } from "@blenx-dev/core";
import { Link } from "@tanstack/react-router";

export function DefaultNotFound() {
  return (
    <Container padding="huge" centered>
      <VStack align="center" gap="md">
        <VStack align="center" gap="xxs">
          <Text variant="h1">Route Not Found</Text>
        </VStack>
        <HStack gap="sm">
          <Button render={<Link to="/" />}>Go Home</Button>
          <Button variant="outline" render={<Link to=".." />}>
            Go Back
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}

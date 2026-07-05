import { VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Box } from "../Box/box";
import { Container } from "./container";

export function ContainerDemo() {
  return (
    <VStack gap="md">
      <Text variant="h6">Container sizes</Text>
      <Container size="sm">
        <Box backgroundColor="surface" padding="sm" radius="sm">
          <Text variant="body3">sm (480px)</Text>
        </Box>
      </Container>
      <Container size="md">
        <Box backgroundColor="surface" padding="sm" radius="sm">
          <Text variant="body3">md (640px)</Text>
        </Box>
      </Container>
      <Container size="lg">
        <Box backgroundColor="surface" padding="sm" radius="sm">
          <Text variant="body3">lg (768px)</Text>
        </Box>
      </Container>
      <Container size="xl">
        <Box backgroundColor="surface" padding="sm" radius="sm">
          <Text variant="body3">xl (1024px)</Text>
        </Box>
      </Container>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: ContainerDemo }];

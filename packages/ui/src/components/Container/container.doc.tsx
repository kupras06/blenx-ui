import { VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Container } from "./container";

export function SizesStory() {
  return (
    <VStack gap="medium">
      <Text variant="h4">Container — sm</Text>
      <Container size="sm" center>
        <div style={{ background: "var(--surface)", padding: 16, borderRadius: 8 }}>
          <Text variant="body2">Small container (max 640px)</Text>
        </div>
      </Container>
      <Text variant="h4">Container — md</Text>
      <Container size="md" center>
        <div style={{ background: "var(--surface)", padding: 16, borderRadius: 8 }}>
          <Text variant="body2">Medium container (max 768px)</Text>
        </div>
      </Container>
      <Text variant="h4">Container — full</Text>
      <Container size="full" center>
        <div style={{ background: "var(--surface)", padding: 16, borderRadius: 8 }}>
          <Text variant="body2">Full width container</Text>
        </div>
      </Container>
    </VStack>
  );
}

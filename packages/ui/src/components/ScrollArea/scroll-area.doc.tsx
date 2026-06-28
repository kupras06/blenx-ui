import { Card } from "../Card/card";
import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import { ScrollArea } from "./scroll-area";

export function DefaultStory() {
  return (
    <Card
      padding="sm"
      // Style={{ height: 200, maxWidth: 300 }}
    >
      <ScrollArea>
        <Stack gap="sm" padding="md">
          {Array.from({ length: 20 }, (_, i) => (
            // Biome-ignore lint/suspicious/noArrayIndexKey: noArrayIndexKey
            <Text key={i} variant="body2">
              List item {i + 1}
            </Text>
          ))}
        </Stack>
      </ScrollArea>
    </Card>
  );
}

export function WithFadeStory() {
  return (
    <Card
      padding="sm"
      // Style={{ height: 200, maxWidth: 300 }}
    >
      <ScrollArea scrollFade>
        <Stack gap="sm" padding="md">
          {Array.from({ length: 20 }, (_, i) => (
            // Biome-ignore lint/suspicious/noArrayIndexKey: noArrayIndexKey
            <Text key={i} variant="body2">
              Item {i + 1}
            </Text>
          ))}
        </Stack>
      </ScrollArea>
    </Card>
  );
}

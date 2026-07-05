import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import { ScrollArea } from "./scroll-area";

export function ScrollAreaDemo() {
  return (
    <ScrollArea height="200px">
      <Stack gap="sm" padding="md">
        {Array.from({ length: 20 }, (_, i) => (
          <Text key={i}>Item {i + 1}</Text>
        ))}
      </Stack>
    </ScrollArea>
  );
}

export function ScrollAreaFadeDemo() {
  return (
    <ScrollArea height="200px" scrollFade>
      <Stack gap="sm" padding="md">
        {Array.from({ length: 20 }, (_, i) => (
          <Text key={i}>Fading item {i + 1}</Text>
        ))}
      </Stack>
    </ScrollArea>
  );
}

export const demos = [
  { name: "Default", component: ScrollAreaDemo },
  { name: "With Fade", component: ScrollAreaFadeDemo },
];

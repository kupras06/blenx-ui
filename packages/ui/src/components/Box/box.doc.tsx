import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Box } from "./box";

export function DefaultStory() {
  return (
    <Stack gap="md">
      <Box padding="md" withBorder radius="md">
        <Text variant="body2">Box with border, padding, radius</Text>
      </Box>
      <Box padding="lg" radius="xl" display="flex">
        <Text variant="body2">Box as flex with full radius</Text>
      </Box>
      <Box fullWidth padding="sm" withBorder>
        <Text variant="body2">Full width box</Text>
      </Box>
    </Stack>
  );
}

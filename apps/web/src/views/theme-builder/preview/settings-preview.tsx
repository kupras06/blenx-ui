import { memo } from "react";
import { Box, Text, VStack } from "@blenx-dev/ui";
import { Settings01, Profile01 } from "@/components/blocks";

export const SettingsPreview = memo(() => (
  <VStack gap="lg">
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Settings
      </Text>
      <Settings01 />
    </Box>
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Profile
      </Text>
      <Profile01 />
    </Box>
  </VStack>
));

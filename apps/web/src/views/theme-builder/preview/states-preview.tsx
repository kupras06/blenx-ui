import { memo } from "react";
import { Box, Text, VStack } from "@blenx-dev/core";
import { EmptyState01, LoadingState01, ErrorState01 } from "@/components/blocks";

export const StatesPreview = memo(() => (
  <VStack gap="lg">
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Empty State
      </Text>
      <EmptyState01 title="No items yet" description="Get started by creating your first item." />
    </Box>
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Loading State
      </Text>
      <LoadingState01 />
    </Box>
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Error State
      </Text>
      <ErrorState01
        title="Something went wrong"
        message="An unexpected error occurred. Please try again."
      />
    </Box>
  </VStack>
));

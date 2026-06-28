import type React from "react";
import { Box, VStack } from "@blenx-dev/ui";

interface DocsContentProps {
  children: React.ReactNode;
}

function DocsContent({ children }: DocsContentProps) {
  return (
    <Box marginBottom="lg">
      <VStack gap="md">{children}</VStack>
    </Box>
  );
}

export { DocsContent };

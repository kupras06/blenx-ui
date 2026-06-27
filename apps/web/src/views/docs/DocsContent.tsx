import type React from "react";
import { Box, VStack } from "@blenx-dev/components";

interface DocsContentProps {
  children: React.ReactNode;
}

function DocsContent({ children }: DocsContentProps) {
  return (
    <Box marginBottom="large">
      <VStack gap="medium">{children}</VStack>
    </Box>
  );
}

export { DocsContent };

import type React from "react";
import { Box } from "@blenx-dev/ui";

interface DocsTableProps {
  children: React.ReactNode;
}

function DocsTable({ children }: DocsTableProps) {
  return (
    <Box overflow="auto" borderRadius="md" withBorder>
      {children}
    </Box>
  );
}

export { DocsTable };

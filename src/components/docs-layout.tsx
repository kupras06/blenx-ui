import type { ReactNode } from "react";
import { DocsSidebar } from "./docs-sidebar";
import { Box, Container, HStack } from "@/components/ui";


function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <Container paddingX='xxlarge'>
      <HStack gap='xxlarge'>
        <DocsSidebar />
        <Box grow>
          {children}
        </Box>
      </HStack>
    </Container>
  );
}

export { DocsLayout };

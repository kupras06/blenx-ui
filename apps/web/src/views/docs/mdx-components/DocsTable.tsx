import type React from "react";
import { Box } from "@blenx-dev/components";
import { tableScroll, tableView } from "@/lib/styles.css";

interface DocsTableProps {
  children: React.ReactNode;
}

function DocsTable({ children }: DocsTableProps) {
  return (
    <Box className={tableScroll} borderRadius="medium" withBorder>
      <table className={tableView}>{children}</table>
    </Box>
  );
}

export { DocsTable };

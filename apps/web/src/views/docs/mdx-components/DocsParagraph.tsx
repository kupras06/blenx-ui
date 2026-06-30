import type React from "react";
import { Text } from "@blenx-dev/core";

interface DocsParagraphProps {
  children: React.ReactNode;
}

function DocsParagraph({ children }: DocsParagraphProps) {
  return <Text variant="body1">{children}</Text>;
}

export { DocsParagraph };

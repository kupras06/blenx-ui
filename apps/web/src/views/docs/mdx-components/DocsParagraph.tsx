import type React from "react";
import { Text } from "@blenx-dev/components";
import { docsParagraph } from "@/lib/styles.css";

interface DocsParagraphProps {
  children: React.ReactNode;
}

function DocsParagraph({ children }: DocsParagraphProps) {
  return (
    <Text variant="body1" className={docsParagraph}>
      {children}
    </Text>
  );
}

export { DocsParagraph };

import * as stylex from "@stylexjs/stylex";
import type React from "react";
import { Text } from "@blenx-dev/ui/components";

const styles = stylex.create({
  paragraph: {
    lineHeight: {
      default: 1.75,
    },
    marginBlock: 0,
  },
});

interface DocsParagraphProps {
  children: React.ReactNode;
}

function DocsParagraph({ children }: DocsParagraphProps) {
  return (
    <Text variant="body1" {...stylex.props(styles.paragraph)}>
      {children}
    </Text>
  );
}

export { DocsParagraph };

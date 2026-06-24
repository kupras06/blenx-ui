import { useEffect, useRef, useState } from "react";
import { highlightCode } from "@/lib/syntax-highlight";
import { Box, CopyButton, HStack, Surface, Text } from "@blenx-dev/ui/components";
interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  highlightLines?: number[];
}

function escapeHtml(code: string): string {
  return `<pre class="shiki shiki themes"><code>${code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}</code></pre>`;
}

function CodeBlock({ code, language = "typescript", title }: CodeBlockProps) {
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    highlightCode(code, language).then((html) => {
      if (mountedRef.current) {
        setHighlighted(html);
      }
    });
    return () => {
      mountedRef.current = false;
    };
  }, [code, language]);

  return (
    <Surface variant="sunken" borderRadius="medium" position="relative" width="full">
      {title ? (
        <HStack align="center" justify="between" paddingLeft="small" paddingY="xxsmall">
          <Text variant="h6" color="secondary">
            {title ? title : null}
          </Text>
        </HStack>
      ) : null}
      <Box position="absolute" top="xsmall" right="xsmall">
        <CopyButton p="none" copyValue={code} />
      </Box>
      <Box
        render={<div />}
        overflow="auto"
        dangerouslySetInnerHTML={{
          __html: highlighted ?? escapeHtml(code),
        }}
      />
    </Surface>
  );
}

export { CodeBlock };
export type { CodeBlockProps };

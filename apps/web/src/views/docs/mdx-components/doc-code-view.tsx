import { useCallback, useEffect, useRef, useState } from "react";
import { highlightCode } from "@/lib/syntax-highlight";
import {
  Box,
  CopyButton,
  HStack,
  ScrollArea,
  SegmentedControl,
  Surface,
  Text,
} from "@blenx-dev/ui/components";

interface CodeFile {
  code: string;
  title?: string;
  language?: string;
}

interface DocCodeViewProps {
  code?: string;
  title?: string;
  language?: string;
  files?: CodeFile[];
}

function escapeHtml(code: string): string {
  return `<pre class="shiki"><code>${code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}</code></pre>`;
}
function CopyHandler({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [value]);
  return (
    <CopyButton size="xsmall" onClick={handleCopy} aria-label={copied ? "Copied" : "Copy code"}>
      Copy
    </CopyButton>
  );
}
function DocCodeView({ code, title, language, files }: DocCodeViewProps) {
  const activeFiles = files || (code != null ? [{ code, title, language }] : []);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFile = activeFiles[activeIndex] || {
    code: "",
    title: "",
    language: "typescript",
  };

  const [highlighted, setHighlighted] = useState<string | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const lang = activeFile.language ?? "typescript";

    highlightCode(activeFile.code, lang).then((html) => {
      if (mountedRef.current) {
        setHighlighted(html);
      }
    });

    return () => {
      mountedRef.current = false;
    };
  }, [activeFile.code, activeFile.language]);

  const lang = activeFile.language ?? "typescript";
  const isMultiFile = activeFiles.length > 1;

  return (
    <Surface variant="sunken" maxWidth="viewport" position="relative">
      {isMultiFile ? (
        <HStack padding="xsmall" align="center" overflow="hidden">
          <div style={{ overflowX: "auto", flex: 1, minWidth: 0, whiteSpace: "nowrap" }}>
            <SegmentedControl
              variant="default"
              value={activeIndex.toString()}
              radius="xsmall"
              onValueChange={(value) => {
                setActiveIndex(Number(value));
                setHighlighted(null);
              }}
              options={activeFiles.map((file, idx) => ({
                value: `${idx}`,
                label: file.title || `File ${idx + 1}`,
              }))}
            />
          </div>
        </HStack>
      ) : (
        <HStack justify="between" padding="xsmall" align="center">
          <HStack paddingX="xxsmall" align="center">
            {activeFile.title && (
              <Text variant="h5" color="primary">
                {activeFile.title}
              </Text>
            )}
            <Text variant="caption">{lang}</Text>
          </HStack>
        </HStack>
      )}
      <Box position="absolute" top="xsmall" right="xsmall">
        <CopyHandler value={activeFile.code} />
      </Box>

      <ScrollArea height="60svh">
        <div
          dangerouslySetInnerHTML={{
            __html: highlighted ?? escapeHtml(activeFile.code),
          }}
        />
      </ScrollArea>
    </Surface>
  );
}

export { DocCodeView };

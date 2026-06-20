import { CheckIcon, CopySimpleIcon } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { highlightCode } from "@/lib/syntax-highlight";
import { Box, Button, HStack, Surface } from "@blenx-dev/ui/components";

interface CodeBlockProps {
  code: string;
  language?: string;
}
function escapeHtml(code: string): string {
  const amp = "&" + "amp;";
  const lt = "&" + "lt;";
  const gt = "&" + "gt;";
  return `<pre class="shiki shiki themes"><code>${code
    .replace(/&/g, amp)
    .replace(/</g, lt)
    .replace(/>/g, gt)}</code></pre>`;
}

function CodeBlock({ code, language = "typescript" }: CodeBlockProps) {
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
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

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setMenuOpen(false);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <Box maxWidth={"90svw"}>
      <Surface variant="sunken" render={<pre />} withBorder>
        <HStack justify="end" paddingTop="small" paddingRight="small">
          <Button onClick={handleCopy} size="xsmall">
            {copied ? <CheckIcon size={14} /> : <CopySimpleIcon size={14} />}
            {copied ? "Copied" : "Copy code"}
          </Button>
        </HStack>
        <Box overflow="auto">
          <div
            dangerouslySetInnerHTML={{
              __html: highlighted ?? escapeHtml(code),
            }}
          />
        </Box>
      </Surface>
    </Box>
  );
}

export { CodeBlock };
export type { CodeBlockProps };

import { useEffect, useRef, useState } from "react";
import { highlightCode } from "@/lib/syntax-highlight";
import { codeBlockContent } from "@/lib/styles.css";
import { CodeFrame } from "./CodeFrame";
import { Surface } from "@blenx-dev/core";
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
    <>
      <CodeFrame copyValue={code} title={title} language={language} />
      <Surface variant="sunken" overflow="hidden" position="relative" paddingY={"xs"}>
        <div
          className={codeBlockContent}
          dangerouslySetInnerHTML={{
            __html: highlighted ?? escapeHtml(code),
          }}
        />
      </Surface>
    </>
  );
}
function CodeSnippet({ code, language = "typescript" }: CodeBlockProps) {
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
    <>
      <CodeFrame copyValue={code} language={language} />
      <Surface
        variant="sunken"
        borderRadiusTop="none"
        overflow="hidden"
        position="relative"
        paddingY={"xs"}
      >
        <div
          className={codeBlockContent}
          dangerouslySetInnerHTML={{
            __html: highlighted ?? escapeHtml(code),
          }}
        />
      </Surface>
    </>
  );
}
export { CodeBlock, CodeSnippet };
export type { CodeBlockProps };

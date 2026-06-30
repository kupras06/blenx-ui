import { useEffect, useRef, useState } from "react";
import { highlightCode } from "@/lib/syntax-highlight";
import { ScrollArea } from "@blenx-dev/core";
import { CodeFrame } from "./CodeFrame";
import { codeBlockContent } from "@/lib/styles.css";

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
      if (mountedRef.current) setHighlighted(html);
    });

    return () => {
      mountedRef.current = false;
    };
  }, [activeFile.code, activeFile.language]);

  const lang = activeFile.language ?? "typescript";
  return (
    <CodeFrame
      copyValue={activeFile.code}
      title={activeFile.title}
      language={lang}
      files={activeFiles}
      activeIndex={activeIndex}
      onActiveIndexChange={(index) => {
        setActiveIndex(index);
        setHighlighted(null);
      }}
    >
      <ScrollArea height="60svh" render={<pre />}>
        <div
          className={codeBlockContent}
          dangerouslySetInnerHTML={{
            __html: highlighted ?? escapeHtml(activeFile.code),
          }}
        />
      </ScrollArea>
    </CodeFrame>
  );
}

export { DocCodeView };

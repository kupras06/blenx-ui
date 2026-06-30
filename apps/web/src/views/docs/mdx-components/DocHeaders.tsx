import { useMemo, useRef, useState } from "react";
import { Box, Separator, Text } from "@blenx-dev/core";
import { slugify, extractTextFromChildren } from "@/lib/slug";
import type React from "react";
import { headingAnchor } from "@/lib/styles.css";

interface DocsHeadingProps {
  children: React.ReactNode;
  id?: string;
}

function useDocsHeadingId(children: React.ReactNode, explicitId?: string) {
  return useMemo(() => {
    if (explicitId) return explicitId;
    const text = extractTextFromChildren(children);
    return text ? slugify(text) : undefined;
  }, [children, explicitId]);
}

function DocsHeading({
  as,
  children,
  id: explicitId,
}: DocsHeadingProps & { as: "h1" | "h2" | "h3" }) {
  const headingId = useDocsHeadingId(children, explicitId);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleAnchorClick = () => {
    if (!headingId) return;
    const url = new URL(window.location.href);
    url.hash = headingId;
    navigator.clipboard.writeText(url.toString());
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box position="relative" my={"md"} id={headingId}>
      <Text variant={as}>
        {children}
        {headingId && as !== "h1" && (
          <a
            className={headingAnchor}
            href={`#${headingId}`}
            onClick={handleAnchorClick}
            aria-label={copied ? "Copied link" : `Link to ${headingId}`}
            title={copied ? "Copied!" : "Copy link"}
          >
            #
          </a>
        )}
      </Text>
      {as === "h2" && <Separator tone="subtle" />}
    </Box>
  );
}

function DocsH1({ children, id }: DocsHeadingProps) {
  return (
    <DocsHeading as="h1" id={id}>
      {children}
    </DocsHeading>
  );
}

function DocsH2({ children, id }: DocsHeadingProps) {
  return (
    <DocsHeading as="h2" id={id}>
      {children}
    </DocsHeading>
  );
}

function DocsH3({ children, id }: DocsHeadingProps) {
  return (
    <DocsHeading as="h3" id={id}>
      {children}
    </DocsHeading>
  );
}

export { DocsH1, DocsH2, DocsH3 };

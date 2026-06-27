import type React from "react";
import type { ComponentProps } from "react";
import { DocsH1, DocsH2, DocsH3 } from "./mdx-components/DocHeaders";
import { DocsParagraph } from "./mdx-components/DocsParagraph";
import { DocsUl, DocsOl, DocsLi } from "./mdx-components/DocsList";
import { DocsLink } from "./mdx-components/DocsLink";
import { DocsTable } from "./mdx-components/DocsTable";
import { CodeBlock } from "./mdx-components/CodeBlock";
import { DocApiReference } from "./mdx-components/doc-api-reference";
import { DocAccessibility } from "./mdx-components/doc-accessibility";
import { DocDemoRenderer } from "./mdx-components/doc-demo-renderer";
import { DocSourceCode } from "./mdx-components/doc-source-code";
import { Installation } from "./mdx-components/Installation";
import { Spinner, Text } from "@blenx-dev/components";
import { type TextProps } from "@blenx-dev/components";
import { tableHeaderRow, tableHeaderCell, tableCell } from "@/lib/styles.css";

function InlineCode(props: TextProps) {
  return <Text variant="code" backgroundColor="disabled" px="xs" py="xxs" {...props} />;
}

function Pre({ children, ...props }: ComponentProps<"pre">) {
  const child = Array.isArray(children) ? children[0] : children;
  if (!child || typeof child !== "object" || !("props" in (child as object))) {
    return <pre {...props}>{children}</pre>;
  }

  const codeElement = child as React.ReactElement<ComponentProps<"code">>;
  const className = codeElement.props?.className ?? "";
  const language = className.replace(/^language-/, "");
  const code = typeof codeElement.props?.children === "string" ? codeElement.props.children : "";

  if (!code) {
    return <pre {...props}>{children}</pre>;
  }

  return <CodeBlock code={code} language={language} />;
}

function Th(props: ComponentProps<"th">) {
  return <th className={tableHeaderCell} {...props} />;
}

function Td(props: ComponentProps<"td">) {
  return <td className={tableCell} {...props} />;
}

function Thead(props: ComponentProps<"thead">) {
  return <thead className={tableHeaderRow} {...props} />;
}

function Tr(props: ComponentProps<"tr">) {
  return <tr {...props} />;
}

function Tbody(props: ComponentProps<"tbody">) {
  return <tbody {...props} />;
}

const mdxComponents = {
  h1: DocsH1,
  h2: DocsH2,
  h3: DocsH3,
  h4: DocsH3,
  h5: DocsH3,
  h6: DocsH3,
  p: DocsParagraph,
  ul: DocsUl,
  ol: DocsOl,
  li: DocsLi,
  a: DocsLink,
  pre: Pre,
  code: InlineCode,
  table: DocsTable,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
  DemoRenderer: DocDemoRenderer,
  Installation,
  SourceCode: DocSourceCode,
  ApiReference: DocApiReference,
  Accessibility: DocAccessibility,
  Spinner: Spinner,
};

export { mdxComponents };

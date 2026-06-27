import type React from "react";
import { Text } from "@blenx-dev/components";
import { docsUl, docsOl, docsLi } from "@/lib/styles.css";

interface DocsUlProps {
  children: React.ReactNode;
}

function DocsUl({ children }: DocsUlProps) {
  return <ul className={docsUl}>{children}</ul>;
}

interface DocsOlProps {
  children: React.ReactNode;
}

function DocsOl({ children }: DocsOlProps) {
  return <ol className={docsOl}>{children}</ol>;
}

interface DocsLiProps {
  children: React.ReactNode;
}

function DocsLi({ children }: DocsLiProps) {
  return (
    <li className={docsLi}>
      <Text variant="body1" span>
        {children}
      </Text>
    </li>
  );
}

export { DocsUl, DocsOl, DocsLi };

import type React from "react";
import { HStack } from "@blenx-dev/ui";

interface DocsUlProps {
  children: React.ReactNode;
}

function DocsUl({ children }: DocsUlProps) {
  return (
    <ul
      style={{
        paddingLeft: 24,
        margin: 0,
        listStyle: "disc",
      }}
    >
      {children}
    </ul>
  );
}

interface DocsOlProps {
  children: React.ReactNode;
}

function DocsOl({ children }: DocsOlProps) {
  return (
    <ol
      style={{
        paddingLeft: 24,
        margin: 0,
        listStyle: "decimal",
      }}
    >
      {children}
    </ol>
  );
}

interface DocsLiProps {
  children: React.ReactNode;
}

function DocsLi({ children }: DocsLiProps) {
  return (
    <li style={{ marginBottom: 4 }}>
      <HStack>{children}</HStack>
    </li>
  );
}

export { DocsUl, DocsOl, DocsLi };

import type React from "react";
import { semanticVars } from "@blenx-dev/theme/contract";

interface DocsLinkProps {
  href?: string;
  children?: React.ReactNode;
}

function DocsLink({ href, children, ...props }: DocsLinkProps) {
  const isExternal = href?.startsWith("http://") || href?.startsWith("https://");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{
        color: semanticVars.interactive.primary.default,
        textDecoration: "underline",
        textUnderlineOffset: 2,
        cursor: "pointer",
        transition: "color 200ms ease",
      }}
      {...props}
    >
      {children}
    </a>
  );
}

export { DocsLink };

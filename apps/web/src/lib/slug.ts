import type { ReactNode } from "react";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function hasProps(node: unknown): node is { props: { children?: ReactNode } } {
  return (
    typeof node === "object" &&
    node !== null &&
    "props" in node &&
    node.props !== null &&
    typeof node.props === "object"
  );
}

export function extractTextFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join(" ").replace(/\s+/g, " ").trim();
  }
  if (hasProps(children)) {
    return extractTextFromChildren(children.props.children);
  }
  return "";
}

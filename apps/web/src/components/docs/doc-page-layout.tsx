"use client";

import type React from "react";

export function DocPageLayout({ children }: { children: React.ReactNode }) {
  return <div data-doc-content="">{children}</div>;
}

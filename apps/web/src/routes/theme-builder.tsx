import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Spinner } from "@blenx-dev/core";

const ThemeBuilderPage = lazy(() =>
  import("@/views/theme-builder/theme-builder-page").then((m) => ({
    default: m.ThemeBuilderPage,
  })),
);

export type ThemeBuilderTab =
  | "showcase"
  | "dashboard"
  | "auth"
  | "settings"
  | "marketing"
  | "states"
  | "inspector";

export interface ThemeBuilderSearch {
  tab: ThemeBuilderTab;
  sidebar: "true" | "false";
}

export const Route = createFileRoute("/theme-builder")({
  validateSearch: (search: Record<string, unknown>): ThemeBuilderSearch => {
    const validTabs: ThemeBuilderTab[] = [
      "showcase",
      "dashboard",
      "auth",
      "settings",
      "marketing",
      "states",
      "inspector",
    ];
    return {
      tab: validTabs.includes(search.tab as ThemeBuilderTab)
        ? (search.tab as ThemeBuilderTab)
        : "showcase",
      sidebar: search.sidebar as "true" | "false",
    };
  },
  component: ThemeBuilderRoute,
});

function ThemeBuilderRoute() {
  return (
    <Suspense fallback={<Spinner />}>
      <ThemeBuilderPage />
    </Suspense>
  );
}

import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Spinner } from "@blenx-dev/ui/components";;

const ThemeBuilderPage = lazy(() =>
	import("@/components/theme-builder/theme-builder-page").then((m) => ({
		default: m.ThemeBuilderPage,
	})),
);

export const Route = createFileRoute("/theme-builder")({
	component: ThemeBuilderRoute,
});

function ThemeBuilderRoute() {
	return (
		<Suspense fallback={<Spinner />}>
			<ThemeBuilderPage />
		</Suspense>
	);
}

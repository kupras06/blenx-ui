import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { Spinner } from "@/components/ui";
import { queryClient } from "@/lib/query-client";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		context: { queryClient },
		defaultPendingComponent: () => <Spinner />,
		defaultNotFoundComponent: () => <div>Not Found</div>,
	});

	return router;
};

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}

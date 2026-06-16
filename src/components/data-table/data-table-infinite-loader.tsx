import * as stylex from "@stylexjs/stylex";
import { fontSize, spacing, theme } from "@/lib/theme/theme.stylex";
import { Button, Spinner } from "../ui";
import type { InfiniteScrollConfig } from "./types";
import { useInfiniteScroll } from "./use-infinite-scroll";

interface DataTableInfiniteLoaderProps {
	fetchNextPage: () => void;
	hasNextPage: boolean;
	isFetchingNextPage: boolean;
	isFetching?: boolean;
	config?: InfiniteScrollConfig;
}

/**
 * Infinite scroll loader for the DataTable.
 *
 * Auto mode: Uses IntersectionObserver to trigger fetchNextPage when the
 * sentinel element becomes visible.
 *
 * Manual mode: Renders a "Load more" button.
 */
export function DataTableInfiniteLoader({
	fetchNextPage,
	hasNextPage,
	isFetchingNextPage,
	isFetching,
	config,
}: DataTableInfiniteLoaderProps) {
	const isAuto = config?.mode === "auto";
	const loadingText = config?.loadingText ?? "Loading...";
	const noMoreText = config?.noMoreText ?? "No more results";

	// Auto mode: use IntersectionObserver on sentinel
	const { sentinelRef } = useInfiniteScroll({
		hasNextPage,
		isFetchingNextPage: isFetchingNextPage || Boolean(isFetching),
		fetchNextPage,
		rootMargin: config?.rootMargin,
		threshold: config?.threshold,
		enabled: isAuto,
	});

	if (isAuto) {
		return (
			<output
				ref={sentinelRef}
				aria-label={isFetchingNextPage ? loadingText : noMoreText}
				{...stylex.props(styles.sentinel)}
			>
				{isFetchingNextPage && (
					<div {...stylex.props(styles.loadingInline)}>
						<Spinner />
						<span {...stylex.props(styles.loadingText)}>{loadingText}</span>
					</div>
				)}
				{!hasNextPage && !isFetchingNextPage && (
					<span {...stylex.props(styles.noMore)}>{noMoreText}</span>
				)}
			</output>
		);
	}

	// Manual mode
	if (!hasNextPage) {
		return (
			<div {...stylex.props(styles.center)}>
				<span {...stylex.props(styles.noMore)}>{noMoreText}</span>
			</div>
		);
	}

	return (
		<div {...stylex.props(styles.center)}>
			<Button
				variant="outline"
				onClick={fetchNextPage}
				disabled={isFetchingNextPage}
				loading={isFetchingNextPage}
				aria-label={config?.loadMoreText ?? "Load more"}
			>
				{config?.loadMoreText ?? "Load more"}
			</Button>
		</div>
	);
}

const styles = stylex.create({
	sentinel: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: spacing.medium,
		minHeight: 48,
	},
	loadingInline: {
		display: "flex",
		alignItems: "center",
		gap: spacing.small,
	},
	loadingText: {
		color: theme.contentSecondary,
		fontSize: fontSize.small,
	},
	noMore: {
		color: theme.contentDisabled,
		fontSize: fontSize.small,
	},
	center: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: spacing.medium,
	},
});

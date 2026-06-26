import { Button, Spinner } from "../components";
import type { InfiniteScrollConfig } from "./types";
import { useInfiniteScroll } from "./use-infinite-scroll";
import * as styles from "./data-table.css";

interface DataTableInfiniteLoaderProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isFetching?: boolean;
  config?: InfiniteScrollConfig;
}

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
      <div
        ref={sentinelRef}
        aria-label={isFetchingNextPage ? loadingText : noMoreText}
        className={styles.sentinel}
      >
        {isFetchingNextPage && (
          <div className={styles.loadingInline}>
            <Spinner />
            <span className={styles.loaderLoadingText}>{loadingText}</span>
          </div>
        )}
        {!hasNextPage && !isFetchingNextPage && <span className={styles.noMore}>{noMoreText}</span>}
      </div>
    );
  }

  if (!hasNextPage) {
    return (
      <div className={styles.center}>
        <span className={styles.noMore}>{noMoreText}</span>
      </div>
    );
  }

  return (
    <div className={styles.center}>
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

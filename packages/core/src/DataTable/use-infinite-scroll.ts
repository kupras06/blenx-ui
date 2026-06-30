import { type RefObject, useCallback, useEffect, useRef } from "react";

interface UseInfiniteScrollOptions {
  /** Whether there are more pages to load */
  hasNextPage: boolean;
  /** Whether a fetch is currently in progress */
  isFetchingNextPage: boolean;
  /** Function to fetch the next page */
  fetchNextPage: () => void;
  /** IntersectionObserver root margin. Default: "200px" */
  rootMargin?: string;
  /** IntersectionObserver threshold. Default: 0 */
  threshold?: number;
  /** If true, the observer is disabled */
  enabled?: boolean;
}

interface UseInfiniteScrollReturn {
  /** Ref to attach to the sentinel element */
  sentinelRef: RefObject<HTMLDivElement | null>;
}

/**
 * Hook to observe a sentinel element and trigger fetchNextPage when visible.
 *
 * Uses IntersectionObserver with a configurable root margin and threshold.
 * Respects hasNextPage, isFetchingNextPage, and enabled state to prevent
 * duplicate requests.
 */
export function useInfiniteScroll({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  rootMargin = "200px",
  threshold = 0,
  enabled = true,
}: UseInfiniteScrollOptions): UseInfiniteScrollReturn {
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage],
  );

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !enabled) return;

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin,
      threshold,
    });

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [enabled, handleIntersection, rootMargin, threshold]);

  return { sentinelRef };
}

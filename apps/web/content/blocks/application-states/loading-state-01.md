---
title: Loading State
group: application-states
order: 2
default: false
---

## Overview

Loading-state-01 is a skeleton and progress indicator block that communicates to users that content is being fetched or processed. It provides four distinct skeleton shapes — text, card, table, and avatar — that can be composed to match the layout of the content being loaded. Each skeleton mimics the approximate dimensions and visual weight of the real content without rendering actual data, reducing perceived latency by giving users a preview of the page structure. The block also includes an optional determinate progress bar for operations with known durations, such as file uploads or data exports. Because this block manages purely presentational concerns with no interactive state, it requires no external props by default, though it exposes props for skeleton type, count, and layout direction.

## When To Use

Use loading-state-01 whenever your application fetches data from an asynchronous source and the content area would otherwise be blank. It is appropriate for page loads, list refreshes, search result fetching, and any asynchronous operation that replaces existing content. The skeleton shapes should match the eventual content layout — use the "table" skeleton shape for table views, "card" skeleton shape for grid card layouts, and "text" skeleton for article or detail views. Do not use this block for button-level loading states (inline spinners are more appropriate) or for full-page interstitials that block interaction. If your data loads in under 300ms on average, consider omitting the skeleton entirely to avoid a flash-of-fake-content effect.

## Customization

The block accepts a `type` prop that selects the skeleton shape: `"text"`, `"card"`, `"table"`, or `"avatar"`. The `count` prop duplicates the skeleton the specified number of times to match your expected content density — pass `count={10}` for a ten-row skeleton table or `count={6}` for a six-card grid. The `direction` prop accepts `"vertical"` or `"horizontal"` layout for composing multiple skeletons. Skeleton dimensions are configurable through `width` and `height` props, with sensible defaults for each shape type. The optional `progress` prop accepts a number between 0 and 100 to show a determinate progress bar below the skeletons. Animation speed follows your theme's motion tokens, with a default shimmer animation that runs at 1.5 seconds per cycle.

## Accessibility Notes

The skeleton container is marked with `aria-busy="true"` to indicate that content is loading. Skeleton elements use `aria-hidden="true"` since they are decorative placeholders and not interactive content. A live region with `aria-live="polite"` announces "Loading" when the skeleton appears and is updated to "Loaded" when it is replaced with real content — the component consuming loading-state-01 is responsible for triggering this update. The progress bar, when used, includes `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes. Users of assistive technology should not be able to focus or interact with skeleton elements, so they are excluded from the tab order.

## Composition

This block composes skeleton `div` elements with a CSS shimmer animation applied via StyleX keyframes. The skeleton shapes are built using a `Box` primitive with fixed border-radius tokens to match real UI elements — text lines have a small radius, cards have the standard card radius, avatars are circular. When `progress` is provided, a `ProgressBar` component renders beneath the skeletons with both visual fill and ARIA progressbar attributes. Multiple skeletons are wrapped in a `Flex` or `Stack` container depending on the `direction` prop. The entire block is wrapped in a `Section` element that serves as the live-region boundary.

## Best Practices

Match the skeleton shape and count as closely as possible to the expected final content — a mismatch between skeleton structure and loaded content creates a jarring layout shift. Use the shimmer animation rather than a static gray box, as the motion signals to users that the page is actively loading rather than frozen. When using determinate progress, only show it for operations that have a predictable duration exceeding two seconds; very fast operations resolve before the user registers the progress bar, making it visual noise. For list views with pagination, show skeletons only for the new items being loaded, not the entire list, to preserve the user's scroll position and context.

## Limitations

Loading-state-01 does not support nested or irregular skeleton layouts — every skeleton in a group is identical. If your content has a complex structure with mixed shapes (e.g., a row with an avatar, two text lines, and a badge), you will need to compose multiple skeleton instances manually. The shimmer animation is CSS-only and does not respect the user's reduced-motion preference automatically, though it reads the `prefers-reduced-motion` media query from your theme's motion tokens. There is no built-in timeout or error state — if the loading operation fails, the caller must replace the skeleton with error-state-01 rather than leaving the skeleton visible indefinitely.

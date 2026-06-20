---
title: Header (Search)
group: headers
order: 2
default: false
---

## Overview

Header-02 is a search-centric header block that places a command palette or search input at the center of the top navigation. Unlike header-01's navigation link row, header-02 dedicates the primary header space to a search input that can trigger a command palette overlay, making it ideal for documentation sites, knowledge bases, and data-heavy applications where finding content is the primary interaction. The logo remains on the left, and a minimal set of action icons (theme toggle, notifications, user menu) sit on the right. The search input expands on focus with a subtle animation and can be triggered via keyboard shortcut (`Cmd+K` or `Ctrl+K`). On mobile, the search input collapses to an icon button that opens a full-screen search overlay.

## When To Use

Header-02 is ideal for documentation portals, API reference sites, knowledge bases, data dashboards, and any application where search is the primary mode of navigation. It works well when users typically know what they are looking for and want to type to find it rather than click through navigation menus. Use header-02 when you have a large content surface area that cannot be adequately covered by 5-7 navigation links. Do not use header-02 for marketing landing pages, simple 3-4 page sites, or applications where search is a secondary or infrequent action — the prominent search bar wastes visual space when users do not need it regularly.

## Customization

The `logo` prop follows the same pattern as header-01. The `searchProps` object configures the command palette: `placeholder` (defaults to "Search..."), `shortcutHint` (defaults to "⌘K"), `onSearch` callback receiving the query string, and `onOpen`/`onClose` callbacks for the command palette lifecycle. The `actions` prop accepts an array of ReactNodes for the right side — typically fewer items than header-01 to keep the search visually dominant. The `commandPalette` prop accepts a ReactNode to render as the command palette overlay content, or you can use the default search interface. The `variant` prop and `sticky` prop behave identically to header-01.

## Accessibility Notes

The search input has `role="combobox"` with `aria-expanded` and `aria-controls` when the command palette is open. The keyboard shortcut hint is rendered as a `<kbd>` element with an accessible label: `aria-label="Search. Press Control K to open."`. The command palette overlay uses `role="dialog"` with `aria-label="Search"`. Results within the palette are rendered as a `listbox` with `option` roles. Focus moves to the search input when the palette opens and returns to the trigger element on close. Escape dismisses the palette. The mobile search overlay follows the same dialog pattern.

## Composition

Header-02 composes similarly to header-01 but replaces the center nav links with a `SearchInput` component that expands on focus. The search input uses a `Button`-like trigger that transforms into a full `Input` on focus or click. The command palette renders as a portal overlay with a backdrop, containing an `Input` at the top and a scrollable results `List` below. The overlay is wrapped in `AnimatedPresence` for enter/exit transitions. On mobile, the entire header area between logo and actions is replaced by a search icon button that opens the full-screen palette.

## Best Practices

Make the command palette fast and responsive — users invoking search via keyboard expect near-instant results. If the content set is large, debounce the search input by 150-200ms and consider server-side search or a prebuilt index. Show recent searches or popular results when the palette opens with an empty query to reduce friction for repeat visitors. Ensure the keyboard shortcut (`Cmd+K`) works globally, not just when the header is focused. For documentation sites, include section headings in the command palette results to help users distinguish between API reference, guides, and tutorial content.

## Limitations

The built-in command palette provides search UI only — integrating with a search backend (Meilisearch, Algolia, or custom API) is the caller's responsibility. The search input and command palette are not customizable beyond the props surface; custom result rendering or multi-select search requires replacing the `commandPalette` prop with a custom implementation. The overlay command palette may conflict with page-level keyboard shortcuts. The mobile search overlay replaces the nav entirely, so users on mobile cannot access the navigation links while the search is active.

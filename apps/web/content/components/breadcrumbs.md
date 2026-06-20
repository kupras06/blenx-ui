## Overview

Breadcrumbs displays the page hierarchy as a navigational trail with separators between each level. It helps users understand their current location within the application and provides quick access to ancestor pages. Use breadcrumbs in multi-level navigation structures — documentation sites, admin panels, SaaS dashboards, and e-commerce category trees. They are the secondary navigation pattern, supplementing the primary navigation rather than replacing it. Do not use breadcrumbs for flat sites with only one or two levels; the visual weight is unnecessary and the utility is minimal. Breadcrumbs are also inappropriate for step-based flows like checkout wizards, where stepper or progress indicator components better convey sequence.

## Usage

Provide an array of `items` where each item contains a `label` and an `href`. The last item is rendered as plain text representing the current page — it is not a link — while all preceding items render as anchors. The `separator` prop customizes the divider between items, defaulting to a forward slash with appropriate spacing. Breadcrumbs are rendered as a `<nav>` element with `aria-label="Breadcrumbs"` for accessibility. The component truncates items that exceed the container width, showing as many ancestor links as space allows with a collapsed indicator for overflow.

## Composition

Breadcrumbs sits in the page header area, typically between the navigation bar and the page title. Use it alongside `Container` to constrain the breadcrumb width to match the page content. Breadcrumbs compose with `Button` and `Icon` for inline actions — a common pattern is placing a "Back" button with an icon adjacent to the breadcrumb trail. Avoid nesting breadcrumbs inside `Card` or `Dialog` headers, as the navigation context in those surfaces is typically unrelated to the page hierarchy.

## Best Practices

Keep breadcrumb labels short and scannable — use "Users" instead of "All Registered Users". The current page label should match the page title for consistency. Do not include the current page as a link; it is visually distinct and non-interactive to avoid confusion. Use breadcrumbs as a progressive disclosure tool: show the full hierarchy on desktop, collapse middle items on tablet, and show only the parent on mobile with a back button. Each breadcrumb link should navigate directly to the referenced page without intermediate dialogs.

## Common Mistakes

Using breadcrumbs as primary navigation is the most common mistake. Users rely on the sidebar or top nav for primary navigation; breadcrumbs are supplementary. Another error is duplicating the current page title in the breadcrumb when the title already appears prominently in the page heading. Including extraneous levels like the homepage when the user is several levels deep creates unnecessary noise — start breadcrumbs from the meaningful section root.

## Design Guidelines

The breadcrumb separator should be visually lightweight — a simple character or small icon — to avoid competing with the actual links. The current page label should use the same text color as the page heading but a lighter font weight to distinguish it from ancestor links. Collapsed items should be indicated with an ellipsis that expands the full trail on click or hover. Ensure interactive breadcrumb items have a visible hover state and meet minimum touch target size on mobile. The entire breadcrumb component should be compact, typically occupying no more than 40px of vertical space.

## Limitations

Breadcrumbs does not support multi-line wrapping. If the full breadcrumb trail overflows, items are truncated rather than wrapped to the next line. The component does not provide automatic path generation — the breadcrumb hierarchy must be constructed and passed explicitly. Breadcrumbs also do not support context menus on intermediate items for quick sibling navigation; that pattern requires a custom implementation.

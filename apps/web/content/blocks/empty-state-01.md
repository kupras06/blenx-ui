## Overview

Empty-state-01 is a content placeholder block that displays when a list, dashboard, or data view has no items to show. It combines a visual icon, a descriptive title, a supporting message, and up to two action buttons to guide the user toward populating the empty view. This block transforms the negative space of an empty dataset into an opportunity for onboarding — instead of a blank screen that leaves users wondering what to do, it communicates clearly that nothing exists yet and offers a clear next step. The primary action typically triggers content creation, while the secondary action might link to documentation or open an import dialog. The `icon` prop accepts any Phosphor icon component, letting you match the visual to the context — a folder icon for an empty document list, an inbox icon for an empty message feed, and so on.

## When To Use

Use empty-state-01 whenever a page or section has zero results to display, whether that is an empty project list, no search matches, a blank notification center, or a newly created workspace with no members. It is most effective as the default state for list-based views where users are expected to take an action to generate content. Do not use this block for true error states (use error-state-01 instead), loading states (use loading-state-01), or situations where the emptiness is expected and requires no action — such as an optional feature the user has not set up. If the empty state occurs because of a filter or search that returned no matches, consider adjusting the title and message to reflect that the data exists but is hidden by the current filter criteria.

## Customization

The `icon` prop accepts any Phosphor icon component, allowing you to swap the visual depending on the context — `FolderOpen` for documents, `Inbox` for messages, `Users` for team members. The `title` and `description` props accept arbitrary strings, letting you tailor the message precisely to the empty context. The `action` prop configures the primary button with `label` and `onClick` properties; `secondaryAction` similarly configures a secondary ghost-style button. You can hide the secondary action entirely by omitting the prop, keeping the layout centered on a single call to action. The icon color and size follow your theme's muted or subdued token levels, ensuring the empty state feels intentionally designed rather than like a deficiency. The entire block respects the parent container's alignment, centering horizontally by default with configurable vertical padding.

## Accessibility Notes

The empty state is rendered as a `section` element with `aria-labelledby` pointing to the title, giving it a clear landmark for navigation. The icon is marked with `aria-hidden="true"` since it is decorative and described by the title text. Action buttons are standard `<button>` or `<a>` elements depending on behavior, with descriptive labels that communicate the outcome rather than generic text like "Click here." If the empty state replaces a previously populated list (for example, after applying a filter), the block should receive focus programmatically or a live region should announce "No results found" so screen reader users are not left assuming the page is broken.

## Composition

This block composes a `Flex` container that centers its children vertically and horizontally, an `Icon` component (wrapping the passed Phosphor icon) at the top, a `Heading` for the title, a `Text` component for the description, and a `Button` row at the bottom for the actions. The primary action uses a filled `Button` variant and the secondary action uses a `Ghost` or `Outline` variant for visual hierarchy. The entire composition sits inside a `Card` or `Section` depending on the parent context, but empty-state-01 itself is a standalone block that can be embedded in any container without assuming its parent's structure.

## Best Practices

Always provide a `description` that explains why the view is empty in human terms — "You haven't created any projects yet" is better than "No projects found." Make the primary action the exact thing the user needs to do to populate the view, such as "Create your first project" rather than "Go to settings." If the empty state appears after a search or filter that yielded no results, dynamically change the title to something like "No matches for your search" instead of showing the default empty-set message. Use an icon that aligns with the content type so the visual metaphor reinforces the message — an empty cart icon for an order list, for example, builds coherence.

## Limitations

Empty-state-01 supports a maximum of two action buttons — if your empty state requires more choices (such as "Create file," "Import from GitHub," and "Use template"), you will need to build a custom solution or layer a dropdown menu on the primary action. The block offers no built-in animation or transition when it appears, so it snaps into place immediately. There is no distinction between "truly empty" and "loading but showing nothing" — pair this block with loading-state-01 to ensure users see a skeleton while data is fetching. The content is static after rendering; dynamic messages based on user attributes (like "Welcome back, [Name] — your workspace is waiting") must be computed externally and passed in as props.

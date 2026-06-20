---
title: Header (Default)
group: headers
order: 1
default: true
---

## Overview

Header-01 is a standard application header block that provides primary navigation, branding, and user actions in a single horizontal bar. It features a logo or site name on the left, a centered navigation link row, and a right-aligned action area for buttons, icons, or a user menu. The header is `position: sticky` at the top of the viewport with a backdrop blur effect, ensuring it remains accessible as the user scrolls while maintaining visual separation from page content. The navigation links highlight the active route automatically via the framework router, and the entire header collapses to a hamburger menu on mobile viewports. At its core, header-01 solves the problem of consistent top-of-page navigation across all routes of an application or marketing site.

## When To Use

Header-01 is appropriate for any multi-page application, marketing site, or documentation portal that needs a persistent top navigation bar. It works well for sites with 4-7 primary navigation links and a handful of secondary actions. Use it as the primary header on public-facing pages, authenticated app views, and landing pages where you want navigation accessible at all times. Do not use header-01 for full-screen marketing pages where a hero section should be uninterrupted — consider a transparent overlay header or hiding navigation entirely. For applications with very deep navigation hierarchies (more than 7 top-level links), pair header-01 with a sidebar navigation component instead of cramming everything into the top bar.

## Customization

The `logo` prop accepts a ReactNode for the brand mark or site name, typically an SVG logo component or a styled text link. The `navLinks` prop accepts an array of `{ label, href, active? }` objects that render as the primary navigation row. The `actions` prop accepts an array of ReactNodes for the right-aligned area — common uses include a theme toggle button, notification bell, user avatar dropdown, and a "Get Started" call-to-action button. The `variant` prop accepts `"default"` (white/surface background with bottom border) or `"transparent"` (no background until scroll, then transitions to surface). The `mobileBreakpoint` prop allows customizing at which viewport width the hamburger menu activates. The `sticky` boolean prop (default `true`) controls whether the header sticks to the top of the viewport on scroll.

## Accessibility Notes

The header is wrapped in a `<header>` element with `role="banner"`. The primary navigation is a `<nav>` element with `aria-label="Main"`. Each navigation link uses the framework's `<Link>` component with proper `aria-current="page"` on the active route. The hamburger menu button has `aria-label="Toggle navigation"` and `aria-expanded` reflecting the menu state. The mobile menu uses `aria-hidden="true"` when collapsed and removes `hidden` when expanded. Focus is trapped within the mobile menu when open, returning to the toggle button when closed. Dropdown menus within the actions area use the standard menu button pattern with `aria-haspopup="true"`.

## Composition

Header-01 composes a `Flex` container with `justify-content: space-between` and `align-items: center` for the three zones (left, center, right). The logo area is a `Link` or `Box` containing the brand element. The nav links render inside a `Flex` row with `gap` tokens, wrapping each `Link` in a styled `NavItem` component. The actions area uses `Flex` with smaller gap. On mobile, the nav links collapse into a `Sheet` or `Drawer` component triggered by a hamburger `IconButton`. The header background uses `backdrop-filter: blur(12px)` with a semi-transparent surface color for the frosted glass effect. A bottom border using the `border-subtle` token provides visual separation from page content.

## Best Practices

Keep navigation link labels short (1-2 words) and limit the total to 5-7 links to avoid visual crowding. Place the most important action (signup, dashboard, etc.) as a button in the actions area rather than burying it in the nav links. Use the `transparent` variant on hero-style landing pages where the header should not compete with the hero section — it will automatically gain a background as the user scrolls past the hero. Test the mobile menu thoroughly to ensure all navigation items are reachable and the menu dismisses when a link is clicked. If your application has multiple header states (logged-in vs logged-out), manage the nav links and actions arrays externally based on auth state.

## Limitations

Header-01 does not support secondary navigation rows, mega-menus, or dropdown navigation items — all links are flat and top-level. For complex navigation hierarchies, pair this header with a sidebar or use a dedicated navigation component. The mobile menu uses a full-screen overlay drawer pattern, which may conflict with pages that have their own overlay components (modals, sheets). The sticky behavior uses CSS `position: sticky` and may not work as expected within certain CSS container contexts or if the header is placed inside a scrolling container rather than at the document root.

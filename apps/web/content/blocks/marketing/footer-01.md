---
title: Footer
group: marketing
order: 5
default: false
---

## Overview

Footer-01 is a multi-column footer block that provides site-wide navigation, branding, social links, and legal information in a single cohesive section. It supports up to four link columns, each with a heading and a list of navigation items, plus a separate branding area for the logo, a short tagline, and social media icon links. A bottom bar below the columns displays copyright text, legal links (privacy, terms, cookies), and an optional "Made with" credit. The block collapses to a single-column stacked layout on mobile with all columns expanding vertically, making it easy to navigate on small screens. The entire block uses your theme's surface and text-subdued tokens to stay visually present without competing with the main content.

## When To Use

Footer-01 is appropriate for any multi-page site or application that needs a consistent footer across all routes. Use it as the primary footer on marketing pages, documentation sites, and public-facing web applications. The four-column layout is best suited for sites with substantial navigation needs — product links, company information, resources, and legal pages. For simpler footers with fewer links, consider reducing the number of columns via the configuration or using a single-row footer layout. Do not use footer-01 for logged-in application views where a minimal footer (or no footer) is more appropriate — the full footer with legal text and multiple link columns adds unnecessary visual weight to data-dense interfaces.

## Customization

The `branding` prop accepts a `logo` (ReactNode or string), `tagline`, and optional `href` for the logo link. The `columns` prop accepts an array of up to four column objects, each with a `heading` string and an `links` array of `{ label, href }` objects. The `social` prop accepts an array of `{ icon, href, label }` objects for social media links, rendered as icon-only buttons with accessible labels. The `bottomBar` prop configures the copyright text, legal links, and the optional `madeWith` credit string. The `variant` prop accepts `"default"` (white/light background) or `"muted"` (subtle background tint) to control the footer's visual separation from the page content.

## Accessibility Notes

The footer is wrapped in a `<footer>` element with `role="contentinfo"` for landmark navigation. Each link column is a `<nav>` element with `aria-labelledby` pointing to its heading, creating distinct navigation landmarks for screen readers. Social links use `aria-label` on each icon button (e.g., "Visit us on Twitter"). The logo link includes `aria-label="Home"` if the logo image alone is not descriptive enough. Bottom bar legal links are in a separate `<nav>` with `aria-label="Legal"`. Focus order flows left to right across columns on desktop and top to bottom on mobile, matching the visual layout.

## Composition

Footer-01 composes a `Box` container with a CSS Grid layout for the link columns (`grid-template-columns: repeat(4, 1fr)` on desktop, single column on mobile). The branding area sits above the columns in a flex row with the logo on the left and social icons on the right. A `Divider` component separates the columns area from the bottom bar. Each link column uses a `Stack` with a `Text` heading and `Link` components for each item. The bottom bar is a `Flex` row with the copyright text on the left and legal links on the right, wrapping to stacked layout on mobile. The entire block uses responsive padding that matches your site's content max-width for alignment with the rest of the page.

## Best Practices

Keep link column headings short (1-2 words) and links concise. The footer should complement, not duplicate, the primary navigation — include links that users look for at the bottom of a page (contact, legal, careers, documentation) rather than repeating the main nav. Always include a copyright notice with the current year — use a dynamic year value rather than a hardcoded one. Social links should open in a new tab with `rel="noopener noreferrer"`. On mobile, test that link targets are at least 44px tall for touch accessibility. If you have fewer than four columns of content, leave empty columns rather than stretching content to fill the space.

## Limitations

Footer-01 does not support nested or hierarchical link structures — each column is a flat list. If you need expandable sections (accordion-style columns on mobile), a different footer component with collapsible column headings is required. The social icons render only as Phosphor icon components; custom SVG social icons need to be wrapped in a compatible component wrapper. The block does not include a newsletter signup form within the footer — combine it with the waitlist-01 or waitlist-02 block placed above the footer for that pattern. Column count is fixed at build time via the `columns` prop; dynamic column visibility based on user permissions or route is the caller's responsibility.

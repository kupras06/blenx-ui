---
title: Header (Auth)
group: headers
order: 3
default: false
---

## Overview

Header-03 is a minimal header block optimized for authentication pages — login, signup, password reset, and email verification screens. It strips away the navigation links and action buttons of a standard header, keeping only the logo/brand mark on the left and optional language or theme toggles on the right. The header is intentionally sparse to keep user focus on the auth form rather than navigation options. It uses the `transparent` variant by default with no background and minimal bottom border, blending into the page surface. On auth pages, users should either complete the form or have a clear path back to the landing page — the logo typically links to the home page, providing the only navigation escape.

## When To Use

Header-03 is the correct choice for any authentication flow page: login, signup, forgot-password, reset-password, verify-email, and multi-step auth flows. It should also be used for permission-denied, account-suspended, and similar gate pages where navigation options should be minimized. Use it on any page where the primary goal is a single focused action and you want to reduce distraction. Do not use header-03 on pages that require navigation — logged-in pages, dashboards, marketing pages, or content pages should use header-01 or header-02 instead.

## Customization

The `logo` prop accepts a ReactNode for the brand mark, typically linking to the home page. The `rightSlot` prop accepts an optional ReactNode for the right side of the header — commonly a language selector, theme toggle, or a "Back to home" link. The `variant` prop defaults to `"transparent"` with optional `"default"` for a surface background. The `showBorder` boolean prop controls whether a bottom border separator is visible. The logo link `href` is configurable via the `logoHref` prop (defaults to "/").

## Accessibility Notes

The header is a `<header>` with `role="banner"`. The logo link has `aria-label` describing the destination (e.g., "Go to home page"). If the `rightSlot` contains interactive elements (theme toggle, language picker), each must have appropriate `aria-label` and accessible keyboard interaction. Since auth pages typically have no skip-to-content link, ensure the header does not trap focus and the tab order flows naturally from logo to auth form.

## Composition

Header-03 is the simplest of the header variants — a `Flex` container with the logo on the left and the optional right slot on the right. No nav links, no search, no user menu. The header uses full-width container with left/right padding matching the auth card or form width for visual alignment. The transparent variant has no background color, allowing the page gradient or background pattern to show through fully.

## Best Practices

Always link the logo to the home page so users who landed on the auth page by accident can easily navigate away. Keep the right slot minimal — at most a language selector or theme toggle. Do not add navigation links or calls to action to this header; the auth form itself should provide the primary action. If your auth flow spans multiple steps (email → code → password), ensure the header remains consistent across all steps so the user always recognizes they are in the same flow.

## Limitations

Header-03 is intentionally limited in functionality — it does not support navigation links, search, user menus, or any other standard header features. For auth pages that need additional navigation (such as "Create account" link on the login page or vice versa), those links belong in the auth form's footer, not in the header. The transparent variant may not provide sufficient contrast on pages with light backgrounds at certain scroll positions; pair it with the auth card's shadow or border to define the page boundary.

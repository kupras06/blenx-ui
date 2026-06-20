---
title: Auth Screen
group: headers
order: 4
default: false
---

## Overview

Authorization-01 is not a header but a full-page authorization gate block that wraps protected content and redirects unauthenticated users to a login page. It monitors authentication state and conditionally renders either the protected children or a redirect/fallback UI. The block supports role-based access control, session timeout detection, and a customizable "please log in" interstitial with the application branding. It integrates with your existing auth provider (Supabase, Clerk, Auth0, or custom) through an `onAuthCheck` callback that returns the current user or null, keeping the auth logic external to the block.

## When To Use

Use authorization-01 as the outermost wrapper for any route or component that requires authentication. Wrap individual pages, layout components, or even specific sections within a page that should only be visible to authenticated users. Use the `requiredRole` prop to restrict access to specific user roles on admin panels, settings pages, or premium features. Do not use authorization-01 on public pages, login/auth pages themselves, or for clientside-only gating where the protected content is not sensitive — server-side protection is always the primary security layer, with authorization-01 providing the UX layer.

## Customization

The `onAuthCheck` callback receives no arguments and should return `{ user: User | null, isLoading: boolean }`, allowing the block to show a loading skeleton while auth state is resolved. The `requiredRole` prop accepts a string or array of strings for role-based access — users without the required role see the `fallback` UI instead of the redirect. The `redirectTo` prop configures where unauthenticated users are sent (defaults to "/login"). The `fallback` prop accepts a ReactNode for a custom unauthorized message (useful for role-based denials where the user is logged in but lacks permission). The `loadingComponent` prop customizes the loading skeleton shown during auth check. The `sessionTimeoutMs` prop auto-redirects after a period of inactivity, configurable per route.

## Accessibility Notes

Protected content is announced to screen readers only when the auth check passes; during loading, `aria-busy="true"` is set on the wrapper. The redirect action uses client-side navigation (not a full page reload) and focus moves to the login page heading after redirect. The fallback unauthorized view has `role="alert"` and describes why access was denied. If the session times out, a live region announces "Your session has expired. Redirecting to login." to ensure the user understands why they were moved.

## Composition

Authorization-01 wraps its `children` in a conditional render based on auth state. During loading, it renders the `loadingComponent` (defaults to a centered spinner). If the user is authenticated and has the required role, it renders `children`. If the user is authenticated but lacks the required role, it renders the `fallback` component. If the user is not authenticated, it redirects to `redirectTo` via the router's navigate function. The entire block is a transparent wrapper with no visual output of its own — no padding, background, or layout constraints.

## Best Practices

Authorization-01 is a UX convenience, not a security boundary — always enforce authentication and authorization on the server or API layer. Use it to prevent the flash of protected content before redirect, and to show a clean "You don't have access" message instead of a broken page. Set the `sessionTimeoutMs` on sensitive pages (payment forms, admin panels) and pair it with a session refresh mechanism. Use the `fallback` prop to show upgrade prompts or contact-support messaging when a user lacks the required role, rather than a generic error.

## Limitations

Authorization-01 does not handle authentication itself — it relies entirely on the `onAuthCheck` callback. It does not support multi-tenancy or organization-level permissions out of the box; for those, extend the `requiredRole` logic with custom authorization in your auth provider. The inactivity timeout detection is local to the component instance and does not synchronize across tabs. Server-side rendering (SSR) is not handled within the block — ensure your framework provides the auth state during SSR or use a loading state until the client-side auth check resolves.

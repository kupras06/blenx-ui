---
title: Login (Social)
group: authentication
order: 2
default: false
---

## Overview

Login-02 implements a multi-step sign-in flow that first collects the user's email address and then presents the appropriate authentication method based on whether the account exists. After the email is submitted, the block transitions to a second step showing either a password field for existing users or a magic-link option for passwordless authentication. This email-first approach reduces friction by showing users only the inputs relevant to their account state. The block exposes an `onSubmit` callback for the password step and a `magicLinkHandler` for the passwordless path, while the `links` prop configures navigation destinations for sign-up and password recovery. Animated transitions between steps make the flow feel responsive rather than like a page reload.

## When To Use

Choose login-02 when your application supports both password-based and passwordless authentication, or when you want to streamline the login experience by deferring the method decision until after email identification. This pattern is especially effective for applications with a mix of technical and non-technical users, since the magic-link option eliminates password fatigue. Do not use this block if you require social authentication as a primary sign-in method, as login-02 focuses on the email-first flow and does not include OAuth buttons. It is also not recommended for applications that need to display password rules or CAPTCHA on the same screen as the email field, since splitting those across steps can confuse users. If all your users authenticate with a password exclusively, the simpler login-01 block is more appropriate.

## Customization

The `magicLinkHandler` prop accepts a function that receives the email address and triggers your backend's magic-link or one-time-code delivery. You can customize the step titles and descriptions through optional string props like `passwordStepTitle` and `magicLinkStepTitle` if the defaults do not match your brand voice. The `links` object supports `forgotPassword` and `signUp` keys to control navigation hrefs shown on each step. Transition animation duration can be configured via the `animationDuration` prop, measured in milliseconds, with a default of 300ms. The block respects your theme's input and button tokens, so customizing those at the theme level flows through automatically.

## Accessibility Notes

Each step in the flow is a distinct section with its own `aria-label` or `aria-labelledby` to help screen reader users understand the current context. Focus is programmatically moved to the first focusable element of each new step when the transition completes, preventing users from being left in an unexpected location. The email input's error state is announced via a live region when the submission fails due to network issues or an unrecognized address. The back-action on the second step (returning to the email input) uses a recognizable button labeled "Change email" rather than a generic back arrow. The progress between steps is conveyed through a hidden `aria-live` region that announces "Step one of two" or "Step two of two" on transition.

## Composition

This block composes the same `Card`, `Input`, and `Button` primitives as login-01, but wraps the step transitions in a `AnimatePresence` container for the enter and exit animations. Each step is rendered as a separate fragment that mounts and unmounts conditionally based on the current step index. The email step uses a simple `Input` with a submit `Button`. The second step conditionally renders either a `PasswordInput` (with show/hide toggle) when the account has a password, or an instructional message paired with a "Send magic link" button for the passwordless path. An `Anchor` component provides the "Forgot password" link when the password sub-step is active.

## Best Practices

Validate the email format on the first step before transitioning — this prevents users from accidentally advancing with a typo and then seeing a confusing second step. Show a clear loading indicator on the step transition to signal that account lookup is happening. For the magic-link flow, display a confirmation message after the link is sent so users know to check their inbox, and provide a "Resend" option with a short cooldown. Make the "Change email" link easy to discover, since users may mistype their address and need to correct it without refreshing the page. Store the email in local state so that if the user navigates away and returns, they do not have to re-enter it.

## Limitations

Login-02 does not support social authentication — consider login-01 if OAuth buttons are required. The block has no built-in rate limiting for email lookups, so a malicious actor could theoretically enumerate valid email addresses if your backend returns different responses for found versus not-found accounts. The magic-link flow is inherently dependent on email delivery speed, which the block cannot control; users experiencing delayed emails may perceive the application as broken. There is no integrated recovery mechanism if the magic link expires before the user clicks it — the caller must handle that error in the `magicLinkHandler` rejection and surface it appropriately.

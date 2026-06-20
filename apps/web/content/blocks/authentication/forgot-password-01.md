---
title: Forgot Password
group: authentication
order: 4
default: false
---

## Overview

Forgot-password-01 is a self-service password reset initiation block that collects the user's email address and sends a recovery link. It features a clean two-state interface: first, an email input form with validation, and then a success confirmation screen that reassures the user the reset email has been sent. The `onSubmit` handler receives the email address and returns a promise — the block automatically transitions to the success state when the promise resolves. This pattern prevents users from submitting multiple times while the request is in flight and avoids confusion about whether the email was actually dispatched. The block is designed to be embedded in a dedicated route at a predictable URL like `/forgot-password`, keeping the recovery flow separate from the login page to prevent session confusion.

## When To Use

Use forgot-password-01 anywhere users authenticate with an email and password and need a standard recovery flow. It complements login-01 and login-02 by providing the destination for their "Forgot password?" link. This block is appropriate for B2B applications, consumer platforms, and internal tools where email-based password reset is the established recovery mechanism. Do not use this block if your application uses SMS-based reset codes, security questions, or device-based recovery, as the email-only flow would not match those patterns. It is also not suitable for applications that require the user to answer security questions before initiating a reset, since forgot-password-01 collects only the email address.

## Customization

The block accepts an optional `successTitle` and `successMessage` to customize the confirmation state copy, allowing you to include brand-specific instructions like "Check your work email inbox." You can configure the `emailLabel` and `submitLabel` string props to match your application's terminology. The `redirectDelay` prop controls how long (in milliseconds) the success state displays before auto-redirecting, which defaults to 5000ms but can be set to 0 to disable auto-redirect entirely. An optional `returnToLoginUrl` prop provides a manual link back to the sign-in page on the success screen. The block inherits its input styling from your theme's form tokens, so no additional styling configuration is required to match your application's design.

## Accessibility Notes

The email input has an explicit `<label>` and error messages are wired via `aria-describedby`. When the form transitions to the success state, focus moves programmatically to the success heading so screen readers announce the confirmation immediately. A hidden `aria-live="polite"` region announces "Reset email sent" when the transition completes. The submit button shows a loading state with `aria-busy="true"` during the API call, and the button text changes to "Sending..." which is itself announced by some screen readers. The "Return to login" link on the success screen is a semantic `<a>` element with clear text rather than a generic "Back" label.

## Composition

This block uses a `Card` container with an `Input` component for the email field and a `Button` for the submit action. The state transition between the form and the success screen is handled with conditional rendering — the success state replaces the form with a `CheckCircle` icon from Phosphor, a `Heading` for the confirmation title, a `Text` component for the message, and an optional `Anchor` for the return-to-login link. An `Alert` component can optionally be displayed if the `onSubmit` promise rejects, showing a generic error message with a "Try again" action. No social buttons or secondary actions clutter the interface, keeping the user focused on the single task of recovering their account.

## Best Practices

Always resolve the `onSubmit` promise even if your backend cannot disclose whether the email exists — say "If an account with that email exists, we sent a reset link" to prevent email enumeration. Use the `redirectDelay` to automatically navigate users back to the login page after a few seconds, since they have finished their task and waiting manually is poor UX. If your backend sends reset emails asynchronously, introduce an artificial minimum delay of 1500ms in the handler so the loading state does not flash and disappear too quickly, which can feel glitchy. Provide clear instructions in the `successMessage` about checking spam folders, since a significant percentage of transactional emails end up filtered.

## Limitations

Forgot-password-01 has no built-in rate limiting for email submissions, so a caller must implement throttling externally or add a cooldown timer in the wrapper. The success screen does not include a "Resend email" button — users who do not receive the email must refresh the page and start over. There is no support for security questions, SMS codes, or backup codes as alternative recovery methods. The block cannot validate whether the email belongs to an active account without making an API call, and the design intentionally avoids leaking that information, but callers should ensure their backend does not inadvertently reveal account status through timing differences or error messages.

---
navigation:
  group: blocks
  order: 3
---

## Overview

Signup-01 is a registration form block that collects the essential information needed to create a new user account: full name, email address, and password. It includes a terms-of-service acceptance checkbox and social sign-up buttons for GitHub and Google, mirroring the familiar layout of the login blocks so that the authentication suite feels cohesive. The `onSubmit` handler receives the complete form payload including the name, email, password, and terms acceptance flag, giving your backend everything needed to provision an account. Social provider buttons are rendered from the `socialProviders` prop, consistent with the login-01 pattern. The block performs client-side validation on all fields before submission, highlighting errors inline and focusing the first invalid field when validation fails.

## When To Use

Deploy signup-01 as the primary registration surface for any application that uses email-and-password accounts, optionally supplemented by social sign-up. It works well for B2B SaaS products, community platforms, and consumer applications that need a standard registration flow. Avoid using signup-01 when you need multi-step registration (such as collecting profile details on a second screen), invitation-only sign-up requiring an invite code field, or age verification that demands date-of-birth collection. It is also not suitable for applications that enforce password policies requiring a password-strength meter or composition rules, as the block only validates that the password is non-empty and meets a minimum length.

## Customization

The `socialProviders` array controls which OAuth sign-up buttons appear, accepting the same `"github"` and `"google"` values as the login blocks. You can pass a `termsUrl` prop to link the terms checkbox label to your actual terms-of-service page, and a `privacyUrl` for the privacy notice. The `passwordMinLength` prop defaults to 8 but can be increased for stricter security requirements. Field labels and placeholder text are overridable through string props such as `nameLabel`, `emailLabel`, and `passwordLabel`. The block also accepts a `redirectAfterSignup` string prop to configure where the user is sent after successful registration, though the caller can also handle navigation in the `onSubmit` promise chain.

## Accessibility Notes

All form inputs have explicit `label` associations and error messages linked via `aria-describedby`. The terms checkbox uses a native `<input type="checkbox">` and the label is a `<label>` element that includes clickable anchor links for the terms and privacy documents. The submit button includes `aria-live="polite"` context that announces "Creating your account" during the submission phase. Social sign-up buttons each include an accessible name like "Sign up with Google" so that screen reader users can distinguish them. When client-side validation fails, focus moves to the first field with an error and the error message is announced. The password field includes a `aria-describedby` reference to a hint element that communicates the minimum length requirement.

## Composition

Signup-01 builds on the same `Card`, `Input`, and `Button` primitives used in the login blocks, adding a `PasswordInput` with a visibility toggle. The terms checkbox uses a `Checkbox` component linked to the terms and privacy `Anchor` elements inside its label. Social provider buttons are mapped from the `socialProviders` array and rendered in a row below a divider, following the same pattern as login-01. The form is wrapped in a `<form>` element with `novalidate` to allow the block's custom validation logic to take precedence over browser defaults. A `Heading` component provides the page title ("Create an account") and subtitle text.

## Best Practices

Send the `onSubmit` handler a promise that resolves only after your server has confirmed the account creation, not immediately after the HTTP request is dispatched — this prevents double-submissions and lets the button remain in its loading state until the operation is complete. Validate the email domain against a blocklist of disposable email providers if your product targets professional users, reducing support-spam accounts. Ensure the terms checkbox defaults to unchecked and remains unchecked until the user actively clicks it, since pre-checked terms boxes are considered non-compliant in many jurisdictions. Show a success toast or redirect immediately upon successful registration to confirm the action, since users expect instant feedback after signing up.

## Limitations

Signup-01 does not support email verification as part of its flow — the form submits and considers registration complete upon server success. You will need to pair this block with a separate verify-email page or handle verification server-side with a redirect. There is no built-in password strength indicator, so teams requiring composable rules should implement custom validation in the `onSubmit` handler or extend the block. The form does not support CAPTCHA integration, which may be a concern for high-traffic public registrations. Social sign-up buttons share the same limitations as login-01: they appear regardless of backend availability unless filtered from the `socialProviders` array at render time.

---
title: Login (Standard)
group: authentication
order: 1
default: true
---

## Overview

Login-01 is a standard sign-in form block that serves as the primary authentication entry point for web applications. It provides a complete login interface with email and password fields, social authentication buttons for GitHub and Google, a "remember me" persistence option, and navigation links for password recovery and account registration. The block handles form state internally while exposing an `onSubmit` callback that receives the email and password payload, making it straightforward to integrate with any authentication backend. Social provider buttons are rendered conditionally based on the `socialProviders` prop, allowing teams to toggle which OAuth options appear without modifying the component. The `links` prop accepts a configuration object for the forgot password and sign-up link destinations, keeping routing concerns external to the block.

## When To Use

Use this block as the default sign-in surface for any application that requires email-and-password authentication alongside social login options. It is well-suited for SaaS dashboards, customer portals, and admin panels where users need a familiar, no-surprises login experience. Avoid using login-01 when you need a passwordless flow, multi-factor authentication challenge, or a completely embedded inline form rather than a dedicated page-level block. It also is not appropriate for applications that authenticate exclusively through a single social provider, since the social button section would add unnecessary UI weight. If your product requires a step-first approach where email is collected before showing the password field, consider login-02 instead.

## Customization

The block accepts a `socialProviders` array to control which OAuth buttons render — you can pass `["github", "google"]` or a subset like `["google"]` depending on your integration status. Provider buttons render with the Phosphor icon for each platform and display the provider name as a label. The `links` prop accepts an object with `forgotPassword` and `signUp` href strings, allowing you to route users to the correct URLs in your application. You can customize the form's appearance through the parent theme tokens — the input border radius, spacing, and typography all inherit from your site's StyleX theme contract. The "Remember me" checkbox can be omitted by setting `showRememberMe` to false if your security policy does not support persistent sessions.

## Accessibility Notes

The form uses native `<form>` submission with proper `label` elements associated to each input via `htmlFor` attributes. Social provider buttons are rendered as semantic `<button>` elements with accessible names that include both the provider name and the action — for example, "Sign in with GitHub." The "Remember me" checkbox uses a native `<input type="checkbox">` with an associated label. Focus order follows the visual layout: email, password, remember me, submit, then the link row. Error messages are associated to their respective inputs via `aria-describedby` and announced by screen readers on validation failure. The submit button includes `aria-disabled` during submission to indicate the loading state without removing focusability.

## Composition

This block composes a `Card` wrapper, an `Input` component for each form field, a `Button` for the primary submit action, and `IconButton` elements for the social providers. The `Card` provides the containing surface with padding and shadow, while the `Input` components each render a label, input element, and error message region. Social provider buttons are mapped from the `socialProviders` array and rendered inside a `div` with a "or continue with" separator. The link row at the bottom uses simple `Anchor` components styled to match the block's typographic scale. An optional `Checkbox` component handles the remember me interaction.

## Best Practices

Always pass an `onSubmit` handler that returns a promise and transitions the button to its loading state until resolution — this gives users clear feedback that their credentials are being processed. Configure `socialProviders` only for providers your backend actually supports, since a button that leads to a broken OAuth flow creates a poor first impression. Keep the `links.forgotPassword` path pointing to a dedicated recovery flow rather than simply showing an error message, as users who trigger this action are already struggling to authenticate. Validate the email field on blur using a standard email regex to catch typos early, but leave password validation minimal since the server is the authority on credential correctness.

## Limitations

Login-01 does not support multi-factor authentication challenges, CAPTCHA integration, or device-trust workflows out of the box. There is no built-in rate-limit feedback or account-lockout messaging — these states must be handled externally by reading the error from the `onSubmit` rejection and displaying it above the form. The block renders social provider buttons without any fallback ordering; if a provider is unavailable, the button still appears unless removed from the `socialProviders` array at build time. Form state (field values, validation errors) resets when the component unmounts, so persisting partially filled forms across navigation would require additional state management outside the block.

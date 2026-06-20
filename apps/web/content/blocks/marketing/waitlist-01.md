---
title: Waitlist (Simple)
group: marketing
order: 2
default: true
---

## Overview

Waitlist-01 is a lightweight email capture block designed for pre-launch landing pages where the primary goal is collecting early signups. It presents a single email input field with a submit button, a concise headline, and a brief supporting description. The block strips away all unnecessary elements — no name fields, no preference selectors, no password creation — to minimize friction and maximize conversion rate for the initial validation phase of a product launch. The email is validated client-side before submission, and the block transitions to a success state once the signup is confirmed, replacing the form with a confirmation message. The `onSubmit` callback receives the validated email address, giving you full control over where the data goes (API endpoint, email service, CRM webhook, etc.).

## When To Use

Use waitlist-01 as the primary call-to-action section on a pre-launch or beta landing page, especially when you want to validate interest before building out a full authentication system. It is ideal for the "Coming Soon" phase where the only ask is an email address. Pair it with a hero section that explains the product value proposition and a footer with social links and branding. Do not use waitlist-01 when you need additional context during signup — collect names, company size, or role preferences — as those require the more comprehensive waitlist-02 block with extended fields.

## Customization

The `headline` and `description` props accept strings for the primary message and supporting text. The `placeholder` prop customizes the email input placeholder. The `buttonLabel` prop changes the submit button text from its default "Join the waitlist." The `onSubmit` callback receives the validated email string. After successful submission, the form shows a confirmation state with configurable `successTitle` and `successMessage` props - defaulting to "You're on the list!" and "We'll be in touch soon." The `theme` prop accepts `"light"` or `"dark"` to adjust the block's background and text colors independently of the page theme.

## Accessibility Notes

The email input has `type="email"` with `aria-label` and `autocomplete="email"` for screen reader and browser autofill support. The submit button is a `<button type="submit">` element that is disabled during submission to prevent double-signups. Error messages for invalid email format are announced via `aria-live="polite"`. The success state uses `role="status"` to announce the confirmation message. Focus management moves to the success message after submission so keyboard and screen reader users are not left on a now-hidden form.

## Composition

The block composes a `Stack` container with a `Heading`, `Text` component, and a `Form` containing an `Input` with `type="email"` and a `Button`. The layout is centered horizontally with a max-width constraint for readability. On submission, the form is replaced by a success state showing a checkmark icon, the confirmation title, and the confirmation message, all wrapped in the same `Stack` for visual continuity. The block uses your theme's surface color for the background to distinguish it from the page background, creating a visual card-like section.

## Best Practices

Keep the headline and description extremely focused — "Be the first to know when we launch" converts better than a paragraph explaining your product roadmap. Validate email format on the client before submission to avoid rejected API calls. The success message should set expectations for what happens next — a specific timeline like "We'll notify you in 2-3 weeks" is better than the vague "We'll be in touch." Track conversion by adding utm parameters or a source tag to the submission payload so you can measure which landing page version drives more signups.

## Limitations

Waitlist-01 collects only email addresses — there is no mechanism for collecting names, company, role, or other qualifying information. The success state is purely presentational and does not trigger a separate email verification flow (use the verify-email block for that). The block does not include CAPTCHA or bot protection — add that externally via the `onSubmit` handler by integrating with Turnstile or reCAPTCHA before sending the data to your API. Multiple submissions from the same email are not blocked at the block level; deduplication must be handled server-side.

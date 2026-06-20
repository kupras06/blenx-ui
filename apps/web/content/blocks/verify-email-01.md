## Overview

Verify-email-01 is a code-entry verification block designed for email confirmation flows that use a six-digit one-time code. It renders six individual digit inputs that auto-advance focus as the user types, supports pasting an entire code from the clipboard, and includes a resend button with a countdown timer to prevent abuse. The block manages three distinct states: the active input phase where the user enters digits, a success confirmation after valid submission, and an error display when the code is incorrect or expired. The `onSubmit` handler receives the complete six-digit string and returns a promise, while `onResend` triggers a new code delivery and resets the countdown timer. Automatic focus management ensures the first input is selected when the block mounts and focus wraps appropriately as digits are filled.

## When To Use

Deploy verify-email-01 on the page that users land on after clicking a verification link from their email, or as a standalone verification step during account recovery and sensitive-action confirmation. It is the standard second factor for email-based one-time codes, commonly used in registration confirmation, password reset verification, and critical settings changes. Avoid using this block when you need a hardware TOTP authenticator code entry, SMS-based verification with longer codes, or a "magic link" click-through flow that requires no manual code entry. It is also not appropriate for scenarios where the verification code is delivered through an in-app notification rather than email, since the block's language and iconography are specific to email verification.

## Customization

The block accepts a `codeLength` prop to change the number of digit inputs, though it defaults to six. You can customize the countdown duration via `resendCooldown` in seconds, with a default of 30. The `successTitle` and `successMessage` props control the completion screen copy, while `errorTitle` and `errorMessage` control the error screen. Optional props like `email` display the masked email address in the instruction text so users know which inbox to check. The `onResend` handler receives the current email and should trigger your backend to issue a new code; the block manages the cooldown countdown locally. Each digit input can be styled through theme tokens for size and border radius, allowing consistency with your form system.

## Accessibility Notes

Each digit input has an `aria-label` like "Digit 1 of 6" rather than a visible label, keeping the interface clean while remaining accessible to screen readers. The container is marked with `role="group"` and `aria-labelledby` referencing the instruction text. Pasting a code triggers a `paste` event handler that distributes digits across the inputs and advances focus to the last field. The countdown timer is exposed to screen readers through an `aria-live="polite"` region that announces "Resend code available in N seconds" and then "Resend code now available" when it reaches zero. The submit button shows a loading state during verification, and success or error transitions are announced via a status region. Backspace on an empty input returns focus to the previous field, supporting correction of a mistyped digit.

## Composition

The block renders six individual `Input` components styled as single-character fields, managed through a shared ref array for focus control. A hidden `Input` handles the paste event and distributes characters. The countdown timer is rendered as a `Button` with a `disabled` state and a visible countdown label, paired with a `Timer` icon from Phosphor. The success state displays a `CheckCircle` icon with `Heading` and `Text` components, while the error state uses an `XCircle` icon with a "Try again" action that resets back to the input state. An `Alert` component can appear for network errors during the code submission. The entire block is wrapped in a `Card` for visual containment.

## Best Practices

Auto-focus the first digit input when the block mounts so users can start typing immediately without an extra click. Support both single-code paste and sequential auto-advance to handle mobile and desktop users equally well. Validate that all six digits are entered before enabling the submit button rather than auto-submitting on the sixth digit — this gives users a moment to review their entry. Handle the `onResend` cooldown on the server side as well; the client countdown is a UX convenience, not a security boundary. If the code is time-limited on the backend, surface the expiry in the error state so users know to request a new code rather than keep retrying the same one.

## Limitations

Verify-email-01 assumes a six-digit numeric code and does not support alphanumeric codes, QR-code scanning, or WebAuthn-based verification. The block resets its input state when the component unmounts, so navigating away and back will clear any partial entry. There is no built-in mechanism to display the remaining validity of the code with a visual countdown — only the resend cooldown is shown. The paste handler works across all modern browsers but relies on the Clipboard API, which requires a secure context (HTTPS). The block does not include CAPTCHA or rate-limit protection on the resend action, which should be enforced server-side.

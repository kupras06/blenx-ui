---
navigation:
  group: components
  order: 29
---

## Overview

OTP Field provides a dedicated input experience for one-time passwords, verification codes, and numeric tokens typically delivered via SMS or email. It renders individual digit slots with auto-advance between fields, paste support, and validation feedback. Use OTP Field in authentication flows, two-factor verification screens, and account recovery forms. Avoid using it for general-purpose numeric input or cases where the code length is variable.

## Usage

<Spinner name="otp-field-default" />

The component renders a row of individual input slots, each accepting a single character. As the user types, focus automatically advances to the next slot. Pasting a full code fills all slots simultaneously, triggering the onChange callback with the complete value. Backspace in an empty slot returns focus to the previous slot for correction. The `length` prop controls the number of slots, and the `type` prop defaults to `number` for numeric codes but can be set to `text` for alphanumeric tokens.

## Composition

OTP Field is typically placed within a Form layout alongside supporting Text for instructions, a timer for resend functionality, and a Submit Button. The validation state integrates with the form's error system, highlighting all slots with the error color when the submitted code is incorrect. Use a Surface as the background container for standalone OTP flows that are not embedded in a larger form.

## Best Practices

Communicate the code destination and expected length clearly before the OTP Field appears. Provide a mechanism for users to request a new code, including a visible countdown timer to prevent rapid resend requests. Handle the paste event carefully — some mobile browsers restrict clipboard access, so maintaining a fallback manual entry path is essential. Validate that pasted content matches the expected pattern before filling the slots.

## Common Mistakes

Assuming all codes are purely numeric locks out users whose authentication systems generate alphanumeric tokens. A common oversight is failing to handle the case where a user types faster than the auto-advance can respond, leading to dropped characters. Not providing a visible input cursor or focus indicator makes the active slot ambiguous on touch devices.

## Design Guidelines

Each slot should be large enough to display the full character at the chosen size without clipping. The spacing between slots should be generous enough to visually distinguish individual positions while keeping the group visually cohesive. Focus ring treatment should apply only to the active slot, using the system's focus ring token for consistency with other form controls. Completed slots should maintain their default appearance to avoid implying a success state prematurely.

## Limitations

OTP Field does not support fractional or partial paste — the pasted value must match the slot count exactly. It is not suitable for codes longer than 8 characters due to horizontal space constraints. The component assumes a linear input flow and does not support alternative entry methods like QR code scanning or deep-link code capture.

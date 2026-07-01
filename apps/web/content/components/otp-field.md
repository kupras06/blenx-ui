---
title: "Otp Field"
description: "OTP Field provides a dedicated input experience for one-time passwords, verification codes, and numeric tokens typically delivered via SMS or email."
navigation:
  group: components
  order: 29
---

## Overview

OTP Field provides a dedicated input experience for one-time passwords, verification codes, and numeric tokens typically delivered via SMS or email. It renders individual digit slots with auto-advance between fields, paste support, and validation feedback. Use OTP Field in authentication flows, two-factor verification screens, and account recovery forms.

## Demo

<DemoRenderer registryName="otpfield" />

## Installation

<Installation registryName="otpfield" />

## Usage

The component renders a row of individual input slots, each accepting a single character. As the user types, focus automatically advances to the next slot. Pasting a full code fills all slots simultaneously, triggering the onChange callback with the complete value. Backspace in an empty slot returns focus to the previous slot for correction. The `length` prop controls the number of slots, and the `type` prop defaults to `number` for numeric codes but can be set to `text` for alphanumeric tokens.

## API Reference

<ApiReference />

## Limitations

OTP Field does not support fractional or partial paste — the pasted value must match the slot count exactly. It is not suitable for codes longer than 8 characters due to horizontal space constraints. The component assumes a linear input flow and does not support alternative entry methods like QR code scanning or deep-link code capture.

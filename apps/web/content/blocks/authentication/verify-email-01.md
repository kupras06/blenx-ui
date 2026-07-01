---
title: Verify Email
group: authentication
order: 5
default: false
---

## Demo

<DemoRenderer registryName="verify-email-01" />

## Installation

<Installation registryName="verify-email-01" />

## Overview

Verify-email-01 is a code-entry verification block designed for email confirmation flows that use a six-digit one-time code. It renders six individual digit inputs that auto-advance focus as the user types, supports pasting an entire code from the clipboard, and includes a resend button with a countdown timer to prevent abuse. The block manages three distinct states: the active input phase where the user enters digits, a success confirmation after valid submission, and an error display when the code is incorrect or expired. The `onSubmit` handler receives the complete six-digit string and returns a promise, while `onResend` triggers a new code delivery and resets the countdown timer. Automatic focus management ensures the first input is selected when the block mounts and focus wraps appropriately as digits are filled.

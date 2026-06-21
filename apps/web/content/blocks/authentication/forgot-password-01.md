---
title: Forgot Password
group: authentication
order: 4
default: false
---

## Demo

<DemoRenderer registryName="forgot-password-01" />

## Installation

<Installation registryName="forgot-password-01" />

## Source Code

<SourceCode registryName="forgot-password-01" />

## Overview

Forgot-password-01 is a self-service password reset initiation block that collects the user's email address and sends a recovery link. It features a clean two-state interface: first, an email input form with validation, and then a success confirmation screen that reassures the user the reset email has been sent. The `onSubmit` handler receives the email address and returns a promise — the block automatically transitions to the success state when the promise resolves. This pattern prevents users from submitting multiple times while the request is in flight and avoids confusion about whether the email was actually dispatched. The block is designed to be embedded in a dedicated route at a predictable URL like `/forgot-password`, keeping the recovery flow separate from the login page to prevent session confusion.

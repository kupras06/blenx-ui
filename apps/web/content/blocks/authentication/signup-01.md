---
title: Sign Up
group: authentication
order: 3
default: false
---

## Demo

<DemoRenderer registryName="signup-01" />

## Installation

<Installation registryName="signup-01" />

## Source Code

<SourceCode registryName="signup-01" />

## Overview

Signup-01 is a registration form block that collects the essential information needed to create a new user account: full name, email address, and password. It includes a terms-of-service acceptance checkbox and social sign-up buttons for GitHub and Google, mirroring the familiar layout of the login blocks so that the authentication suite feels cohesive. The `onSubmit` handler receives the complete form payload including the name, email, password, and terms acceptance flag, giving your backend everything needed to provision an account. Social provider buttons are rendered from the `socialProviders` prop, consistent with the login-01 pattern. The block performs client-side validation on all fields before submission, highlighting errors inline and focusing the first invalid field when validation fails.

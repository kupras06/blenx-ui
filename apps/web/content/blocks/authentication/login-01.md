---
title: Login (Standard)
group: authentication
order: 1
default: true
---

## Demo

<DemoRenderer registryName="login-01" />

## Installation

<Installation registryName="login-01" />

## Source Code

<SourceCode registryName="login-01" />

## Overview

Login-01 is a standard sign-in form block that serves as the primary authentication entry point for web applications. It provides a complete login interface with email and password fields, social authentication buttons for GitHub and Google, a "remember me" persistence option, and navigation links for password recovery and account registration. The block handles form state internally while exposing an `onSubmit` callback that receives the email and password payload, making it straightforward to integrate with any authentication backend. Social provider buttons are rendered conditionally based on the `socialProviders` prop, allowing teams to toggle which OAuth options appear without modifying the component. The `links` prop accepts a configuration object for the forgot password and sign-up link destinations, keeping routing concerns external to the block.

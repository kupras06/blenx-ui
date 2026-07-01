---
title: Login (Social)
group: authentication
order: 2
default: false
---

## Demo

<DemoRenderer registryName="login-02" />

## Installation

<Installation registryName="login-02" />

## Overview

Login-02 implements a multi-step sign-in flow that first collects the user's email address and then presents the appropriate authentication method based on whether the account exists. After the email is submitted, the block transitions to a second step showing either a password field for existing users or a magic-link option for passwordless authentication. This email-first approach reduces friction by showing users only the inputs relevant to their account state. The block exposes an `onSubmit` callback for the password step and a `magicLinkHandler` for the passwordless path, while the `links` prop configures navigation destinations for sign-up and password recovery. Animated transitions between steps make the flow feel responsive rather than like a page reload.

---
title: Waitlist (Simple)
group: marketing
order: 2
default: true
---

## Demo

<DemoRenderer registryName="waitlist-01" />

## Installation

<Installation registryName="waitlist-01" />

## Overview

Waitlist-01 is a lightweight email capture block designed for pre-launch landing pages where the primary goal is collecting early signups. It presents a single email input field with a submit button, a concise headline, and a brief supporting description. The block strips away all unnecessary elements — no name fields, no preference selectors, no password creation — to minimize friction and maximize conversion rate for the initial validation phase of a product launch. The email is validated client-side before submission, and the block transitions to a success state once the signup is confirmed, replacing the form with a confirmation message. The `onSubmit` callback receives the validated email address, giving you full control over where the data goes (API endpoint, email service, CRM webhook, etc.).

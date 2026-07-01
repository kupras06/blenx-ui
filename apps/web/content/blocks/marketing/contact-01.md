---
title: Contact Page
group: marketing
order: 1
default: true
---

## Demo

<DemoRenderer registryName="contact-01" />

## Installation

<Installation registryName="contact-01" />

## Overview

Contact-01 is a contact page block that pairs a standard inquiry form with an optional sidebar showing contact information such as email, phone, address, and social links. The form collects the sender's name, email address, subject line, and a message body in a textarea, with client-side validation on all fields before submission. The `onSubmit` callback receives the complete form payload and returns a promise, allowing the parent to handle AJAX form submission, redirect to a thank-you page, or trigger a confirmation toast. The information sidebar is rendered from a `contactInfo` prop that accepts structured data for the contact details, making it easy to localize or pull from a CMS. The form and sidebar adapt to a two-column layout on desktop and stack vertically on mobile, ensuring the contact form remains the primary interaction target on all devices.

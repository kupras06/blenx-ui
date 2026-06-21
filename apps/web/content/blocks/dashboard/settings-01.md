---
title: Settings Page
group: dashboard
order: 4
default: false
---

## Demo

<DemoRenderer registryName="settings-01" />

## Installation

<Installation registryName="settings-01" />

## Source Code

<SourceCode registryName="settings-01" />

## Overview

Settings-01 is a comprehensive tabbed settings page that organizes application preferences across five sections: General, Security, Appearance, Notifications, and Billing. The block uses a `Tabs` component for navigation between sections, with each tab panel containing its own form controls, toggles, and save actions. The General tab includes site-level preferences such as workspace name, default language, and timezone. The Security tab covers password changes, two-factor authentication status, and active sessions list with remote-logout capability. The Appearance tab provides theme selection (light, dark, system), font size adjustment, and compact or comfortable density modes. The Notifications tab replicates the per-channel toggle controls from profile-01 but scoped to account-wide notification defaults. The Billing tab displays the current plan, payment method on file, invoice history, and a link to the billing portal. The `onSave` callback fires per-section, receiving the section identifier and the changed fields.

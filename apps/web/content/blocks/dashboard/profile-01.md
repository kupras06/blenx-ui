---
title: Profile Page
group: dashboard
order: 3
default: false
---

## Demo

<DemoRenderer registryName="profile-01" />

## Installation

<Installation registryName="profile-01" />

## Overview

Profile-01 is a user profile settings page that organizes personal information management, notification preferences, account configuration, and sensitive destructive actions into clearly separated sections. The personal information form collects the user's name, email, profile photo, and biography, with client-side validation before saving. The notification toggles section provides per-channel opt-in controls for email, in-app, and push notifications across different event categories. The account settings section includes password change, language preference, timezone selection, and session management. A danger zone at the bottom houses irreversible actions like account deletion and data export, visually separated by a red-tinted warning card to prevent accidental triggering. The block receives the current user data via the `user` prop and persists changes through the `onSave` callback, which receives the updated fields.

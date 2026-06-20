---
title: Profile Page
group: dashboard
order: 3
default: false
---

## Overview

Profile-01 is a user profile settings page that organizes personal information management, notification preferences, account configuration, and sensitive destructive actions into clearly separated sections. The personal information form collects the user's name, email, profile photo, and biography, with client-side validation before saving. The notification toggles section provides per-channel opt-in controls for email, in-app, and push notifications across different event categories. The account settings section includes password change, language preference, timezone selection, and session management. A danger zone at the bottom houses irreversible actions like account deletion and data export, visually separated by a red-tinted warning card to prevent accidental triggering. The block receives the current user data via the `user` prop and persists changes through the `onSave` callback, which receives the updated fields.

## When To Use

Use profile-01 as the user profile page for any application where users need to manage their personal details, preferences, and account-level settings. It is appropriate for SaaS platforms, community sites, developer tools, and any multi-user application with customizable user profiles. This block works best when the profile is the user's own settings page — it is not designed for viewing or editing other users' profiles. Avoid using profile-01 when you need a highly simplified profile with only name and email (a lighter form is more appropriate) or when you need complex role-based permissions that require an admin-specific profile editor. If your application does not support user deletion or password changes, the danger zone and account sections will show irrelevant options.

## Customization

The `user` prop accepts an object with `name`, `email`, `avatarUrl`, `bio`, `language`, `timezone`, and `notificationPreferences` fields. The `onSave` callback receives the modified fields and should return a promise that resolves on success or rejects with field-level errors. The `sections` prop accepts an array of section identifiers to control which sections render — you can hide the danger zone for users who should not have deletion access by filtering out `"danger-zone"`. Each notification toggle's label and description are customizable through a `notificationOptions` prop mapping. The password change section can be disabled entirely with `allowPasswordChange={false}` if your application uses OAuth-only authentication. The avatar upload area accepts an `onAvatarChange` callback separate from `onSave` to handle upload progress independently.

## Accessibility Notes

Each settings section uses a semantic `<section>` element with a `<h2>` heading, creating a clear document outline. The danger zone is marked with `aria-label="Danger zone"` and uses a `role="alert"` on the account deletion flow to ensure the warning is announced immediately. Notification toggles use native `<input type="checkbox">` elements with associated labels grouped into a `<fieldset>` with a `<legend>` for each notification category. The password change form includes autocomplete attributes (`new-password`, `current-password`) to support browser password managers. The avatar upload button has `aria-label="Upload profile photo"` and accepts keyboard activation. Confirmation dialogs for destructive actions use `role="alertdialog"` and trap focus within the dialog modal.

## Composition

Profile-01 composes a `Page` wrapper with a `Heading` and a `Stack` of section `Card` components. The personal info section contains `Input` fields for name and email, a `Textarea` for bio, and an `AvatarUpload` component for the profile photo. The notification section uses `Checkbox` components grouped by a `Fieldset` for each notification category (updates, security, marketing). The account section contains a `PasswordInput` with the current and new password fields, a `Select` for language, and a `Select` for timezone. The danger zone uses a `Card` with `variant="danger"` styling, containing `Button` components for "Delete Account" and "Export Data" actions. Each destructive action triggers a `Dialog` component for confirmation before execution.

## Best Practices

Implement field-level saving rather than requiring a full page save — the `onSave` callback receives only the changed fields, allowing you to persist individual section changes independently. Always require current password confirmation for email changes and password updates to prevent account takeover if the user left their session unattended. Show a preview of the user's avatar at multiple sizes (thumbnail in nav, medium on profile) after upload to confirm the crop and quality are acceptable. For the danger zone, never delete the account immediately — always send a confirmation email with a unique link that the user must click to finalize deletion. Persist notification preferences in real time rather than requiring a save button, since toggles imply immediate action.

## Limitations

Profile-01 does not support any form of social account linking or unlink (connecting/disconnecting OAuth providers). The avatar upload handles selection but does not include cropping, resizing, or filtering capabilities — the caller must process the image before saving the URL. The notification section supports a fixed structure of channels and event types; dynamic, role-based notification schemas require custom extension. The danger zone actions are front-end triggered and rely on the `onSave` handler to perform the actual server operation; the block does not include a soft-delete recovery mechanism. The password change section does not enforce password complexity rules beyond the minimum length — server-side policy validation is expected.

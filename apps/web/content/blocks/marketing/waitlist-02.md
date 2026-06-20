---
title: Waitlist (Full)
group: marketing
order: 3
default: false
---

## Overview

Waitlist-02 is a multi-field lead capture block designed for launch phases where collecting more than just an email address is valuable. It extends the simple waitlist pattern with fields for name, company, role, and a custom textarea for notes or preferences, giving you richer qualification data before granting access. The block organizes fields in a two-column grid layout on desktop and a single column on mobile, with optional field labeling and placeholder customization per field. Validation runs on blur for each field and on submit for the entire form, with inline error messages appearing below each invalid field. The form data is submitted as a structured object with typed fields, making it straightforward to map to CRM fields, Airtable bases, or custom API schemas.

## When To Use

Use waitlist-02 when you need to segment or qualify your waitlist signups — for example, if you are running a phased beta and want to prioritize enterprise users, or if you need to know the user's role to send role-specific onboarding content. It is appropriate for "Early Access" and "Private Beta" landing pages where the higher friction of more fields is justified by the quality of the leads collected. Do not use waitlist-02 for simple "Coming Soon" pages where an email-only form (waitlist-01) will convert better — the additional fields can reduce conversion by 20-40%.

## Customization

The `fields` prop accepts an array of field configuration objects, each with `name`, `label`, `type` (`"text"`, `"email"`, `"tel"`, `"select"`, `"textarea"`), `required`, `placeholder`, and `options` (for select fields). This makes the block fully data-driven; you can add, remove, or reorder fields without touching the block's internals. The `headline`, `description`, `buttonLabel`, and `successMessage` props parallel waitlist-01 for consistency. The `onSubmit` callback receives a typed object mapping field names to values. The layout is a two-column CSS grid on viewports wider than 768px and collapses to a single column on mobile. Error messages can be customized per field via a `validationMessages` prop.

## Accessibility Notes

Each form field has an associated `<label>` element with `htmlFor` linking to the input `id`, ensuring screen readers announce the label when the field receives focus. Required fields are marked with `aria-required="true"` and a visible asterisk. Inline validation errors use `aria-describedby` on the input linking to the error message element, and errors are announced via `aria-live="polite"`. The form uses native HTML5 validation as a fallback, with custom validation logic running on top. Focus management after submission moves to the success container, which has `role="status"` and `tabindex="-1"` to receive programmatic focus.

## Composition

Waitlist-02 composes a `Form` component wrapping an array of `Input`, `Select`, and `Textarea` components in a CSS Grid layout. Each field is wrapped in a `Field` primitive that handles the label, input, and error message rendering. The submit `Button` spans the full width of the form. A success state replaces the form after submission, identical in structure to waitlist-01 but with a more detailed confirmation message acknowledging the additional information provided. The block includes a subtle background treatment (a surface color with a border) to visually separate it from the page hero.

## Best Practices

Only ask for fields you genuinely need — each additional field reduces conversion. If you are using waitlist-02, have a clear plan for how each field will be used in your onboarding or qualification process. Mark non-essential fields as optional rather than required, and consider using placeholder text to show examples of what to enter. Use select fields with predefined options for role, company size, or use case instead of open text fields to get cleaner data. Show a privacy notice near the submit button if you collect more than just an email, especially for GDPR-covered audiences.

## Limitations

The two-column grid layout can feel cramped on tablet-sized screens between 768px and 1024px width. Long select option lists are not searchable — if you have more than 15 options, consider an autocomplete component instead. File upload fields are not supported; collect files through a separate mechanism. There is no multi-step or wizard mode — all fields are displayed at once, which may feel overwhelming for forms with more than 8-10 fields. The `onSubmit` callback does not automatically handle network errors; wrap it in a try-catch and call a provided `onError` callback to show a generic submission failure message.

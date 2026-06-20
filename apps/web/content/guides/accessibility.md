---
title: "Accessibility"
description: "Blenx provides accessible primitives, not magic. Learn your responsibilities as a developer and how to build interfaces that work for everyone."
category: "Guides"
order: 5
keywords:
  - accessibility
  - a11y
  - keyboard navigation
  - focus management
  - ARIA
  - screen readers
  - color contrast
  - motion preferences
  - testing
status: "stable"
navigation:
  group: guides
  order: 5
---

## Developer Responsibilities

Blenx is not an accessibility library. It is a component library built with accessibility-aware primitives. The primitives handle the mechanical parts—focus trapping, ARIA attributes on interactive elements, semantic HTML element selection—but they cannot know your application's content, label text, or page structure.

Accessibility is a shared responsibility. Blenx provides the tools. You provide the implementation.

## Keyboard Navigation

Every interactive Blenx component supports keyboard interaction by default. Buttons trigger on `Enter` and `Space`. Dialog closes on `Escape`. Tabs navigate with `Arrow` keys.

What Blenx cannot do is define your tab order. Use the DOM order (which is the natural focus order) as your default. Avoid `tabIndex` values above `0`—they create a focus order disconnected from visual layout. Reserve `tabIndex={-1}` for programmatic focus management and `tabIndex={0}` for elements that are not natively interactive but need to be reachable.

## Focus Management

Focus management is the most common accessibility gap in React applications. Blenx components handle internal focus for their interactive children, but you are responsible for:

- **Focus trapping.** Dialog and modal components include a `FocusTrap` primitive that cycles focus within the modal while it is open. It does not prevent focus from leaving via browser chrome (address bar, dev tools)—that is impossible in JavaScript. What it does prevent is focus moving behind the backdrop to background page elements.
- **Focus restoration.** When a dialog closes, focus should return to the element that triggered it. Blenx components track the trigger element internally. If you open a dialog programmatically, pass a `returnFocusRef` to restore focus correctly.
- **Focus indication.** Never remove `:focus-visible` outlines. StyleX supports `::focus-visible` pseudo-classes. If you customize focus styles, make the indicator more visible, not less. A 2px offset outline is the minimum—Blenx defaults to a 3px ring with theme accent color.

## ARIA Usage

Blenx components ship with appropriate ARIA roles and attributes for their interaction pattern. `role="dialog"` and `aria-modal="true"` are present on dialogs. `role="tablist"`, `role="tab"`, `role="tabpanel"` are present on tab components. `aria-expanded` and `aria-controls` are wired for disclosure widgets.

You must provide:

- **`aria-label`** or **`aria-labelledby`** on every interactive container that lacks a visible label. Icon buttons, search forms without visible labels, and dialog containers all need accessible names.
- **`aria-describedby`** on dialogs that contain explanatory text. Link the description to the text element by ID.
- **`aria-live`** regions for dynamic content updates. Notifications, loading state announcements, and form validation messages should use `aria-live="polite"` so screen readers announce changes without interrupting the current task.

## Screen Reader Considerations

Blenx components render semantic HTML elements based on their `as` prop. A `Text` with `as="h2"` renders an `<h2>`. This is correct—screen readers navigate by heading hierarchy. Ensure your heading levels form a logical document outline: `h1` → `h2` → `h3`, skipping no levels.

The `Text` primitive renders a `<p>` by default. Do not override `as` to `div` for paragraph text—screen readers announce `<p>` elements as paragraphs, providing navigation landmarks for users who scan by paragraph.

For decorative icons, Blenx renders them with `aria-hidden="true"`. Interactive icons (icon buttons) must have an accessible label via `aria-label` on the button element.

## Color Contrast

The theme contract enforces accessible contrast ratios for foreground, background, and accent colors. The default light and dark themes meet WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text).

If you create custom themes, validate contrast ratios with a tool like the WebAIM Contrast Checker. The theme contract does not enforce ratios—it trusts you to design accessible palettes.

The `Text` primitive's `color="muted"` value is designed for supplementary information, not primary content. Do not use muted for body text. WCAG defines that text smaller than 18px (or 14px bold) must meet 4.5:1 contrast—muted colors typically fall below this threshold intentionally.

## Motion Preferences

Blenx provides a `useReducedMotion` hook that returns `true` when the user's system preference is set to `prefers-reduced-motion: reduce`. Use this hook to conditionally disable animations:

```tsx
const prefersReducedMotion = useReducedMotion();

const styles = stylex.create({
  overlay: {
    opacityTransition: prefersReducedMotion ? "0.2s" : "0s",
  },
});
```

All Blenx animated components (dialog overlay, tooltip entrance, accordion expand) respect this preference by default. Custom animations you add to your application should do the same.

## Testing Accessibility

Do not rely solely on automated tools. Axe, Lighthouse, and WAVE catch approximately 30% of accessibility issues—they detect missing `alt` text, insufficient color contrast, and missing ARIA attributes. They cannot detect missing focus management, poor reading order, or confusing screen reader output.

Test with a screen reader at least once per sprint. VoiceOver on macOS is free and built-in. NVDA on Windows is free. Navigate your application using only the keyboard: Tab, Shift+Tab, Arrow keys, Enter, Space, Escape. Every interactive element should be reachable and operable.

## Common Mistakes

- **Missing labels on icon buttons.** A trash icon button must have `aria-label="Delete item"`. The icon is decorative.
- **Relying solely on placeholder text.** Input placeholders disappear on focus, on input, and in high-contrast mode. Every `<input>` needs an associated `<label>` or `aria-label`.
- **Non-semantic markup.** A `<div>` with `onClick` is not a button. It is not keyboard accessible, does not support `Enter`/`Space` activation, and does not appear in accessibility trees as an interactive element. Use `<button>`.
- **Hidden focusable elements.** `display: none` or `visibility: hidden` removes elements from the accessibility tree. If an element is visually hidden but should be accessible to screen readers, use a visually hidden class that clips the element without hiding it from the tree.
- **Ignoring reduced motion.** Animations that spin, pulse, or slide can trigger vestibular disorders. Always gate animations behind `useReducedMotion()`.

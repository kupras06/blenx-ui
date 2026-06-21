# Migration Tasks: StyleX → Vanilla-Extract

Per-component task breakdown, grouped by similarity. Each ✅ marks one file to convert.

---

## GUIDELINES

- DO NOT CHECK FOR TYPES
- DO NOT FIX RUN TIME TYPESCRIPT ISSUES.
- IGNORE ANY TYPE WARNINGS

## Group A: Foundation (do first)

- [ ] **A1** — Add `@vanilla-extract/vite-plugin` to `vite.config.ts` alongside stylex plugin
- [ ] **A2** — Create `src/theme/contract.css.ts` (VE theme bridge via `createGlobalThemeContract`)
- [ ] **A3** — Create `src/theme/tokens.css.ts` (convert StyleX token constants to plain objects)
- [ ] **A4** — Create `src/utils/sprinkles.css.ts` (shared sprinkles for Box/Stack/Grid)
- [ ] **A5** — Create `src/utils/types.ts` (replace `stylex.utils.ts` with plain React.CSSProperties types)

---

## Group B: Layout — shared sprinkles

- [ ] **B1** — **Box**: delete `box.styles.ts` (already has `box.css.ts`)
- [ ] **B2** — **Container**: delete `container.styles.ts` (already has `container.css.ts`)
- [ ] **B3** — **Stack**: `stack.styles.ts` → `stack.css.ts`; update `stack.tsx`
- [ ] **B4** — **Grid**: `grid.styles.ts` → `grid.css.ts`; update `grid.tsx`

---

## Group C: Simple recipe components

No pseudo-classes. Pure variant slices → `recipe()`.

- [ ] **C1** — **Badge**: `badge.styles.ts` → `badge.css.ts`; update `badge.tsx`
- [ ] **C2** — **Spinner**: `spinner.styles.ts` → `spinner.css.ts`; update `spinner.tsx`
- [ ] **C3** — **Separator**: `separator.styles.ts` → `separator.css.ts`; update `separator.tsx`
- [ ] **C4** — **Icon**: `icon.styles.ts` → `icon.css.ts`; update `icon.tsx`
- [ ] **C5** — **Progress**: `progress.styles.ts` → `progress.css.ts`; update `progress.tsx`

---

## Group D: Display/card components

Variant-based with minimal pseudo-classes.

- [ ] **D1** — **Card**: `card.styles.ts` → `card.css.ts`; update `card.tsx`
- [ ] **D2** — **Surface**: `surface.styles.ts` → `surface.css.ts`; update `surface.tsx`
- [ ] **D3** — **Alert**: `alert.styles.ts` → `alert.css.ts`; update `alert.tsx`
- [ ] **D4** — **Avatar**: `avatar.styles.ts` → `avatar.css.ts`; update `avatar.tsx`
- [ ] **D5** — **ColorSwatch**: `color-swatch.styles.ts` → `color-swatch.css.ts`; update `color-swatch.tsx`
- [ ] **D6** — **Breadcrumbs**: `breadcrumbs.styles.ts` → `breadcrumbs.css.ts`; update `breadcrumbs.tsx`
- [ ] **D7** — **Table**: `table.styles.ts` → `table.css.ts`; update `table.tsx`

---

## Group E: Toggle/check components

State-driven (checked/disabled/pressed) with `:focus-visible`, `:hover`.

- [ ] **E1** — **Switch**: `switch.styles.ts` → `switch.css.ts`; update `switch.tsx`
- [ ] **E2** — **Checkbox**: `checkbox.styles.ts` → `checkbox.css.ts`; update `checkbox.tsx`
- [ ] **E3** — **Radio**: `radio.styles.ts` → `radio.css.ts`; update `radio.tsx`
- [ ] **E4** — **Toggle**: `toggle.styles.ts` → `toggle.css.ts`; update `toggle.tsx`
- [ ] **E5** — **ToggleGroup**: `toggle-group.styles.ts` → `toggle-group.css.ts`; update `toggle-group.tsx`

---

## Group F: Form input components

`[data-*]` attributes, `:focus`, `:disabled` selectors. `globalStyle()` needed.

- [ ] **F1** — **Input**: `input.styles.ts` → `input.css.ts`; update `input.tsx`
- [ ] **F2** — **Textarea**: `textarea.styles.ts` → `textarea.css.ts`; update `textarea.tsx`
- [ ] **F3** — **InputGroup**: `input-group.styles.ts` → `input-group.css.ts`; update `input-group.tsx`
- [ ] **F4** — **OTPField**: `otp-field.styles.ts` → `otp-field.css.ts`; update `otp-field.tsx`
- [ ] **F5** — **Field**: `field.styles.ts` → `field.css.ts`; update `field.tsx`

---

## Group G: Compound interactive components

Multiple sub-elements, `[data-*]` attributes, nested selectors.

- [ ] **G1** — **Select**: `select.styles.ts` → `select.css.ts`; update `select.tsx`
- [ ] **G2** — **Combobox**: `combobox.styles.ts` → `combobox.css.ts`; update `combobox.tsx`
- [ ] **G3** — **Autocomplete**: `autocomplete.styles.ts` → `autocomplete.css.ts`; update `autocomplete.tsx`
- [ ] **G4** — **Menu**: `menu.styles.ts` → `menu.css.ts`; update `menu.tsx`

---

## Group H: Typography

- [ ] **H1** — **Text**: `text.styles.ts` → `text.css.ts`; update `text.tsx`

---

## Group I: Button family

Button is the most complex — 3 variant axes + `createVar()` for intent tokens. IconButton/CloseButton/CopyButton wrap Button.

- [ ] **I1** — **Button**: `button.styles.ts` → `button.css.ts`; `button-intents.stylex.ts` → inlined `createVar()` in `button.css.ts`; update `button.tsx`
- [ ] **I2** — **IconButton**: inline `stylex.create()` in `icon-button.tsx` → `style({})`
- [ ] **I3** — **CloseButton**: no styles; verify no inline stylex
- [ ] **I4** — **CopyButton**: no styles; verify no inline stylex

---

## Group J: Accordion + Tabs

Compound sub-components, state-driven styles, parent selectors.

- [ ] **J1** — **Accordion**: `accordion.styles.ts` → `accordion.css.ts`; update `accordion.tsx` (handle `[data-panel-open] &` parent selector via `globalStyle`)
- [ ] **J2** — **Tabs**: `tabs.styles.ts` → `tabs.css.ts`; update `tabs.tsx`

---

## Group K: Overlay/dialog components

Complex animations, `::before`, `:has()`, `@media`, `prefers-reduced-motion`, `data-starting/ending-style`.

- [ ] **K1** — **Dialog**: `dialog.styles.ts` → `dialog.css.ts`; update `dialog.tsx`
- [ ] **K2** — **Sheet**: `sheet.styles.ts` → `sheet.css.ts`; update `sheet.tsx`
- [ ] **K3** — **AlertDialog**: `alert-dialog.styles.ts` → `alert-dialog.css.ts`; update `alert-dialog.tsx`
- [ ] **K4** — **Drawer**: `drawer.styles.ts` → `drawer.css.ts`; update `drawer.tsx`
- [ ] **K5** — **Popover**: `popover.styles.ts` → `popover.css.ts`; update `popover.tsx`
- [ ] **K6** — **ScrollArea**: `scroll-area.styles.ts` → `scroll-area.css.ts`; update `scroll-area.tsx`

---

## Group L: Command palette

- [ ] **L1** — **Command**: `command.styles.ts` → `command.css.ts`; update `command.tsx`

---

## Group M: Pickers (no styles.ts)

Check for inline stylex usage; convert if found.

- [ ] **M1** — **ColorPicker**: check `color-picker.tsx` for inline stylex
- [ ] **M2** — **DatePicker**: check `date-picker.tsx` for inline stylex (commented out in barrel — skip if no usage)
- [ ] **M3** — **Calendar**: `calendar.styles.ts` → `calendar.css.ts`; update `calendar.tsx`
- [ ] **M4** — **SegmentedControl**: check `segmented-control.tsx` for inline stylex

---

## Group N: Misc remaining

- [ ] **N1** — **Slider**: `slider.styles.ts` → `slider.css.ts`; update `slider.tsx`
- [ ] **N2** — **Splitter**: `splitter.styles.ts` → `splitter.css.ts`; update `splitter.tsx`

---

## Group O: Cleanup (after all components done)

- [ ] **O1** — Delete `stylex.utils.ts`
- [ ] **O2** — Verify no remaining `*.styles.ts` or `*.stylex.ts` files exist in `src/components/`
- [ ] **O3** — Remove `@stylexjs/stylex` from remaining TSX imports
- [ ] **O4** — Update `src/utils/base.styles.ts` and `src/utils/layout.styles.ts` (absorbed into sprinkles; delete if empty)

---

## Group P: Theme migration (final — only after all above)

- [ ] **P1** — Update `contract.css.ts`: add `createGlobalTheme(":root", theme, {...})` for light theme values
- [ ] **P2** — Create dark theme implementation (maps same contract to dark values)
- [ ] **P3** — Remove `contract.stylex.ts`
- [ ] **P4** — Remove `tokens.stylex.ts`
- [ ] **P5** — Remove `theme.stylex.ts`
- [ ] **P6** — Remove `@stylexjs/unplugin` from `vite.config.ts`
- [ ] **P7** — Remove `@stylexjs` dependencies from package.json

---

## Execution order

```
A1–A5 (foundation)
  └─ B1–B4 (layout)
       └─ C1–C5, D1–D7, E1–E5 (simple — any order within this tier)
            └─ F1–F5, G1–G4, H1 (form + compound — any order)
                 └─ I1–I4 (button family)
                      └─ J1–J2 (accordion/tabs)
                           └─ K1–K6, L1 (overlays — any order)
                                └─ M1–M4, N1–N2 (pickers + misc)
                                     └─ O1–O4 (cleanup)
                                          └─ P1–P7 (theme final)
```

Components within the same tier are independent — can be done in parallel or any order.

# Refactor `style()` → `sprinkles()` in `packages/core`

## Goal

Replace CSS properties that **sprinkles already covers** inside `style({...})` calls with
`sprinkles(...)` from `./utils/sprinkles.css.ts`. This generates reusable atomic classes
instead of unique per-file classes, reducing the total CSS bundle size.

**Do NOT** refactor properties that sprinkles doesn't cover (`transition`,
`border*` side-specific, `outline`, `boxShadow`, `transform`,
`opacity`, `cursor`, `userSelect`, `textAlign`, `textDecoration`, `whiteSpace`,
`fontFamily`, `minHeight`, `maxHeight` pixel values, etc.) — those should stay in `style()`.

## How to use sprinkles

```ts
import { baseSprinkles } from "../../utils/sprinkles.css.ts";

// When ALL properties are sprinkle-eligible, assign directly — no style() wrapper:
export const root = baseSprinkles({
  display: "flex",
  direction: "column",
  width: "full",
  padding: "md",
  radius: "lg",
  color: "primary",
  backgroundColor: "surface",
  position: "relative",
  overflow: "hidden",
});

// When mixing sprinkle + non-sprinkle props, wrap in style():
export const rootWithTransition = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
    align: "center",
    gap: "sm",
  }),
  style({
    transition: "color 0.2s",
  }),
]);
```

## How to migrate `recipe()` bases and variants

`recipe()` accepts style arrays too, so you can use `sprinkles()` inside recipe bases and variant values:

```ts
export const myRecipe = recipe({
  base: [
    baseSprinkles({
      display: "inline-flex",
      align: "center",
      justify: "center",
      gap: "sm",
      radius: "default",
      width: "fit",
      height: "fit",
      position: "relative",
      fontSize: "md",
      fontWeight: "medium",
    }),
    style({
      // Non-sprinkle props stay here
      borderStyle: "solid",
      borderWidth: 1,
      fontFamily: tokenVars.font.body,
      transition: "all 0.2s ease",
    }),
  ],
  variants: {
    size: {
      xs: [
        baseSprinkles({ fontSize: "sm" }),
        style({
          padding: `${tokenVars.spacing.xxs} ${tokenVars.spacing.xs}`,
        }),
      ],
    },
    variant: {
      solid: style({
        // CSS var references — keep in style()
        backgroundColor: intentVars.solidBg,
      }),
    },
  },
});
```

For variant values that are purely sprinkles-eligible, you can use `sprinkles()` directly (no array needed):

```ts
size: {
  sm: baseSprinkles({ fontSize: "sm" }),
}
```

**Key shorthands:**

- `align` → `alignItems`
- `justify` → `justifyContent`
- `direction` → `flexDirection`
- `grow` → `flexGrow`
- `shrink` → `flexShrink`
- `radius` → `borderRadius`
- `p`, `padding` → all four padding sides (when equal)
- `px`, `paddingX` → `paddingLeft` + `paddingRight` (when equal)
- `py`, `paddingY` → `paddingTop` + `paddingBottom` (when equal)
- `m`, `margin` → all four margin sides
- `mx`, `marginX` → `marginLeft` + `marginRight`
- `my`, `marginY` → `marginTop` + `marginBottom`
- `columns` → `gridTemplateColumns` (1-12)
- `flow` → `gridAutoFlow`

## Available token values

| Category          | Tokens                                                                                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **spacing**       | `none`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `huge`, `xxl`, `xxxl`, `massive`, `0`, `0.5`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `12`, `16`, `20`, `24`, `32`, `40`, `48` |
| **colors**        | `primary`, `default`, `secondary`, `disabled`, `inverse`, `link`, `error`, `success`, `warning`, `info`                                                                                |
| **backgrounds**   | `primary`, `secondary`, `surface`, `canvas`, `subtle`, `default`, `disabled`, `error`, `success`, `warning`, `info`                                                                    |
| **radius**        | `none`, `full`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`, `default`                                                                                                          |
| **width/height**  | `auto`, `full` (100%), `fit` (fit-content)                                                                                                                                             |
| **maxHeight**     | `5svh`, `10svh`, `15svh`, `25svh`, `40svh`, `60svh`, `75svh`, `90svh`, `full`, `screen`, `none`                                                                                        |
| **zIndex**        | `0`, `1`, `-1`, `base`, `raised`, `floating`, `sticky`, `overlay`, `popover`, `modal`, `toast`, `tooltip`                                                                              |
| **position**      | `static`, `relative`, `absolute`, `fixed`, `sticky`                                                                                                                                    |
| **overflow**      | `scroll`, `visible`, `hidden`, `auto`                                                                                                                                                  |
| **fontWeight**    | `regular` (400), `medium` (500), `semibold` (600), `bold` (700), `extrabold` (800)                                                                                                     |
| **letterSpacing** | `tight` (-0.04em), `snug` (-0.02em), `normal` (0), `wide` (0.02em), `wider` (0.05em), `widest` (0.1em)                                                                                 |
| **lineHeight**    | `tight` (1.2), `snug` (1.35), `normal` (1.5), `relaxed` (1.625), `loose` (1.8)                                                                                                         |
| **display**       | `block`, `flex`, `grid`, `inline-flex`, `none`                                                                                                                                         |

---

## Priority Order & Per-File Instructions

### P0 — High impact (largest files, most sprinkles-eligible properties)

#### 1. `src/components/Combobox/combobox.css.ts`

Replace in these `style()` exports:

| Export          | Replace with sprinkles                                                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `row`           | `display: "flex"`, `align: "center"`, `gap: "sm"`                                                                                                                                   |
| `value`         | `flex: 1`, `color: "primary"`                                                                                                                                                       |
| `status`        | `color: "secondary"`, `display: "flex"`, `align: "center"`, `justify: "center"`, `shrink: "0"`                                                                                      |
| `inputGroup`    | `position: "relative"`, `width: "full"`, `color: "primary"`                                                                                                                         |
| `startAddon`    | `position: "absolute"`, `display: "flex"`, `align: "center"`                                                                                                                        |
| `adornment`     | `position: "absolute"`, `display: "inline-flex"`, `align: "center"`, `justify: "center"`, `radius: "md"`                                                                            |
| `popupShell`    | `position: "relative"`, `display: "flex"`, `radius: "lg"`, `backgroundColor: "surface"`                                                                                             |
| `popup`         | `display: "flex"`, `flex: 1`, `direction: "column"`, `color: "primary"`                                                                                                             |
| `group`         | `display: "flex"`, `direction: "column"`                                                                                                                                            |
| `empty`         | `padding: "sm"`, `fontSize: "md"`, `color: "secondary"`                                                                                                                             |
| `list`          | `padding: "xs"`                                                                                                                                                                     |
| `item`          | `align: "center"`, `gap: "sm"`, `px: "md"`, `paddingInlineStart: "sm"`, `py: "1"`, `radius: "sm"`, `fontSize: "md"` (keep `paddingInlineStart` and non-sprinkle props in `style()`) |
| `itemIndicator` | `display: "inline-flex"`, `align: "center"`, `shrink: "0"`                                                                                                                          |
| `chips`         | `display: "inline-flex"`, `width: "full"`, `flexWrap: "wrap"`, `align: "center"`, `gap: "xxs"`, `radius: "lg"`, `backgroundColor: "canvas"`, `color: "primary"`                     |
| `chipsInput`    | `fontSize: "md"`, `color: "primary"`                                                                                                                                                |
| `chip`          | `display: "inline-flex"`, `align: "center"`, `radius: "md"`, `backgroundColor: "subtle"`, `color: "primary"`, `px: "sm"`, `fontSize: "sm"`                                          |
| `chipRemove`    | `display: "inline-flex"`, `align: "center"`, `shrink: "0"`, `px: "xs"`                                                                                                              |
| `separator`     | `marginY: "xs"`, `mx: "sm"`                                                                                                                                                         |
| `groupLabel`    | `px: "sm"`, `fontSize: "xs"`, `color: "secondary"`                                                                                                                                  |

#### 2. `src/components/Autocomplete/autocomplete.css.ts`

Apply the same sprinkles replacements as Combobox for corresponding exports, plus:

| Export   | Replace with sprinkles                             |
| -------- | -------------------------------------------------- |
| `status` | `color: "secondary"`                               |
| `item`   | `align: "center"`, `gap: "sm"`, `color: "primary"` |

---

### P1 — Moderate impact

#### 3. `src/components/Command/command.css.ts`

| Export         | Replace with sprinkles                                                                                                                             |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `root`         | `display: "flex"`, `direction: "column"`, `width: "full"`, `overflow: "hidden"`, `radius: "lg"`, `backgroundColor: "surface"`, `maxHeight: "full"` |
| `inputWrapper` | `display: "flex"`, `align: "center"`, `gap: "sm"`, `px: "sm"`                                                                                      |
| `inputIcon`    | `display: "flex"`, `align: "center"`, `shrink: "0"`, `color: "disabled"`                                                                           |
| `input`        | `width: "full"`, `fontSize: "sm"`, `color: "primary"`                                                                                              |
| `list`         | `overflow: "auto"`, `padding: "xs"`                                                                                                                |
| `group`        | `display: "flex"`, `direction: "column"`                                                                                                           |
| `groupHeading` | `px: "sm"`, `fontSize: "xs"`, `color: "secondary"` (keep `py` partial in `style()`)                                                                |
| `item`         | `display: "flex"`, `align: "center"`, `gap: "sm"`, `py: "xs"`, `px: "sm"`, `radius: "sm"`, `fontSize: "sm"`, `color: "primary"`                    |
| `itemActive`   | `backgroundColor: "subtle"`                                                                                                                        |
| `itemDisabled` | `color: "disabled"`                                                                                                                                |
| `separator`    | `marginY: "xs"`                                                                                                                                    |
| `empty`        | `py: "lg"`, `fontSize: "sm"`, `color: "secondary"`                                                                                                 |

#### 4. `src/components/Menu/menu.css.ts`

| Export            | Replace with sprinkles                                                                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `trigger`         | `display: "inline-flex"`, `align: "center"`, `justify: "center"`, `radius: "md"`                                                                                |
| `popup`           | `backgroundColor: "surface"`, `radius: "lg"`, `zIndex: "floating"`, `padding: "xs"`, `display: "flex"`, `gap: "1"`, `direction: "column"`, `overflow: "hidden"` |
| `item`            | `display: "flex"`, `align: "center"`, `gap: "sm"`, `radius: "default"`, `color: "primary"`, `fontSize: "sm"`                                                    |
| `itemDestructive` | `color: "error"`                                                                                                                                                |
| `groupLabel`      | `fontSize: "xs"`, `color: "secondary"`                                                                                                                          |
| `shortcut`        | `color: "disabled"`, `fontSize: "xs"`                                                                                                                           |

#### 5. `src/components/Select/select.css.ts`

| Export          | Replace with sprinkles                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`         | `fontSize: "xs"`, `color: "secondary"`, `pb: "xs"`, `px: "xs"`                                                                                                                                                |
| `trigger`       | `display: "flex"`, `align: "center"`, `justify: "between"`, `gap: "sm"`, `width: "full"`, `fontSize: "sm"`, `color: "primary"`, `backgroundColor: "surface"`, `radius: "md"` (keep `py` partial in `style()`) |
| `triggerSm`     | `py: "xs"`, `px: "sm"` (keep right-xs in `style()`)                                                                                                                                                           |
| `triggerLg`     | `py: "md"`, `px: "lg"` (keep right-md in `style()`)                                                                                                                                                           |
| `icon`          | `display: "flex"`, `align: "center"`, `color: "secondary"`, `shrink: "0"`                                                                                                                                     |
| `popup`         | `py: "xs"`, `backgroundColor: "surface"`, `radius: "lg"`, `zIndex: "modal"`, `overflow: "auto"`                                                                                                               |
| `item`          | `display: "flex"`, `align: "center"`, `gap: "sm"`, `py: "xs"`, `px: "sm"`, `mx: "xs"`, `radius: "sm"`, `fontSize: "sm"`, `color: "primary"`                                                                   |
| `itemIndicator` | `display: "inline-flex"`, `align: "center"`, `shrink: "0"`                                                                                                                                                    |
| `separator`     | `my: "xs"`                                                                                                                                                                                                    |
| `groupLabel`    | `px: "sm"`, `fontSize: "xs"`, `color: "secondary"` (keep `py` partial in `style()`)                                                                                                                           |
| `scrollArrow`   | `display: "flex"`, `align: "center"`, `justify: "center"`, `width: "full"`, `color: "secondary"`                                                                                                              |

#### 6. `src/components/Tabs/tabs.css.ts`

Export-specific mappings (not pattern-based):

| Export               | Replace with sprinkles                                                                                                        |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `listUnderline`      | `display: "flex"`, `align: "stretch"`, `gap: "lg"`                                                                            |
| `listVertical`       | `direction: "column"`, `align: "stretch"`                                                                                     |
| `tabActiveVertical`  | `color: "primary"`, `backgroundColor: "subtle"`                                                                               |
| `listGhost`          | `display: "flex"`, `gap: "sm"`                                                                                                |
| `tabGhost`           | `radius: "md"`, `color: "secondary"`                                                                                          |
| `tabGhostActive`     | `backgroundColor: "subtle"`, `color: "primary"`                                                                               |
| `listSegmented`      | `display: "flex"`, `gap: "xxs"`, `padding: "xxs"`, `radius: "lg"`, `backgroundColor: "subtle"`                                |
| `tabSegmented`       | `radius: "md"`, `color: "secondary"`                                                                                          |
| `tabSegmentedActive` | `backgroundColor: "surface"` (keep `color` in `style()` — file uses `semanticVars.interactive.primaryFg`, not `text.primary`) |
| `tabDefault`         | `color: "secondary"`, `fontSize: "sm"`                                                                                        |
| `tabVertical`        | `width: "full"`, `justify: "start"`                                                                                           |
| `tabActive`          | `color: "primary"`                                                                                                            |
| `tabActiveDefault`   | `color: "primary"`                                                                                                            |
| `tabUnderline`       | `color: "secondary"`, `fontSize: "sm"`                                                                                        |
| `indicator`          | `position: "absolute"`, `zIndex: "base"`                                                                                      |
| `indicatorUnderline` | `zIndex: "base"`, `radius: "full"`                                                                                            |
| `panelVertical`      | `flex: 1`                                                                                                                     |

#### 7. `src/components/Drawer/drawer.css.ts`

Export-specific mappings:

| Export                | Replace with sprinkles                                                                                                              |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `swipeArea`           | `position: "fixed"` (keep `zIndex: 50` in `style()` — no sprinkle zIndex matches 50; closest is `raised` at 100)                    |
| `backdrop`            | `position: "fixed"` (keep `inset: 0` in `style()`)                                                                                  |
| `viewport`            | `position: "fixed"`                                                                                                                 |
| `viewportLeft`        | `display: "flex"`, `justify: "start"`                                                                                               |
| `viewportRight`       | `display: "flex"`, `justify: "end"`                                                                                                 |
| `popup`               | `position: "relative"`, `display: "flex"`, `direction: "column"`, `width: "full"`, `backgroundColor: "surface"`, `color: "primary"` |
| `header`              | `display: "flex"`, `direction: "column"`, `gap: "sm"` (keep padding in `style()`)                                                   |
| `footer`              | `display: "flex"`, `direction: "column-reverse"`, `gap: "sm"` (keep padding in `style()`)                                           |
| `footerDefault`       | `backgroundColor: "subtle"`, `py: "md"`                                                                                             |
| `title`               | Keep in `style()` — uses `20px` font-size, no sprinkle match                                                                        |
| `description`         | `color: "secondary"` (keep fontSize in `style()`)                                                                                   |
| `panel`               | `padding: "lg"`                                                                                                                     |
| `bar`                 | `position: "absolute"`, `display: "flex"`, `align: "center"`, `justify: "center"`, `padding: "sm"`                                  |
| `menu`                | `display: "flex"`, `direction: "column"`                                                                                            |
| `menuItem`            | `display: "flex"`, `align: "center"`, `gap: "sm"`, `radius: "sm"`, `color: "primary"`, `fontSize: "md"` (keep padding in `style()`) |
| `menuItemDestructive` | `color: "error"`                                                                                                                    |
| `separator`           | `my: "xs"`                                                                                                                          |
| `menuGroup`           | `display: "flex"`, `direction: "column"`                                                                                            |
| `menuGroupLabel`      | `fontSize: "xs"`, `color: "secondary"` (keep padding in `style()`)                                                                  |
| `menuTrigger`         | `display: "flex"`, `align: "center"`, `gap: "sm"`, `radius: "sm"`, `color: "primary"` (keep padding and bg in `style()`)            |
| `menuCheckbox`        | `display: "grid"`, `align: "center"`, `gap: "sm"`, `radius: "sm"`, `color: "primary"` (keep padding in `style()`)                   |
| `menuRadio`           | `display: "grid"`, `align: "center"`, `gap: "sm"`, `radius: "sm"`, `color: "primary"` (keep padding in `style()`)                   |

#### 8. `src/components/Sheet/sheet.css.ts`

Apply identical sprinkles replacements as Drawer for corresponding exports.

---

### P2 — Low impact (smaller files)

#### 9. `src/components/Accordion/accordion.css.ts`

**Note: Initial mapping was incorrect — see corrections below.**

| Export         | Replace with sprinkles                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `root`         | `display: "flex"`, `direction: "column"`, `width: "full"`                                                                                                                                                    |
| `rootVertical` | `direction: "column"`                                                                                                                                                                                        |
| `trigger`      | `display: "flex"`, `align: "center"`, `gap: "xxs"`, `width: "full"`, `py: "xs"`, `px: "xxs"`, `fontSize: "sm"`, `color: "primary"`, `radius: "default"` (keep `paddingInlineEnd: xxs` override in `style()`) |
| `triggerIcon`  | `color: "secondary"` (keep `shrink: "0"` in `style()`)                                                                                                                                                       |
| `panel`        | `overflow: "hidden"`, `padding: "xs"`                                                                                                                                                                        |

#### 10. `src/components/AlertDialog/alert-dialog.css.ts`

| Export          | Replace with sprinkles                                                              |
| --------------- | ----------------------------------------------------------------------------------- |
| `header`        | `display: "flex"`, `direction: "column"`, `gap: "xxs"`, `padding: "md"`, `py: "xs"` |
| `footer`        | `display: "flex"`, `direction: "column-reverse"`, `gap: "sm"`, `px: "md"`           |
| `footerDefault` | `backgroundColor: "subtle"`, `py: "md"`                                             |
| `title`         | `fontSize: "lg"`, `color: "primary"`                                                |
| `description`   | `fontSize: "sm"`, `color: "secondary"`                                              |
| `panel`         | `padding: "md"`, `py: "xxs"`                                                        |

#### 11. `src/components/Dialog/dialog.css.ts`

| Export          | Replace with sprinkles                                                    |
| --------------- | ------------------------------------------------------------------------- |
| `header`        | `display: "flex"`, `direction: "column"`, `gap: "sm"`, `padding: "lg"`    |
| `footer`        | `display: "flex"`, `direction: "column-reverse"`, `gap: "sm"`, `px: "lg"` |
| `footerDefault` | `backgroundColor: "subtle"`, `py: "md"`                                   |
| `title`         | `color: "primary"` (fontSize is "20px" — not replaceable)                 |
| `description`   | `color: "secondary"` (fontSize is "14px" — not replaceable)               |
| `panel`         | `padding: "lg"`                                                           |

#### 12. `src/components/Checkbox/checkbox.css.ts`

| Export                   | Replace with sprinkles                                                                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `root`                   | `position: "relative"`, `display: "inline-flex"`, `align: "center"`, `justify: "center"`, `shrink: "0"`, `radius: "sm"`, `backgroundColor: "canvas"` |
| `group`                  | `display: "flex"`, `direction: "column"`, `align: "start"`, `gap: "sm"`                                                                              |
| `indicator`              | `position: "absolute"`, `display: "flex"`, `align: "center"`, `justify: "center"`, `radius: "sm"` (keep `top: -1` in style)                          |
| `indicatorChecked`       | `backgroundColor: "primary"`                                                                                                                         |
| `indicatorIndeterminate` | `color: "primary"`                                                                                                                                   |

#### 13. `src/components/Radio/radio.css.ts`

| Export             | Replace with sprinkles                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `root`             | `position: "relative"`, `display: "inline-flex"`, `align: "center"`, `justify: "center"`, `shrink: "0"`, `radius: "full"`, `backgroundColor: "canvas"` |
| `group`            | `display: "flex"`, `direction: "column"`, `gap: "sm"`                                                                                                  |
| `indicator`        | `display: "none"`, `position: "absolute"`, `align: "center"`, `justify: "center"`, `radius: "full"`                                                    |
| `indicatorChecked` | `display: "flex"`, `backgroundColor: "primary"`                                                                                                        |
| `dot`              | `radius: "full"`                                                                                                                                       |

#### 14. `src/components/Switch/switch.css.ts`

| Export         | Replace with sprinkles                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| `root`         | `width: "xxl"`, `height: "lg"`, `display: "inline-flex"`, `align: "center"`, `padding: "xxs"`, `radius: "full"` |
| `rootChecked`  | `backgroundColor: "primary"`                                                                                    |
| `thumb`        | `width: "lg"`, `height: "lg"`, `radius: "full"`                                                                 |
| `thumbChecked` | `backgroundColor: "surface"`                                                                                    |

#### 15. `src/components/Breadcrumbs/breadcrumbs.css.ts`

| Export      | Replace with sprinkles                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| `root`      | `display: "flex"`, `align: "center"`, `color: "secondary"`                                                   |
| `list`      | `display: "flex"`, `flexWrap: "wrap"`, `align: "center"`, `gap: "6"`, `fontSize: "md"`, `color: "secondary"` |
| `item`      | `display: "inline-flex"`, `align: "center"`, `gap: "6"`                                                      |
| `link`      | `color: "default"`                                                                                           |
| `page`      | `color: "primary"`                                                                                           |
| `separator` | `display: "inline-flex"`, `align: "center"`                                                                  |
| `ellipsis`  | `display: "inline-flex"`, `align: "center"`                                                                  |
| `srOnly`    | `position: "absolute"`, `overflow: "hidden"`                                                                 |

#### 16. `src/components/Slider/slider.css.ts`

| Export              | Replace with sprinkles                                                            |
| ------------------- | --------------------------------------------------------------------------------- |
| `control`           | `display: "flex"`                                                                 |
| `controlHorizontal` | `width: "full"`                                                                   |
| `controlVertical`   | `height: "full"`, `direction: "column"`                                           |
| `track`             | `position: "relative"`, `radius: "full"`                                          |
| `trackHorizontal`   | `width: "full"`                                                                   |
| `trackVertical`     | `height: "full"`                                                                  |
| `indicator`         | `radius: "full"`, `backgroundColor: "primary"`                                    |
| `thumb`             | `display: "block"`, `shrink: "0"`, `radius: "full"`, `backgroundColor: "surface"` |
| `value`             | `display: "flex"`, `justify: "end"`, `fontSize: "sm"`                             |

#### 17. `src/components/Splitter/splitter.css.ts`

| Export           | Replace with sprinkles                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| `root`           | `display: "flex"`, `width: "full"`, `height: "full"`, `overflow: "hidden"`                       |
| `rootHorizontal` | `direction: "row"`                                                                               |
| `rootVertical`   | `direction: "column"`                                                                            |
| `panel`          | `overflow: "hidden"`, `shrink: "0"`                                                              |
| `handle`         | `position: "relative"`, `display: "flex"`, `align: "center"`, `justify: "center"`, `shrink: "0"` |
| `handleActive`   | `backgroundColor: "primary"`                                                                     |

#### 18. `src/components/Input/input.css.ts`

| Export       | Replace with sprinkles                                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `label`      | `display: "inline-flex"`, `gap: "4"`, `color: "secondary"`                                                                          |
| `input`      | `width: "full"`, `px: "md"`, `color: "primary"`, `backgroundColor: "surface"`, `radius: "default"` (keep `py` partial in `style()`) |
| `inputSm`    | `py: "xs"`, `px: "sm"`                                                                                                              |
| `inputLg`    | `py: "md"`, `px: "lg"`                                                                                                              |
| `inputError` | `borderColor: "error"`                                                                                                              |
| `error`      | `color: "error"`                                                                                                                    |

#### 19. `src/components/InputGroup/input-group.css.ts`

| Export                | Replace with sprinkles                                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `group`               | `position: "relative"`, `display: "inline-flex"`, `width: "full"`, `align: "center"`, `radius: "lg"`, `color: "primary"`, `fontSize: "sm"`, `overflow: "hidden"` |
| `addon`               | `display: "flex"`, `align: "center"`, `justify: "center"`, `shrink: "0"`, `color: "secondary"`, `fontSize: "sm"`                                                 |
| `addonInlineEnd`      | `display: "flex"`, `align: "center"`                                                                                                                             |
| `addonBlockStart/End` | `width: "full"`, `justify: "start"`                                                                                                                              |
| `text`                | `display: "flex"`, `align: "center"`, `gap: "sm"`, `color: "secondary"`                                                                                          |
| `menu`                | `display: "flex"`, `direction: "column"`                                                                                                                         |
| `input`               | `width: "full"`, `fontSize: "sm"`, `color: "primary"`                                                                                                            |
| `textarea`            | `width: "full"`, `fontSize: "sm"`, `color: "primary"`                                                                                                            |

#### 20. `src/components/Progress/progress.css.ts`

| Export          | Replace with sprinkles                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| `root`          | `display: "flex"`, `width: "full"`, `direction: "column"`, `gap: "2"`                                     |
| `track`         | `display: "block"`, `width: "full"`, `overflow: "hidden"`, `radius: "full"`, `backgroundColor: "surface"` |
| `indicator`     | `height: "full"`, `backgroundColor: "primary"`, `radius: "full"`                                          |
| `progressLabel` | `fontSize: "md"`                                                                                          |
| `value`         | `fontSize: "sm"`                                                                                          |

#### 21. `src/components/Field/field.css.ts`

| Export        | Replace with sprinkles                                                            |
| ------------- | --------------------------------------------------------------------------------- |
| `field`       | `display: "flex"`, `direction: "column"`, `align: "start"`, `gap: "8"`, `flex: 1` |
| `label`       | `display: "inline-flex"`, `align: "center"`, `fontSize: "md"`                     |
| `item`        | `display: "flex"`, `flex: 1`                                                      |
| `description` | `color: "secondary"`                                                              |
| `error`       | `color: "error"`                                                                  |

#### 22. `src/components/Icon/icon.css.ts`

| Export        | Replace with sprinkles                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `iconWrapper` | `display: "inline-flex"`, `align: "center"`, `justify: "center"`, `width: "fit"`, `height: "fit"`, `shrink: "0"` |

#### 23. `src/components/Avatar/avatar.css.ts`

Use sprinkles radius shorthand for all radius variants:

| Export                          | Replace with sprinkles                                                                                                                                                        |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `root`                          | `display: "inline-flex"`, `align: "center"`, `justify: "center"`, `radius: "default"`, `backgroundColor: "subtle"`, `color: "secondary"`, `overflow: "hidden"`, `shrink: "0"` |
| `image`                         | `width: "full"`, `height: "full"`, `display: "block"`                                                                                                                         |
| `fallback`                      | `width: "full"`, `height: "full"`, `display: "flex"`, `align: "center"`, `justify: "center"`, `backgroundColor: "subtle"`, `color: "secondary"`                               |
| `avatarRecipes` radius variants | `radius: "default"` / `radius: "full"` etc. using sprinkles shorthand                                                                                                         |

#### 24. `src/components/AspectRatio/aspect-ratio.css.ts`

| Export | Replace with sprinkles                                                                     |
| ------ | ------------------------------------------------------------------------------------------ |
| `root` | `position: "relative"`, `overflow: "hidden"`, `maxWidth: "full"` (note: "full" not "100%") |

#### 25. `src/components/Popover/popover.css.ts`

| Export        | Replace with sprinkles                                        |
| ------------- | ------------------------------------------------------------- |
| `backdrop`    | `position: "fixed"`, `inset: 0`, `zIndex: "modal"`            |
| `positioner`  | `zIndex: "popover"`                                           |
| `popup`       | `padding: "sm"`, `backgroundColor: "surface"`, `radius: "lg"` |
| `title`       | `fontSize: "md"`, `color: "primary"`                          |
| `description` | `fontSize: "sm"`, `color: "secondary"`                        |
| `arrowFill`   | `backgroundColor: "surface"`                                  |

#### 26. `src/components/Textarea/textarea.css.ts`

| Export     | Replace with sprinkles                                                                                                                   |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `shell`    | `display: "inline-flex"`, `width: "full"`, `position: "relative"`, `radius: "default"`, `backgroundColor: "surface"`, `color: "primary"` |
| `textarea` | `width: "full"`, `color: "primary"`                                                                                                      |

#### 27. `src/components/Table/table.css.ts`

| Export           | Replace with sprinkles                                         |
| ---------------- | -------------------------------------------------------------- |
| `root`           | `width: "full"`, `color: "secondary"`                          |
| `head`           | `backgroundColor: "subtle"`                                    |
| `header`         | `py: "sm"`, `px: "md"`, `fontSize: "md"`, `color: "secondary"` |
| `cell`           | `py: "sm"`, `px: "md"`, `fontSize: "md"`                       |
| `wrapper`        | `radius: "default"`                                            |
| `colorSecondary` | `color: "secondary"`                                           |

#### 28. `src/components/ScrollArea/scroll-area.css.ts`

Export-specific mappings:

| Export                | Replace with sprinkles                                            |
| --------------------- | ----------------------------------------------------------------- |
| `root`                | `height: "full"`, `width: "full"`                                 |
| `viewport`            | `height: "full"`, `radius: "default"`                             |
| `viewportGutter`      | `paddingRight: "sm"`, `paddingBottom: "sm"`                       |
| `contentFill`         | `height: "full"`, `width: "full"`                                 |
| `scrollbar`           | `display: "flex"`                                                 |
| `scrollbarHorizontal` | `direction: "row"`, `height: "md"`                                |
| `thumb`               | `display: "block"`, `radius: "full"`, `backgroundColor: "subtle"` |

#### 29. `src/components/Toggle/toggle.css.ts`

Use sprinkles radius shorthand for radius variants:

| Export                          | Replace with sprinkles                                                                                                                                      |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `base`                          | `position: "relative"`, `display: "inline-flex"`, `shrink: "0"`, `align: "center"`, `justify: "center"`, `gap: "sm"`, `radius: "default"`, `fontSize: "sm"` |
| `toggleRecipes` radius variants | `radius: "default"` / `radius: "full"` etc. using sprinkles shorthand                                                                                       |
| `pressed.default`               | Keep in `style()` — file uses `semanticVars.surface.raised`, not `interactive.primary`. No matching sprinkle value.                                         |

#### 30. `src/components/ToggleGroup/toggle-group.css.ts`

| Export            | Replace with sprinkles                           |
| ----------------- | ------------------------------------------------ |
| `groupBase`       | `display: "inline-flex"`, `position: "relative"` |
| `groupHorizontal` | `direction: "row"`, `align: "center"`            |
| `groupVertical`   | `direction: "column"`, `align: "center"`         |
| `groupDefault`    | `gap: "xxs"`                                     |
| `groupOutline`    | `gap: 0` (token "0" exists)                      |

#### 31. `src/components/OTPField/otp-field.css.ts`

| Export      | Replace with sprinkles                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `root`      | `display: "flex"`, `align: "center"`, `gap: "1"`                                                                                |
| `input`     | `display: "flex"`, `align: "center"`, `justify: "center"`, `radius: "default"`, `backgroundColor: "canvas"`, `color: "primary"` |
| `separator` | `shrink: "0"` (keep `width: tokenVars.spacing["3"]` in `style()` — sprinkles width only supports `auto`/`full`/`fit`)           |

#### 32. `src/components/Separator/separator.css.ts`

Recipe opportunities — use `grow: "1"` for orientation variants:

| Export             | Replace with sprinkles                                              |
| ------------------ | ------------------------------------------------------------------- |
| `separator` recipe | Add `grow: "1"` to horizontal variant, `height: "full"` to vertical |
| `withLabel`        | `display: "flex"`, `align: "center"`, `gap: "sm"`, `width: "full"`  |
| `label`            | `px: "xs"`, `color: "secondary"`, `fontSize: "xs"`                  |

#### 33. `src/components/Spinner/spinner.css.ts`

| Export    | Replace with sprinkles                                           |
| --------- | ---------------------------------------------------------------- |
| `spinner` | `display: "inline-flex"`, `align: "center"`, `justify: "center"` |

#### 34. `src/utils/drawer-styles.css.ts`

| Export                             | Replace with sprinkles                                                                                                                                   |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `viewport`                         | `position: "fixed"`, `padding: "md"`                                                                                                                     |
| `popup`                            | `position: "relative"`, `display: "flex"`, `direction: "column"`, `width: "full"`, `radius: "default"`, `backgroundColor: "surface"`, `color: "primary"` |
| `viewportShellBottomStickOnMobile` | `display: "flex"`, `align: "end"`, `justify: "center"`, `padding: "sm"`                                                                                  |
| `closeButton`                      | `position: "absolute"`, `top: "xs"`                                                                                                                      |
| `popupBottomStickOnMobile`         | `width: "full"`                                                                                                                                          |
| `backdrop`                         | `position: "fixed"`, `inset: 0`, `zIndex: "modal"`                                                                                                       |

#### 35. `src/components/IconButton/icon-button.css.ts`

| Export | Replace with sprinkles |
| ------ | ---------------------- |
| `base` | `width: "fit"`         |

#### 36. `src/components/Badge/badge.css.ts`

| Export        | Replace with sprinkles                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `badgeBase`   | Already uses sprinkles (`display: "block"`, `padding: "xs"`, `radius: "default"`). No changes needed.                           |
| `badgeRecipe` | `display: "inline-block"` in recipe base — **not** in sprinkles (`inline-block` not supported). Keep in `recipe()` / `style()`. |

---

### P3 — Recipe base/variant migrations

#### 37. `src/components/Button/button.css.ts`

Migrate the `variant` recipe base and size variant `fontSize` values to sprinkles:

| Section                   | Replace with sprinkles                                                                                                                                                                                                                                                                                         |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `variant` recipe **base** | `display: "inline-flex"`, `align: "center"`, `justify: "center"`, `gap: "sm"`, `radius: "default"`, `width: "fit"`, `height: "fit"`, `position: "relative"`, `fontSize: "md"`, `fontWeight: "medium"` (keep `borderStyle`, `borderWidth`, `cursor`, `fontFamily`, `textDecoration`, `transition` in `style()`) |
| `size.xs`                 | `fontSize: "sm"` (keep compound `padding` in `style()`)                                                                                                                                                                                                                                                        |
| `size.sm`                 | `fontSize: "sm"` (keep compound `padding` in `style()`)                                                                                                                                                                                                                                                        |
| `size.lg`                 | `fontSize: "lg"` (keep compound `padding` in `style()`)                                                                                                                                                                                                                                                        |

`intent` and `variant` recipe variants use CSS vars — NOT sprinkles-eligible.

#### 38. `src/components/Text/text.css.ts`

Migrate `fontSize`, `fontWeight`, `letterSpacing`, `lineHeight` recipe variant values, and `code` variant bg/radius:

| Section                     | Replace with sprinkles                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `textVariants` base         | `lineHeight: "normal"` (keep `margin`, `textDecoration` in `style()`)                                                    |
| `variant.h1`                | `fontWeight: "bold"`, `letterSpacing: "tight"` (keep `fontSize: displayLg` in `style()`)                                 |
| `variant.h2`                | `fontSize: "xxxl"`, `fontWeight: "bold"`, `letterSpacing: "tight"`                                                       |
| `variant.h3`                | `fontSize: "xl"`, `fontWeight: "semibold"`, `letterSpacing: "snug"`                                                      |
| `variant.h4`                | `fontSize: "lg"`, `fontWeight: "semibold"`                                                                               |
| `variant.h5`                | `fontSize: "md"`, `fontWeight: "semibold"`                                                                               |
| `variant.h6`                | `fontSize: "sm"`, `fontWeight: "semibold"`                                                                               |
| `variant.body1`             | `fontWeight: "regular"`                                                                                                  |
| `variant.body2`             | `fontSize: "sm"`, `fontWeight: "regular"`                                                                                |
| `variant.body3`             | `fontSize: "xs"`, `fontWeight: "regular"`                                                                                |
| `variant.body4`             | `fontSize: "xxs"`, `fontWeight: "medium"`, `letterSpacing: "wide"`                                                       |
| `variant.caption`           | `fontSize: "xs"`, `fontWeight: "medium"`, `letterSpacing: "wide"`                                                        |
| `variant.p` / `variant.div` | `fontSize: "md"`, `fontWeight: "regular"`                                                                                |
| `variant.creatorNote`       | `fontSize: "lg"`, `fontWeight: "regular"` (keep `lineHeight: 28px`, `fontStyle: "italic"` in `style()`)                  |
| `variant.code`              | `backgroundColor: "subtle"`, `radius: "sm"`                                                                              |
| `weight` variant set        | All values map to `fontWeight` — replace each with `baseSprinkles({ fontWeight: "regular"/"medium"/"semibold"/"bold" })` |

Note: `textAlign` and `transform` (textTransform) variant sets are NOT sprinkles-eligible.

#### 39. `src/components/Container/container.css.ts`

| Section                   | Replace with sprinkles                                                           |
| ------------------------- | -------------------------------------------------------------------------------- |
| `containerRecipe` base    | Keep in `style()` — only `minWidth: 0`                                           |
| `contentCentered` variant | `display: "flex"`, `direction: "column"`, `justify: "center"`, `align: "center"` |
| `size` variants           | Keep in `style()` — uses `width: "min(...)"`, not sprinkles-eligible             |
| `centered` variant        | Keep in `style()` — `marginLeft/Right: "auto"` (auto not a spacing token)        |

#### 40. `src/components/Surface/surface.css.ts`

| Section               | Replace with sprinkles                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `variantRecipe` base  | Keep in `style()` — only `textDecoration: "none"`                                                                  |
| `variant.default`     | `backgroundColor: "surface"`                                                                                       |
| `variant.outline`     | `backgroundColor: "surface"`, `borderColor: "default"` (keep `borderWidth`, `borderStyle` in `style()`)            |
| `variant.raised`      | `boxShadow: "md"` (keep `backgroundColor` in `style()` — `surface.raised` has no sprinkle `backgroundColor` match) |
| `variant.sunken`      | `backgroundColor: "subtle"`                                                                                        |
| `interactive` variant | Keep in `style()` — uses `cursor`, `selectors`                                                                     |

---

## Files with NO changes needed

- `src/components/Alert/alert.css.ts` — uses `semanticVars.*` directly, no token-name match with sprinkles
- `src/components/Box/box.css.ts` — only `minWidth: 0`
- `src/components/CloseButton/close-button.css.ts` — SVG-specific props
- `src/components/CopyButton/copy-button.css.ts` — SVG-specific props
- `src/components/Grid/grid.css.ts` — uses `boxSizing`, `minWidth`, `gridColumn`

All 45 migratable CSS files accounted for (excluding `sprinkles.css.ts` itself).

---

## Verification

After each file, run:

```bash
pnpm -w check-types
```

to confirm the build still passes. No visual regressions expected since sprinkles generate equivalent CSS.

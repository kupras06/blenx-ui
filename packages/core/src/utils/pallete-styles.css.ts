import { semanticVars } from "@blenx-dev/theme/contract";
import { createVar, style } from "@vanilla-extract/css";

export const paletteVars = {
  bg: createVar(),
  fg: createVar(),
  border: createVar(),

  hoverBg: createVar(),
  hoverFg: createVar(),

  activeBg: createVar(),
  activeFg: createVar(),

  focusRing: createVar(),

  selectedBg: createVar(),
  selectedFg: createVar(),
};

export const primaryPalette = style({
  vars: {
    [paletteVars.bg]: semanticVars.color.primary.default,
    [paletteVars.fg]: semanticVars.color.primary.textActive,
    [paletteVars.hoverBg]: semanticVars.color.primary.hover,
    [paletteVars.activeBg]: semanticVars.color.primary.bg,
    [paletteVars.activeFg]: semanticVars.text.primary,
    [paletteVars.hoverFg]: semanticVars.color.primary.bgHover,
    [paletteVars.border]: semanticVars.color.primary.active,
    [paletteVars.selectedBg]: semanticVars.color.primary.default,
    [paletteVars.selectedFg]: semanticVars.text.primary,
    [paletteVars.focusRing]: semanticVars.color.primary.active,
  },
});

export const neutralPalette = style({
  vars: {
    [paletteVars.bg]: semanticVars.surface.default,
    [paletteVars.fg]: semanticVars.text.primary,
    [paletteVars.hoverBg]: semanticVars.background.subtle,
    [paletteVars.activeBg]: semanticVars.background.subtle,
    [paletteVars.activeFg]: semanticVars.text.primary,
    [paletteVars.hoverFg]: semanticVars.color.primary.bgHover,
    [paletteVars.border]: semanticVars.border.default,
    [paletteVars.selectedBg]: semanticVars.color.primary.default,
    [paletteVars.selectedFg]: semanticVars.text.primary,
    [paletteVars.focusRing]: semanticVars.color.primary.active,
  },
});

export const successPalette = style({
  vars: {
    [paletteVars.bg]: semanticVars.color.success.default,
    [paletteVars.fg]: semanticVars.color.success.textActive,
    [paletteVars.hoverBg]: semanticVars.color.success.hover,
    [paletteVars.activeBg]: semanticVars.color.success.bg,
    [paletteVars.activeFg]: semanticVars.text.primary,
    [paletteVars.hoverFg]: semanticVars.color.success.bgHover,
    [paletteVars.border]: semanticVars.color.success.active,
    [paletteVars.selectedBg]: semanticVars.color.success.default,
    [paletteVars.selectedFg]: semanticVars.text.primary,
    [paletteVars.focusRing]: semanticVars.color.success.active,
  },
});

export const warningPalette = style({
  vars: {
    [paletteVars.bg]: semanticVars.color.warning.default,
    [paletteVars.fg]: semanticVars.color.warning.textActive,
    [paletteVars.hoverBg]: semanticVars.color.warning.hover,
    [paletteVars.activeBg]: semanticVars.color.warning.bg,
    [paletteVars.activeFg]: semanticVars.text.primary,
    [paletteVars.hoverFg]: semanticVars.color.warning.bgHover,
    [paletteVars.border]: semanticVars.color.warning.active,
    [paletteVars.selectedBg]: semanticVars.color.warning.default,
    [paletteVars.selectedFg]: semanticVars.text.primary,
    [paletteVars.focusRing]: semanticVars.color.warning.active,
  },
});

export const dangerPalette = style({
  vars: {
    [paletteVars.bg]: semanticVars.color.danger.default,
    [paletteVars.fg]: semanticVars.color.danger.textActive,
    [paletteVars.hoverBg]: semanticVars.color.danger.hover,
    [paletteVars.activeBg]: semanticVars.color.danger.bg,
    [paletteVars.activeFg]: semanticVars.text.primary,
    [paletteVars.hoverFg]: semanticVars.color.danger.bgHover,
    [paletteVars.border]: semanticVars.color.danger.active,
    [paletteVars.selectedBg]: semanticVars.color.danger.default,
    [paletteVars.selectedFg]: semanticVars.text.primary,
    [paletteVars.focusRing]: semanticVars.color.danger.active,
  },
});

export const infoPalette = style({
  vars: {
    [paletteVars.bg]: semanticVars.color.info.default,
    [paletteVars.fg]: semanticVars.color.info.textActive,
    [paletteVars.hoverBg]: semanticVars.color.info.hover,
    [paletteVars.activeBg]: semanticVars.color.info.bg,
    [paletteVars.activeFg]: semanticVars.text.primary,
    [paletteVars.hoverFg]: semanticVars.color.info.bgHover,
    [paletteVars.border]: semanticVars.color.info.active,
    [paletteVars.selectedBg]: semanticVars.color.info.default,
    [paletteVars.selectedFg]: semanticVars.text.primary,
    [paletteVars.focusRing]: semanticVars.color.info.active,
  },
});

export const monoPalette = style({
  vars: {
    [paletteVars.bg]: semanticVars.background.default,
    [paletteVars.fg]: semanticVars.text.primary,
    [paletteVars.hoverBg]: semanticVars.background.subtle,
    [paletteVars.activeBg]: semanticVars.background.default,
    [paletteVars.activeFg]: semanticVars.text.primary,
    [paletteVars.hoverFg]: semanticVars.text.primary,
    [paletteVars.border]: semanticVars.border.default,
    [paletteVars.selectedBg]: semanticVars.background.default,
    [paletteVars.selectedFg]: semanticVars.text.primary,
    [paletteVars.focusRing]: semanticVars.color.info.active,
  },
});
export const linkPalette = style({
  vars: {
    [paletteVars.bg]: semanticVars.color.info.default,
    [paletteVars.fg]: semanticVars.color.info.textActive,
    [paletteVars.hoverBg]: semanticVars.color.info.hover,
    [paletteVars.activeBg]: semanticVars.color.info.bg,
    [paletteVars.activeFg]: semanticVars.text.primary,
    [paletteVars.hoverFg]: semanticVars.color.info.bgHover,
    [paletteVars.border]: semanticVars.color.info.active,
    [paletteVars.selectedBg]: semanticVars.color.info.default,
    [paletteVars.selectedFg]: semanticVars.text.primary,
    [paletteVars.focusRing]: semanticVars.color.info.active,
  },
});

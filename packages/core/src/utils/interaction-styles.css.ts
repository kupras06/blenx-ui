import { semanticVars } from "@blenx-dev/theme/contract";
import { style } from "@vanilla-extract/css";

export const focusRing = style({
  outline: "none",
  selectors: {
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
    },
  },
});

export const disabled = style({
  selectors: {
    "&:disabled, &[data-disabled]": {
      opacity: 0.64,
      cursor: "not-allowed",
      pointerEvents: "none",
    },
  },
});

export const subtleHover = style({
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.background.subtle,
    },
  },
});

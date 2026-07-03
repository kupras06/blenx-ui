import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const shell = style([
  baseSprinkles({
    display: "inline-flex",
    width: "full",
    position: "relative",
    radius: "default",
    backgroundColor: "surface",
    color: "primary",
  }),
  style({
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: semanticVars.border.default,
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    outline: "none",
    transitionProperty: "box-shadow, border-color",
    transitionDuration: "150ms",
    selectors: {
      "&:has(:focus-visible)": {
        borderColor: semanticVars.border.strong,
        boxShadow: `0 0 0 3px ${semanticVars.border.strong}`,
      },
      "&:has([aria-invalid])": {
        borderColor: semanticVars.status.danger.default,
      },
      "&:has([aria-invalid]:focus-visible)": {
        boxShadow: `0 0 0 3px ${semanticVars.status.danger.default}`,
      },
      "&:has(:disabled)": {
        opacity: 0.64,
      },
    },
  }),
]);

export const textarea = style([
  baseSprinkles({
    width: "full",
    color: "primary",
    backgroundColor: "transparent",
    borderRadius: "inherit",
    fontSize: "sm",
  }),
  style({
    fieldSizing: "content",
    minHeight: "70px",
    borderWidth: 0,
    paddingTop: "calc(12px - 1px)",
    paddingBottom: "calc(12px - 1px)",
    paddingLeft: "calc(12px - 1px)",
    paddingRight: "calc(12px - 1px)",
    lineHeight: 1.5,
    outline: "none",
    resize: "none",
  }),
]);

export const textareaSm = style({
  minHeight: "66px",
  paddingTop: "calc(8px - 1px)",
  paddingBottom: "calc(8px - 1px)",
  paddingLeft: "calc(10px - 1px)",
  paddingRight: "calc(10px - 1px)",
});

export const textareaLg = style({
  minHeight: "74px",
  paddingTop: "calc(16px - 1px)",
  paddingBottom: "calc(16px - 1px)",
});

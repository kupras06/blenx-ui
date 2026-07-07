import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const label = baseSprinkles({
  display: "inline-flex",
  color: "secondary",
  gap: "md",
  lineHeight: "tight",
  fontSize: "md",
  fontWeight: "medium",
});

export const inputStyle = style([
  baseSprinkles({
    width: "full",
    px: "md",
    color: "primary",
    backgroundColor: "surface",
    radius: "default",
    py: "sm",
    fontSize: "md",
    lineHeight: "normal",
    borderWidth: "thin",
    borderStyle: "solid",
  }),
  style({
    borderColor: semanticVars.border.default,
    outline: "none",
    selectors: {
      "&::placeholder": {
        color: semanticVars.text.disabled,
      },
      "&:disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
      "&:focus-visible": {
        borderColor: semanticVars.border.default,
        boxShadow: `0 0 0 2px ${semanticVars.border.default}`,
      },
      "&:focus-visible[aria-invalid='true']": {
        borderColor: semanticVars.color.danger.default,
        boxShadow: `0 0 0 3px ${semanticVars.color.danger}`,
      },
    },
  }),
]);

export const inputSm = baseSprinkles({
  py: "xs",
  px: "sm",
  fontSize: "sm",
});

export const inputLg = baseSprinkles({
  py: "md",
  px: "lg",
  fontSize: "xl",
});
export const inputError = baseSprinkles({
  borderColor: "error",
});

export const error = baseSprinkles({
  color: "error",
  fontSize: "sm",
  lineHeight: "normal",
});

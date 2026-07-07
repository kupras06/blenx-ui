import { style } from "@vanilla-extract/css";
import { tokenVars } from "@blenx-dev/theme/contract";

export const base = style({
  width: tokenVars.spacing["10"],
  height: tokenVars.spacing["10"],
  maxWidth: tokenVars.spacing["10"],
});

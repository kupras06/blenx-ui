import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { spacing, mediaQueries } from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const heroStyles = stylex.create({
  inner: {
    display: "flex",
    flexDirection: {
      default: "row",
      [mediaQueries.sm]: "column",
    },
    alignItems: "center",
    gap: {
      default: spacing.xxxlarge,
      [mediaQueries.sm]: spacing.xlarge,
    },
    width: "100%",
    maxWidth: 1200,
    marginLeft: "auto",
    marginRight: "auto",
  },
  image: {
    width: "100%",
    maxWidth: 540,
    height: "auto",
    borderRadius: theme.borderRadius,
    objectFit: "cover",
  },
});

import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { baseSprinkles } from "../../utils/sprinkles";

const scrollMarginTop = style({
  scrollMarginTop: "80px",
});
export const textVariants = recipe({
  base: baseSprinkles({ lineHeight: "normal", margin: "0", textDecoration: "none" }),
  variants: {
    variant: {
      h1: [
        baseSprinkles({
          fontWeight: "bold",
          letterSpacing: "tight",
          fontSize: "displayLg",
          lineHeight: "tight",
          margin: "0",
        }),
        scrollMarginTop,
      ],
      h2: [
        baseSprinkles({
          fontSize: "xxxl",
          fontWeight: "bold",
          letterSpacing: "tight",
          lineHeight: "snug",
          margin: "0",
        }),
        scrollMarginTop,
      ],
      h3: [
        baseSprinkles({
          fontSize: "xl",
          fontWeight: "semibold",
          letterSpacing: "snug",
          lineHeight: "snug",
          margin: "0",
        }),
        scrollMarginTop,
      ],
      h4: [
        baseSprinkles({ fontSize: "lg", fontWeight: "semibold", lineHeight: "snug", margin: "0" }),
        scrollMarginTop,
      ],
      h5: [
        baseSprinkles({
          fontSize: "md",
          fontWeight: "semibold",
          lineHeight: "normal",
          margin: "0",
        }),
        scrollMarginTop,
      ],
      h6: [
        baseSprinkles({
          fontSize: "sm",
          fontWeight: "semibold",
          lineHeight: "normal",
          margin: "0",
        }),
        scrollMarginTop,
      ],
      body1: [baseSprinkles({ fontWeight: "regular", margin: "0" })],
      body2: [baseSprinkles({ fontSize: "sm", fontWeight: "regular", margin: "0" })],
      body3: [baseSprinkles({ fontSize: "xs", fontWeight: "regular", margin: "0" })],
      body4: [
        baseSprinkles({
          fontSize: "xxs",
          fontWeight: "medium",
          letterSpacing: "wide",
          margin: "0",
        }),
      ],
      caption: [
        baseSprinkles({ fontSize: "xs", fontWeight: "medium", letterSpacing: "wide", margin: "0" }),
      ],
      p: [baseSprinkles({ fontSize: "md", margin: "0", fontWeight: "regular" })],
      code: [baseSprinkles({ backgroundColor: "subtle", margin: "0", radius: "sm" })],
    },
    textAlign: {
      left: baseSprinkles({ textAlign: "left" }),
      center: baseSprinkles({ textAlign: "center" }),
      right: baseSprinkles({ textAlign: "right" }),
    },
    weight: {
      regular: baseSprinkles({ fontWeight: "regular" }),
      medium: baseSprinkles({ fontWeight: "medium" }),
      semibold: baseSprinkles({ fontWeight: "semibold" }),
      bold: baseSprinkles({ fontWeight: "bold" }),
    },
    transform: {
      uppercase: baseSprinkles({ textTransform: "uppercase" }),
      capitalize: baseSprinkles({ textTransform: "capitalize" }),
      none: baseSprinkles({ textTransform: "none" }),
      lowercase: baseSprinkles({ textTransform: "lowercase" }),
    },
  },
});

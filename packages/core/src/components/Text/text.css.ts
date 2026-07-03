import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { baseSprinkles } from "../../utils/sprinkles";

export const textVariants = recipe({
  base: [
    baseSprinkles({ lineHeight: "normal", margin: "0" }),
    style({
      textDecoration: "none",
    }),
  ],
  variants: {
    variant: {
      h1: [
        baseSprinkles({
          fontWeight: "bold",
          letterSpacing: "tight",
          fontSize: "displayLg",
          margin: "0",
        }),
        style({
          scrollMarginTop: "80px",
        }),
      ],
      h2: [
        baseSprinkles({
          fontSize: "xxxl",
          fontWeight: "bold",
          letterSpacing: "tight",
          margin: "0",
        }),
        style({
          scrollMarginTop: "80px",
        }),
      ],
      h3: [
        baseSprinkles({
          fontSize: "xl",
          fontWeight: "semibold",
          letterSpacing: "snug",
          margin: "0",
        }),
        style({
          scrollMarginTop: "80px",
        }),
      ],
      h4: [
        baseSprinkles({ fontSize: "lg", fontWeight: "semibold", margin: "0" }),
        style({
          scrollMarginTop: "80px",
        }),
      ],
      h5: [
        baseSprinkles({ fontSize: "md", fontWeight: "semibold", margin: "0" }),
        style({
          scrollMarginTop: "80px",
        }),
      ],
      h6: [
        baseSprinkles({ fontSize: "sm", fontWeight: "semibold", margin: "0" }),
        style({
          scrollMarginTop: "80px",
        }),
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
      creatorNote: [
        baseSprinkles({ fontSize: "lg", fontWeight: "regular", margin: "0" }),
        style({
          lineHeight: "28px",
          fontStyle: "italic",
        }),
      ],
      p: [baseSprinkles({ fontSize: "md", margin: "0", fontWeight: "regular" })],
      div: [baseSprinkles({ fontSize: "md", margin: "0", fontWeight: "regular" })],
      code: [baseSprinkles({ backgroundColor: "subtle", margin: "0", radius: "sm" })],
    },
    textAlign: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
    },
    weight: {
      regular: baseSprinkles({ fontWeight: "regular" }),
      medium: baseSprinkles({ fontWeight: "medium" }),
      semibold: baseSprinkles({ fontWeight: "semibold" }),
      bold: baseSprinkles({ fontWeight: "bold" }),
    },
    transform: {
      uppercase: { textTransform: "uppercase" },
      capitalize: { textTransform: "capitalize" },
      none: { textTransform: "none" },
      lowercase: { textTransform: "lowercase" },
    },
  },
});

import * as stylex from "@stylexjs/stylex";

export const theme = stylex.defineVars({
  // Brand
  primary: "",
  primarySubtle: "",
  secondary: "",
  primaryHover: "", // ← hover IS a semantic slot; its value changes per theme

  // Content
  contentPrimary: "",
  contentSecondary: "",
  contentDisabled: "",
  contentAccent: "",
  contentOnPrimary: "",

  // Surface
  surface: "",
  surfaceSubtle: "",
  surfaceRaised: "",
  surfaceHover: "",
  surfaceOverlay: "",

  // Border
  border: "",
  borderSubtle: "",
  borderStrong: "",
  borderRadius: "",

  // Background
  background: "",
  backgroundSubtle: "",

  // Sentiment — base + subtle + hover per tone
  sentimentPositive: "",
  sentimentPositiveSubtle: "",
  sentimentPositiveHover: "",

  sentimentWarning: "",
  sentimentWarningSubtle: "",
  sentimentWarningHover: "",

  sentimentNegative: "",
  sentimentNegativeSubtle: "",
  sentimentNegativeHover: "",

  sentimentInfo: "",
  sentimentInfoSubtle: "",
  sentimentInfoHover: "",

  // Focus & shadow
  focusRing: "",
  shadowSm: "",
  shadowMd: "",
  shadowLg: "",
  shadowXl: "",

  // Typography
  fontSize: "",
  hoverOverlay: "", // A translucent tint applied on hover
  hoverOverlaySoft: "",
});

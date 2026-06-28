import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./contract.css";

export const [themeClass, themeVars] = createTheme(themeContract, {
  primary: "#1c1917",
  primarySubtle: "#57534e",
  secondary: "#4f5d95",
  focusRing: "#5b5fc7",

  background: "#f5f3ef",
  backgroundSubtle: "#edeae4",

  surface: "#ffffff",
  surfaceSubtle: "#faf9f7",
  surfaceRaised: "#ffffff",
  surfaceHover: "#edeae4",
  surfaceOverlay: "rgba(28,25,23,0.35)",

  border: "#e2ddd6",
  borderSubtle: "#edeae4",
  borderStrong: "#c8c1b5",

  contentPrimary: "#1c1917",
  contentSecondary: "#57534e",
  contentDisabled: "#a8a29e",
  contentAccent: "#1c1917",
  contentOnPrimary: "#ffffff",

  sentimentNegative: "#ef4444",
  sentimentNegativeSubtle: "#fef2f2",
  sentimentPositive: "#10b981",
  sentimentPositiveSubtle: "#ecfdf5",
  sentimentWarning: "#f59e0b",
  sentimentWarningSubtle: "#fffbeb",
  sentimentInfo: "#0ea5e9",
  sentimentInfoSubtle: "#f0f9ff",

  shadowSm: "0 1px 3px rgba(28,25,23,0.07), 0 1px 2px rgba(28,25,23,0.04)",
  shadowMd: "0 4px 12px rgba(28,25,23,0.09), 0 2px 4px rgba(28,25,23,0.05)",
  shadowLg: "0 8px 24px rgba(28,25,23,0.11), 0 4px 8px rgba(28,25,23,0.05)",
  shadowXl: "0 20px 48px rgba(28,25,23,0.14), 0 8px 16px rgba(28,25,23,0.07)",

  primaryHover: "#292524",
  sentimentPositiveHover: "#059669",
  sentimentWarningHover: "#d97706",
  sentimentNegativeHover: "#dc2626",
  sentimentInfoHover: "#0284c7",

  hoverOverlay: "rgba(28,25,23,0.05)",
  hoverOverlaySoft: "rgba(28,25,23,0.10)",

  fontSize: "16px",
  borderRadius: "12px",
});

export const darkThemeClass = createTheme(themeContract, {
  primary: "#f5f3ef",
  primarySubtle: "#d4cec5",
  secondary: "#8ea0ff",

  background: "#0f0e0c",
  backgroundSubtle: "#1a1916",

  surface: "#1a1916",
  surfaceSubtle: "#242320",
  surfaceRaised: "#2e2c28",
  surfaceHover: "#2e2c28",
  surfaceOverlay: "rgba(0,0,0,0.75)",

  border: "#2e2c28",
  borderSubtle: "#242320",
  borderStrong: "#3c3a35",

  contentPrimary: "#f5f3ef",
  contentSecondary: "#a8a29e",
  contentDisabled: "#57534e",
  contentAccent: "#f5f3ef",
  contentOnPrimary: "#0f0e0c",

  focusRing: "#818cf8",

  sentimentNegative: "#f87171",
  sentimentNegativeSubtle: "#450a0a",
  sentimentPositive: "#34d399",
  sentimentPositiveSubtle: "#064e3b",
  sentimentWarning: "#fbbf24",
  sentimentWarningSubtle: "#451a03",
  sentimentInfo: "#38bdf8",
  sentimentInfoSubtle: "#082f49",

  shadowSm: "0 1px 3px rgba(0,0,0,0.28), 0 1px 2px rgba(0,0,0,0.18)",
  shadowMd: "0 4px 12px rgba(0,0,0,0.32), 0 2px 4px rgba(0,0,0,0.18)",
  shadowLg: "0 8px 24px rgba(0,0,0,0.38), 0 4px 8px rgba(0,0,0,0.22)",
  shadowXl: "0 20px 48px rgba(0,0,0,0.48), 0 8px 16px rgba(0,0,0,0.28)",

  primaryHover: "#e7e3dc",
  sentimentPositiveHover: "#6ee7b7",
  sentimentWarningHover: "#fcd34d",
  sentimentNegativeHover: "#fca5a5",
  sentimentInfoHover: "#7dd3fc",

  hoverOverlay: "rgba(245,243,239,0.07)",
  hoverOverlaySoft: "rgba(245,243,239,0.13)",

  fontSize: "16px",
  borderRadius: "12px",
});

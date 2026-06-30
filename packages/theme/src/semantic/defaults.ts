import type { PaletteScale } from "../palettes/types";

export const Blue: PaletteScale = {
  1: "#f0f6ff",
  2: "#e1efff",
  3: "#cddfff",
  4: "#b1ceff",
  5: "#9bb9ff",
  6: "#7da0f5",
  7: "#5f85e0",
  8: "#3a6bcc",
  9: "#1d4ed8",
  10: "#1e40af",
  11: "#1e3a8a",
  12: "#172554",
};

export const Violet: PaletteScale = {
  1: "#f3f0ff",
  2: "#e5e0ff",
  3: "#d4ccff",
  4: "#bfb3ff",
  5: "#a699f2",
  6: "#8b7fe0",
  7: "#7166cc",
  8: "#584db8",
  9: "#3f33a3",
  10: "#32288a",
  11: "#261e70",
  12: "#1a1356",
};

export const Slate: PaletteScale = {
  1: "#f8f9fa",
  2: "#f1f3f5",
  3: "#eceef0",
  4: "#e4e6e9",
  5: "#d9dce1",
  6: "#c9cdd3",
  7: "#b3b8c0",
  8: "#939aa4",
  9: "#6b7380",
  10: "#535b66",
  11: "#3a414d",
  12: "#1c2128",
};

export const Green: PaletteScale = {
  1: "#f0fdf4",
  2: "#dbfdec",
  3: "#bff0d4",
  4: "#9ce3b7",
  5: "#7ad69e",
  6: "#57c482",
  7: "#3aaa67",
  8: "#24914f",
  9: "#0f783b",
  10: "#0b6130",
  11: "#074b25",
  12: "#03341a",
};

export const Amber: PaletteScale = {
  1: "#fffdf0",
  2: "#fff8d4",
  3: "#fff0b3",
  4: "#ffe48a",
  5: "#ffd65e",
  6: "#ffc532",
  7: "#f5a623",
  8: "#e08c17",
  9: "#c9780c",
  10: "#a8620a",
  11: "#864d07",
  12: "#643805",
};

export const Red: PaletteScale = {
  1: "#fff5f5",
  2: "#fee8e8",
  3: "#fcd5d5",
  4: "#fabcbc",
  5: "#f59e9e",
  6: "#ed7a7a",
  7: "#e05555",
  8: "#cf3636",
  9: "#b91c1c",
  10: "#a01818",
  11: "#841313",
  12: "#660e0e",
};

export const Teal: PaletteScale = {
  1: "#f0fdfd",
  2: "#d5f5f5",
  3: "#b3eaea",
  4: "#8adcdc",
  5: "#62cbcb",
  6: "#3db8b8",
  7: "#28a1a1",
  8: "#1c8989",
  9: "#127373",
  10: "#0e5c5c",
  11: "#0a4646",
  12: "#063030",
};

export const defaultScales: Record<string, PaletteScale> = {
  primary: Blue,
  secondary: Violet,
  neutral: Slate,
  success: Green,
  warning: Amber,
  danger: Red,
  info: Teal,
};

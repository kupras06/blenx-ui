import * as stylex from "@stylexjs/stylex";

export const containerStyles = stylex.create({
  root: {
    width: "100%",
    boxSizing: "border-box",
  },
  center: { marginLeft: "auto", marginRight: "auto" },
  contentCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

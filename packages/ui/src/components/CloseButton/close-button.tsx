import * as stylex from "@stylexjs/stylex";
import { IconButton, type IconButtonProps } from "../IconButton/icon-button";

const closeStyles = stylex.create({
  icon: {
    width: "16px",
    height: "16px",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
});

export type { IconButtonProps as CloseButtonProps };

export function CloseButton(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <svg {...stylex.props(closeStyles.icon)} viewBox="0 0 24 24" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </IconButton>
  );
}

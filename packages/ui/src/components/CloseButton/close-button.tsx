import { IconButton, type IconButtonProps } from "../IconButton/icon-button";
import { icon } from "./close-button.css";

export type { IconButtonProps as CloseButtonProps };

export function CloseButton(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <svg className={icon} viewBox="0 0 24 24" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </IconButton>
  );
}

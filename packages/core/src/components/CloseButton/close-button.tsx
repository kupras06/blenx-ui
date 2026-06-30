import { XIcon } from "../../icons";
import { IconButton, type IconButtonProps } from "../IconButton/icon-button";
import { icon } from "./close-button.css";

export type { IconButtonProps as CloseButtonProps };

export function CloseButton(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <XIcon className={icon} fontSize={20} />
    </IconButton>
  );
}

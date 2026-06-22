import clsx from "clsx";
import { Button, type ButtonProps } from "../Button/button";
import { base } from "./icon-button.css";

type IconButtonProps = Omit<ButtonProps, "size">;

export function IconButton({ className, ...props }: IconButtonProps) {
  return <Button {...props} size="icon" className={clsx(base, className)} />;
}

export type { IconButtonProps };

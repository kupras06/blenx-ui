import * as stylex from "@stylexjs/stylex";
import { Button, type ButtonProps } from "../Button/button";

type IconButtonProps = Omit<ButtonProps, "size">;

export const iconButtonStyles = stylex.create({
  base: {
    maxWidth: "100px",
    width: "fit-content",
  },
});
export function IconButton({ style, ...props }: IconButtonProps) {
  return <Button {...props} size="icon" style={[iconButtonStyles.base, style]} />;
}

export type { IconButtonProps };

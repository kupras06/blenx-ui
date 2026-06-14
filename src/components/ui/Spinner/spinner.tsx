import { SpinnerIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import { spinnerStyles } from "./spinner.styles";
import type { PropsWithStylex } from "@/utils/stylex.utils";

type Props = PropsWithStylex<React.ComponentProps<typeof SpinnerIcon>>;

export function Spinner({ style, ...props }: Props): React.ReactElement {
  return (
    <SpinnerIcon
      aria-label="Loading"
      role="status"
      {...stylex.props(spinnerStyles.spinner, style)}
      {...props}
    />
  );
}

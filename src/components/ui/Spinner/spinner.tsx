import { SpinnerIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { spinnerStyles } from "./spinner.styles";

type Props = PropsWithStylex<React.ComponentProps<typeof SpinnerIcon>>;

export function Spinner({ style, ...props }: Props): React.ReactElement {
	return (
		<output
			aria-label="Loading"
			{...stylex.props(spinnerStyles.spinner, style)}
		>
			<SpinnerIcon {...props} />
		</output>
	);
}

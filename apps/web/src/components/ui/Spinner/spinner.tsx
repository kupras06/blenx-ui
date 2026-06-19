import { CircleNotchIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { spinnerStyles } from "./spinner.styles";

type Props = PropsWithStylex<React.ComponentProps<typeof CircleNotchIcon>>;

export function Spinner({ style, ...props }: Props): React.ReactElement {
	return (
		<CircleNotchIcon
			weight="bold"
			{...props}
			{...stylex.props(spinnerStyles.spinner, style)}
		/>
	);
}

import { mergeProps, useRender } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";
import type { ReactNode } from "react";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { alertStyles, alertVariantStyles } from "./alert.styles";

export type AlertVariant = keyof typeof alertVariantStyles;

type Props = PropsWithStylex<useRender.ComponentProps<"div">> & {
	/** Visual variant of the alert */
	variant?: AlertVariant;
	/** Optional icon to display */
	icon?: ReactNode;
};

/**
 * Alert component for displaying contextual feedback messages.
 *
 * Supports `info`, `success`, `warning`, and `error` variants.
 * Optionally accepts an `icon` rendered before the message content.
 */
export function Alert({
	variant = "info",
	icon,
	style,
	render,
	children,
	...props
}: Props) {
	const sx = stylex.props(alertStyles.root, alertVariantStyles[variant], style);
	const merged = mergeProps(
		props,
		{
			children: (
				<>
					{icon && <span {...stylex.props(alertIconStyles.root)}>{icon}</span>}
					<span {...stylex.props(alertIconStyles.content)}>{children}</span>
				</>
			),
		},
		sx,
	);
	return useRender({ defaultTagName: "div", props: merged, render });
}

const alertIconStyles = stylex.create({
	root: {
		flexShrink: 0,
		display: "flex",
		alignItems: "center",
		lineHeight: 0,
	},
	content: {
		flex: 1,
	},
});

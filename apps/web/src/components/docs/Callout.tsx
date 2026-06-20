import { Info, Warning, CheckCircle, XCircle } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import { Box, Text } from "@blenx-dev/ui/components";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { borderRadius } from "@blenx-dev/ui/lib/theme/tokens.stylex";

type CalloutType = "info" | "warning" | "success" | "error";

interface CalloutProps {
	type?: CalloutType;
	children?: React.ReactNode;
}

const variantStyles = stylex.create({
	info: {
		backgroundColor: theme.sentimentInfoSubtle,
		borderLeftColor: theme.sentimentInfo,
		color: theme.sentimentInfo,
	},
	warning: {
		backgroundColor: theme.sentimentWarningSubtle,
		borderLeftColor: theme.sentimentWarning,
		color: theme.sentimentWarning,
	},
	success: {
		backgroundColor: theme.sentimentPositiveSubtle,
		borderLeftColor: theme.sentimentPositive,
		color: theme.sentimentPositive,
	},
	error: {
		backgroundColor: theme.sentimentNegativeSubtle,
		borderLeftColor: theme.sentimentNegative,
		color: theme.sentimentNegative,
	},
});

const icons = {
	info: Info,
	warning: Warning,
	success: CheckCircle,
	error: XCircle,
};

const styles = stylex.create({
	root: {
		display: "flex",
		gap: 12,
		padding: "12px 16px",
		borderRadius: borderRadius.medium,
		borderLeftWidth: 3,
		borderLeftStyle: "solid",
	},
	icon: {
		flexShrink: 0,
		marginTop: 2,
	},
	content: {
		color: theme.contentPrimary,
		flexGrow: 1,
		minWidth: 0,
	},
});

function Callout({ type = "info", children }: CalloutProps) {
	const Icon = icons[type];

	return (
		<Box
			{...stylex.props(styles.root, variantStyles[type])}
			role="alert"
			aria-live="polite"
		>
			<Box {...stylex.props(styles.icon)}>
				<Icon size={20} weight="fill" />
			</Box>
			<Box {...stylex.props(styles.content)}>
				{typeof children === "string" ? (
					<Text variant="body2">{children}</Text>
				) : (
					children
				)}
			</Box>
		</Box>
	);
}

export { Callout };
export type { CalloutProps, CalloutType };

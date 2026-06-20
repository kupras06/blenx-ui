import * as stylex from "@stylexjs/stylex";
import type React from "react";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";

const styles = stylex.create({
	link: {
		color: theme.primary,
		textDecoration: "underline",
		textUnderlineOffset: 2,
		textDecorationColor: {
			default: "transparent",
			[":hover"]: theme.primary,
		},
		transition: "text-decoration-color 200ms ease",
		cursor: "pointer",
	},
});

interface DocsLinkProps {
	href?: string;
	children?: React.ReactNode;
}

function DocsLink({ href, children, ...props }: DocsLinkProps) {
	const isExternal = href?.startsWith("http://") || href?.startsWith("https://");

	return (
		<a
			{...stylex.props(styles.link)}
			href={href}
			target={isExternal ? "_blank" : undefined}
			rel={isExternal ? "noopener noreferrer" : undefined}
			{...props}
		>
			{children}
		</a>
	);
}

export { DocsLink };

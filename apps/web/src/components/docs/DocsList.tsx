import * as stylex from "@stylexjs/stylex";
import type React from "react";
import { Text } from "@blenx-dev/ui/components";

const listStyles = stylex.create({
	ul: {
		paddingLeft: 24,
		marginBlock: 0,
		listStyle: "disc",
	},
	ol: {
		paddingLeft: 24,
		marginBlock: 0,
		listStyle: "decimal",
	},
	li: {
		marginBottom: 4,
	},
});

interface DocsUlProps {
	children: React.ReactNode;
}

function DocsUl({ children }: DocsUlProps) {
	return <ul {...stylex.props(listStyles.ul)}>{children}</ul>;
}

interface DocsOlProps {
	children: React.ReactNode;
}

function DocsOl({ children }: DocsOlProps) {
	return <ol {...stylex.props(listStyles.ol)}>{children}</ol>;
}

interface DocsLiProps {
	children: React.ReactNode;
}

function DocsLi({ children }: DocsLiProps) {
	return (
		<li {...stylex.props(listStyles.li)}>
			<Text variant="body1" as="span">
				{children}
			</Text>
		</li>
	);
}

export { DocsUl, DocsOl, DocsLi };

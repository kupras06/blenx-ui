import * as stylex from "@stylexjs/stylex";
import type React from "react";
import { Box, VStack } from "@blenx-dev/ui/components";

const styles = stylex.create({
	root: {
		maxWidth: 768,
		width: "100%",
	},
});

interface DocsContentProps {
	children: React.ReactNode;
}

function DocsContent({ children }: DocsContentProps) {
	return (
		<Box {...stylex.props(styles.root)}>
			<VStack gap="xlarge">
				{children}
			</VStack>
		</Box>
	);
}

export { DocsContent };

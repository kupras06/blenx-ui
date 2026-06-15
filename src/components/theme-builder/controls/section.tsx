import { CaretDownIcon, CaretRightIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import type { ReactNode } from "react";
import { spacing } from "@/lib/theme/tokens.stylex";
import { Text, VStack } from "@/components/ui";

interface SectionProps {
	title: string;
	children: ReactNode;
	defaultOpen?: boolean;
}

const styles = stylex.create({
	trigger: {
		display: "flex",
		alignItems: "center",
		gap: spacing["2"],
		cursor: "pointer",
		border: "none",
		background: "none",
		padding: 0,
		paddingBlock: spacing["1"],
		width: "100%",
	},
});

export function Section({
	title,
	children,
	defaultOpen = true,
}: SectionProps) {
	const [open, setOpen] = useState(defaultOpen);
	return (
		<VStack gap="small">
			<button
				type="button"
				{...stylex.props(styles.trigger)}
				onClick={() => setOpen(!open)}
			>
				{open ? <CaretDownIcon size={16} /> : <CaretRightIcon size={16} />}
				<Text variant="h4">{title}</Text>
			</button>
			{open && <VStack gap="small">{children}</VStack>}
		</VStack>
	);
}

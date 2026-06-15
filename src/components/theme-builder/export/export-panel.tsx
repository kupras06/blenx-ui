import { useCallback, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { borderRadius, fontSize, spacing } from "@/lib/theme/tokens.stylex";
import {
	AlertDialog,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogPopup,
	AlertDialogTitle,
	AlertDialogTrigger,
	Button,
	Separator,
	VStack,
} from "@/components/ui";
import { useThemeBuilder } from "../theme-builder-context";
import { Section } from "../controls/section";

const styles = stylex.create({
	buttonRow: {
		display: "flex",
		flexDirection: "column",
		gap: spacing["2"],
	},
	copyFeedback: {
		fontSize: fontSize.xsmall,
		color: theme.sentimentPositive,
		transition: "opacity 0.2s ease",
	},
	codePreview: {
		fontFamily: '"DM Mono", monospace',
		fontSize: fontSize.xsmall,
		color: theme.contentSecondary,
		backgroundColor: theme.backgroundSubtle,
		borderRadius: borderRadius.small,
		padding: spacing["2"],
		overflowX: "auto",
		whiteSpace: "pre",
		lineHeight: 1.5,
		maxHeight: 200,
	},
});

export function ExportPanel() {
	const tokens = useThemeBuilder((s) => s.tokens);
	const resetTokens = useThemeBuilder((s) => s.resetTokens);
	const [copied, setCopied] = useState("");
	const [showReset, setShowReset] = useState(false);

	const generateJSON = useCallback(() => {
		const json = JSON.stringify(tokens, null, 2);
		const blob = new Blob([json], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "blenx-theme.json";
		a.click();
		URL.revokeObjectURL(url);
	}, [tokens]);

	const generateStyleXCode = useCallback(() => {
		const themeEntries = Object.entries(theme)
			.filter(([key]) => key !== "__varGroupHash__")
			.map(([key]) => {
				const value =
					key === "fontSize"
						? tokens.baseFontSize
						: key === "borderRadius"
							? tokens.radius
							: tokens[key as keyof typeof tokens]?.toString();
				if (!value) return null;
				return `    ${key}: "${value}",`;
			})
			.filter(Boolean) as string[];

		return `import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";

export const customTheme = stylex.createTheme(theme, {
${themeEntries.join("\n")}
});`;
	}, [tokens]);

	const copyJSON = useCallback(async () => {
		try {
			await navigator.clipboard.writeText(JSON.stringify(tokens, null, 2));
			setCopied("json");
			setTimeout(() => setCopied(""), 2000);
		} catch {
			// fallback
		}
	}, [tokens]);

	const copyStyleX = useCallback(async () => {
		try {
			const code = generateStyleXCode();
			await navigator.clipboard.writeText(code);
			setCopied("stylex");
			setTimeout(() => setCopied(""), 2000);
		} catch {
			// fallback
		}
	}, [generateStyleXCode]);

	const handleReset = useCallback(() => {
		resetTokens();
		setShowReset(false);
	}, [resetTokens]);

	return (
		<Section title="Export">
			<div {...stylex.props(styles.buttonRow)}>
				<Button variant="outline" size="small" onClick={generateJSON}>
					Export JSON
				</Button>
				<Button
					variant="outline"
					size="small"
					onClick={copyJSON}
				>
					{copied === "json" ? "Copied!" : "Copy JSON"}
				</Button>
				<Button
					variant="outline"
					size="small"
					onClick={copyStyleX}
				>
					{copied === "stylex" ? "Copied!" : "Copy StyleX Theme"}
				</Button>
			</div>

			{copied === "stylex" && (
				<div {...stylex.props(styles.copyFeedback)} style={{ marginTop: spacing["1"] }}>
					StyleX theme code copied to clipboard!
				</div>
			)}

			<Separator style={{ marginBlock: spacing["2"] }} />

			<AlertDialog open={showReset} onOpenChange={setShowReset}>
				<AlertDialogTrigger>
				<Button variant="danger" size="small" fullWidth>
					Reset to Defaults
				</Button>
			</AlertDialogTrigger>
			<AlertDialogPopup>
				<AlertDialogHeader>
					<AlertDialogTitle>Reset Theme</AlertDialogTitle>
					<AlertDialogDescription>
						This will restore all tokens to their default values. This action
						cannot be undone.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<VStack gap="small" padding="medium">
					<Button variant="danger" fullWidth onClick={handleReset}>
						Reset
					</Button>
					<Button
						variant="ghost"
						fullWidth
						onClick={() => setShowReset(false)}
					>
						Cancel
					</Button>
				</VStack>
			</AlertDialogPopup>
			</AlertDialog>
		</Section>
	);
}

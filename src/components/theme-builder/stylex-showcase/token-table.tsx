import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { borderRadius, fontSize, spacing } from "@/lib/theme/tokens.stylex";
import { Section } from "../controls/section";
import { componentTokenMap } from "../preview/component-token-map";
import { useThemeBuilder } from "../theme-builder-context";

const styles = stylex.create({
	table: {
		width: "100%",
		borderCollapse: "collapse",
		fontSize: fontSize.xsmall,
	},
	header: {
		textAlign: "left",
		padding: spacing["1"],
		color: theme.contentSecondary,
		fontWeight: 600,
		borderBottomWidth: 1,
		borderBottomStyle: "solid",
		borderBottomColor: theme.borderSubtle,
	},
	cell: {
		padding: spacing["1"],
		color: theme.contentPrimary,
		borderBottomWidth: 1,
		borderBottomStyle: "solid",
		borderBottomColor: theme.borderSubtle,
		fontFamily: '"DM Mono", monospace',
		fontSize: fontSize.xsmall,
	},
	code: {
		color: theme.contentAccent,
		fontFamily: '"DM Mono", monospace',
		fontSize: fontSize.xsmall,
	},
	mono: {
		fontFamily: '"DM Mono", monospace',
		fontSize: fontSize.xsmall,
	},
});

const displayTokens: Array<{ key: keyof typeof theme; label: string }> = [
	{ key: "primary", label: "primary" },
	{ key: "primarySubtle", label: "primarySubtle" },
	{ key: "secondary", label: "secondary" },
	{ key: "background", label: "background" },
	{ key: "backgroundSubtle", label: "backgroundSubtle" },
	{ key: "surface", label: "surface" },
	{ key: "surfaceSubtle", label: "surfaceSubtle" },
	{ key: "surfaceRaised", label: "surfaceRaised" },
	{ key: "surfaceHover", label: "surfaceHover" },
	{ key: "surfaceOverlay", label: "surfaceOverlay" },
	{ key: "border", label: "border" },
	{ key: "borderSubtle", label: "borderSubtle" },
	{ key: "borderStrong", label: "borderStrong" },
	{ key: "contentPrimary", label: "contentPrimary" },
	{ key: "contentSecondary", label: "contentSecondary" },
	{ key: "contentDisabled", label: "contentDisabled" },
	{ key: "contentAccent", label: "contentAccent" },
	{ key: "contentOnPrimary", label: "contentOnPrimary" },
	{ key: "contentInverse", label: "contentInverse" },
	{ key: "sentimentNegative", label: "sentimentNegative" },
	{ key: "sentimentNegativeSubtle", label: "sentimentNegativeSubtle" },
	{ key: "sentimentPositive", label: "sentimentPositive" },
	{ key: "sentimentPositiveSubtle", label: "sentimentPositiveSubtle" },
	{ key: "sentimentWarning", label: "sentimentWarning" },
	{ key: "sentimentWarningSubtle", label: "sentimentWarningSubtle" },
	{ key: "sentimentInfo", label: "sentimentInfo" },
	{ key: "sentimentInfoSubtle", label: "sentimentInfoSubtle" },
	{ key: "focusRing", label: "focusRing" },
	{ key: "shadowSm", label: "shadowSm" },
	{ key: "shadowMd", label: "shadowMd" },
	{ key: "shadowLg", label: "shadowLg" },
	{ key: "shadowXl", label: "shadowXl" },
	{ key: "fontSize", label: "fontSize" },
	{ key: "borderRadius", label: "borderRadius" },
];

interface TokenTableProps {
	noSection?: boolean;
}

export function TokenTable({ noSection }: TokenTableProps) {
	const tokens = useThemeBuilder((s) => s.tokens);
	const setSelectedToken = useThemeBuilder((s) => s.setSelectedToken);
	const selectedToken = useThemeBuilder((s) => s.selectedToken);

	const content = (
		<table {...stylex.props(styles.table)}>
			<thead>
				<tr>
					<th {...stylex.props(styles.header)}>Token</th>
					<th {...stylex.props(styles.header)}>Value</th>
					<th {...stylex.props(styles.header)}>Components</th>
				</tr>
			</thead>
			<tbody>
				{displayTokens.map(({ key, label }) => {
					const value =
						key === "fontSize"
							? tokens.baseFontSize
							: key === "borderRadius"
								? tokens.radius
								: (tokens[key as keyof typeof tokens]?.toString() ?? "-");

					const components = Object.entries(componentTokenMap)
						.filter(([, tokenList]) => tokenList.some((t) => t.token === key))
						.map(([name]) => name)
						.join(", ");

					const isSelected = selectedToken === key;
					return (
						<tr
							key={key}
							onMouseEnter={() => setSelectedToken(key as keyof typeof tokens)}
							onMouseLeave={() => setSelectedToken(null)}
							{...stylex.props(
								isSelected && {
									backgroundColor: theme.focusRing + "15",
								},
							)}
							style={{ cursor: "pointer" }}
						>
							<td {...stylex.props(styles.cell, styles.code)} data-token={key}>
								{label}
							</td>
							<td {...stylex.props(styles.cell)}>{value}</td>
							<td {...stylex.props(styles.cell, styles.mono)}>
								{components || "-"}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);

	if (noSection) return content;

	return <Section title="Theme Variables">{content}</Section>;
}

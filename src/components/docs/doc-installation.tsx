import * as stylex from "@stylexjs/stylex";
import { Box } from "../ui/Box/box";
import { Separator } from "../ui/Separator/separator";
import { HStack, VStack } from "../ui/Stack/stack";
import { Surface } from "../ui/Surface/surface";
import { Text } from "../ui/Text/text";

const styles = stylex.create({
	fileItem: {
		display: "flex",
		alignItems: "center",
		gap: "var(--space-2)",
		padding: "var(--space-1) 0",
	},
	depList: {
		display: "flex",
		flexWrap: "wrap",
		gap: "var(--space-1)",
	},
	depChip: {
		backgroundColor: "var(--color-surface-sunken)",
		padding: "var(--space-1) var(--space-2)",
		borderRadius: "var(--border-radius-sm)",
		fontFamily: "var(--font-mono)",
		fontSize: "12px",
	},
});

interface DocInstallationProps {
	registryName: string;
	dependencies: string[];
	registryDependencies: string[];
	files: Array<{ path: string; type: string; target: string }>;
}

function DocInstallation({
	registryName,
	dependencies,
	files,
}: DocInstallationProps) {
	const cliUrl = `https://blenx-ui.vercel.app/reg/${registryName}.json`;

	const cleanTarget = (target: string) => {
		return target.replace(/^@(ui|lib|utils|components)\//, "");
	};

	const baseDeps = dependencies.filter(
		(d) =>
			d !== "@stylexjs/stylex" &&
			d !== "@phosphor-icons/react" &&
			d !== "@base-ui/react",
	);

	return (
		<VStack gap="medium">
			<Box>
				<Text variant="h3">CLI Installation</Text>
				<Text variant="body2" color="secondary">
					Install the component using the shadcn CLI:
				</Text>
				<Surface padding="small" variant="sunken">
					<Text variant="code">{`npx shadcn@latest add "${cliUrl}"`}</Text>
				</Surface>
			</Box>

			<Separator />

			<VStack>
				<Box>
					<Text variant="h3">Manual Installation</Text>
				</Box>
				<Box>
					<Text variant="h6" color="secondary">
						Required Files
					</Text>
					{files.map((file) => (
						<HStack key={file.path}>
							<Text variant="code">{cleanTarget(file.target)}</Text>
						</HStack>
					))}
				</Box>
			</VStack>

			{dependencies.length > 0 && (
				<Box>
					<Text variant="h6" color="secondary">
						Dependencies
					</Text>
					<div {...stylex.props(styles.depList)}>
						{dependencies.map((dep) => (
							<span key={dep} {...stylex.props(styles.depChip)}>
								{dep}
							</span>
						))}
					</div>
				</Box>
			)}

			{baseDeps.length > 0 && (
				<Box>
					<Text variant="h6" color="secondary">
						Additional Dependencies
					</Text>
					<div {...stylex.props(styles.depList)}>
						{baseDeps.map((dep) => (
							<span key={dep} {...stylex.props(styles.depChip)}>
								{dep}
							</span>
						))}
					</div>
				</Box>
			)}
		</VStack>
	);
}

export { DocInstallation };

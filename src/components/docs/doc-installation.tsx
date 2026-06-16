import * as stylex from "@stylexjs/stylex";
import { Badge } from "../ui";
import { Box } from "../ui/Box/box";
import { Separator } from "../ui/Separator/separator";
import { HStack, VStack } from "../ui/Stack/stack";
import { Surface } from "../ui/Surface/surface";
import { Text } from "../ui/Text/text";
import { DocCodeView } from "./doc-code-view";

const styles = stylex.create({
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

interface RegistryFile {
	target: string;
	content: string;
}

interface DocInstallationProps {
	registryName: string;
	dependencies: string[];
	files: RegistryFile[];
}

function cleanTarget(target: string): string {
	return target.replace(/^@(ui|lib|utils|components)\//, "");
}

function DocInstallation({
	registryName,
	dependencies,
	files,
}: DocInstallationProps) {
	const cliUrl = `https://blenx-ui.vercel.app/reg/${registryName}.json`;

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

			<Box>
				<Text variant="h3">Manual Installation</Text>
				<VStack gap="medium">
					{files.map((file) => (
						<Box key={file.target}>
							<Text variant="code" color="secondary">
								{cleanTarget(file.target)}
							</Text>
							<DocCodeView
								code={file.content}
								title={cleanTarget(file.target)}
							/>
						</Box>
					))}
				</VStack>
			</Box>

			{dependencies.length > 0 && (
				<Box>
					<Text variant="h6" color="secondary">
						Dependencies
					</Text>
					<HStack>
						{dependencies.map((dep) => (
							<Badge key={dep} {...stylex.props(styles.depChip)}>
								{dep}
							</Badge>
						))}
					</HStack>
				</Box>
			)}
		</VStack>
	);
}

export { DocInstallation };

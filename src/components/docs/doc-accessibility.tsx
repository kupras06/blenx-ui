import { Box } from "../ui/Box/box";
import { VStack } from "../ui/Stack/stack";
import { Text } from "../ui/Text/text";

interface DocAccessibilityProps {
	keyboard?: string[];
	aria?: string[];
}

function DocAccessibility({ keyboard, aria }: DocAccessibilityProps) {
	if ((!keyboard || keyboard.length === 0) && (!aria || aria.length === 0)) {
		return null;
	}

	return (
		<VStack gap="medium">
			{keyboard && keyboard.length > 0 && (
				<Box>
					<Text variant="h6">Keyboard Support</Text>
					<div>
						{keyboard.map((key) => (
							<Text key={key} variant="code">
								{key}
							</Text>
						))}
					</div>
				</Box>
			)}

			{aria && aria.length > 0 && (
				<Box>
					<Text variant="h6">ARIA Attributes</Text>
					<div>
						{aria.map((attr) => (
							<Text key={attr} variant="code">
								{attr}
							</Text>
						))}
					</div>
				</Box>
			)}
		</VStack>
	);
}

export { DocAccessibility };

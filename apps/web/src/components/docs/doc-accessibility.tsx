import { Box, HStack, Text, VStack } from "@blenx-dev/ui/components";

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
					<Text variant="h6" marginBottom="xsmall">
						Keyboard Support
					</Text>
					<HStack gap="xsmall">
						{keyboard.map((key) => (
							<Text key={key} variant="code" span>
								{key}
							</Text>
						))}
					</HStack>
				</Box>
			)}

			{aria && aria.length > 0 && (
				<Box>
					<Text variant="h6" marginBottom="xsmall">
						ARIA Attributes
					</Text>
					<HStack gap="xsmall">
						{aria.map((attr) => (
							<Text key={attr} variant="code">
								{attr}
							</Text>
						))}
					</HStack>
				</Box>
			)}
		</VStack>
	);
}

export { DocAccessibility };

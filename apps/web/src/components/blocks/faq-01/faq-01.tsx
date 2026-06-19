"use client";

import { useState, useMemo } from "react";
import { Text } from "@/components/ui/Text/text";
import {
	AccordionRoot,
	AccordionItem,
	AccordionHeader,
	AccordionTrigger,
	AccordionPanel,
} from "@/components/ui/Accordion/accordion";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { Box, Container, Input, VStack } from "@blenx-dev/ui/components";;

type FaqItem = {
	question: string;
	answer: string;
};

type Props = PropsWithStylex<{
	title?: string;
	description?: string;
	items: FaqItem[];
	searchable?: boolean;
}>;

export function Faq01({
	title = "Frequently asked questions",
	description,
	items,
	searchable = false,
}: Props) {
	const [searchQuery, setSearchQuery] = useState("");

	const filteredItems = useMemo(() => {
		if (!searchable || !searchQuery.trim()) return items;
		const query = searchQuery.toLowerCase();
		return items.filter(
			(item) =>
				item.question.toLowerCase().includes(query) ||
				item.answer.toLowerCase().includes(query),
		);
	}, [items, searchQuery, searchable]);

	return (
		<Container size="md">
			<VStack gap="large">
				<Box>
					<Text variant="h2" align="center">
						{title}
					</Text>
					{description && (
						<Text variant="body1" color="secondary" align="center">
							{description}
						</Text>
					)}
				</Box>

				{searchable && (
					<Input
						type="search"
						placeholder="Search questions..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						aria-label="Search frequently asked questions"
					/>
				)}

				<Box fullWidth>
					{filteredItems.length > 0 ? (
						<AccordionRoot>
							{filteredItems.map((item) => (
								<AccordionItem key={item.question}>
									<AccordionHeader>
										<AccordionTrigger>{item.question}</AccordionTrigger>
									</AccordionHeader>
									<AccordionPanel>
										<Text variant="body2">{item.answer}</Text>
									</AccordionPanel>
								</AccordionItem>
							))}
						</AccordionRoot>
					) : (
						<Text variant="body1" size="large" color="secondary">
							No questions match your search.
						</Text>
					)}
				</Box>
			</VStack>
		</Container>
	);
}

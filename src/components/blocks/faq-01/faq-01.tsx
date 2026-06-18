"use client";

import { useState, useMemo } from "react";
import * as stylex from "@stylexjs/stylex";
import { Text } from "@/components/ui/Text/text";
import {
	AccordionRoot,
	AccordionItem,
	AccordionHeader,
	AccordionTrigger,
	AccordionPanel,
} from "@/components/ui/Accordion/accordion";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { faqStyles } from "./faq-01.styles";

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
	style,
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
		<section {...stylex.props(faqStyles.section, style)}>
			<div {...stylex.props(faqStyles.inner)}>
				<div {...stylex.props(faqStyles.header)}>
					<Text variant="h2" style={faqStyles.title}>
						{title}
					</Text>
					{description && (
						<Text variant="body1" style={faqStyles.description}>
							{description}
						</Text>
					)}
				</div>

				{searchable && (
					<input
						type="search"
						placeholder="Search questions..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						aria-label="Search frequently asked questions"
						{...stylex.props(faqStyles.search)}
					/>
				)}

				<div {...stylex.props(faqStyles.accordionWrapper)}>
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
						<Text variant="body1" style={faqStyles.noResults}>
							No questions match your search.
						</Text>
					)}
				</div>
			</div>
		</section>
	);
}

import { Faq01 } from "./faq-01";

const sampleFaqs = [
	{
		question: "How do I get started?",
		answer:
			"Sign up for a free account and follow our onboarding guide. You'll be up and running in minutes.",
	},
	{
		question: "Is there a free plan?",
		answer:
			"Yes, we offer a free plan with core features and limited usage. Upgrade to a paid plan for unlimited access.",
	},
	{
		question: "Can I cancel anytime?",
		answer:
			"Absolutely. You can cancel your subscription at any time with no penalties. Your data will be available for export.",
	},
	{
		question: "Do you offer enterprise support?",
		answer:
			"Yes, enterprise plans include dedicated support, custom SLAs, and a named account manager.",
	},
];

export function Faq01DefaultDemo() {
	return <Faq01 items={sampleFaqs} />;
}

export function Faq01WithSearchDemo() {
	return (
		<Faq01
			title="Common questions"
			description="Find answers to the most frequently asked questions."
			items={sampleFaqs}
			searchable
		/>
	);
}

export const demos = [
	{ name: "Default", component: Faq01DefaultDemo },
	{ name: "With Search", component: Faq01WithSearchDemo },
];

"use client";

import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/ui/Button/button";
import { Text } from "@/components/ui/Text/text";
import { Card, CardBody, CardHeader } from "@/components/ui/Card/card";
import { Badge } from "@/components/ui/Badge/badge";
import { Separator } from "@/components/ui/Separator/separator";
import { Switch } from "@/components/ui/Switch/switch";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { pricingStyles } from "./pricing-01.styles";

type Plan = {
	name: string;
	description?: string;
	monthlyPrice: number;
	yearlyPrice: number;
	features: string[];
	popular?: boolean;
	cta: { label: string; handleClick: () => void };
};

type Props = PropsWithStylex<{
	title?: string;
	description?: string;
	plans?: Plan[];
	onSelectPlan?: (plan: Plan, billing: "monthly" | "yearly") => void;
}>;

const defaultPlans: Plan[] = [
	{
		name: "Free",
		description: "For individuals getting started",
		monthlyPrice: 0,
		yearlyPrice: 0,
		features: [
			"Up to 3 projects",
			"Basic analytics",
			"Community support",
			"1GB storage",
		],
		cta: { label: "Get started", handleClick: () => {} },
	},
	{
		name: "Pro",
		description: "For growing teams and professionals",
		monthlyPrice: 29,
		yearlyPrice: 290,
		features: [
			"Unlimited projects",
			"Advanced analytics",
			"Priority support",
			"50GB storage",
			"Custom domains",
			"API access",
		],
		popular: true,
		cta: { label: "Start free trial", handleClick: () => {} },
	},
	{
		name: "Enterprise",
		description: "For large organizations",
		monthlyPrice: 99,
		yearlyPrice: 990,
		features: [
			"Everything in Pro",
			"Unlimited storage",
			"Dedicated support",
			"Custom integrations",
			"SLA guarantee",
			"Team training",
		],
		cta: { label: "Contact sales", handleClick: () => {} },
	},
];

export function Pricing01({
	title = "Simple, transparent pricing",
	description = "Choose the plan that fits your needs. No hidden fees.",
	plans = defaultPlans,
	style,
}: Props) {
	const [yearly, setYearly] = useState(false);
	const billing = yearly ? "yearly" : "monthly";

	return (
		<section {...stylex.props(pricingStyles.section, style)}>
			<div {...stylex.props(pricingStyles.header)}>
				<Text variant="h2">{title}</Text>
				<Text variant="body1" style={pricingStyles.description}>
					{description}
				</Text>
				<div {...stylex.props(pricingStyles.toggle)}>
					<Text variant="body2" style={pricingStyles.billingLabel}>
						Monthly
					</Text>
					<Switch
						checked={yearly}
						onCheckedChange={(c) => setYearly(Boolean(c))}
					/>
					<Text variant="body2" style={pricingStyles.billingLabel}>
						Yearly
					</Text>
					{yearly && (
						<span {...stylex.props(pricingStyles.savingsBadge)}>
							Save up to 20%
						</span>
					)}
				</div>
			</div>

			<div {...stylex.props(pricingStyles.grid)}>
				{plans.map((plan) => (
					<Card
						key={plan.name}
						style={plan.popular ? pricingStyles.popularBorder : undefined}
					>
						{plan.popular && (
							<Badge variant="primary" style={pricingStyles.popularBadge}>
								Most popular
							</Badge>
						)}
						<CardHeader>
							<Text variant="h4">{plan.name}</Text>
							{plan.description && (
								<Text variant="body2">{plan.description}</Text>
							)}
							<div>
								<Text style={pricingStyles.planPrice}>
									${billing === "yearly" ? plan.yearlyPrice : plan.monthlyPrice}
								</Text>
								<Text variant="caption" style={pricingStyles.planPeriod}>
									{billing === "yearly" ? "/year" : "/month"}
								</Text>
							</div>
						</CardHeader>
						<CardBody>
							<Separator tone="subtle" />
							<div {...stylex.props(pricingStyles.features)}>
								{plan.features.map((feature) => (
									<div key={feature} {...stylex.props(pricingStyles.feature)}>
										<svg
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											{...stylex.props(pricingStyles.featureIcon)}
											aria-hidden="true"
										>
											<path d="M20 6 9 17l-5-5" />
										</svg>
										{feature}
									</div>
								))}
							</div>
							<Button
								variant={plan.popular ? "solid" : "outline"}
								fullWidth
								onClick={plan.cta.handleClick}
								style={pricingStyles.ctaMargin}
							>
								{plan.cta.label}
							</Button>
						</CardBody>
					</Card>
				))}
			</div>
		</section>
	);
}

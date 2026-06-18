import { Hero01 } from "./hero-01";

export function Hero01DefaultDemo() {
	return (
		<Hero01
			headline="Build better interfaces faster"
			subheadline="A modern design system with accessible, composable components powered by StyleX and Base UI."
			primaryCta={{ label: "Get started", handleClick: () => {} }}
			secondaryCta={{ label: "Learn more", handleClick: () => {} }}
		/>
	);
}

export function Hero01WithImageDemo() {
	return (
		<Hero01
			headline="Analytics at your fingertips"
			subheadline="Real-time dashboards and reports to help you make data-driven decisions."
			primaryCta={{ label: "Start free trial", handleClick: () => {} }}
			secondaryCta={{ label: "Watch demo", handleClick: () => {} }}
			imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=540&q=80"
			imageAlt="Analytics dashboard preview"
			backgroundVariant="muted"
		/>
	);
}

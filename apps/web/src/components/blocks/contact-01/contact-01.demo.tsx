import { Contact01 } from "./contact-01";

export function Contact01DefaultDemo() {
	return (
		<Contact01
			onSubmit={(values) => console.log("Contact form:", values)}
			contactInfo={{
				address: "123 Main St, San Francisco, CA 94102",
				phone: "+1 (555) 123-4567",
				email: "hello@example.com",
			}}
		/>
	);
}

export function Contact01SimpleDemo() {
	return (
		<Contact01
			title="Send us a message"
			description="We'll get back to you within 24 hours."
			onSubmit={(values) => console.log("Contact form:", values)}
		/>
	);
}

export const demos = [
	{ name: "Default", component: Contact01DefaultDemo },
	{ name: "Simple", component: Contact01SimpleDemo },
];

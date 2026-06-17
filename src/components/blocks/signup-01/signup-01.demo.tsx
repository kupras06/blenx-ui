import { Signup01 } from "./signup-01";

export function Signup01DefaultDemo() {
	return (
		<Signup01
			onSubmit={(values) => console.log("Signup:", values)}
			socialProviders={[
				{ provider: "GitHub", onClick: () => {} },
				{ provider: "Google", onClick: () => {} },
			]}
			termsUrl="#"
			loginLink={{ label: "Sign in", onClick: () => {} }}
		/>
	);
}

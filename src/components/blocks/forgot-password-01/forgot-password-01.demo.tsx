import { ForgotPassword01 } from "./forgot-password-01";

export function ForgotPassword01DefaultDemo() {
	return (
		<ForgotPassword01
			onSubmit={(email) => console.log("Reset link sent to:", email)}
			backToLoginLink={{ label: "Back to login", handleClick: () => {} }}
		/>
	);
}

export const demos = [{ name: "Default", component: ForgotPassword01DefaultDemo }];

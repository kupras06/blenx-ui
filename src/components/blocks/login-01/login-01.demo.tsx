import { Login01 } from "./login-01";

export function Login01DefaultDemo() {
	return (
		<Login01
			onSubmit={(values) => console.log("Login:", values)}
			socialProviders={[
				{ provider: "GitHub", handleClick: () => {} },
				{ provider: "Google", handleClick: () => {} },
			]}
			links={{
				forgotPassword: { label: "Forgot password?", handleClick: () => {} },
				signUp: { label: "Create an account", handleClick: () => {} },
			}}
		/>
	);
}

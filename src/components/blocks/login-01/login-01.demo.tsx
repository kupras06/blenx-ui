import { Login01 } from "./login-01";

export function Login01DefaultDemo() {
	return (
		<Login01
			onSubmit={(values) => console.log("Login:", values)}
			socialProviders={[
				{ provider: "GitHub", onClick: () => {} },
				{ provider: "Google", onClick: () => {} },
			]}
			links={{
				forgotPassword: { label: "Forgot password?", onClick: () => {} },
				signUp: { label: "Create an account", onClick: () => {} },
			}}
		/>
	);
}

import { Login02 } from "./login-02";

export function Login02PasswordFlowDemo() {
	return (
		<Login02
			flow="password"
			onSubmitEmail={(email) => console.log("Email:", email)}
			onSubmitPassword={(email, password) =>
				console.log("Login:", { email, password })
			}
		/>
	);
}

export function Login02MagicLinkDemo() {
	return (
		<Login02
			flow="magic-link"
			onRequestMagicLink={(email) => console.log("Magic link sent to:", email)}
		/>
	);
}

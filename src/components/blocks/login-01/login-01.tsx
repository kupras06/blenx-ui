"use client";

import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/ui/Button/button";
import { Input, Label } from "@/components/ui/Input/input";
import { Text } from "@/components/ui/Text/text";
import { Checkbox } from "@/components/ui/Checkbox/checkbox";
import { Separator } from "@/components/ui/Separator/separator";
import { Card, CardBody } from "@/components/ui/Card/card";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { loginStyles } from "./login-01.styles";

type SocialProvider = {
	provider: string;
	onClick?: () => void;
};

type Links = {
	forgotPassword?: { label: string; onClick: () => void };
	signUp?: { label: string; onClick: () => void };
};

type FormValues = {
	email: string;
	password: string;
	rememberMe: boolean;
};

type Props = PropsWithStylex<{
	title?: string;
	description?: string;
	logo?: React.ReactNode;
	onSubmit?: (values: FormValues) => void;
	socialProviders?: SocialProvider[];
	links?: Links;
}>;

export function Login01({
	title = "Welcome back",
	description = "Sign in to your account to continue",
	logo,
	onSubmit,
	socialProviders,
	links,
	style,
}: Props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit?.({ email, password, rememberMe });
	};

	return (
		<div {...stylex.props(loginStyles.container, style)}>
			<Card {...stylex.props(loginStyles.card)}>
				<CardBody {...stylex.props(loginStyles.cardBody)}>
					<div {...stylex.props(loginStyles.header)}>
						{logo && <div {...stylex.props(loginStyles.logo)}>{logo}</div>}
						<Text variant="h3" style={loginStyles.title}>
							{title}
						</Text>
						<Text variant="body2" style={loginStyles.description}>
							{description}
						</Text>
					</div>

					<form
						onSubmit={handleSubmit}
						aria-label="Sign in form"
						{...stylex.props(loginStyles.form)}
					>
						<div {...stylex.props(loginStyles.fieldGroup)}>
							<Label htmlFor="login-email">Email</Label>
							<Input
								id="login-email"
								type="email"
								placeholder="name@example.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								autoComplete="email"
							/>
						</div>

						<div {...stylex.props(loginStyles.fieldGroup)}>
							<Label htmlFor="login-password">Password</Label>
							<Input
								id="login-password"
								type="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								autoComplete="current-password"
							/>
						</div>

						<div {...stylex.props(loginStyles.checkboxRow)}>
							<label
								htmlFor="remember-me"
								{...stylex.props(loginStyles.checkboxLabel)}
							>
								<Checkbox
									id="remember-me"
									checked={rememberMe}
									onCheckedChange={(checked) =>
										setRememberMe(checked as boolean)
									}
								/>
								Remember me
							</label>
							{links?.forgotPassword && (
								<button
									type="button"
									onClick={links.forgotPassword.onClick}
									{...stylex.props(loginStyles.forgotLink)}
								>
									{links.forgotPassword.label ?? "Forgot password?"}
								</button>
							)}
						</div>

						<Button type="submit" variant="primary" fullWidth>
							Sign in
						</Button>
					</form>

					{socialProviders && socialProviders.length > 0 && (
						<div {...stylex.props(loginStyles.socialSection)}>
							<Separator label="Or continue with" tone="subtle" />
							<div {...stylex.props(loginStyles.socialButtons)}>
								{socialProviders.map((provider) => (
									<Button
										key={provider.provider}
										variant="outline"
										onClick={provider.onClick}
										style={loginStyles.socialButton}
									>
										{provider.provider}
									</Button>
								))}
							</div>
						</div>
					)}

					{links?.signUp && (
						<div {...stylex.props(loginStyles.footer)}>
							<Text variant="body2" span>
								Don&apos;t have an account?{" "}
							</Text>
							<button
								type="button"
								onClick={links.signUp.onClick}
								{...stylex.props(loginStyles.footerLink)}
							>
								{links.signUp.label ?? "Sign up"}
							</button>
						</div>
					)}
				</CardBody>
			</Card>
		</div>
	);
}

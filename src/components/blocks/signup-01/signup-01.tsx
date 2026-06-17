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
import { signupStyles } from "./signup-01.styles";

type SocialProvider = {
	provider: string;
	onClick?: () => void;
};

type FormValues = {
	fullName: string;
	email: string;
	password: string;
	acceptedTerms: boolean;
};

type Props = PropsWithStylex<{
	title?: string;
	description?: string;
	logo?: React.ReactNode;
	onSubmit?: (values: FormValues) => void;
	socialProviders?: SocialProvider[];
	termsUrl?: string;
	loginLink?: { label: string; onClick: () => void };
}>;

export function Signup01({
	title = "Create an account",
	description = "Enter your details to get started",
	logo,
	onSubmit,
	socialProviders,
	termsUrl,
	loginLink,
	style,
}: Props) {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [acceptedTerms, setAcceptedTerms] = useState(false);
	const [passwordError, setPasswordError] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setPasswordError("Passwords do not match");
			return;
		}
		setPasswordError("");
		onSubmit?.({ fullName, email, password, acceptedTerms });
	};

	return (
		<div {...stylex.props(signupStyles.container, style)}>
			<Card {...stylex.props(signupStyles.card)}>
				<CardBody {...stylex.props(signupStyles.cardBody)}>
					<div {...stylex.props(signupStyles.header)}>
						{logo && <div {...stylex.props(signupStyles.header)}>{logo}</div>}
						<Text variant="h3" style={signupStyles.title}>
							{title}
						</Text>
						<Text variant="body2" style={signupStyles.description}>
							{description}
						</Text>
					</div>

					<form
						onSubmit={handleSubmit}
						aria-label="Sign up form"
						{...stylex.props(signupStyles.form)}
					>
						<div {...stylex.props(signupStyles.fieldGroup)}>
							<Label htmlFor="signup-name">Full name</Label>
							<Input
								id="signup-name"
								type="text"
								placeholder="Jane Doe"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
								required
								autoComplete="name"
							/>
						</div>

						<div {...stylex.props(signupStyles.fieldGroup)}>
							<Label htmlFor="signup-email">Email</Label>
							<Input
								id="signup-email"
								type="email"
								placeholder="jane@example.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								autoComplete="email"
							/>
						</div>

						<div {...stylex.props(signupStyles.fieldGroup)}>
							<Label htmlFor="signup-password">Password</Label>
							<Input
								id="signup-password"
								type="password"
								placeholder="Create a password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
									setPasswordError("");
								}}
								required
								autoComplete="new-password"
								error={passwordError}
							/>
							<Text variant="caption" style={signupStyles.passwordHint}>
								At least 8 characters with a number and a letter
							</Text>
						</div>

						<div {...stylex.props(signupStyles.fieldGroup)}>
							<Label htmlFor="signup-confirm">Confirm password</Label>
							<Input
								id="signup-confirm"
								type="password"
								placeholder="Confirm your password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
								autoComplete="new-password"
								error={passwordError}
							/>
						</div>

						<div {...stylex.props(signupStyles.termsRow)}>
							<label {...stylex.props(signupStyles.termsLabel)}>
								<Checkbox
									checked={acceptedTerms}
									onCheckedChange={(checked) =>
										setAcceptedTerms(checked as boolean)
									}
								/>
								<span {...stylex.props(signupStyles.termsText)}>
									I agree to the{" "}
									<button
										type="button"
										onClick={() => {
											if (termsUrl) window.open(termsUrl, "_blank");
										}}
										{...stylex.props(signupStyles.termsLink)}
									>
										Terms of Service
									</button>{" "}
									and{" "}
									<button
										type="button"
										onClick={() => {
											if (termsUrl) window.open(termsUrl, "_blank");
										}}
										{...stylex.props(signupStyles.termsLink)}
									>
										Privacy Policy
									</button>
								</span>
							</label>
						</div>

						<Button type="submit" variant="primary" fullWidth>
							Create account
						</Button>
					</form>

					{socialProviders && socialProviders.length > 0 && (
						<div {...stylex.props(signupStyles.socialSection)}>
							<Separator label="Or sign up with" tone="subtle" />
							<div {...stylex.props(signupStyles.socialButtons)}>
								{socialProviders.map((provider) => (
									<Button
										key={provider.provider}
										variant="outline"
										onClick={provider.onClick}
										style={signupStyles.socialButton}
									>
										{provider.provider}
									</Button>
								))}
							</div>
						</div>
					)}

					{loginLink && (
						<div {...stylex.props(signupStyles.footer)}>
							<Text variant="body2" span>
								Already have an account?{" "}
							</Text>
							<button
								type="button"
								onClick={loginLink.onClick}
								{...stylex.props(signupStyles.footerLink)}
							>
								{loginLink.label ?? "Sign in"}
							</button>
						</div>
					)}
				</CardBody>
			</Card>
		</div>
	);
}

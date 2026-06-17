"use client";

import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/ui/Button/button";
import { Input, Label } from "@/components/ui/Input/input";
import { Text } from "@/components/ui/Text/text";
import { Card, CardBody } from "@/components/ui/Card/card";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { forgotPasswordStyles } from "./forgot-password-01.styles";

type Props = PropsWithStylex<{
	title?: string;
	onSubmit?: (email: string) => void;
	backToLoginLink?: { label: string; onClick: () => void };
}>;

export function ForgotPassword01({
	title = "Forgot your password?",
	onSubmit,
	backToLoginLink,
	style,
}: Props) {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) {
			setError("Email is required");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError("Please enter a valid email address");
			return;
		}
		setError("");
		onSubmit?.(email);
		setSubmitted(true);
	};

	return (
		<div {...stylex.props(forgotPasswordStyles.container, style)}>
			<Card {...stylex.props(forgotPasswordStyles.card)}>
				<CardBody {...stylex.props(forgotPasswordStyles.cardBody)}>
					{submitted ? (
						<div {...stylex.props(forgotPasswordStyles.success)}>
							<div {...stylex.props(forgotPasswordStyles.successIcon)}>
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
								</svg>
							</div>
							<Text variant="h4">Check your email</Text>
							<Text variant="body2" style={forgotPasswordStyles.successMessage}>
								We&apos;ve sent a password reset link to{" "}
								<strong>{email}</strong>. Please check your inbox and follow the
								instructions.
							</Text>
							{backToLoginLink && (
								<Button variant="ghost" onClick={backToLoginLink.onClick}>
									{backToLoginLink.label ?? "Back to login"}
								</Button>
							)}
						</div>
					) : (
						<>
							<div {...stylex.props(forgotPasswordStyles.header)}>
								<Text variant="h3">{title}</Text>
								<Text variant="body2" style={forgotPasswordStyles.description}>
									Enter the email address associated with your account and
									we&apos;ll send you a link to reset your password.
								</Text>
							</div>

							<form
								onSubmit={handleSubmit}
								aria-label="Forgot password form"
								{...stylex.props(forgotPasswordStyles.form)}
							>
								<div {...stylex.props(forgotPasswordStyles.fieldGroup)}>
									<Label htmlFor="forgot-email">Email</Label>
									<Input
										id="forgot-email"
										type="email"
										placeholder="name@example.com"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
											setError("");
										}}
										required
										autoComplete="email"
										error={error}
									/>
									{error && (
										<Text variant="caption" style={forgotPasswordStyles.error}>
											{error}
										</Text>
									)}
								</div>

								<Button type="submit" variant="primary" fullWidth>
									Send reset link
								</Button>
							</form>

							{backToLoginLink && (
								<div {...stylex.props(forgotPasswordStyles.footer)}>
									<button
										type="button"
										onClick={backToLoginLink.onClick}
										{...stylex.props(forgotPasswordStyles.footerLink)}
									>
										{backToLoginLink.label ?? "Back to login"}
									</button>
								</div>
							)}
						</>
					)}
				</CardBody>
			</Card>
		</div>
	);
}

"use client";

import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/ui/Button/button";
import { Input, Label } from "@/components/ui/Input/input";
import { Text } from "@/components/ui/Text/text";
import { Card, CardBody } from "@/components/ui/Card/card";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { login02Styles } from "./login-02.styles";

type Props = PropsWithStylex<{
	title?: string;
	flow?: "password" | "magic-link";
	onSubmitEmail?: (email: string) => void;
	onSubmitPassword?: (email: string, password: string) => void;
	onRequestMagicLink?: (email: string) => void;
}>;

export function Login02({
	title = "Sign in",
	flow = "password",
	onSubmitEmail,
	onSubmitPassword,
	onRequestMagicLink,
	style,
}: Props) {
	const [step, setStep] = useState<"email" | "password" | "confirmation">(
		"email",
	);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmitEmail?.(email);
		if (flow === "magic-link") {
			onRequestMagicLink?.(email);
			setStep("confirmation");
		} else {
			setStep("password");
		}
	};

	const handlePasswordSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmitPassword?.(email, password);
	};

	return (
		<div {...stylex.props(login02Styles.container, style)}>
			<Card {...stylex.props(login02Styles.card)}>
				<CardBody {...stylex.props(login02Styles.cardBody)}>
					<div {...stylex.props(login02Styles.header)}>
						{flow === "password" && (
							<progress
								{...stylex.props(login02Styles.stepIndicator)}
								value={step === "email" ? 1 : 2}
								max={2}
								aria-label="Sign in progress"
							>
								<span
									{...stylex.props(
										login02Styles.stepDot,
										step === "email" && login02Styles.stepDotActive,
									)}
								/>
								<span
									{...stylex.props(
										login02Styles.stepDot,
										step === "password" && login02Styles.stepDotActive,
									)}
								/>
							</progress>
						)}
						<Text variant="h3">{title}</Text>
						{step === "email" && (
							<Text variant="body2" style={login02Styles.description}>
								{flow === "magic-link"
									? "Enter your email to receive a magic link"
									: "Enter your email to get started"}
							</Text>
						)}
					</div>

					{step === "email" && (
						<form
							onSubmit={handleEmailSubmit}
							aria-label="Enter email"
							{...stylex.props(login02Styles.form)}
						>
							<div {...stylex.props(login02Styles.fieldGroup)}>
								<Label htmlFor="login2-email">Email</Label>
								<Input
									id="login2-email"
									type="email"
									placeholder="name@example.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									autoComplete="email"
								/>
							</div>
							<Button type="submit" variant="solid" intent="primary" fullWidth>
								{flow === "magic-link" ? "Send magic link" : "Continue"}
							</Button>
						</form>
					)}

					{step === "password" && (
						<form
							onSubmit={handlePasswordSubmit}
							aria-label="Enter password"
							{...stylex.props(login02Styles.form)}
							aria-live="polite"
						>
							<button
								type="button"
								onClick={() => setStep("email")}
								{...stylex.props(login02Styles.backButton)}
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M19 12H5" />
									<path d="m12 19-7-7 7-7" />
								</svg>
								{email}
							</button>

							<div {...stylex.props(login02Styles.fieldGroup)}>
								<Label htmlFor="login2-password">Password</Label>
								<Input
									id="login2-password"
									type="password"
									placeholder="Enter your password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									autoComplete="current-password"
								/>
							</div>
							<Button type="submit" variant="solid" intent="primary" fullWidth>
								Sign in
							</Button>
						</form>
					)}

					{step === "confirmation" && (
						<div {...stylex.props(login02Styles.magicLinkText)}>
							<Text variant="h4" span>
								Check your inbox
							</Text>
							<Text variant="body2">
								We&apos;ve sent a magic link to <strong>{email}</strong>. Click
								the link to sign in instantly.
							</Text>
							<Button
								variant="ghost"
								onClick={() => setStep("email")}
								style={login02Styles.magicLinkAction}
							>
								Use a different email
							</Button>
						</div>
					)}
				</CardBody>
			</Card>
		</div>
	);
}

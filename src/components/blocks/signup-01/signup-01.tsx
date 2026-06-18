"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button/button";
import { Input, Label } from "@/components/ui/Input/input";
import { Text } from "@/components/ui/Text/text";
import { Checkbox } from "@/components/ui/Checkbox/checkbox";
import { Card, CardBody, CardTitle } from "@/components/ui/Card/card";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import {
	Box,
	Container,
	Field,
	FieldLabel,
	HStack,
	VStack,
} from "@/components/ui";

type SocialProvider = {
	provider: string;
	handleClick?: () => void;
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
	loginLink?: { label: string; handleClick: () => void };
}>;

export function Signup01({
	title = "Create an account",
	description = "Enter your details to get started",
	logo,
	onSubmit,
	socialProviders,
	termsUrl,
	loginLink,
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
		<Container size="md" center>
			<Card>
				<CardTitle>
					<Box>
						{logo && <div>{logo}</div>}
						<Text variant="h3">{title}</Text>
						<Text variant="body2" color="secondary">
							{description}
						</Text>
					</Box>
				</CardTitle>
				<CardBody>
					<VStack>
						<VStack
							render={
								<form onSubmit={handleSubmit} aria-label="Sign up form" />
							}
						>
							<Field>
								<FieldLabel htmlFor="signup-name">Full name</FieldLabel>
								<Input
									id="signup-name"
									type="text"
									placeholder="Jane Doe"
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									required
									autoComplete="name"
								/>
							</Field>

							<Field>
								<FieldLabel htmlFor="signup-email">Email</FieldLabel>
								<Input
									id="signup-email"
									type="email"
									placeholder="jane@example.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									autoComplete="email"
								/>
							</Field>

							<Field>
								<FieldLabel htmlFor="signup-password">Password</FieldLabel>
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
								<Text variant="caption" color="info">
									At least 8 characters with a number and a letter
								</Text>
							</Field>

							<Field>
								<FieldLabel htmlFor="signup-confirm">
									Confirm password
								</FieldLabel>
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
							</Field>

							<Label>
								<Checkbox
									checked={acceptedTerms}
									onCheckedChange={(checked) =>
										setAcceptedTerms(checked as boolean)
									}
								/>
								<Text color="secondary">
									I agree to the{" "}
									<Button
										variant="link"
										size="xsmall"
										type="button"
										onClick={() => {
											if (termsUrl) window.open(termsUrl, "_blank");
										}}
									>
										Terms of Service
									</Button>{" "}
									and{" "}
									<Button
										variant="link"
										size="xsmall"
										type="button"
										onClick={() => {
											if (termsUrl) window.open(termsUrl, "_blank");
										}}
									>
										Privacy Policy
									</Button>
								</Text>
							</Label>

							<Button type="submit" variant="solid" fullWidth>
								Create account
							</Button>
						</VStack>

						{socialProviders && socialProviders.length > 0 && (
							<HStack grow>
								{socialProviders.map((provider) => (
									<Button
										key={provider.provider}
										variant="outline"
										fullWidth
										onClick={provider.handleClick}
									>
										{provider.provider}
									</Button>
								))}
							</HStack>
						)}

						{loginLink && (
							<HStack justify="center" align="center">
								<Text variant="body2" span>
									Already have an account?{" "}
								</Text>
								<Button
									variant="link"
									size="xsmall"
									type="button"
									onClick={loginLink.handleClick}
								>
									{loginLink.label ?? "Sign in"}
								</Button>
							</HStack>
						)}
					</VStack>
				</CardBody>
			</Card>
		</Container>
	);
}

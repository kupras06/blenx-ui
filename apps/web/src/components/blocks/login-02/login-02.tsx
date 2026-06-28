"use client";

import { useState } from "react";
import { Button } from "@blenx-dev/ui/components/Button/button";
import { Input } from "@blenx-dev/ui/components/Input/input";
import { Text } from "@blenx-dev/ui/components/Text/text";
import { Card, CardBody } from "@blenx-dev/ui/components/Card/card";
import type { CSSProperties } from "react";
import { Box, Container, Field, FieldLabel, Progress, VStack } from "@blenx-dev/ui";
import { ArrowLeftIcon } from "@phosphor-icons/react";

type Props = {
  title?: string;
  flow?: "password" | "magic-link";
  onSubmitEmail?: (email: string) => void;
  onSubmitPassword?: (email: string, password: string) => void;
  onRequestMagicLink?: (email: string) => void;
  style?: CSSProperties;
};

export function Login02({
  title = "Sign in",
  flow = "password",
  onSubmitEmail,
  onSubmitPassword,
  onRequestMagicLink,
}: Props) {
  const [step, setStep] = useState<"email" | "password" | "confirmation">("email");
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
    <Container content="center" paddingY="huge">
      <Card maxWidth="sm">
        <CardBody>
          <VStack align="center" gap="sm">
            {flow === "password" && (
              <Progress value={step === "email" ? 1 : 2} max={2} aria-label="Sign in progress" />
            )}
            <Box>
              <Text variant="h3" align="center">
                {title}
              </Text>
              {step === "email" && (
                <Text variant="body2" color="secondary">
                  {flow === "magic-link"
                    ? "Enter your email to receive a magic link"
                    : "Enter your email to get started"}
                </Text>
              )}
            </Box>
          </VStack>

          {step === "email" && (
            <VStack
              render={<form onSubmit={handleEmailSubmit} aria-label="Enter email" />}
              gap="md"
            >
              <Field>
                <FieldLabel htmlFor="login2-email">Email</FieldLabel>
                <Input
                  id="login2-email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </Field>
              <Button type="submit" variant="solid" intent="primary" fullWidth>
                {flow === "magic-link" ? "Send magic link" : "Continue"}
              </Button>
            </VStack>
          )}

          {step === "password" && (
            <VStack
              render={
                <form
                  onSubmit={handlePasswordSubmit}
                  aria-label="Enter password"
                  aria-live="polite"
                />
              }
              align="start"
              gap="md"
            >
              <Button type="button" variant="ghost" size="xs" onClick={() => setStep("email")}>
                <ArrowLeftIcon />
                {email}
              </Button>
              <Box fullWidth>
                <Field>
                  <FieldLabel htmlFor="login2-password">Password</FieldLabel>
                  <Input
                    id="login2-password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                </Field>
              </Box>
              <Button type="submit" variant="solid" intent="primary" fullWidth>
                Sign in
              </Button>
            </VStack>
          )}

          {step === "confirmation" && (
            <VStack align="center" marginY="md">
              <Text variant="h4">Check your inbox</Text>
              <Text variant="body2">
                We&apos;ve sent a magic link to <strong>{email}</strong>. Click the link to sign in
                instantly.
              </Text>
              <Button variant="ghost" onClick={() => setStep("email")}>
                Use a different email
              </Button>
            </VStack>
          )}
        </CardBody>
      </Card>
    </Container>
  );
}

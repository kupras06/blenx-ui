"use client";

import { useState } from "react";
import { Button } from "@blenx-dev/ui/components/Button/button";
import { Input, Label } from "@blenx-dev/ui/components/Input/input";
import { Text } from "@blenx-dev/ui/components/Text/text";
import { Checkbox } from "@blenx-dev/ui/components/Checkbox/checkbox";
import { Separator } from "@blenx-dev/ui/components/Separator/separator";
import { Card, CardBody } from "@blenx-dev/ui/components/Card/card";
import type { CSSProperties } from "react";
import { Container, Field, FieldLabel, HStack, VStack } from "@blenx-dev/components";

type SocialProvider = {
  provider: string;
  handleClick?: () => void;
};

type Links = {
  forgotPassword?: { label: string; handleClick: () => void };
  signUp?: { label: string; handleClick: () => void };
};

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type Props = {
  title?: string;
  description?: string;
  onSubmit?: (values: FormValues) => void;
  socialProviders?: SocialProvider[];
  links?: Links;
  style?: CSSProperties;
};

export function Login01({
  title = "Welcome back",
  description = "Sign in to your account to continue",
  onSubmit,
  socialProviders,
  links,
}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ email, password, rememberMe });
  };

  return (
    <Container size="2xl" content="center" paddingY="huge">
      <Card maxWidth="sm" fullWidth>
        <CardBody padding="medium">
          <VStack align="center" gap="small">
            <Text variant="h3">{title}</Text>
            <Text variant="body2" color="secondary">
              {description}
            </Text>
          </VStack>

          <VStack render={<form onSubmit={handleSubmit} aria-label="Sign in form" />}>
            <Field>
              <FieldLabel htmlFor="login-email">Email</FieldLabel>
              <Input
                id="login-email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </Field>

            <Field>
              <FieldLabel>Password</FieldLabel>
              <Input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </Field>

            <HStack align="center" justify="between">
              <Label htmlFor="remember-me">
                <Checkbox
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                Remember me
              </Label>
              {links?.forgotPassword && (
                <Button
                  type="button"
                  onClick={links.forgotPassword.handleClick}
                  variant="link"
                  intent="info"
                  size="xsmall"
                >
                  {links.forgotPassword.label ?? "Forgot password?"}
                </Button>
              )}
            </HStack>

            <Button type="submit" variant="solid" fullWidth>
              Sign in
            </Button>
          </VStack>

          {socialProviders && socialProviders.length > 0 && (
            <VStack gap="medium">
              <Separator label="Or continue with" tone="subtle" />
              <Separator />
              <Separator label="Or continue with" tone="subtle" />
              <Separator />
              <HStack gap="medium">
                {socialProviders.map((provider) => (
                  <Button
                    key={provider.provider}
                    variant="outline"
                    onClick={provider.handleClick}
                    fullWidth
                  >
                    {provider.provider}
                  </Button>
                ))}
              </HStack>
            </VStack>
          )}

          {links?.signUp && (
            <HStack align="center" justify="center" paddingY="small">
              <Text variant="body2" span>
                Don&apos;t have an account?{" "}
              </Text>
              <Button
                type="button"
                onClick={links.signUp.handleClick}
                variant="link"
                intent="info"
                size="xsmall"
              >
                {links.signUp.label ?? "Sign up"}
              </Button>
            </HStack>
          )}
        </CardBody>
      </Card>
    </Container>
  );
}

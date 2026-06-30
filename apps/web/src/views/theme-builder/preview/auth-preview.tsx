import { memo } from "react";
import { Box, Text, VStack } from "@blenx-dev/ui";
import { Login01, Login02, Signup01, ForgotPassword01, VerifyEmail01 } from "@/components/blocks";

export const AuthPreview = memo(() => (
  <VStack gap="lg">
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Login
      </Text>
      <Login01 />
    </Box>
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Login (Alt)
      </Text>
      <Login02 />
    </Box>
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Sign Up
      </Text>
      <Signup01 />
    </Box>
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Forgot Password
      </Text>
      <ForgotPassword01 />
    </Box>
    <Box withBorder padding="sm">
      <Text variant="h3" paddingBottom="sm">
        Verify Email
      </Text>
      <VerifyEmail01 />
    </Box>
  </VStack>
));

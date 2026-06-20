import { VerifyEmail01 } from "./verify-email-01";

export function VerifyEmail01DefaultDemo() {
  return (
    <VerifyEmail01
      email="jane@example.com"
      onVerify={(code) => console.log("Verifying:", code)}
      onResend={() => console.log("Resending code")}
      resendCooldown={30}
    />
  );
}

export const demos = [{ name: "Default", component: VerifyEmail01DefaultDemo }];

# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/OTPField/otp-field.tsx`
  Problem: OTP entry is inherently high-friction, and the current styling leans compact rather than celebratory or reassuring.
  Why it matters: One-time-code inputs need strong focus, spacing, and clarity so users can enter digits confidently under pressure.
  Recommended improvement: Increase cell spacing and focus emphasis, and make the completed state more obvious when the code is filled.

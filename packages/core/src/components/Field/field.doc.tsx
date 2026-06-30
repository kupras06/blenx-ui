import { Input } from "../Input/input";
import { Stack } from "../Stack/stack";
import { Field, FieldError, FieldLabel } from "./field";

export function DefaultStory() {
  return (
    <Stack gap="md">
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input type="email" placeholder="you@example.com" />
      </Field>
      <Field invalid>
        <FieldLabel>Password</FieldLabel>
        <Input type="password" placeholder="Enter password" error="Required" />
        <FieldError>This field is required</FieldError>
      </Field>
    </Stack>
  );
}

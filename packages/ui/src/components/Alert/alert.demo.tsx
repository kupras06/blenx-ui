import { CheckIcon, InfoIcon, SkullIcon, WarningIcon } from "@phosphor-icons/react";
import { Alert } from "./alert";
import { VStack } from "../Stack/stack";

function AlertDemo() {
  return (
    <VStack withBorder>
      <Alert variant="info" icon={<InfoIcon />} title="Info" description="This is an info alert" />
      <Alert
        variant="success"
        icon={<CheckIcon />}
        title="Success"
        description="This is a success alert"
      />
      <Alert
        variant="warning"
        withBorder
        icon={<WarningIcon />}
        title="Warning"
        description="This is a warning alert"
      />
      <Alert
        variant="error"
        icon={<SkullIcon />}
        title="Error"
        description="This is an error alert"
      />
      <Alert variant="error" icon={<SkullIcon />} withBorder>
        GOne
      </Alert>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: AlertDemo }];

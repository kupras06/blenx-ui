import { CheckIcon, CircleAlertIcon, InfoIcon, SkullIcon } from "../../icons";
import { Alert } from "./alert";
import { VStack } from "../Stack/stack";

function AlertDemo() {
  return (
    <VStack withBorder padding="md">
      <Alert variant="info" icon={<InfoIcon />} title="Info" description="This is an info alert" />
      <Alert
        variant="success"
        icon={<CheckIcon />}
        title="Success"
        description="This is a success alert"
      />
      <Alert
        variant="warning"
        icon={<CircleAlertIcon />}
        title="Warning"
        description="This is a warning alert"
      />
      <Alert
        variant="error"
        icon={<SkullIcon />}
        title="Error"
        description="This is an error alert"
      />
      <Alert variant="error" icon={<SkullIcon />}>
        GOne
      </Alert>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: AlertDemo }];

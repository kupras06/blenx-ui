import { Trash2Icon } from "@blenx-dev/core/icons";
import {
  Button,
  HStack,
  VStack,
  Text,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogTitle,
  DialogTrigger,
  Input,
} from "@blenx-dev/core";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>Are you sure you want to proceed with this action?</DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <Text variant="body2">
            This demonstrates a working dialog component using Base UI and Vanilla Extract.
          </Text>
        </DialogPanel>
        <DialogFooter>
          <HStack gap="sm" justify="end" wrap>
            <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
            <Button>Confirm</Button>
          </HStack>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function NoCloseStory() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>No Close Button</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>No Close Button</DialogTitle>
          <DialogDescription>
            This dialog hides the default close button. Use the action below to dismiss it.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <Text variant="body2">
            You can still close this dialog via the Cancel button in the footer or by pressing
            Escape.
          </Text>
        </DialogPanel>
        <DialogFooter>
          <HStack gap="sm" justify="end" wrap>
            <DialogClose render={<Button variant="ghost" />}>Dismiss</DialogClose>
            <Button>Continue</Button>
          </HStack>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function BareFooterStory() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Bare Footer</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete item</DialogTitle>
          <DialogDescription>
            <Trash2Icon width={16} /> This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <Text variant="body2">
            The item will be permanently removed from your workspace. All associated data will be
            lost.
          </Text>
        </DialogPanel>
        <DialogFooter variant="bare">
          <HStack gap="sm" justify="end" wrap>
            <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
            <Button intent="danger">Delete</Button>
          </HStack>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function LongContentStory() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Long Content</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>Please review the terms before continuing.</DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <VStack gap="sm">
            <Text variant="body2">1. Acceptance of Terms</Text>
            <Text variant="body2" color="secondary">
              By accessing this service, you agree to be bound by these terms. If you do not agree,
              do not use the service.
            </Text>
            <Text variant="body2">2. User Responsibilities</Text>
            <Text variant="body2" color="secondary">
              You are responsible for maintaining the confidentiality of your account and for all
              activities under your account.
            </Text>
            <Text variant="body2">3. Privacy Policy</Text>
            <Text variant="body2" color="secondary">
              We collect minimal data needed to provide the service. Your data is never shared with
              third parties without explicit consent.
            </Text>
            <Text variant="body2">4. Limitation of Liability</Text>
            <Text variant="body2" color="secondary">
              The service is provided "as is" without warranties. We are not liable for any damages
              arising from its use.
            </Text>
            <Text variant="body2">5. Termination</Text>
            <Text variant="body2" color="secondary">
              We reserve the right to terminate access for violations of these terms. You may stop
              using the service at any time.
            </Text>
            <Text variant="body2">6. Changes to Terms</Text>
            <Text variant="body2" color="secondary">
              We may update these terms. Continued use after changes constitutes acceptance of the
              new terms.
            </Text>
          </VStack>
        </DialogPanel>
        <DialogFooter>
          <HStack gap="sm" justify="end" wrap>
            <DialogClose render={<Button variant="ghost" />}>Decline</DialogClose>
            <Button>Accept</Button>
          </HStack>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function FormStory() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Form Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>Fill in the details to create a new project.</DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <VStack gap="sm">
            <label htmlFor="name">
              <Text variant="body2">Project name</Text>
            </label>
            <Input id="name" placeholder="My Project" />
            <label htmlFor="description">
              <Text variant="body2">Description</Text>
            </label>
            <Input id="description" placeholder="A short description of your project" />
          </VStack>
        </DialogPanel>
        <DialogFooter>
          <HStack gap="sm" justify="end" wrap>
            <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
            <Button>Create</Button>
          </HStack>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export const demos = [
  { name: "Default", component: DialogDemo },
  { name: "No Close Button", component: NoCloseStory },
  { name: "Bare Footer", component: BareFooterStory },
  { name: "Long Content", component: LongContentStory },
  { name: "Form", component: FormStory },
];

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
import { useState } from "react";

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

export function DialogDemo() {
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
function NestedDialogContent({ depth = 0 }: { depth?: number }) {
  const [open, setOpen] = useState(false);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Projects {depth}</DialogTitle>
        <DialogDescription>Manage your workspace projects.</DialogDescription>
      </DialogHeader>
      <DialogPanel>
        <VStack gap="sm">
          <HStack gap="md" justify="between" align="center">
            <VStack gap="0">
              <Text variant="body2">This is dialog no. {depth}</Text>
              <Text variant="body2" color="secondary">
                Identified limit is 50
              </Text>
            </VStack>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger render={<Button size="sm" />}>
                Open Nested Dialog {depth + 1}
              </DialogTrigger>
              <NestedDialogContent depth={depth + 1} />
            </Dialog>
          </HStack>
        </VStack>
      </DialogPanel>
      <DialogFooter>
        <DialogClose render={<Button size="sm" />}>Close Current Dialog</DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

function NestedDialogsStory() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Manage Projects</DialogTrigger>
      <DialogContent>
        <NestedDialogContent />
      </DialogContent>
    </Dialog>
  );
}

function MultipleDialogsStory() {
  return (
    <HStack gap="md" wrap>
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>Settings</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>Configure your workspace preferences.</DialogDescription>
          </DialogHeader>
          <DialogPanel>
            <VStack gap="sm">
              <label htmlFor="notifications">
                <Text variant="body2">Notifications</Text>
              </label>
              <Input id="notifications" placeholder="email@example.com" />
            </VStack>
          </DialogPanel>
          <DialogFooter>
            <HStack gap="sm" justify="end" wrap>
              <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
              <Button>Save</Button>
            </HStack>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>Help</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Keyboard Shortcuts</DialogTitle>
            <DialogDescription>Quick reference for common actions.</DialogDescription>
          </DialogHeader>
          <DialogPanel>
            <VStack gap="sm">
              <HStack gap="md" justify="between">
                <Text variant="body2">Search</Text>
                <Text variant="body2" color="secondary">
                  <kbd>⌘K</kbd>
                </Text>
              </HStack>
              <HStack gap="md" justify="between">
                <Text variant="body2">Save</Text>
                <Text variant="body2" color="secondary">
                  <kbd>⌘S</kbd>
                </Text>
              </HStack>
              <HStack gap="md" justify="between">
                <Text variant="body2">New Project</Text>
                <Text variant="body2" color="secondary">
                  <kbd>⌘N</kbd>
                </Text>
              </HStack>
            </VStack>
          </DialogPanel>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </HStack>
  );
}

export const demos = [
  { name: "Default", component: DialogDemo },
  { name: "No Close Button", component: NoCloseStory },
  { name: "Long Content", component: LongContentStory },
  { name: "Nested Dialogs", component: NestedDialogsStory },
  { name: "Multiple Dialogs", component: MultipleDialogsStory },
];

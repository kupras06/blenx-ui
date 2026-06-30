import { Component, type ErrorInfo, type ReactNode } from "react";
import { Text, VStack } from "@blenx-dev/core";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class PreviewErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Preview error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <VStack padding="lg" gap="md" align="center">
          <Text variant="h3" color="error">
            Preview Error
          </Text>
          <Text variant="body2" color="secondary">
            {this.state.error?.message ?? "Something went wrong rendering the preview."}
          </Text>
          <Text variant="caption" color="disabled">
            Check the console for details. Token changes may have caused a render failure.
          </Text>
        </VStack>
      );
    }
    return this.props.children;
  }
}

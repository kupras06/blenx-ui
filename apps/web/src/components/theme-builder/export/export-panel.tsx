import { useCallback, useState } from "react";
import {
  Accordion,
  AlertDialog,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Separator,
  Text,
  VStack,
} from "@blenx-dev/ui/components";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { useThemeBuilder } from "../theme-builder-context";

export function ExportPanel() {
  const tokens = useThemeBuilder((s) => s.tokens);
  const resetTokens = useThemeBuilder((s) => s.resetTokens);
  const [copied, setCopied] = useState("");
  const [showReset, setShowReset] = useState(false);

  const generateJSON = useCallback(() => {
    const json = JSON.stringify(tokens, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "blenx-theme.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [tokens]);

  const generateStyleXCode = useCallback(() => {
    const themeEntries = Object.entries(theme)
      .filter(([key]) => key !== "__varGroupHash__")
      .map(([key]) => {
        const value =
          key === "fontSize"
            ? tokens.fontSize
            : key === "borderRadius"
              ? tokens.borderRadius
              : tokens[key as keyof typeof tokens]?.toString();
        if (!value) return null;
        return `    ${key}: "${value}",`;
      })
      .filter(Boolean) as string[];

    return `import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";

export const customTheme = stylex.createTheme(theme, {
${themeEntries.join("\n")}
});`;
  }, [tokens]);

  const copyJSON = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(tokens, null, 2));
      setCopied("json");
      setTimeout(() => setCopied(""), 2000);
    } catch {
      // Fallback
    }
  }, [tokens]);

  const copyStyleX = useCallback(async () => {
    try {
      const code = generateStyleXCode();
      await navigator.clipboard.writeText(code);
      setCopied("stylex");
      setTimeout(() => setCopied(""), 2000);
    } catch {
      // Fallback
    }
  }, [generateStyleXCode]);

  const handleReset = useCallback(() => {
    resetTokens();
    setShowReset(false);
  }, [resetTokens]);

  return (
    <Accordion.Item value="export">
      <Accordion.Header>
        <Accordion.Trigger>Export</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel>
        <VStack>
          <VStack gap="small">
            <Button variant="outline" size="small" onClick={generateJSON}>
              Export JSON
            </Button>
            <Button variant="outline" size="small" onClick={copyJSON}>
              {copied === "json" ? "Copied!" : "Copy JSON"}
            </Button>
            <Button variant="outline" size="small" onClick={copyStyleX}>
              {copied === "stylex" ? "Copied!" : "Copy StyleX Theme"}
            </Button>
          </VStack>

          {copied === "stylex" && (
            <Text color="primary">StyleX theme code copied to clipboard!</Text>
          )}

          <Separator />

          <AlertDialog open={showReset} onOpenChange={setShowReset}>
            <AlertDialogTrigger
              render={
                <Button intent="danger" size="small" fullWidth>
                  Reset to Defaults
                </Button>
              }
            />
            <AlertDialogPopup>
              <AlertDialogHeader>
                <AlertDialogTitle>Reset Theme</AlertDialogTitle>
                <AlertDialogDescription>
                  This will restore all tokens to their default values. This action cannot be
                  undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <VStack gap="small" padding="medium">
                <Button intent="danger" fullWidth onClick={handleReset}>
                  Reset
                </Button>
                <Button variant="ghost" fullWidth onClick={() => setShowReset(false)}>
                  Cancel
                </Button>
              </VStack>
            </AlertDialogPopup>
          </AlertDialog>
        </VStack>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

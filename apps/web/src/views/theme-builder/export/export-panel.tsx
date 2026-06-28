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
} from "@blenx-dev/ui";
import { useThemeBuilder } from "../theme-builder-context";

const borderRadiusValues: Record<string, string> = {
  none: "0px",
  small: "4px",
  medium: "8px",
  large: "12px",
  pill: "999px",
};

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

  const generateThemeCode = useCallback(() => {
    const themeEntries = Object.entries(tokens)
      .map(([key, value]) => {
        if (!value) return null;
        if (key === "borderRadius") {
          const resolved = borderRadiusValues[value] ?? value;
          return `  ${key}: "${resolved}",`;
        }
        return `  ${key}: "${value}",`;
      })
      .filter(Boolean) as string[];

    return `import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";

export const customTheme = createTheme(themeContract, {
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

  const copyThemeCode = useCallback(async () => {
    try {
      const code = generateThemeCode();
      await navigator.clipboard.writeText(code);
      setCopied("ve");
      setTimeout(() => setCopied(""), 2000);
    } catch {
      // Fallback
    }
  }, [generateThemeCode]);

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
          <VStack gap="sm">
            <Button variant="outline" size="sm" onClick={generateJSON}>
              Export JSON
            </Button>
            <Button variant="outline" size="sm" onClick={copyJSON}>
              {copied === "json" ? "Copied!" : "Copy JSON"}
            </Button>
            <Button variant="outline" size="sm" onClick={copyThemeCode}>
              {copied === "ve" ? "Copied!" : "Copy VE Theme"}
            </Button>
          </VStack>

          {copied === "ve" && <Text color="primary">VE theme code copied to clipboard!</Text>}

          <Separator />

          <AlertDialog open={showReset} onOpenChange={setShowReset}>
            <AlertDialogTrigger
              render={
                <Button intent="danger" size="sm" fullWidth>
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
              <VStack gap="sm" padding="md">
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

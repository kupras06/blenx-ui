import type { ReactNode } from "react";
import { codeHeader } from "@/lib/styles.css";
import { Box, CopyButton, HStack, SegmentedControl, Surface, Text } from "@blenx-dev/components";

interface CodeFrameFile {
  title?: string;
}

interface CodeFrameProps {
  copyValue: string;
  children: ReactNode;
  title?: string;
  language?: string;
  files?: CodeFrameFile[];
  activeIndex?: number;
  onActiveIndexChange?: (index: number) => void;
}

function CodeFrame({
  copyValue,
  children,
  title,
  language,
  files,
  activeIndex,
  onActiveIndexChange,
}: CodeFrameProps) {
  const hasFiles = (files?.length ?? 0) > 1;

  return (
    <Surface
      variant="sunken"
      borderRadius="medium"
      overflow="hidden"
      position="relative"
      width="full"
      maxWidth="full"
      style={{ minHeight: 40 }}
    >
      {hasFiles || title ? (
        <HStack className={codeHeader} align="center" justify="between">
          <Box display="flex" alignItems="center">
            {hasFiles ? (
              <SegmentedControl
                variant="default"
                value={String(activeIndex ?? 0)}
                radius="xsmall"
                onValueChange={(value) => {
                  onActiveIndexChange?.(Number(value));
                }}
                options={
                  files?.map((file, index) => ({
                    value: `${index}`,
                    label: file.title || `File ${index + 1}`,
                  })) ?? []
                }
              />
            ) : (
              <>
                {title ? (
                  <HStack gap="xsmall" align="center" overflow="hidden">
                    <Text variant="h6" color="secondary">
                      {title}
                    </Text>

                    {language ? <Text variant="caption">{language}</Text> : null}
                  </HStack>
                ) : null}
              </>
            )}
          </Box>
          <CopyButton p="none" copyValue={copyValue} />
        </HStack>
      ) : (
        <Box position="absolute" top="xs" right="xs">
          <CopyButton p="none" copyValue={copyValue} />
        </Box>
      )}
      {children}
    </Surface>
  );
}

export type { CodeFrameFile, CodeFrameProps };
export { CodeFrame };

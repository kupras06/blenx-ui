import { Box, CopyButton, HStack, SegmentedControl, Surface, Text } from "@blenx-dev/core";

interface CodeFrameFile {
  title?: string;
}

interface CodeFrameProps {
  copyValue: string;
  title?: string;
  language?: string;
  files?: CodeFrameFile[];
  activeIndex?: number;
  onActiveIndexChange?: (index: number) => void;
}

function CodeFrame({
  copyValue,
  title,
  language,
  files,
  activeIndex,
  onActiveIndexChange,
}: CodeFrameProps) {
  const hasFiles = (files?.length ?? 0) > 1;

  return (
    <Surface variant="default" position="relative">
      {hasFiles || title ? (
        <HStack
          align="center"
          justify="between"
          p={"xs"}
          borderRadiusBottom="none"
          backgroundColor="surface"
        >
          <Box display="flex" alignItems="center" borderRadiusTop="none">
            {hasFiles ? (
              <SegmentedControl
                variant="default"
                value={String(activeIndex ?? 0)}
                radius="none"
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
                  <HStack gap="xs" align="center" overflow="hidden">
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
    </Surface>
  );
}

export type { CodeFrameFile, CodeFrameProps };
export { CodeFrame };

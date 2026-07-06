import { Box, HStack, SegmentedControl, Surface, Text } from "@blenx-dev/core";

interface CodeFrameFile {
  title?: string;
}

interface CodeFrameProps {
  title?: string;
  language?: string;
  files?: CodeFrameFile[];
  activeIndex?: number;
  onActiveIndexChange?: (index: number) => void;
}

function CodeFrame({ title, language, files, activeIndex, onActiveIndexChange }: CodeFrameProps) {
  const hasFiles = (files?.length ?? 0) > 1;

  return (
    <Surface variant="default" position="relative" borderTopWidth="thin">
      {hasFiles || title ? (
        <HStack align="center" justify="between" px={"xs"} borderRadiusBottom="none">
          <Box display="flex" alignItems="center" borderRadiusTop="none">
            {hasFiles ? (
              <SegmentedControl
                variant="default"
                value={String(activeIndex ?? 0)}
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
                ) : (
                  <Box style={{ height: 50 }} />
                )}
              </>
            )}
          </Box>
        </HStack>
      ) : null}
    </Surface>
  );
}

export type { CodeFrameFile, CodeFrameProps };
export { CodeFrame };

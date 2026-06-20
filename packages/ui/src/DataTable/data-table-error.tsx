import { Button } from "@blenx-dev/ui/components";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { fontSize, spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";
import { WarningCircleIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";

interface DataTableErrorProps {
  /** Error message to display */
  message?: string;
  /** Optional retry callback */
  onRetry?: () => void;
}

/**
 * Error state for the DataTable.
 * Displays an error message with an optional retry button.
 */
export function DataTableError({
  message = "Something went wrong while loading data",
  onRetry,
}: DataTableErrorProps) {
  return (
    <div role="alert" aria-label={message} {...stylex.props(styles.container)}>
      <WarningCircleIcon size={48} />
      <p {...stylex.props(styles.message)}>{message}</p>
      {onRetry && (
        <Button variant="outline" size="small" onClick={onRetry}>
          Retry
        </Button>
      )}
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: spacing.xxxlarge,
    paddingBottom: spacing.xxxlarge,
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
    gap: 12,
  },
  message: {
    color: theme.sentimentNegative,
    fontSize: fontSize.small,
    lineHeight: 1.5,
    textAlign: "center",
    margin: 0,
  },
});

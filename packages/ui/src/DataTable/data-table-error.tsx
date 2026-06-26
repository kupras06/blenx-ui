import { WarningCircleIcon } from "@phosphor-icons/react";
import * as styles from "./data-table.css";
import { Button } from "../components";

interface DataTableErrorProps {
  message?: string;
  onRetry?: () => void;
}

export function DataTableError({
  message = "Something went wrong while loading data",
  onRetry,
}: DataTableErrorProps) {
  return (
    <div role="alert" aria-label={message} className={styles.errorContainer}>
      <WarningCircleIcon size={48} />
      <p className={styles.errorMessage}>{message}</p>
      {onRetry && (
        <Button variant="outline" size="small" onClick={onRetry}>
          Retry
        </Button>
      )}
    </div>
  );
}

import { useState, useCallback, type MouseEvent } from "react";
import { IconButton, type IconButtonProps } from "../IconButton/icon-button";
import { icon } from "./copy-button.css";

export type CopyButtonProps = Omit<IconButtonProps, "onClick"> & {
  copyValue?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function CopyButton({ copyValue, onClick, ...props }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (copyValue) {
        navigator.clipboard.writeText(copyValue).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }
      onClick?.(e);
    },
    [copyValue, onClick],
  );

  return (
    <IconButton
      variant="soft"
      {...props}
      title={copied ? "Copied!" : `Copy ${copyValue ?? ""}`}
      onClick={handleClick}
    >
      {copied ? (
        <svg className={icon} viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg className={icon} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </IconButton>
  );
}

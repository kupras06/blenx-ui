import { useState, useCallback, type MouseEvent } from "react";
import { IconButton, type IconButtonProps } from "../IconButton/icon-button";
import { CheckIcon, CopyIcon } from "../../icons";

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
      {copied ? <CheckIcon /> : <CopyIcon />}
    </IconButton>
  );
}

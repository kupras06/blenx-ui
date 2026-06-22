import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { spacing } from "#theme/tokens.css";

export const padding = {
  small: style({ padding: spacing.small }),
  medium: style({ padding: spacing.medium }),
  large: style({ padding: spacing.large }),
};

export const sectionBase = style({
  boxSizing: "border-box",
});

export const sectionHeader = style({
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: theme.borderSubtle,
});

export const sectionBody = style({
  opacity: 1,
});

export const sectionFooter = style({
  borderTopWidth: 1,
  borderTopStyle: "solid",
  borderTopColor: theme.borderSubtle,
});

export const sectionPadding = {
  small: style({ padding: spacing.small }),
  medium: style({ padding: spacing.medium }),
  large: style({ padding: spacing.large }),
};

export const title = style({
  margin: 0,
  color: theme.contentPrimary,
  fontSize: theme.fontSize,
  fontWeight: 600,
  lineHeight: 1.3,
});

export const description = style({
  margin: 0,
  color: theme.contentSecondary,
  fontSize: theme.fontSize,
  lineHeight: 1.5,
});

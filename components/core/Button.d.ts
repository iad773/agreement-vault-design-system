import * as React from "react";

/**
 * The Strongbox action button: 3px radius, 1.5px steel border, color-only hover.
 * Nothing scales or lifts on press.
 *
 * @startingPoint section="Core" subtitle="Primary, secondary, quiet and link actions" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = filled vault steel; secondary = white with steel border; quiet = neutral border; link = inline underlined text */
  variant?: "primary" | "secondary" | "quiet" | "link";
  size?: "sm" | "md" | "lg";
  /** A 13px lucide glyph placed before the label. */
  icon?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;

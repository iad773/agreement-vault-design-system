import * as React from "react";

/**
 * Small uppercase badge. For document and registration state use `StatusBadge`
 * instead, which pairs the glyph and wording for you.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "steel" | "warning" | "danger" | "inverse";
  /** A typographic marker such as ● ◆ ▲ ○. Not a lucide icon. */
  glyph?: React.ReactNode;
  dashed?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;

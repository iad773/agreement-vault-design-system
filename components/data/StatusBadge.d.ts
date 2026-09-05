import * as React from "react";

export type StatusKey =
  | "executed"
  | "effective"
  | "dueSoon"
  | "renewalWindow"
  | "overdue"
  | "draft";

/**
 * Record state, carried by glyph + wording + weight so it survives greyscale.
 * The status vocabulary is fixed; do not invent synonyms.
 *
 * @startingPoint section="Data" subtitle="Executed, due soon, overdue, draft" viewport="700x150"
 */
export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: StatusKey;
  /** Drops the surface and border, for dense table cells. */
  plain?: boolean;
  /** Overrides the default uppercase wording. Rarely needed. */
  children?: React.ReactNode;
}

export const STATUS: Record<StatusKey, { glyph: string; label: string; tone: string }>;
export function StatusBadge(props: StatusBadgeProps): JSX.Element;

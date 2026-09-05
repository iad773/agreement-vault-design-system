import * as React from "react";

export type MarkerKind = "finding" | "check" | "overdue" | "upcoming";

/** The 10px marker geometry: circles are time, squares are findings. */
export interface MarkerProps {
  kind?: MarkerKind;
  size?: number;
}

/**
 * A row in "Needs your attention": marker, plain-English finding, elapsed time,
 * and one action. Copy states what is wrong and how long it has been wrong.
 *
 * @startingPoint section="Data" subtitle="Needs-your-attention rows with markers" viewport="700x200"
 */
export interface FindingRowProps extends React.HTMLAttributes<HTMLDivElement> {
  kind?: MarkerKind;
  /** Drives the reserved row tint and the timing color. */
  severity?: "neutral" | "warning" | "overdue";
  headline: React.ReactNode;
  /** Secondary clause, rendered in regular weight and muted ink. */
  detail?: React.ReactNode;
  /** Relative time first, then the date: "Lapsed 90 days ago, Jun 3". */
  timing?: React.ReactNode;
  action?: React.ReactNode;
  onAction?: () => void;
}

export function Marker(props: MarkerProps): JSX.Element;
export function FindingRow(props: FindingRowProps): JSX.Element;

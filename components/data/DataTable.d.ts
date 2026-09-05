import * as React from "react";

export interface DataTableColumn {
  key: string;
  header: React.ReactNode;
  /** Any CSS grid track: "1fr", "190px". Dates and status use fixed px so columns line up. */
  width?: string;
  align?: "left" | "right" | "center";
  /** The record title column: 600 weight, ink. */
  primary?: boolean;
  muted?: boolean;
  /** Applies tabular-nums. Use for every date and count. */
  numeric?: boolean;
}

export interface DataTableRow {
  id: string;
  /** Tints the row with the reserved urgency surface. Omit for normal rows. */
  urgency?: "overdue" | "dueSoon";
  [key: string]: React.ReactNode | string | undefined;
}

/**
 * The dense record table: uppercase micro-label header over the 2px steel rule,
 * 44px rows separated by full-width hairlines.
 *
 * @startingPoint section="Data" subtitle="Dense document table with urgency rows" viewport="700x260"
 */
export interface DataTableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: DataTableColumn[];
  rows?: DataTableRow[];
  selectedId?: string;
  onRowClick?: (row: DataTableRow) => void;
  onRowContextMenu?: (event: React.MouseEvent, row: DataTableRow) => void;
}

export function DataTable(props: DataTableProps): JSX.Element;

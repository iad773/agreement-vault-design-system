import * as React from "react";

export interface Stat {
  value: React.ReactNode;
  label: React.ReactNode;
  /** Small trailing unit set in the sans face, e.g. "yrs". */
  unit?: React.ReactNode;
}

/**
 * Figures read off executed documents. One hero numeral per block, in Bitter 800.
 *
 * @startingPoint section="Data" subtitle="Hero numeral with supporting figures" viewport="700x220"
 */
export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  hero?: React.ReactNode;
  heroLabel?: React.ReactNode;
  stats?: Stat[];
  /** A sentence that says what happens next. */
  note?: React.ReactNode;
  /** Where the numbers come from. State it, do not imply it. */
  provenance?: React.ReactNode;
}

export function StatBlock(props: StatBlockProps): JSX.Element;

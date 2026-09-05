import * as React from "react";

/**
 * The Strongbox surface: white, 3px radius, 1.5px steel border, no resting shadow.
 * A titled card carries the 2px vault-steel header rule.
 *
 * @startingPoint section="Core" subtitle="Titled panel with the 2px steel header rule" viewport="700x215"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  /** Right-aligned provenance or count line in the header. */
  meta?: React.ReactNode;
  /** false swaps the 2px steel rule for a 1px hairline. */
  rule?: boolean;
  /** Adds body padding. Leave off when the card holds full-bleed rows. */
  padded?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;

import * as React from "react";

/**
 * The lintel: a 54px ink bar across the top of every screen. The one heavy
 * horizontal that the rest of the layout hangs from.
 *
 * @startingPoint section="Navigation" subtitle="Ink chrome bar with brand and actions" viewport="700x150"
 */
export interface AppChromeProps extends React.HTMLAttributes<HTMLElement> {
  /** The franchisor's name, e.g. "Spacely Sprockets Franchising". */
  brandName: React.ReactNode;
  /** Optional brand mark. Falls back to the placeholder vault ring; do not substitute a real logo you do not have. */
  mark?: React.ReactNode;
  /** Sits directly beside the brand name. Used for the SANDBOX flag. */
  badge?: React.ReactNode;
  /** Right-aligned IconButtons. */
  actions?: React.ReactNode;
}

export function AppChrome(props: AppChromeProps): JSX.Element;

import * as React from "react";

/**
 * Full-width amber band above all other chrome. Must remain visible at any
 * scroll position, so it ships sticky by default. Pair with a SANDBOX badge
 * beside the brand name in `AppChrome`.
 *
 * @startingPoint section="Navigation" subtitle="Pinned amber sample-data band" viewport="700x150"
 */
export interface SandboxBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: React.ReactNode;
  sticky?: boolean;
}

export function SandboxBanner(props: SandboxBannerProps): JSX.Element;

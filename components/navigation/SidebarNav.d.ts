import * as React from "react";

export interface SidebarNavItem {
  id: string;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  /** A count or flag pinned to the right edge, e.g. the Review queue count. */
  badge?: React.ReactNode;
  /** Indented sub-item, used for open Rooms. */
  child?: boolean;
  /** Renders a hairline separator instead of an item. */
  divider?: boolean;
}

/**
 * Fixed 224px navigation on the steel plate. The active item is a solid vault-steel
 * block with white text, so the current place is unmistakable in greyscale.
 *
 * @startingPoint section="Navigation" subtitle="Fixed 224px nav with counts and rooms" viewport="700x330"
 */
export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: SidebarNavItem[];
  activeId?: string;
  onSelect?: (item: SidebarNavItem) => void;
  footer?: React.ReactNode;
}

export function SidebarNav(props: SidebarNavProps): JSX.Element;

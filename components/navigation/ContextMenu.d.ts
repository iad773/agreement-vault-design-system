import * as React from "react";

export interface ContextMenuItem {
  id?: string;
  label?: React.ReactNode;
  /** Renders a hairline separator instead of an item. */
  separator?: boolean;
  /** The default action, pre-highlighted (usually Open). */
  emphasis?: boolean;
  /** Destructive actions are set in the reserved red. */
  danger?: boolean;
}

/**
 * Right-click menu for record rows. Flat white on a 1.5px border with the
 * overlay shadow. No blur, no translucency.
 *
 * @startingPoint section="Navigation" subtitle="Right-click record actions" viewport="700x400"
 */
export interface ContextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: ContextMenuItem[];
  x?: number;
  y?: number;
  /** false renders in flow, for documentation and cards. */
  anchored?: boolean;
  onSelect?: (item: ContextMenuItem) => void;
}

export function ContextMenu(props: ContextMenuProps): JSX.Element;

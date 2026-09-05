import * as React from "react";

export interface EntityNode {
  id: string;
  name: React.ReactNode;
  /** Document count shown right-aligned. */
  count?: number;
  /** 0 or undefined = entity; 1+ = nested unit. */
  depth?: number;
  expanded?: boolean;
}

/**
 * Fixed 264px folder-tree pane: the familiar half of the product. Entities carry
 * document counts; units nest beneath them.
 *
 * @startingPoint section="Navigation" subtitle="Entity tree with counts and Show inactive" viewport="700x330"
 */
export interface EntityTreeProps extends React.HTMLAttributes<HTMLElement> {
  nodes?: EntityNode[];
  selectedId?: string;
  onSelect?: (node: EntityNode) => void;
  showInactive?: boolean;
  onToggleInactive?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function EntityTree(props: EntityTreeProps): JSX.Element;

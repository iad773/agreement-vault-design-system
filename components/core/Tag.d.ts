import * as React from "react";

/** A sentence-case metadata chip: document type, entity, active filter. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Renders a remove affordance when supplied. */
  onRemove?: () => void;
}

export function Tag(props: TagProps): JSX.Element;

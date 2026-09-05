import * as React from "react";

/** A square icon-only control. `label` is required: it becomes aria-label and the tooltip. */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label: string;
  icon: React.ReactNode;
  size?: number;
  /** onDark for the ink chrome bar. */
  tone?: "default" | "onDark";
}

export function IconButton(props: IconButtonProps): JSX.Element;

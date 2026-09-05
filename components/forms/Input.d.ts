import * as React from "react";

/**
 * Text field. The search variant carries a 13px lucide magnifier as `icon`.
 *
 * @startingPoint section="Forms" subtitle="Text and search fields with labels and hints" viewport="700x170"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  invalid?: boolean;
  wrapperStyle?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;

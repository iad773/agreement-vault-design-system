import * as React from "react";

/** The one pill shape in the system. Used for small view options such as "Show inactive". */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  checked?: boolean;
  label?: React.ReactNode;
}

export function Switch(props: SwitchProps): JSX.Element;

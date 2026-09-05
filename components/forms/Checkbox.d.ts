import * as React from "react";

/** Square 15px checkbox; steel fill when on. Used for row selection in `DataTable`. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  checked?: boolean;
  indeterminate?: boolean;
  label?: React.ReactNode;
  disabled?: boolean;
}

export function Checkbox(props: CheckboxProps): JSX.Element;

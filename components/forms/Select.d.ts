import * as React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

/** Native select with Strongbox chrome. Options are sentence case. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  options?: Array<SelectOption | string>;
  wrapperStyle?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;

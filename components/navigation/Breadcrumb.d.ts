import * as React from "react";

export interface BreadcrumbItem {
  id?: string;
  label: React.ReactNode;
}

/** Franchisor > entity > unit. The last crumb is the current place, set in semibold ink. */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItem[];
  onNavigate?: (item: BreadcrumbItem) => void;
}

export function Breadcrumb(props: BreadcrumbProps): JSX.Element;

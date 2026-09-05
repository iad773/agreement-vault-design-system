import React from "react";
import { Breadcrumb } from "agreement-vault-design-system";

const bar: React.CSSProperties = {
  padding: "10px 20px", background: "var(--surface-card)", borderBottom: "var(--border-width-hairline) solid var(--border-hairline)",
};

export const UnitPath = () => (
  <Breadcrumb items={[{ label: "Spacely Sprockets" }, { label: "Callahan Development Group" }, { label: "Unit 12" }]} />
);

export const TwoLevels = () => (
  <Breadcrumb items={[{ label: "Spacely Sprockets" }, { label: "Orbit Holdings" }]} />
);

export const InTheDocumentsBar = () => (
  <div style={bar}>
    <Breadcrumb items={[{ label: "Spacely Sprockets" }, { label: "Gearhart Enterprises LLC" }, { label: "Unit 4" }, { label: "Agreements" }]} />
  </div>
);

import React from "react";
import { EntityTree } from "agreement-vault-design-system";

const nodes = [
  { id: "gearhart", name: "Gearhart Enterprises LLC", count: 24 },
  { id: "callahan", name: "Callahan Development Group", count: 31, expanded: true },
  { id: "unit-4", name: "Unit 4", depth: 1 },
  { id: "unit-12", name: "Unit 12", depth: 1 },
  { id: "unit-18", name: "Unit 18", depth: 1 },
  { id: "orbit", name: "Orbit Holdings", count: 18 },
  { id: "redline", name: "Redline Partners LP", count: 2 },
];

export const Default = () => <EntityTree nodes={nodes} selectedId="unit-12" style={{ border: "var(--border-card)" }} />;

export const WithShowInactive = () => (
  <EntityTree nodes={nodes} selectedId="callahan" showInactive onToggleInactive={() => {}} style={{ border: "var(--border-card)" }} />
);

export const EntitiesOnly = () => (
  <EntityTree
    nodes={nodes.filter((n) => !n.depth)}
    selectedId="orbit"
    style={{ border: "var(--border-card)" }}
  />
);

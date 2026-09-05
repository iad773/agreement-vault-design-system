import React from "react";
import { Button } from "agreement-vault-design-system";

const row: React.CSSProperties = { display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" };
const Upload = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m17 8-5-5-5 5" /><path d="M12 3v12" />
  </svg>
);

export const Variants = () => (
  <div style={row}>
    <Button variant="primary">Add documents</Button>
    <Button variant="secondary">Download</Button>
    <Button variant="quiet">Show inactive</Button>
    <Button variant="link">View all deadlines</Button>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <Button size="sm" variant="secondary">Small</Button>
    <Button size="md" variant="secondary">Medium</Button>
    <Button size="lg" variant="secondary">Large</Button>
  </div>
);

export const WithIcon = () => (
  <div style={row}>
    <Button variant="primary" icon={<Upload />}>Add documents</Button>
    <Button variant="secondary" icon={<Upload />}>Upload amendment</Button>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <Button variant="primary" disabled>Add documents</Button>
    <Button variant="secondary" disabled>Download</Button>
  </div>
);

export const FullWidth = () => (
  <div style={{ width: 280 }}>
    <Button variant="primary" fullWidth>Request signature</Button>
  </div>
);

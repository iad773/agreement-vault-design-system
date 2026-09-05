import React from "react";
import { IconButton } from "agreement-vault-design-system";

const g = (d: string) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: d }} />
);
const bell = '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9"></path><path d="M10 21h4"></path>';
const search = '<circle cx="11" cy="11" r="7"></circle><path d="M21 21l-5-5"></path>';
const more = '<circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="19" r="1"></circle>';

export const Default = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
    <IconButton label="Alerts" icon={g(bell)} />
    <IconButton label="Search" icon={g(search)} />
    <IconButton label="More actions" icon={g(more)} />
  </div>
);

export const OnDark = () => (
  <div style={{ display: "inline-flex", gap: 12, alignItems: "center", padding: 10, borderRadius: "var(--radius-md)", background: "var(--surface-inverse)" }}>
    <IconButton label="Alerts" tone="onDark" icon={g(bell)} />
    <IconButton label="Search" tone="onDark" icon={g(search)} />
    <IconButton label="More actions" tone="onDark" icon={g(more)} />
  </div>
);

export const Disabled = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
    <IconButton label="Alerts" icon={g(bell)} disabled />
  </div>
);

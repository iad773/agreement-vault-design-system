import React from "react";
import { Input } from "agreement-vault-design-system";

const row: React.CSSProperties = { display: "flex", gap: 14, alignItems: "flex-start", flexWrap: "wrap" };
const Search = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="M21 21l-5-5" />
  </svg>
);

export const SearchField = () => (
  <Input icon={<Search />} placeholder="Search titles and document contents" wrapperStyle={{ width: 340 }} />
);

export const Labelled = () => (
  <div style={row}>
    <Input label="Effective date" defaultValue="Mar 3, 2023" hint="As written on the executed agreement" wrapperStyle={{ width: 230 }} />
    <Input label="Agreement number" defaultValue="FA-2023-0112" wrapperStyle={{ width: 200 }} />
  </div>
);

export const Invalid = () => (
  <Input label="Filed date" defaultValue="Mar 32, 2023" invalid hint="That date does not exist" wrapperStyle={{ width: 230 }} />
);

export const Disabled = () => (
  <Input label="Franchisor" defaultValue="Spacely Sprockets Franchising" disabled wrapperStyle={{ width: 280 }} />
);

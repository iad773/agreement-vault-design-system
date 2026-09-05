import React from "react";
import { AppChrome, Badge, IconButton } from "agreement-vault-design-system";

const g = (d: string) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: d }} />
);
const bell = '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9"></path><path d="M10 21h4"></path>';
const help = '<circle cx="12" cy="12" r="10"></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path>';

export const Default = () => <AppChrome brandName="Spacely Sprockets Franchising" />;

export const WithActions = () => (
  <AppChrome
    brandName="Spacely Sprockets Franchising"
    actions={
      <>
        <IconButton label="Help" tone="onDark" icon={g(help)} />
        <IconButton label="Alerts" tone="onDark" icon={g(bell)} />
      </>
    }
  />
);

export const SandboxMode = () => (
  <AppChrome
    brandName="Spacely Sprockets Franchising"
    badge={<Badge tone="warning">SANDBOX</Badge>}
    actions={<IconButton label="Alerts" tone="onDark" icon={g(bell)} />}
  />
);

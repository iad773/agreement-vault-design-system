/* The persistent shell: sandbox band, lintel chrome, fixed sidebar. */
/* Components arrive as globals from the design-system bundle (or the preview loader). */

function AppFrame({ screen, onNavigate, sandbox, children }) {
  const items = window.NAV.map((n) => ({
    ...n,
    icon: n.key ? window.Icon[n.key]() : undefined,
    badge: n.count ? <Badge tone="inverse">{n.count}</Badge> : undefined,
  }));

  return (
    <div data-kit-body style={{ background: "var(--surface-app)", border: "1px solid var(--border-card)", position: "relative" }}>
      {sandbox ? <SandboxBanner /> : null}
      <AppChrome
        brandName="Spacely Sprockets Franchising"
        badge={sandbox ? <Badge tone="warning">SANDBOX</Badge> : null}
        actions={<IconButton label="Alerts" tone="onDark" icon={window.Icon.bell()} />}
        style={{ position: "sticky", top: sandbox ? 37 : 0, zIndex: 10 }}
      />
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <SidebarNav items={items} activeId={screen} onSelect={(item) => item.key && onNavigate(item.id)} />
        <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
      </div>
    </div>
  );
}

window.AppFrame = AppFrame;

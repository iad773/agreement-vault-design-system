Use `AppChrome` at the top of every screen. It never scrolls away.

```jsx
<AppChrome
  brandName="Spacely Sprockets Franchising"
  badge={<Badge tone="warning">SANDBOX</Badge>}
  actions={<IconButton label="Alerts" tone="onDark" icon={<BellIcon />} />}
/>
```

When a `SandboxBanner` is present it sits above this bar, and both stay pinned.

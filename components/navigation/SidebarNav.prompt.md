Use `SidebarNav` as the product's primary navigation. Labels are the nouns the user already uses.

```jsx
<SidebarNav
  activeId="overview"
  items={[
    { id: "overview", label: "Overview", icon: <LayoutIcon /> },
    { id: "documents", label: "Documents", icon: <FileIcon /> },
    { id: "review", label: "Review", icon: <InboxIcon />, badge: <Badge tone="inverse">3</Badge> },
    { id: "rooms", label: "Rooms", icon: <RouteIcon /> },
    { id: "room-fdd", label: "2027 FDD Renewal", child: true },
    { id: "d1", divider: true },
    { id: "settings", label: "Settings", icon: <SettingsIcon /> },
  ]}
/>
```

Icons are 16px lucide at 2px stroke. Never put a status color on a nav item.

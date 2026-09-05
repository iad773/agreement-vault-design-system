Use `ContextMenu` for the row right-click. The canonical Agreement Vault order, with separators, is:

```jsx
<ContextMenu
  items={[
    { label: "Open", emphasis: true },
    { label: "Copy link" },
    { label: "Download" },
    { label: "Download with certificate" },
    { separator: true },
    { label: "Add to room" },
    { separator: true },
    { label: "Request signature send" },
    { label: "Signing history" },
    { separator: true },
    { label: "Related documents" },
    { label: "Details" },
    { label: "Deadlines" },
    { label: "Set deadline reminder" },
    { separator: true },
    { label: "Reassign" },
    { label: "Delete" },
  ]}
/>
```

Every action here must also be reachable from the keyboard.

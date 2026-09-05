Use `IconButton` for chrome-bar affordances (alerts bell) and per-row actions. Never for anything a label could carry.

```jsx
<IconButton label="Alerts" tone="onDark" icon={<BellIcon />} />
```

Always pass a real `label`. Icons are lucide at 2px stroke, 16px inside a 32px target.

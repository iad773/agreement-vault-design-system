Use `Badge` for counts and standalone markers (the sidebar review count, a SANDBOX flag). For record state, reach for `StatusBadge`.

```jsx
<Badge tone="inverse">3</Badge>
<Badge tone="warning">SANDBOX</Badge>
<Badge tone="neutral" dashed glyph="○">DRAFT</Badge>
```

Amber and red tones are reserved for urgency; never use them to color a neutral count.

Use `StatusBadge` wherever a document or registration state appears. It pairs the reserved glyph with the fixed wording, so color is never the only signal.

```jsx
<StatusBadge status="executed" />
<StatusBadge status="dueSoon" />
<StatusBadge status="overdue" />
<StatusBadge status="draft" />
```

Use `plain` inside very dense tables where the surrounding row already carries the urgency tint. Never restyle the tones: amber and red belong to the urgency system.

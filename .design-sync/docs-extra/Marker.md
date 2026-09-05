---
category: Data
---

`Marker` is the typographic status glyph used inside `FindingRow` and next to record
state. It is a shape, not an icon: a filled or open square/circle drawn in the urgency
colors, so status survives greyscale by shape and fill alone.

```jsx
<Marker kind="finding" />
<Marker kind="check" />
<Marker kind="overdue" />
<Marker kind="upcoming" size={12} />
```

Kinds: `finding` (filled ink square - wrong right now), `check` (open amber square),
`overdue` (filled red circle - a dated deadline has passed), `upcoming` (open amber
circle). Prefer `StatusBadge` when the state needs a word beside it; reach for `Marker`
only where the row already carries the wording.

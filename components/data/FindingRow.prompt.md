Use `FindingRow` for health-check results and deadline lists. One finding per row, stated as a fact.

```jsx
<FindingRow
  kind="overdue"
  severity="overdue"
  headline="Wisconsin franchise registration is not in force"
  detail="and no alert was on file."
  timing="Lapsed 90 days ago, Jun 3"
  action="Open registration"
/>
```

Marker kinds: `finding` (filled ink square, wrong right now), `check` (open amber square), `overdue` (filled red circle, dated deadline passed), `upcoming` (open amber circle). Only pass `severity` when the record truly is urgent; the tint is reserved.

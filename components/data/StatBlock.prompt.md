Use `StatBlock` inside a `Card` for derived figures. Exactly one hero numeral per block; everything else steps down to 32px.

```jsx
<StatBlock
  hero="$105,000"
  stats={[{ value: "13", label: "open units" }, { value: "5.8%", label: "weighted average royalty" }, { value: "6.4", unit: "yrs", label: "weighted average term remaining" }]}
  note="Next due Aug 2027, $35,000 when Redline signs its first unit agreement."
  provenance="Read from executed agreements. Nothing here is a projection."
/>
```

Always fill `provenance` when the figures are derived. Never color a number for emphasis; weight does that.

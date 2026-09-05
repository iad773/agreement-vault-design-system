Use `Card` for every panel. Cards never nest inside cards.

```jsx
<Card title="Under contract" meta="Read from executed agreements. Nothing here is a projection.">
  <StatBlock ... />
</Card>
```

Pass `padded` for prose or stat content; omit it when the body is a `DataTable` or a list of `FindingRow`s that should run to the card edges.

Use `EntityTree` on browse views. Keep counts visible: they are how operators judge where a document should be.

```jsx
<EntityTree
  selectedId="unit-12"
  showInactive={false}
  onToggleInactive={toggle}
  nodes={[
    { id: "gearhart", name: "Gearhart Enterprises LLC", count: 24 },
    { id: "callahan", name: "Callahan Development Group", count: 31, expanded: true },
    { id: "unit-12", name: "Unit 12", depth: 1 },
  ]}
/>
```

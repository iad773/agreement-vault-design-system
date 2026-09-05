Use `Checkbox` for multi-select in tables and for filter lists. `indeterminate` renders the header state when some rows are selected.

```jsx
<Checkbox checked={all} indeterminate={some} onChange={toggleAll} />
<Checkbox checked label="Include inactive entities" />
```

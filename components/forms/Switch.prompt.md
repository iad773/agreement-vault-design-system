Use `Switch` only for immediate view toggles, never as a form field that needs saving.

```jsx
<Switch checked={showInactive} onChange={toggle} label="Show inactive" />
```

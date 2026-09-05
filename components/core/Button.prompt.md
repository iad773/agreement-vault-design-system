Use `Button` for every action in Agreement Vault; one primary per view, everything else secondary or quiet.

```jsx
<Button variant="primary" icon={<UploadIcon />}>Add documents</Button>
<Button variant="secondary">Download</Button>
<Button variant="link">View all deadlines</Button>
```

Variants: `primary` (filled vault steel), `secondary` (white, 1.5px steel border), `quiet` (neutral border, for table toolbars), `link` (inline, underlined at 3px offset). Sizes `sm | md | lg`; `md` is the product default. Hover is color only, never opacity or scale. Labels are sentence case and use hyphens, never em dashes.

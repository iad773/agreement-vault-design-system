# Agreement Vault UI kit (Strongbox)

A recreation of the two Strongbox artboards from the treatment exploration:

- **OverviewScreen** - the morning report: units, Under contract, Needs your attention,
  Recent activity, Upcoming.
- **DocumentsScreen** - Explorer-like browse: breadcrumb, search, entity tree, dense
  document table, and the right-click record menu.
- **Sandbox mode** - the same Documents screen with the pinned amber band and the SANDBOX
  badge beside the brand name.

`index.html` is a click-through: the sidebar switches screens, the entity tree selects,
right-click on a document row opens the record menu, and a Sandbox toggle in the demo bar
turns the band on.

Content (panels, copy and numbers) is held constant from the Agreement Vault Dashboard
exploration so treatments compare cleanly. No product code was available, so behaviors
beyond navigation and the row menu are unspecified rather than invented.

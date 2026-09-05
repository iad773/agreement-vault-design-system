import React from "react";
import { Select } from "agreement-vault-design-system";

export const DocumentType = () => (
  <Select
    label="Type"
    options={["All types", "Franchise agreement", "Amendment", "Personal guarantee", "Lease rider", "State registration"]}
    wrapperStyle={{ width: 260 }}
  />
);

export const WithValues = () => (
  <Select
    label="Entity"
    options={[
      { value: "all", label: "All entities" },
      { value: "callahan", label: "Callahan Development Group" },
      { value: "gearhart", label: "Gearhart Enterprises LLC" },
      { value: "orbit", label: "Orbit Holdings" },
    ]}
    defaultValue="callahan"
    wrapperStyle={{ width: 280 }}
  />
);

export const Unlabelled = () => (
  <Select options={["Newest first", "Oldest first", "Title A to Z"]} wrapperStyle={{ width: 200 }} />
);

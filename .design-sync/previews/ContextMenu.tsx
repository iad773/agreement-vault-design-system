import React from "react";
import { ContextMenu } from "agreement-vault-design-system";

const recordItems = [
  { label: "Open", emphasis: true },
  { label: "Copy link" },
  { label: "Download" },
  { label: "Download with certificate" },
  { separator: true },
  { label: "Add to room" },
  { separator: true },
  { label: "Request signature send" },
  { label: "Signing history" },
  { separator: true },
  { label: "Related documents" },
  { label: "Details" },
  { label: "Deadlines" },
  { label: "Set deadline reminder" },
  { separator: true },
  { label: "Reassign" },
  { label: "Delete", danger: true },
];

export const RecordActions = () => <ContextMenu items={recordItems} anchored={false} />;

export const Short = () => (
  <ContextMenu
    anchored={false}
    items={[
      { label: "Open", emphasis: true },
      { label: "Copy link" },
      { separator: true },
      { label: "Remove from room", danger: true },
    ]}
  />
);

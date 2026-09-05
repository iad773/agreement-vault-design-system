import React from "react";
import { Card, FindingRow } from "agreement-vault-design-system";

export const NeedsYourAttention = () => (
  <Card title="Needs your attention" meta="3 findings from this morning's check">
    <FindingRow
      kind="overdue"
      severity="overdue"
      headline="Wisconsin franchise registration is not in force"
      detail="and no alert was on file."
      timing="Lapsed 90 days ago, Jun 3"
      action="Open registration"
    />
    <FindingRow
      kind="finding"
      headline="Unit 6 has no signed franchise agreement on file."
      detail="The folder holds an unsigned draft and the FDD receipt."
      timing="Open since Mar 2022"
      action="Open unit 6"
    />
    <FindingRow
      kind="check"
      severity="warning"
      headline="Unit 10's territory amendment overlaps Unit 14."
      detail="Check the boundary language in both."
      timing="Found Aug 19"
      action="Compare territories"
    />
  </Card>
);

export const Severities = () => (
  <Card>
    <FindingRow kind="finding" severity="neutral" headline="Unit 4 lease rider is missing a countersignature." timing="Open since Nov 2024" action="Open document" />
    <FindingRow kind="check" severity="warning" headline="Illinois renewal opens in 21 days." timing="Due Sep 26" action="Start renewal" />
    <FindingRow kind="overdue" severity="overdue" headline="Personal guarantee for Unit 12 was never returned." timing="Overdue by 6 days" action="Request signature" />
  </Card>
);

export const WithoutAction = () => (
  <Card title="Recent activity">
    <FindingRow kind="upcoming" headline="2027 FDD renewal filing window opens." timing="Opens Jan 2, 2027" />
    <FindingRow kind="finding" headline="Orbit Holdings added 4 documents." detail="Uploaded by the Callahan admin staff." timing="Yesterday, 4:12 PM" />
  </Card>
);

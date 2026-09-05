import React from "react";

export function SandboxBanner({ message = "Sample data. Nothing here is a real document.", sticky = true, style, ...rest }) {
  return (
    <div
      role="status"
      style={{
        position: sticky ? "sticky" : "static",
        top: 0,
        zIndex: 20,
        background: "var(--sandbox-band)",
        borderBottom: "var(--border-width-hairline) solid var(--sandbox-band-border)",
        padding: "9px var(--space-9)",
        textAlign: "center",
        font: "var(--weight-bold) 13.5px var(--font-sans)",
        color: "var(--text-strong)",
        ...style,
      }}
      {...rest}
    >
      {message}
    </div>
  );
}

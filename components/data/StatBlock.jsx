import React from "react";

export function StatBlock({ hero, heroLabel, stats = [], note, provenance, style, ...rest }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-6)", padding: "var(--space-6) var(--space-10)", ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-12)", flexWrap: "wrap" }}>
        {hero ? (
          <div>
            <div style={{ font: "var(--type-hero-number)", color: "var(--text-strong)" }}>{hero}</div>
            {heroLabel ? (
              <div style={{ font: "var(--weight-bold) var(--text-lg) var(--font-sans)", color: "var(--text-strong)", marginTop: "2px" }}>
                {heroLabel}
              </div>
            ) : null}
          </div>
        ) : null}
        {stats.length ? (
          <div style={{ display: "flex", gap: "var(--space-14)", flexWrap: "wrap", paddingTop: "4px" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ font: "var(--weight-black) var(--text-num-md)/var(--leading-tight) var(--font-slab)", color: "var(--text-strong)" }}>
                  {s.value}
                  {s.unit ? (
                    <span style={{ font: "var(--weight-medium) 15px var(--font-sans)" }}> {s.unit}</span>
                  ) : null}
                </div>
                <div style={{ font: "var(--weight-regular) var(--text-sm) var(--font-sans)", color: "var(--text-muted)", marginTop: "4px" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      {note ? <div style={{ font: "var(--weight-regular) var(--text-base) var(--font-sans)", color: "var(--text-strong)" }}>{note}</div> : null}
      {provenance ? (
        <div style={{ font: "var(--weight-regular) var(--text-sm) var(--font-sans)", color: "var(--text-muted)" }}>{provenance}</div>
      ) : null}
    </div>
  );
}

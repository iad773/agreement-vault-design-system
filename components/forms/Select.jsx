import React from "react";

export function Select({ label, options = [], value, onChange, style, wrapperStyle, ...rest }) {
  return (
    <label style={{ display: "grid", gap: "6px", ...wrapperStyle }}>
      {label ? (
        <span style={{ font: "var(--type-label-caps)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>
          {label}
        </span>
      ) : null}
      <select
        value={value}
        onChange={onChange}
        style={{
          appearance: "none",
          background: "var(--white)",
          border: "var(--border-width-card) solid var(--border-card-color)",
          borderRadius: "var(--radius-md)",
          padding: "7px 30px 7px 12px",
          font: "var(--weight-regular) var(--text-base) var(--font-sans)",
          color: "var(--text-strong)",
          backgroundImage:
            "linear-gradient(45deg, transparent 50%, var(--text-muted) 50%), linear-gradient(135deg, var(--text-muted) 50%, transparent 50%)",
          backgroundPosition: "calc(100% - 16px) 52%, calc(100% - 11px) 52%",
          backgroundSize: "5px 5px, 5px 5px",
          backgroundRepeat: "no-repeat",
          ...style,
        }}
        {...rest}
      >
        {options.map((o) => (
          <option key={typeof o === "string" ? o : o.value} value={typeof o === "string" ? o : o.value}>
            {typeof o === "string" ? o : o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

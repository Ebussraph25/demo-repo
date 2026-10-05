import { ImageResponse } from "next/og";

export const alt = "Alfred Pederson — Architecture, Building & Interiors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: "#1A1A1A", padding: "0 90px", gap: 70 }}>
        <svg width="260" height="260" viewBox="96 116 288 288" fill="none" strokeWidth="7">
          <path d="M118 383 L240 133 L362 383" stroke="#9B7B52" />
          <line x1="160" y1="280" x2="320" y2="280" stroke="#9B7B52" />
          <line x1="240" y1="133" x2="240" y2="380" stroke="#D8D0C4" />
          <path d="M240 137 H262 A62 62 0 0 1 262 261 H240" stroke="#D8D0C4" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 74, color: "#FFFFFF", letterSpacing: 8 }}>ALFRED PEDERSON</div>
          <div style={{ height: 2, background: "#9B7B52", margin: "26px 0" }} />
          <div style={{ fontSize: 24, color: "#D8D0C4", letterSpacing: 10 }}>ARCHITECTURE • BUILDING • INTERIORS</div>
          <div style={{ fontSize: 30, color: "#A89F91", marginTop: 46, fontStyle: "italic" }}>Thoughtful Spaces. Beautifully Built.</div>
        </div>
      </div>
    ),
    size,
  );
}

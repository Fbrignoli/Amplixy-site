import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Amplixy — Le numérique doit s’adapter à votre métier. Pas l’inverse.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "white",
          background: "#2454e8",
          padding: "62px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            fontWeight: 800,
          }}
        >
          <span>AMPLIXY<span style={{ color: "#d65c15" }}>.</span></span>
          <span style={{ fontSize: 18, opacity: 0.78 }}>Melun · France</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              maxWidth: 1010,
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
            }}
          >
            Le numérique doit s’adapter à votre métier. Pas l’inverse.
          </span>
          <span style={{ marginTop: 32, fontSize: 24, opacity: 0.84 }}>
            Conseil IA · Sites web · Outils métier
          </span>
        </div>

        <div
          style={{
            width: 160,
            height: 12,
            display: "flex",
            background: "#d65c15",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

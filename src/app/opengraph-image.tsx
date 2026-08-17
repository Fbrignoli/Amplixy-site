import { ImageResponse } from "next/og";

export const alt = "Amplixy — Votre métier d’abord, la technique ensuite.";
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
          color: "#0E141C",
          background: "#FAFAFA",
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
          <span>Amplixy<span style={{ color: "#A52A48" }}>.</span></span>
          <span style={{ color: "#49505A", fontSize: 18 }}>Melun · France</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 1010,
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
            }}
          >
            <span>Votre métier d’abord,</span>
            <span style={{ color: "#701B32" }}>la technique ensuite.</span>
          </span>
          <span style={{ marginTop: 32, color: "#49505A", fontSize: 24 }}>
            Outil métier · Automatisation · IA · Site web
          </span>
        </div>

        <div
          style={{
            width: 160,
            height: 12,
            display: "flex",
            background: "#A52A48",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

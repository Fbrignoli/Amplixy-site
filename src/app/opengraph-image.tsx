import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Amplixy — Conseil IA opérationnel pour PME structurées.";
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
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #3d5a80 0%, #0a1128 100%)",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(154, 227, 255, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(126, 184, 216, 0.06)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
            padding: "10px 24px",
            borderRadius: "999px",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#9ae3ff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Amplixy
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.15,
              textAlign: "center",
              maxWidth: 900,
            }}
          >
            Conseil IA opérationnel pour PME structurées.
          </span>
        </div>

        {/* Subtitle */}
        <span
          style={{
            marginTop: "28px",
            fontSize: 24,
            color: "rgba(255, 255, 255, 0.6)",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Cadrage, mise en place et adoption d&apos;outils IA utiles aux opérations.
        </span>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "rgba(255, 255, 255, 0.4)",
            fontSize: 18,
          }}
        >
          <span>amplixy.com</span>
          <span>•</span>
          <span>Florian Brignoli</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

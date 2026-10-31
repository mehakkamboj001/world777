import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "World777 sports exchange, fantasy games and live casino";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #1b2025 0%, #252a30 62%, #116e52 100%)",
          color: "#ffffff",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(255,255,255,0.2)",
            borderRadius: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            padding: "56px 64px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#f5d126",
              display: "flex",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: 4,
            }}
          >
            WORLD777
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            <span>Sports Exchange</span>
            <span>Fantasy Games</span>
            <span>& Live Casino</span>
          </div>
          <div
            style={{
              color: "#d1d5db",
              display: "flex",
              fontSize: 24,
            }}
          >
            Explore sports markets and game categories
          </div>
        </div>
      </div>
    ),
    size
  );
}

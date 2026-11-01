import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#116e52",
          border: "3px solid #252a30",
          borderRadius: 12,
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <svg viewBox="0 0 64 64" width="48" height="48">
          <path
            d="M12 17 20 47 32 27 44 47 52 17"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <path
            d="M21 55h22"
            fill="none"
            stroke="#f5d126"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
      </div>
    ),
    { width: 48, height: 48 },
  );
}

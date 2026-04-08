import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#000000",
        }}
      >
        <div style={{ position: "absolute", inset: 0, display: "flex" }}>
          <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 735 140 C 680 180 680 240 735 285 C 790 330 780 385 750 420 C 720 455 725 510 770 560"
              stroke="#ff2d2d"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
            />
            <circle cx="880" cy="210" r="6" fill="#ff2d2d" opacity="0.95" />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.02em",
              }}
            >
              Farok Ahmed
            </div>
            <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 20, fontWeight: 700 }}>•</div>
            <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 20, fontWeight: 800 }}>Blog</div>
          </div>

          <div
            style={{
              fontSize: 66,
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#ffffff",
              maxWidth: 1020,
              textShadow: "0 12px 30px rgba(0, 0, 0, 0.65)",
            }}
          >
            Next.js, React, WordPress — production notes
          </div>

          <div
            style={{
              marginTop: 6,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {["Next.js", "React", "WordPress"].map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.92)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  padding: "8px 14px",
                  borderRadius: 999,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(255,255,255,0.8)",
            fontSize: 22,
            fontWeight: 700,
            position: "relative",
          }}
        >
          <div>farokahmed.dev</div>
          <div>April 2026</div>
        </div>
      </div>
    ),
    size
  );
}

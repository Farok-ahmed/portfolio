import { ImageResponse } from "next/og";

import { BLOG_POSTS } from "@/libs/data";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const AUTHOR_NAME = "Farok Ahmed";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const title = post?.title ?? "Blog";
  const tags = post?.tags?.slice(0, 3) ?? [];

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
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
          }}
        >
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

        <div style={{ display: "flex", flexDirection: "column", gap: 18, position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.9)",
                  letterSpacing: "0.02em",
                }}
              >
                {AUTHOR_NAME}
              </div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 20, fontWeight: 800 }}>•</div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 20, fontWeight: 900 }}>Blog</div>
            </div>

            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: "rgba(255,255,255,0.78)",
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "10px 14px",
                borderRadius: 999,
              }}
            >
              {post?.readTime ?? ""}
            </div>
          </div>

          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#ffffff",
              maxWidth: 1040,
              textShadow: "0 12px 30px rgba(0, 0, 0, 0.65)",
            }}
          >
            {title}
          </div>

          {tags.length ? (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
              {tags.map((tag) => (
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
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(255,255,255,0.8)",
            fontSize: 20,
            fontWeight: 800,
            position: "relative",
          }}
        >
          <div>farokahmed.dev</div>
          <div>{post?.date ?? ""}</div>
        </div>
      </div>
    ),
    size
  );
}

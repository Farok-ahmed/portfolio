import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Short notes on Next.js, React, WordPress, and building production-ready websites.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description:
      "Short notes on Next.js, React, WordPress, and building production-ready websites.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}

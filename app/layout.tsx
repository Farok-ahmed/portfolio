import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Farok Ahmed",
    template: "%s | Farok Ahmed",
  },
  description: "Md Farok Ahmed - Portfolio",
  icons: {
    icon: [{ url: "/farok_ahmed_log.png", type: "image/png" }],
    shortcut: [{ url: "/farok_ahmed_log.png", type: "image/png" }],
    apple: [{ url: "/farok_ahmed_log.png", type: "image/png" }],
  },
  openGraph: {
    title: "Farok Ahmed",
    description: "Md Farok Ahmed - Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "Farok Ahmed",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

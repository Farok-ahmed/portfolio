import type { MetadataRoute } from "next";

import { BLOG_POSTS } from "@/libs/data";
import { getSiteUrl } from "@/libs/site";

function safeDate(dateText: string) {
  const d = new Date(dateText);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const base: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => {
    const lastModified = safeDate(post.date) ?? now;

    return {
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...base, ...posts];
}

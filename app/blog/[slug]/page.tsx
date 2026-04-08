import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { BLOG_POSTS } from "@/libs/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

const AUTHOR_NAME = "Farok Ahmed";

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog post not found",
    };
  }

  const url = new URL(`/blog/${post.slug}`, getSiteUrl()).toString();

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: AUTHOR_NAME }],
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      authors: [AUTHOR_NAME],
      tags: post.tags,
      images: [{ url: `/blog/${post.slug}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`/blog/${post.slug}/twitter-image`],
    },
    other: {
      "og:site_name": "Farok Ahmed",
      "article:author": AUTHOR_NAME,
      "og:url": url,
    },
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = new URL(`/blog/${post.slug}`, getSiteUrl()).toString();
  const publishedDate = new Date(post.date);
  const publishedIso = Number.isNaN(publishedDate.getTime()) ? undefined : publishedDate.toISOString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
    url: postUrl,
    mainEntityOfPage: postUrl,
    ...(publishedIso ? { datePublished: publishedIso } : {}),
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-200 selection:text-slate-900">
      <NavBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-20">
        <Section id="blog-post" className="py-14 md:py-20">
          <div className="mb-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200">
                    {post.date}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span>{post.readTime}</span>
                  <span className="text-slate-400">•</span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                    By {AUTHOR_NAME}
                  </span>
                </div>

                <h1 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900 max-w-3xl">
                  {post.title}
                </h1>

                <p className="mt-4 text-slate-600 font-medium max-w-3xl">{post.excerpt}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-800 font-semibold hover:bg-white transition-colors"
                >
                  Back to Blog
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold hover:bg-slate-50 transition-colors"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>

          <article className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-7 md:p-10">
              <div className="max-w-none">
                {post.content.map((block, index) => {
                  if (block.type === "h2") {
                    return (
                      <h2 key={index} className="mt-8 text-2xl md:text-3xl font-bold text-slate-900">
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "p") {
                    return (
                      <p key={index} className="mt-4 text-slate-700 leading-relaxed">
                        {block.text}
                      </p>
                    );
                  }

                  if (block.type === "ul") {
                    return (
                      <ul key={index} className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={index}
                        className="mt-6 border-l-4 border-blue-200 pl-4 text-slate-700 italic"
                      >
                        {block.text}
                      </blockquote>
                    );
                  }

                  if (block.type === "code") {
                    return (
                      <div key={index} className="mt-6">
                        <pre className="overflow-x-auto rounded-xl bg-slate-950 text-slate-100 p-5 text-sm">
                          <code>{block.code}</code>
                        </pre>
                        {block.language ? (
                          <p className="mt-2 text-xs text-slate-500 font-semibold">{block.language}</p>
                        ) : null}
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          </article>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

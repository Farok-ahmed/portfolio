"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { BLOG_POSTS } from "@/libs/data";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-200 selection:text-slate-900">
      <NavBar />

      <main className="pt-20">
        <Section id="blog">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-12"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">Blog</h1>
                <p className="text-slate-600 max-w-2xl">
                  Short notes on Next.js, React, WordPress, and building production-ready
                  websites.
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-800 font-semibold hover:bg-white transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={`${post.title}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-blue-500/40 transition-colors shadow-sm overflow-hidden"
              >
                <div className="h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-slate-500">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200">
                      {post.date}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="mt-4 text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-slate-600 font-medium">{post.excerpt}</p>

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
              </motion.article>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical nutrition guidance from the Docwellness team — habits, meal planning, and how to read the numbers that matter.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-primary-light">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-brand-text md:text-5xl">The Docwellness Blog</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-text-secondary">
            Practical, no-hype nutrition guidance from our team of dieticians.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-2xl border border-brand-border p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-3 text-xs font-semibold text-brand-primary">
                <span>{post.category}</span>
                <span className="text-brand-text-muted">·</span>
                <span className="text-brand-text-muted">{post.readingTime}</span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-brand-text">{post.title}</h2>
              <p className="mt-2 text-sm text-brand-text-secondary">{post.excerpt}</p>
              <p className="mt-4 text-xs text-brand-text-muted">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

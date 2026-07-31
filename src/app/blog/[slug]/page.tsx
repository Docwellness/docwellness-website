import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/blog" className="text-sm font-semibold text-brand-primary">
        ← Back to blog
      </Link>

      <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-brand-primary">
        <span>{post.category}</span>
        <span className="text-brand-text-muted">·</span>
        <span className="text-brand-text-muted">{post.readingTime}</span>
      </div>

      <h1 className="mt-3 text-3xl font-bold text-brand-text md:text-4xl">{post.title}</h1>
      <p className="mt-3 text-sm text-brand-text-muted">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="mt-8 space-y-5 text-brand-text-secondary">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getAllPosts, getPost } from "@/lib/posts";
import Navbar from "@/components/Navbar";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">
        <div className="max-w-2xl mx-auto px-6 py-20">
          <Link
            href="/blog"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors inline-flex items-center gap-1 mb-10"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All posts
          </Link>

          <div className="mb-8">
            <p className="text-sm text-gray-400 mb-2">
              {new Date(post.date).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1 className="font-display text-3xl font-bold text-gray-900 leading-snug">
              {post.title}
            </h1>
            {post.description && (
              <p className="text-gray-500 mt-3 text-base">{post.description}</p>
            )}
          </div>

          <hr className="border-gray-100 mb-10" />

          <div className="prose prose-gray max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </main>
    </>
  );
}

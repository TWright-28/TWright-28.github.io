import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Navbar from "@/components/Navbar";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="mb-12">
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-gray-700 transition-colors inline-flex items-center gap-1 mb-6"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
            <h1 className="font-display text-4xl font-bold text-gray-900">Blog</h1>
            <p className="text-gray-500 mt-2">Writing about research, building things, and whatever else.</p>
          </div>

          {posts.length === 0 ? (
            <p className="text-gray-400">No posts yet.</p>
          ) : (
            <div className="flex flex-col divide-y divide-gray-100">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group py-7 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 hover:bg-gray-50 -mx-4 px-4 rounded-lg transition-colors"
                >
                  <span className="text-sm text-gray-400 flex-shrink-0 tabular-nums">
                    {new Date(post.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-accent transition-colors">
                      {post.title}
                    </p>
                    {post.description && (
                      <p className="text-sm text-gray-500 mt-1">{post.description}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

import Link from "next/link";
import Navbar from "@/components/Navbar";
import PhotoGrid from "@/components/PhotoGrid";
import { getAllPhotos } from "@/lib/photos";

export default function PhotosPage() {
  const photos = getAllPhotos();

  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-20">
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
            <h1 className="font-display text-4xl font-bold text-gray-900">Photos</h1>
            <p className="text-gray-500 mt-2">A few things I&apos;ve seen.</p>
          </div>

          {photos.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <p className="text-lg mb-2">No photos yet.</p>
              <p className="text-sm">Drop images into <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">public/photos/</code> and rebuild.</p>
            </div>
          ) : (
            <PhotoGrid photos={photos} />
          )}
        </div>
      </main>
    </>
  );
}

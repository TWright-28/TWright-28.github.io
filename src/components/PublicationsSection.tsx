import { publications } from "@/lib/data";

export default function PublicationsSection() {
  return (
    <section id="publications" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-10">
          Publications
        </h2>
        <div className="flex flex-col gap-6">
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {pub.venue}
                </span>
                <span className="text-xs text-gray-400">{pub.year}</span>
                {pub.status && (
                  <span className="text-xs text-gray-400 italic">{pub.status}</span>
                )}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 leading-snug">{pub.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{pub.description}</p>
              {pub.links.length > 0 && (
                <div className="flex gap-4">
                  {pub.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-accent hover:text-accent-dark transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

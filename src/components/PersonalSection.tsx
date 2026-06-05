import { about } from "@/lib/data";

export default function PersonalSection() {
  return (
    <section id="about-me" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-10">
          About me
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Bio */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {about.bio.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Currently + Future */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Currently
              </h3>
              <ul className="flex flex-col gap-3">
                {about.currently.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {about.future && about.future.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Next
                </h3>
                <ul className="flex flex-col gap-3">
                  {about.future.map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-gray-500">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full border border-gray-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

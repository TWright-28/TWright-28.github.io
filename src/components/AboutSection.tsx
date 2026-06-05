import Image from "next/image";
import { education, siteConfig } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-10">
          Education
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-start gap-8">
          <div className="flex-1 flex flex-col gap-8">
            {education.map((deg) => (
              <div key={deg.degree}>
                <p className="text-sm text-accent font-medium tracking-wide uppercase mb-1">
                  {deg.school}
                </p>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="text-xl font-semibold text-gray-900">{deg.degree}</h3>
                  <span className="text-sm text-gray-400 flex-shrink-0">{deg.period}</span>
                </div>
                <p className="text-gray-500 text-sm mt-1 mb-3">
                  GPA: <span className="font-semibold text-gray-700">{deg.gpa} / 4.33</span>
                </p>
                {deg.honors.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {deg.honors.map((h) => (
                      <span
                        key={h}
                        className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Photo — small, tucked to the side */}
          <div className="flex-shrink-0 self-start">
            <div className="w-20 h-20 rounded-xl overflow-hidden ring-1 ring-gray-200">
              <Image
                src="/images/pfp.jpg"
                alt={siteConfig.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

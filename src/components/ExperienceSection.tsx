import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-10">
          Experience
        </h2>
        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-6">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-gray-200 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-2">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                  <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                  <span className="text-accent font-medium text-sm">{exp.company}</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">{exp.period}</p>
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-gray-600 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-300">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

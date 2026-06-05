import { skills } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-10">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

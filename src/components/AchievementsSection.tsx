import { achievements } from "@/lib/data";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-10">
          Achievements
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{a.title}</h3>
                <p className="text-sm text-gray-500">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

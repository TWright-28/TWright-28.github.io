import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-gray-900 mb-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>

              <ul className="flex flex-col gap-1.5 flex-1">
                {project.bullets.slice(0, 3).map((b, i) => (
                  <li key={i} className="text-sm text-gray-600 pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-300">
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="flex gap-3 pt-1">
                  {project.links.map((link) => (
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

import { featuredProjects, type Project } from '../data/portfolio'

const categoryStyles: Record<Project['category'], string> = {
  Web: 'bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300',
  Mobile:
    'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  API: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
}

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-slate-100/60 py-16 sm:py-20 dark:bg-slate-900/40"
    >
      <div className="container-page">
        <p className="section-kicker">Selected Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Highlighted systems and applications delivered for clients across several
          industries.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.id} className="card flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${categoryStyles[project.category]}`}
                >
                  {project.category}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Featured
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                {project.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                {project.client}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={`${project.id}-${tech}`} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

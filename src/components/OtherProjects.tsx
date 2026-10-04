import { useMemo, useState } from 'react'
import { otherProjects, type Project } from '../data/portfolio'

const filters: Array<'All' | Project['category']> = ['All', 'Web', 'API', 'Mobile']

const categoryStyles: Record<Project['category'], string> = {
  Web: 'bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300',
  Mobile:
    'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  API: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
}

export default function OtherProjects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const visible = useMemo(
    () =>
      filter === 'All'
        ? otherProjects
        : otherProjects.filter((p) => p.category === filter),
    [filter],
  )

  return (
    <section id="other-projects" className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-page">
        <p className="section-kicker">More Work</p>
        <h2 className="section-title">Other Projects</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          A broader selection of web platforms, APIs, and mobile applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                filter === f
                  ? 'bg-brand-600 text-white'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article key={project.id} className="card">
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${categoryStyles[project.category]}`}
              >
                {project.category}
              </span>
              <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">
                {project.name}
              </h3>
              {project.client && (
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {project.client}
                </p>
              )}
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li
                    key={`${project.id}-${tech}`}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
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

import { techStack } from '../data/portfolio'

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-page">
        <p className="section-kicker">Toolbox</p>
        <h2 className="section-title">Tech Stack</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Technologies grouped by the kind of work I do, drawn from the stacks used
          across my delivered projects.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group) => (
            <div key={group.key} className="card flex flex-col">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {group.label}
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {group.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={`${group.key}-${item}`} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

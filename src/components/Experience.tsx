import { timeline } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-slate-100/60 py-16 sm:py-20 dark:bg-slate-900/40">
      <div className="container-page">
        <p className="section-kicker">Career</p>
        <h2 className="section-title">Experience &amp; Education</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          A timeline of my professional roles and educational background.
        </p>

        <ol className="relative mt-10 space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800 sm:pl-8">
          {timeline.map((item) => (
            <li key={item.id} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full ring-4 ring-slate-100 dark:ring-slate-900 sm:-left-[39px] ${
                  item.kind === 'work' ? 'bg-brand-600' : 'bg-emerald-500'
                }`}
              />
              <div className="card">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {item.period}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                      item.kind === 'work'
                        ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300'
                        : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                    }`}
                  >
                    {item.kind === 'work' ? 'Work' : 'Education'}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                  {item.org}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

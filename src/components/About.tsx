import { documentationSkills, profile, softSkills } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-page">
        <p className="section-kicker">About</p>
        <h2 className="section-title">About Me</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            <p>{profile.summary}</p>
            <p>
              Over the years I have worked as a fullstack software developer at a
              software house and IT consulting company, then progressed into senior
              fullstack, project supervision, and senior backend roles. I have
              delivered web dashboards, backend and microservices, REST APIs, and
              native and cross-platform mobile applications for clients across
              transportation, banking, cooperatives, retail, and telecommunications.
            </p>
            <p>
              I am comfortable acting as a person in charge, performing business
              analysis, solving problems, and creating project documentation — which
              makes me a strong fit for senior fullstack, senior backend, or system
              analyst positions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Soft Skills
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Documentation &amp; Productivity
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {documentationSkills.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Location
              </h3>
              <p className="mt-2 text-base text-slate-700 dark:text-slate-200">
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

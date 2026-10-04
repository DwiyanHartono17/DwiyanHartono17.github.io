import { profile, softSkills } from '../data/portfolio'

const expertise = [
  {
    title: 'Senior Fullstack Development',
    description:
      'End-to-end delivery of web platforms and dashboards using Node.js, Vue.js, Next.js, PHP, and modern UI frameworks.',
  },
  {
    title: 'Senior Backend Development',
    description:
      'Designing backend services and microservices with Node.js, Express.js, Golang, Java, Spring Boot, PHP, and .NET, backed by relational databases.',
  },
  {
    title: 'System Analyst',
    description:
      'Business analysis, problem solving, documentation, and acting as person in charge to translate requirements into working systems.',
  },
  {
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile apps with Java, Kotlin, Flutter, React Native, and Ionic, connected through REST APIs.',
  },
  {
    title: 'API & Integration',
    description:
      'Building and integrating REST APIs, including payment and printing integrations such as Xendit, BRDGX, and dtPrint.',
  },
  {
    title: 'Project Supervision',
    description:
      'Leading and supervising programmers, managing project delivery, and producing clear technical documentation.',
  },
]

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-20 bg-slate-100/60 py-16 sm:py-20 dark:bg-slate-900/40"
    >
      <div className="container-page">
        <p className="section-kicker">What I Bring</p>
        <h2 className="section-title">Career &amp; Expertise</h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          With a multi-skill crossover across frontend, backend, mobile, and system
          analysis, I am well positioned for{' '}
          <span className="font-semibold text-slate-800 dark:text-slate-100">
            {profile.positioning.join(', ')}
          </span>{' '}
          roles.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 card">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Core Soft Skills
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

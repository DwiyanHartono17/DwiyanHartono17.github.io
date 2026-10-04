import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(51,102,255,0.14),transparent)]"
      />
      <div className="container-page grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1.3fr_1fr]">
        <div className="animate-fadeUp">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for senior fullstack, backend &amp; system analysis roles
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-semibold text-brand-600 dark:text-brand-400 sm:text-xl">
            {profile.role}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.cvUrl} download className="btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
              Download CV
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Experience
              </dt>
              <dd className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                {profile.yearsExperience}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Focus
              </dt>
              <dd className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                Fullstack
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Based in
              </dt>
              <dd className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                Bekasi, ID
              </dd>
            </div>
          </dl>
        </div>

        <div className="animate-fadeUp">
          <div className="card">
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-600 text-2xl font-extrabold text-white">
                {profile.initials}
              </span>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {profile.name}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Senior Fullstack Software Developer
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 dark:bg-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M4 6h16v12H4z" />
                    <path d="M4 7l8 6 8-6" />
                  </svg>
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-brand-600 dark:hover:text-brand-400"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 dark:bg-slate-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
                  </svg>
                </span>
                <a
                  href={profile.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-600 dark:hover:text-brand-400"
                >
                  {profile.website}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.positioning.map((p) => (
                <span key={p} className="chip">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-page">
        <div className="card bg-gradient-to-br from-brand-600 to-brand-800 dark:from-brand-700 dark:to-slate-900">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-100">
                Contact
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Let&apos;s work together
              </h2>
              <p className="mt-3 max-w-xl text-brand-50/90">
                Interested in collaborating on a fullstack, backend, or system
                analysis project? Feel free to reach out by email or visit my
                website.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn bg-white text-brand-700 hover:bg-brand-50"
                >
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
                  Email Me
                </a>
                <a
                  href={profile.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-white/60 text-white hover:bg-white/10"
                >
                  Visit Website
                </a>
                <a
                  href={profile.cvUrl}
                  download
                  className="btn border border-white/60 text-white hover:bg-white/10"
                >
                  Download CV
                </a>
              </div>
            </div>

            <ul className="space-y-3 rounded-2xl bg-white/10 p-5 text-sm text-white backdrop-blur">
              <li>
                <span className="block text-xs uppercase tracking-wide text-brand-100">
                  Email
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-medium hover:underline"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-brand-100">
                  Website
                </span>
                <a
                  href={profile.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  {profile.website}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-brand-100">
                  Location
                </span>
                <span className="font-medium">{profile.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
